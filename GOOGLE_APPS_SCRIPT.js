/**
 * Google Apps Script for Bridge Rwanda Application Form
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this script.
 * 4. Replace 'YOUR_DRIVE_FOLDER_ID' below with the actual ID of your Google Drive folder.
 *    (The ID is the long string of characters at the end of the folder's URL).
 * 5. Click the "Deploy" button (top right) > "New deployment".
 * 6. Select type: "Web app".
 * 7. Description: "Bridge Application API".
 * 8. Execute as: "Me".
 * 9. Who has access: "Anyone".
 * 10. Click "Deploy". You may need to authorize the script.
 * 11. Copy the "Web app URL" and paste it into your website's Apply.tsx file.
 */

const FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID'; // <--- CHANGE THIS

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const folder = DriveApp.getFolderById(FOLDER_ID);
    
    // 1. Process files
    const idLink = data.idDocument ? saveFile(data.idDocument, folder, data.firstName + '_' + data.lastName + '_ID') : 'No file';
    const paymentLink = data.proofOfPayment ? saveFile(data.proofOfPayment, folder, data.firstName + '_' + data.lastName + '_Payment') : 'No file';
    const transcriptLink = data.transcript ? saveFile(data.transcript, folder, data.firstName + '_' + data.lastName + '_Transcript') : 'No file';
    
    // 2. Append to Sheet
    // Headers: Timestamp, Program, First Name, Last Name, Email, Phone, DOB, Gender, Nationality, Academic Level, Field, Institution, Score, ID Link, Payment Link, Transcript Link, Preferred Uni, Hoped Change
    sheet.appendRow([
      new Date(),
      data.programId,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.dob,
      data.gender,
      data.nationality,
      data.academicLevel,
      data.fieldOfStudy,
      data.institution,
      data.lastTrimesterScore,
      idLink,
      paymentLink,
      transcriptLink,
      data.preferredUniversity,
      data.hopedChange
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function saveFile(fileData, folder, fileName) {
  // fileData is { base64: "...", type: "image/png" }
  const contentType = fileData.type;
  const decodedData = Utilities.base64Decode(fileData.base64);
  const blob = Utilities.newBlob(decodedData, contentType, fileName);
  const file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file.getUrl();
}
