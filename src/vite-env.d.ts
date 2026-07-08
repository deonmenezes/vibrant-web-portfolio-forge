/// <reference types="vite/client" />

declare global {
  interface Window {
    lenis?: {
      scrollTo: (target: number | string | Element, options?: { immediate?: boolean }) => void;
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
