export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

/**
 * Send booking form data to Google Sheets via Google Apps Script Web App
 * 
 * Setup Instructions:
 * 1. Create a Google Sheet: https://sheets.google.com
 * 2. Add headers in Row 1: Name | Email | Phone | Message | Timestamp
 * 3. Go to Extensions > Apps Script
 * 4. Paste the code from google-apps-script.js
 * 5. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * 6. Copy the Web App URL and add it to .env file as VITE_GOOGLE_SCRIPT_URL
 */
export const saveToGoogleSheets = async (formData: BookingFormData): Promise<boolean> => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Google Sheets Script URL is not configured. Please set VITE_GOOGLE_SCRIPT_URL in .env file.');
    return false;
  }

  try {
    // Send data as JSON to Google Apps Script
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script from browser
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // With no-cors mode, we can't read the response, but if request completes, assume success
    // The Google Apps Script will handle the data saving
    return true;
  } catch (error) {
    console.error('Failed to save to Google Sheets:', error);
    return false;
  }
};

