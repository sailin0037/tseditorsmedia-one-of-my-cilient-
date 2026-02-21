// Google Apps Script - Deploy as Web App
// 1. Go to script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Deploy > New Deployment
// 5. Select Web App
// 6. Execute as: Me
// 7. Who has access: Anyone
// 8. Copy the Web App URL

const SHEET_NAME = "Sheet1";

const doPost = (e) => {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME) || doc.insertSheet(SHEET_NAME);
    
    const headers = sheet.getRange(1, 1, 1, 7).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;
    
    const { name, email, phone, service, budget, message } = e.parameter;
    
    const row = [
      new Date(),
      name || "",
      email || "",
      phone || "",
      service || "",
      budget || "",
      message || ""
    ];
    
    sheet.getRange(nextRow, 1, 1, 7).setValues([row]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: e.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  finally {
    lock.releaseLock();
  }
};
