"use client";

import { useState, FormEvent, ReactNode, useCallback } from "react";
import { Send, Mail, MessageCircle, ChevronDown, Loader2 } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import { BUDGET_OPTIONS } from "@/lib/inquiry";
import Toast, { ToastType } from "./Toast";

const labelClass = "block text-gold/70 text-xs tracking-[0.15em] uppercase mb-2";
const inputClass =
  "w-full px-4 py-3.5 bg-black/50 border border-gold/10 rounded-xl text-white placeholder:text-white/25 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 disabled:opacity-50";
const selectWrapperClass = "relative";
const selectClass =
  "w-full px-4 py-3.5 bg-black/50 border border-gold/10 rounded-xl text-white focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer disabled:opacity-50";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  required,
  placeholder,
  options,
  disabled,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder: string;
  options: readonly { value: string; label: string }[];
  disabled?: boolean;
}) {
  return (
    <Field label={label} htmlFor={id} required={required}>
      <div className={selectWrapperClass}>
        <select
          id={id}
          name={name}
          required={required}
          disabled={disabled}
          className={selectClass}
          defaultValue=""
        >
          <option value="" disabled className="bg-surface text-white/50">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-surface text-white">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 pointer-events-none" />
      </div>
    </Field>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(
    null,
  );

  const closeToast = useCallback(() => setToast(null), []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToast(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      date: formData.get("eventDate"),
      location: formData.get("eventLocation"),
      eventType: formData.get("eventType"),
      budget: formData.get("budget"),
      message: formData.get("notes") ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result: { success?: boolean; error?: string } = {};

      try {
        result = (await response.json()) as { success?: boolean; error?: string };
      } catch {
        result = {};
      }

      if (response.ok && result.success === true) {
        form.reset();
        setToast({
          type: "success",
          message: "詢價已送出，我們會盡快與您聯絡。",
        });
        return;
      }

      setToast({
        type: "error",
        message: result.error ?? "送出失敗，請稍後再試。",
      });
    } catch {
      setToast({
        type: "error",
        message: "送出失敗，請稍後再試。",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast
        message={toast?.message ?? ""}
        type={toast?.type ?? "success"}
        visible={toast !== null}
        onClose={closeToast}
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-light">
              Get In Touch
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
              <span className="gold-gradient-text">聯絡方式</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              歡迎填寫詢價表單或透過 LINE 與我們聯繫，
              我們將在 24 小時內回覆您的需求。
            </p>
            <div className="mt-6 h-px w-12 shimmer-line" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-surface-elevated/40 border border-gold/10 hover:border-gold/25 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-gold/60 text-xs uppercase tracking-wider">LINE</p>
                <p className="text-white/80 text-sm mt-0.5">{SITE.lineDisplay}</p>
              </div>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-surface-elevated/40 border border-gold/10 hover:border-gold/25 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-gold/60 text-xs uppercase tracking-wider">Email</p>
                <p className="text-white/80 text-sm mt-0.5 hover:text-gold transition-colors break-all">
                  {SITE.email}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-2xl bg-surface-elevated/40 border border-gold/10 gold-glow space-y-6"
          >
            <div className="pb-2 border-b border-gold/10 mb-2">
              <p className="font-display text-lg text-white/90">詢價表單</p>
              <p className="text-white/40 text-xs mt-1">
                標示 <span className="text-gold">*</span> 為必填欄位
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="姓名" htmlFor="name" required>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={loading}
                  className={inputClass}
                  placeholder="請輸入姓名"
                />
              </Field>

              <Field label="電話" htmlFor="phone" required>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  disabled={loading}
                  className={inputClass}
                  placeholder="請輸入聯絡電話"
                />
              </Field>
            </div>

            <Field label="Email" htmlFor="email" required>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={loading}
                className={inputClass}
                placeholder="請輸入 Email"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="活動日期" htmlFor="eventDate" required>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  disabled={loading}
                  className={`${inputClass} [color-scheme:dark]`}
                />
              </Field>

              <Field label="活動地點" htmlFor="eventLocation" required>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  required
                  disabled={loading}
                  className={inputClass}
                  placeholder="例：台北市信義區"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SelectField
                id="eventType"
                name="eventType"
                label="活動類型"
                required
                disabled={loading}
                placeholder="請選擇活動類型"
                options={[
                  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
                  { value: "other", label: "其他" },
                ]}
              />

              <SelectField
                id="budget"
                name="budget"
                label="預算範圍"
                required
                disabled={loading}
                placeholder="請選擇預算範圍"
                options={BUDGET_OPTIONS}
              />
            </div>

            <Field label="備註" htmlFor="notes">
              <textarea
                id="notes"
                name="notes"
                rows={4}
                disabled={loading}
                className={`${inputClass} resize-none`}
                placeholder="請描述預估人數、活動流程或其他特殊需求..."
              />
            </Field>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-black font-medium rounded-full hover:bg-gold-light transition-all duration-300 gold-glow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    送出中...
                  </>
                ) : (
                  <>
                    送出詢價
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
