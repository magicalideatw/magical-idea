import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { parseContactForm } from "@/lib/inquiry";

const RECIPIENT_EMAIL = "magicalideatw@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "送出失敗，請稍後再試。" },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const data = parseContactForm(body);

    const emailBody = [
      `姓名：${data.name}`,
      `電話：${data.phone}`,
      `Email：${data.email}`,
      `活動日期：${data.eventDate}`,
      `活動地點：${data.eventLocation}`,
      `活動類型：${data.eventTypeLabel}`,
      `預算：${data.budgetLabel}`,
      `備註：${data.notes || "（無）"}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: "【魔幻點子】收到新的演出詢價",
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "送出失敗，請稍後再試。" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "送出失敗，請稍後再試。" },
      { status: 400 },
    );
  }
}
