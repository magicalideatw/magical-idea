import type { InquiryPayload } from "./inquiry";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 16px;border-bottom:1px solid rgba(201,169,98,0.15);color:#c9a962;font-size:13px;letter-spacing:0.08em;width:120px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 16px;border-bottom:1px solid rgba(201,169,98,0.15);color:#f5f5f7;font-size:15px;line-height:1.6;">${escapeHtml(value || "—")}</td>
    </tr>`;
}

export function buildAdminInquiryEmail(data: InquiryPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const text = [
    "姓名：",
    data.name,
    "",
    "電話：",
    data.phone,
    "",
    "Email：",
    data.email,
    "",
    "活動日期：",
    data.eventDate,
    "",
    "活動地點：",
    data.eventLocation,
    "",
    "活動類型：",
    data.eventTypeLabel,
    "",
    "預算範圍：",
    data.budgetLabel,
    "",
    "備註：",
    data.notes || "（無）",
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html lang="zh-TW">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#030303;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#030303;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#0a0a0a;border:1px solid rgba(201,169,98,0.2);border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:32px 32px 24px;background:linear-gradient(135deg,#0a0a0a 0%,#141414 100%);border-bottom:1px solid rgba(201,169,98,0.25);">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.35em;color:rgba(201,169,98,0.6);text-transform:uppercase;">Magical Idea Entertainment</p>
              <h1 style="margin:0;font-size:24px;font-weight:500;color:#c9a962;letter-spacing:0.05em;">收到新的演出詢價</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row("姓名", data.name)}
                ${row("電話", data.phone)}
                ${row("Email", data.email)}
                ${row("活動日期", data.eventDate)}
                ${row("活動地點", data.eventLocation)}
                ${row("活動類型", data.eventTypeLabel)}
                ${row("預算範圍", data.budgetLabel)}
                ${row("備註", data.notes || "（無）")}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background-color:#050505;border-top:1px solid rgba(201,169,98,0.12);">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.35);">魔幻點子表演娛樂 · 詢價通知系統</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject: "【魔幻點子表演娛樂】收到新的演出詢價",
    html,
    text,
  };
}

const LINE_URL = "https://line.me/R/ti/p/@hwg7469v";

export function buildCustomerConfirmationEmail(name: string): {
  subject: string;
  html: string;
  text: string;
} {
  const text = `您好，

我們已收到您的詢價資料。

將於24小時內與您聯絡。

若有急件也可以直接加入 LINE：
${LINE_URL}

謝謝。

魔幻點子表演娛樂`;

  const html = `
<!DOCTYPE html>
<html lang="zh-TW">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#030303;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#030303;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#0a0a0a;border:1px solid rgba(201,169,98,0.2);border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:32px;background:linear-gradient(135deg,#0a0a0a 0%,#141414 100%);border-bottom:1px solid rgba(201,169,98,0.25);">
              <h1 style="margin:0;font-size:22px;font-weight:500;color:#c9a962;">我們已收到您的詢價</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;color:#f5f5f7;font-size:15px;line-height:1.9;">
              <p style="margin:0 0 16px;">${escapeHtml(name)} 您好，</p>
              <p style="margin:0 0 16px;">我們已收到您的詢價資料。</p>
              <p style="margin:0 0 24px;">將於 24 小時內與您聯絡。</p>
              <p style="margin:0 0 8px;color:rgba(255,255,255,0.5);font-size:13px;">若有急件也可以直接加入 LINE：</p>
              <p style="margin:0 0 24px;"><a href="${LINE_URL}" style="color:#c9a962;text-decoration:none;">${LINE_URL}</a></p>
              <p style="margin:0;">謝謝。</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background-color:#050505;border-top:1px solid rgba(201,169,98,0.12);">
              <p style="margin:0;font-size:13px;color:#c9a962;">魔幻點子表演娛樂</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject: "我們已收到您的詢價｜魔幻點子表演娛樂",
    html,
    text,
  };
}
