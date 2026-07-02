import { NextRequest, NextResponse } from "next/server";
import { parseInquiryForm } from "@/lib/inquiry";

export async function POST(request: NextRequest) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { error: "表單尚未設定完成，請稍後再試。" },
        { status: 503 },
      );
    }

    const body = await request.json();
    const payload = parseInquiryForm(body);

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        secret: process.env.GOOGLE_SCRIPT_SECRET ?? "",
      }),
      cache: "no-store",
    });

    const text = await response.text();
    let result: { success?: boolean; error?: string };

    try {
      result = JSON.parse(text) as { success?: boolean; error?: string };
    } catch {
      return NextResponse.json(
        { error: "表單服務回應異常，請稍後再試。" },
        { status: 502 },
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { error: result.error ?? "送出失敗，請稍後再試。" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "送出失敗，請稍後再試。";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
