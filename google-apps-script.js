/**
 * Google Apps Script Code for Booking Form Data Collection
 * 
 * INSTRUCTIONS:
 * 1. Go to https://sheets.google.com and create a new Google Sheet
 * 2. Name it "Booking Form Submissions" or any name you prefer
 * 3. In Row 1, add these headers (one per column):
 *    - Name | Email | Phone | Message | Timestamp
 * 4. Go to Extensions > Apps Script (or script.google.com)
 * 5. Delete the default code and paste this entire file
 * 6. Replace 'YOUR_SHEET_NAME' with your actual sheet name (line 18)
 * 7. Click "Save" (Ctrl+S or Cmd+S)
 * 8. Click "Deploy" > "New deployment"
 * 9. Select type: "Web app"
 * 10. Set:
 *     - Description: "Booking Form Handler"
 *     - Execute as: "Me"
 *     - Who has access: "Anyone"
 * 11. Click "Deploy"
 * 12. Copy the "Web app URL" (looks like: https://script.google.com/macros/s/...)
 * 13. Add this URL to your .env file as: VITE_GOOGLE_SCRIPT_URL=your_url_here
 * 14. Restart your dev server
 */

function doPost(e) {
  try {
    // Open your Google Sheet by name
    // CHANGE THIS to match your sheet name
    const sheetName = 'YOUR_SHEET_NAME'; // e.g., 'Booking Form Submissions'
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.getActiveSheet();
    
    // Parse the incoming JSON data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      // Fallback to parameters if JSON parsing fails
      data = e.parameter || {};
    }
    
    // Get the current timestamp
    const timestamp = new Date();
    
    // Append the data to the sheet
    // Format: [Name, Email, Phone, Message, Timestamp]
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
      timestamp
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to set up headers if sheet is empty
function setupHeaders() {
  const sheetName = 'YOUR_SHEET_NAME'; // Change this to your sheet name
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.getActiveSheet();
  
  // Check if first row is empty or set headers
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Name', 'Email', 'Phone', 'Message', 'Timestamp']);
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    sheet.getRange(1, 1, 1, 5).setBackground('#4285f4');
    sheet.getRange(1, 1, 1, 5).setFontColor('#ffffff');
  }
}

// Run this function once manually to set up headers
// Go to Apps Script editor > Select setupHeaders function > Click Run

