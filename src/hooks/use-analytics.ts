import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from '@/lib/analytics';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics on first load
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location]);
};

// Hook for tracking events
export const useAnalyticsEvents = () => {
  return {
    trackButtonClick: (buttonName: string, location: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'button',
          event_label: `${buttonName} - ${location}`,
        });
      }
    },
    trackFormSubmission: (formName: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'submit', {
          event_category: 'form',
          event_label: formName,
        });
      }
    },
    trackCustomEvent: (action: string, category: string, label?: string, value?: number) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    },
  };
};
