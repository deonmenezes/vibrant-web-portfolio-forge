/**
 * Google Apps Script Code for Contact Form Data Collection
 *
 * INSTRUCTIONS:
 * ============
 * 1. Go to https://sheets.google.com and create a new Google Sheet
 * 2. Name it "Virelity Contact Form" or any name you prefer
 * 3. In Row 1, add these headers (one per column):
 *    A: Name | B: Email | C: Phone | D: Message | E: Timestamp
 * 4. Go to Extensions > Apps Script
 * 5. Delete the default code and paste this entire file content
 * 6. Replace 'YOUR_SHEET_NAME' with your actual sheet tab name (e.g., 'Sheet1')
 * 7. Click "Save" (Ctrl+S or Cmd+S)
 * 8. Click "Deploy" > "New deployment"
 * 9. Click the gear icon next to "Select type" and choose "Web app"
 * 10. Set:
 *     - Description: "Virelity Contact Form Handler"
 *     - Execute as: "Me"
 *     - Who has access: "Anyone"
 * 11. Click "Deploy"
 * 12. Click "Authorize access" and follow the prompts
 * 13. Copy the "Web app URL" (looks like: https://script.google.com/macros/s/...)
 * 14. Add this URL to your .env file as: VITE_GOOGLE_SCRIPT_URL=your_url_here
 * 15. Restart your dev server
 *
 * NOTE: This is used ONLY for the Contact page form.
 * All other CTAs redirect to WhatsApp.
 */

// Handle GET requests (for testing if the script is deployed correctly)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Virelity Contact Form API is running! Use POST to submit form data.',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

// Handle POST requests (actual form submissions)
function doPost(e) {
  try {
    // Open your Google Sheet by name
    // CHANGE THIS to match your sheet name
    const sheetName = 'Sheet1'; // Change this to your sheet tab name (e.g., 'Sheet1' or 'Virelity Contact Form')
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
  const sheetName = 'Sheet1'; // Change this to your sheet tab name
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

