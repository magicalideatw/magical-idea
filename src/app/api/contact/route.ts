import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { parseContactForm } from "@/lib/inquiry";
import {
  buildAdminInquiryEmail,
  buildCustomerConfirmationEmail,
} from "@/lib/emails";
import {
  SPAM_REJECT_MESSAGE,
  SpamRejectedError,
  getClientIp,
  isHoneypotTriggered,
  isRateLimited,
  isSubmissionTooFast,
  isTurnstileConfigured,
  verifyTurnstileToken,
} from "@/lib/spam-guard";

const RECIPIENT_EMAIL = "magicalideatw@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

function rejectSpam(reason: string) {
  console.warn("Contact form rejected:", reason);
  return NextResponse.json(
    { success: false, error: SPAM_REJECT_MESSAGE },
    { status: 400 },
  );
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: SPAM_REJECT_MESSAGE },
      { status: 503 },
    );
  }

  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return rejectSpam("rate-limit");
  }

  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return rejectSpam("invalid-json");
  }

  if (isHoneypotTriggered(body.website)) {
    return rejectSpam("honeypot");
  }

  if (isSubmissionTooFast(body._formLoadedAt)) {
    return rejectSpam("submission-too-fast");
  }

  if (isTurnstileConfigured()) {
    const turnstileOk = await verifyTurnstileToken(body.turnstileToken, ip);
    if (!turnstileOk) {
      return rejectSpam("turnstile-failed");
    }
  }

  try {
    const data = parseContactForm(body);

    const resend = new Resend(apiKey);

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
        { success: false, error: SPAM_REJECT_MESSAGE },
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
    if (error instanceof SpamRejectedError) {
      return rejectSpam(error.reason);
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: SPAM_REJECT_MESSAGE },
      { status: 400 },
    );
  }
}
