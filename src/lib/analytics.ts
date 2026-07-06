// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Prefer env var if provided, fall back to default
export const GA_MEASUREMENT_ID =
  (import.meta as any).env?.VITE_GA_MEASUREMENT_ID || 'G-0P150KVE0V';

// Initialize Google Analytics
let gaArmed = false;
export const initGA = () => {
  // Defer until well after load so analytics never competes with app boot
  if (!gaArmed) {
    gaArmed = true;
    const arm = () => setTimeout(initGA, 3500);
    if (document.readyState === 'complete') arm();
    else window.addEventListener('load', arm, { once: true });
    return;
  }

  // Create script tag for gtag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window.gtag !== 'function') {
    console.warn('Google Analytics not initialized');
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'function') {
    console.warn('Google Analytics not initialized');
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'button', `${buttonName} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

// Track page scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', 'engagement', `${depth}%`, depth);
};
