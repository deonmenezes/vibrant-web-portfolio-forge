import emailjs from '@emailjs/browser';

// EmailJS configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export const sendBookingEmail = async (formData: BookingFormData): Promise<boolean> => {
  // Check if EmailJS is configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS is not configured. Please set environment variables.');
    // Fallback to mailto if EmailJS is not configured
    return false;
  }

  try {
    // Prepare template parameters
    const templateParams = {
      to_email: 'deon.menezes@virelity.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message || 'No additional message provided.',
      subject: `Book a Free 15-Minute Call - ${formData.name}`,
    };

    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

