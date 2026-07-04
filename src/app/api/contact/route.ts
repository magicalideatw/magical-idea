import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { parseContactForm } from "@/lib/inquiry";
import {
  buildAdminInquiryEmail,
  buildCustomerConfirmationEmail,
} from "@/lib/emails";

const RECIPIENT_EMAIL = "magicalideatw@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "送出失敗，請稍後再試。" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const data = parseContactForm(body);

    const adminEmail = buildAdminInquiryEmail(data);
    const customerEmail = buildCustomerConfirmationEmail(data.name);

    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    });

    if (adminResult.error) {
      console.error("Admin inquiry email failed:", adminResult.error);
      return NextResponse.json(
        { success: false, error: "送出失敗，請稍後再試。" },
        { status: 502 },
      );
    }

    const customerResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });

    if (customerResult.error) {
      console.error("Customer confirmation email failed:", customerResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "送出失敗，請稍後再試。" },
      { status: 400 },
    );
  }
}
