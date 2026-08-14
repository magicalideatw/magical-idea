import { SERVICES } from "./constants";
import {
  SpamRejectedError,
  validateEmailFormat,
  validateEventDate,
  validateLocationContent,
  validateNameContent,
  validateNotesContent,
  validatePhoneFormat,
} from "./spam-guard";

export const BUDGET_LABELS: Record<string, string> = {
  "10k-30k": "NT$10,000～30,000",
  "30k-50k": "NT$30,000～50,000",
  "50k-plus": "NT$50,000 以上",
};

export const BUDGET_OPTIONS = [
  { value: "10k-30k", label: BUDGET_LABELS["10k-30k"] },
  { value: "30k-50k", label: BUDGET_LABELS["30k-50k"] },
  { value: "50k-plus", label: BUDGET_LABELS["50k-plus"] },
] as const;

export const BUDGET_FIELD_HINT =
  "本公司近距離魔術 NT$10,000 起；舞台魔術約 15 分鐘 NT$15,000 起、20–30 分鐘 NT$20,000 起，實際費用依演出形式與活動需求報價。";

const EVENT_TYPE_LABELS: Record<string, string> = {
  ...Object.fromEntries(SERVICES.map((s) => [s.id, s.title])),
  other: "其他",
};

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventLocation: string;
  eventType: string;
  budget: string;
  notes: string;
}

export interface InquiryPayload extends InquiryFormData {
  eventTypeLabel: string;
  budgetLabel: string;
}

function clean(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function reject(reason: string): never {
  throw new SpamRejectedError(reason);
}

export function parseInquiryForm(body: unknown): InquiryPayload {
  if (!body || typeof body !== "object") {
    reject("invalid-body");
  }

  const data = body as Record<string, unknown>;

  const name = clean(data.name, 100);
  const phone = clean(data.phone, 30);
  const email = clean(data.email, 200);
  const eventDate = clean(data.eventDate, 20);
  const eventLocation = clean(data.eventLocation, 200);
  const eventType = clean(data.eventType, 50);
  const budget = clean(data.budget, 50);
  const notes = clean(data.notes, 2000);

  if (!name) reject("missing-name");
  if (!validateNameContent(name)) reject("invalid-name");

  if (!phone) reject("missing-phone");
  if (!validatePhoneFormat(phone)) reject("invalid-phone");

  if (!email) reject("missing-email");
  if (!validateEmailFormat(email)) reject("invalid-email");

  if (!eventDate) reject("missing-date");
  if (!validateEventDate(eventDate)) reject("invalid-date");

  if (!eventLocation) reject("missing-location");
  if (!validateLocationContent(eventLocation)) reject("invalid-location");

  if (!eventType || !EVENT_TYPE_LABELS[eventType]) {
    reject("invalid-event-type");
  }

  if (!budget || !BUDGET_LABELS[budget]) {
    reject("invalid-budget");
  }

  if (!validateNotesContent(notes)) reject("invalid-notes");

  return {
    name,
    phone,
    email,
    eventDate,
    eventLocation,
    eventType,
    budget,
    notes,
    eventTypeLabel: EVENT_TYPE_LABELS[eventType],
    budgetLabel: BUDGET_LABELS[budget],
  };
}

export function parseContactForm(body: unknown): InquiryPayload {
  if (!body || typeof body !== "object") {
    reject("invalid-body");
  }

  const data = body as Record<string, unknown>;

  return parseInquiryForm({
    name: data.name,
    phone: data.phone,
    email: data.email,
    eventDate: data.date,
    eventLocation: data.location,
    eventType: data.eventType,
    budget: data.budget,
    notes: data.message ?? "",
  });
}
