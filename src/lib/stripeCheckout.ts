import { trackEvent } from "@/lib/analytics";

export interface CheckoutRequest {
  /** Service slug from src/data/catalog.ts, e.g. "web-development". */
  service?: string;
  /** Package id from the catalog. When set, the server-side price is used. */
  package?: string;
  /** Custom amount in USD (used only when no package is given). */
  amount?: number;
  name?: string;
  email?: string;
  reference?: string;
  note?: string;
}

interface CheckoutResponse {
  url?: string;
  id?: string;
  error?: string;
}

/**
 * Creates a hosted Stripe Checkout session via /api/checkout and redirects
 * the browser to it. Throws with a user-facing message on failure.
 */
export const startCheckout = async (payload: CheckoutRequest): Promise<void> => {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: CheckoutResponse = {};
  try {
    data = (await response.json()) as CheckoutResponse;
  } catch {
    // non-JSON error page, handled below
  }

  if (!response.ok || !data.url) {
    throw new Error(data.error || "We could not start the checkout. Please try again or contact us.");
  }

  trackEvent("begin_checkout", "payments", payload.package ? `${payload.service}/${payload.package}` : "custom", payload.amount);
  window.location.assign(data.url);
};
