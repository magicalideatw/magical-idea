import { SERVICES } from "./constants";

export const BUDGET_LABELS: Record<string, string> = {
  "under-30k": "3 萬元以下",
  "30k-50k": "3 萬 – 5 萬元",
  "50k-100k": "5 萬 – 10 萬元",
  "over-100k": "10 萬元以上",
  undecided: "尚未確定",
};

export const BUDGET_OPTIONS = [
  { value: "under-30k", label: BUDGET_LABELS["under-30k"] },
  { value: "30k-50k", label: BUDGET_LABELS["30k-50k"] },
  { value: "50k-100k", label: BUDGET_LABELS["50k-100k"] },
  { value: "over-100k", label: BUDGET_LABELS["over-100k"] },
  { value: "undecided", label: BUDGET_LABELS.undecided },
] as const;

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

export function parseInquiryForm(body: unknown): InquiryPayload {
  if (!body || typeof body !== "object") {
    throw new Error("無效的表單資料");
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

  if (!name) throw new Error("請填寫姓名");
  if (!phone) throw new Error("請填寫電話");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("請填寫有效的 Email");
  }
  if (!eventDate) throw new Error("請選擇活動日期");
  if (!eventLocation) throw new Error("請填寫活動地點");
  if (!eventType || !EVENT_TYPE_LABELS[eventType]) {
    throw new Error("請選擇有效的活動類型");
  }
  if (!budget || !BUDGET_LABELS[budget]) {
    throw new Error("請選擇有效的預算範圍");
  }

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
    throw new Error("無效的表單資料");
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
