import { NextRequest } from "next/server";

export const SPAM_REJECT_MESSAGE = "送出失敗，請稍後再試。";

const MIN_SUBMIT_MS = 2000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
const CLOCK_SKEW_MS = 60 * 1000;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

type RateLimitEntry = {
  timestamps: number[];
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function isHoneypotTriggered(value: unknown): boolean {
  if (value === undefined || value === null) return false;
  return String(value).trim().length > 0;
}

export function isSubmissionTooFast(formLoadedAt: unknown): boolean {
  if (formLoadedAt === undefined || formLoadedAt === null) return true;

  const loadedAt =
    typeof formLoadedAt === "number"
      ? formLoadedAt
      : Number.parseInt(String(formLoadedAt), 10);

  if (!Number.isFinite(loadedAt) || loadedAt <= 0) return true;

  const now = Date.now();
  const elapsed = now - loadedAt;

  if (loadedAt > now + CLOCK_SKEW_MS) return true;
  if (elapsed < MIN_SUBMIT_MS) return true;
  if (elapsed > MAX_FORM_AGE_MS) return true;

  return false;
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip) ?? { timestamps: [] };
  const recent = entry.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, { timestamps: recent });
    return true;
  }

  recent.push(now);
  rateLimitStore.set(ip, { timestamps: recent });
  return false;
}

export function isTurnstileConfigured(): boolean {
  return Boolean(
    process.env.TURNSTILE_SECRET_KEY &&
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  );
}

export async function verifyTurnstileToken(
  token: unknown,
  ip: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  if (typeof token !== "string" || !token.trim()) return false;

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: token,
          remoteip: ip,
        }),
      },
    );

    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

const CJK_RE = /[\u4e00-\u9fff\u3400-\u4dbf]/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function looksLikeRandomGarbage(text: string): boolean {
  const value = text.trim();
  if (value.length < 6) return false;

  if (CJK_RE.test(value)) return false;

  const alphaNum = value.replace(/[\s\d\-_./@+()]/g, "");
  if (alphaNum.length < 6) return false;

  if (!/^[a-zA-Z0-9\s\-_./@+()]+$/.test(value)) return false;

  const letters = value.replace(/[^a-zA-Z]/g, "");
  if (letters.length < 5) return false;

  const vowels = letters.replace(/[^aeiouAEIOU]/g, "").length;
  const vowelRatio = vowels / letters.length;

  if (vowelRatio < 0.15 && letters.length >= 8) return true;

  const uniqueRatio = new Set(letters.toLowerCase()).size / letters.length;
  if (letters.length >= 10 && uniqueRatio > 0.85) return true;

  return false;
}

export function validateEmailFormat(email: string): boolean {
  if (!EMAIL_RE.test(email)) return false;
  if (email.length > 200) return false;

  const [local, domain] = email.split("@");
  if (!local || !domain || local.length < 2 || !domain.includes(".")) return false;

  const tld = domain.split(".").pop();
  if (!tld || tld.length < 2) return false;

  return true;
}

export function validatePhoneFormat(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return false;

  if (digits.startsWith("886")) {
    const local = digits.slice(3);
    return local.startsWith("9") && local.length === 9;
  }

  if (digits.startsWith("09")) {
    return digits.length === 10;
  }

  if (digits.startsWith("9") && digits.length === 9) {
    return true;
  }

  return digits.length >= 8 && digits.length <= 15;
}

export function validateEventDate(dateStr: string): boolean {
  if (!dateStr || !DATE_RE.test(dateStr)) return false;

  const [year, month, day] = dateStr.split("-").map(Number);
  if (year < 2000 || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const parsed = new Date(year, month - 1, day);
  if (
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day
  ) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  parsed.setHours(0, 0, 0, 0);

  if (parsed < today) return false;

  const maxFuture = new Date(today);
  maxFuture.setFullYear(maxFuture.getFullYear() + 3);
  if (parsed > maxFuture) return false;

  return true;
}

export function validateNameContent(name: string): boolean {
  if (name.length < 2 || name.length > 100) return false;
  if (looksLikeRandomGarbage(name)) return false;
  return true;
}

export function validateLocationContent(location: string): boolean {
  if (location.length < 2 || location.length > 200) return false;
  if (looksLikeRandomGarbage(location)) return false;
  return true;
}

export function validateNotesContent(notes: string): boolean {
  if (!notes) return true;
  if (notes.length > 2000) return false;
  if (notes.length >= 12 && looksLikeRandomGarbage(notes)) return false;
  return true;
}

export class SpamRejectedError extends Error {
  readonly reason: string;

  constructor(reason: string) {
    super(SPAM_REJECT_MESSAGE);
    this.name = "SpamRejectedError";
    this.reason = reason;
  }
}
