/**
 * 魔幻點子詢價表單 — Google Apps Script
 *
 * 設定步驟：
 * 1. 建立 Google 試算表，第一列填入標題（見 setupSheet 函式）
 * 2. 試算表 → 擴充功能 → Apps Script，貼上此程式碼
 * 3. 修改下方 RECIPIENT_EMAIL 為你的 Gmail
 * 4. 修改 SECRET 為自訂密鑰（與 .env.local 的 GOOGLE_SCRIPT_SECRET 相同）
 * 5. 執行 setupSheet 一次（授權 Gmail + 試算表）
 * 6. 部署 → 新增部署 → 網頁應用程式
 *    - 執行身分：我
 *    - 具有存取權的使用者：任何人
 * 7. 複製部署 URL 到 .env.local 的 GOOGLE_SCRIPT_URL
 */

var RECIPIENT_EMAIL = "your@gmail.com";
var SECRET = "change-this-secret-key";
var SHEET_NAME = "詢價表單";

function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "提交時間",
      "姓名",
      "電話",
      "Email",
      "活動日期",
      "活動地點",
      "活動類型",
      "預算範圍",
      "備註",
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.secret !== SECRET) {
      return jsonResponse({ success: false, error: "Unauthorized" }, 401);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      setupSheet();
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    }

    var timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Taipei",
      "yyyy-MM-dd HH:mm:ss",
    );

    sheet.appendRow([
      timestamp,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.eventDate || "",
      data.eventLocation || "",
      data.eventTypeLabel || data.eventType || "",
      data.budgetLabel || data.budget || "",
      data.notes || "",
    ]);

    var subject =
      "【魔幻點子】新詢價 — " + (data.name || "未提供姓名");

    var body =
      "您收到一則新的詢價表單：\n\n" +
      "━━━━━━━━━━━━━━━━━━━━\n" +
      "姓名： " +
      (data.name || "") +
      "\n" +
      "電話： " +
      (data.phone || "") +
      "\n" +
      "Email： " +
      (data.email || "") +
      "\n" +
      "活動日期： " +
      (data.eventDate || "") +
      "\n" +
      "活動地點： " +
      (data.eventLocation || "") +
      "\n" +
      "活動類型： " +
      (data.eventTypeLabel || data.eventType || "") +
      "\n" +
      "預算範圍： " +
      (data.budgetLabel || data.budget || "") +
      "\n" +
      "備註： " +
      (data.notes || "（無）") +
      "\n" +
      "━━━━━━━━━━━━━━━━━━━━\n" +
      "提交時間： " +
      timestamp;

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      body: body,
      replyTo: data.email || "",
    });

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse(
      { success: false, error: error.message || "Internal error" },
      500,
    );
  }
}

function jsonResponse(obj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );

  if (statusCode) {
    // Apps Script 不支援 HTTP status，錯誤訊息放在 body 中
  }

  return output;
}
