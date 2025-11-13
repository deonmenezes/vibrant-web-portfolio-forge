// Minimal mock of Next's `next/navigation` hooks for non-Next (Vite) projects.
// This prevents packages that import `next/navigation` from failing when
// running under Vite (for example, @vercel/speed-insights).

/**
 * Returns route params. In a non-Next environment we return an empty object
 * so consumers that expect an object can still compute a route. Return null
 * only if window is not defined.
 */
export function useParams(): Record<string, string | string[]> | null {
  if (typeof window === "undefined") return null;
  return {};
}

/** Return current pathname */
export function usePathname(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

/** Return URLSearchParams for the current URL */
export function useSearchParams(): URLSearchParams | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search);
}

// Also export the functions as defaults under an object shape some libs may expect
export default {
  useParams,
  usePathname,
  useSearchParams
};
