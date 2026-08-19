import {
  SpamRejectedError,
  validateEmailFormat,
  validateEventDate,
  validateLocationContent,
  validateNameContent,
  validateNotesContent,
  validatePhoneFormat,
} from "./spam-guard";

export const EVENT_TYPE_OPTIONS = [
  { value: "stage-magic", label: "舞台魔術秀" },
  { value: "year-end-party", label: "尾牙春酒演出" },
  { value: "family-day", label: "企業家庭日" },
  { value: "campus", label: "校園活動" },
  { value: "wedding", label: "婚宴魔術" },
  { value: "commercial", label: "商業活動" },
  { value: "community", label: "社區活動" },
  { value: "campaign", label: "選舉／造勢活動" },
  { value: "other", label: "其他" },
] as const;

export const SERVICE_NEED_OPTIONS = [
  { value: "magic-performance", label: "魔術／舞台演出" },
  { value: "lighting", label: "舞台燈光服務" },
  { value: "sound", label: "音響設備服務" },
  { value: "other", label: "其他（備註欄描述）" },
] as const;

export const BUDGET_LABELS: Record<string, string> = {
  "5k-10k": "5,000～10,000 元",
  "10k-20k": "10,000～20,000 元",
  "20k-50k": "20,000～50,000 元",
  "50k-plus": "50,000 元以上",
};

export const BUDGET_OPTIONS = [
  { value: "5k-10k", label: BUDGET_LABELS["5k-10k"] },
  { value: "10k-20k", label: BUDGET_LABELS["10k-20k"] },
  { value: "20k-50k", label: BUDGET_LABELS["20k-50k"] },
  { value: "50k-plus", label: BUDGET_LABELS["50k-plus"] },
] as const;

export const BUDGET_FIELD_HINT =
  "魔術演出 NT$10,000 起；燈光／音響技術服務 NT$5,000 起（4 小時），實際費用依活動需求報價。";

const EVENT_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  EVENT_TYPE_OPTIONS.map((option) => [option.value, option.label]),
);

const SERVICE_NEED_LABELS: Record<string, string> = Object.fromEntries(
  SERVICE_NEED_OPTIONS.map((option) => [option.value, option.label]),
);

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventLocation: string;
  eventType: string;
  services: string[];
  budget: string;
  notes: string;
}

export interface InquiryPayload extends InquiryFormData {
  eventTypeLabel: string;
  servicesLabel: string;
  budgetLabel: string;
}

function clean(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function cleanServices(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  const seen = new Set<string>();

  for (const item of value) {
    if (typeof item !== "string") continue;
    const cleaned = item.trim().slice(0, 50);
    if (!cleaned || !SERVICE_NEED_LABELS[cleaned] || seen.has(cleaned)) continue;
    seen.add(cleaned);
  }

  return SERVICE_NEED_OPTIONS.map((option) => option.value).filter((value) =>
    seen.has(value),
  );
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
  const services = cleanServices(data.services);
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

  if (services.length === 0) {
    reject("missing-services");
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
    services,
    budget,
    notes,
    eventTypeLabel: EVENT_TYPE_LABELS[eventType],
    servicesLabel: services
      .map((service) => SERVICE_NEED_LABELS[service])
      .join("、"),
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
    services: data.services,
    budget: data.budget,
    notes: data.message ?? "",
  });
}
