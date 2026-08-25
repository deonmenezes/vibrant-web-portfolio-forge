import Stripe from "stripe";
import type { VercelRequest } from "@vercel/node";
import { SITE_URL } from "../src/data/catalog";

let client: Stripe | undefined;

/** Lazily construct the Stripe client so a missing key fails per-request, not at import. */
export const getStripe = (): Stripe => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  if (!client) {
    client = new Stripe(key, {
      appInfo: { name: "virelity.com", url: SITE_URL },
    });
  }
  return client;
};

const ALLOWED_ORIGIN =
  /^https:\/\/(www\.)?virelity\.com$|^https:\/\/[a-z0-9-]+\.vercel\.app$|^http:\/\/localhost(:\d+)?$/i;

/** Origin used for success/cancel redirects. Falls back to production. */
export const resolveOrigin = (req: VercelRequest): string => {
  const origin = (req.headers.origin as string | undefined) ?? "";
  if (ALLOWED_ORIGIN.test(origin)) return origin;
  const host = (req.headers["x-forwarded-host"] ?? req.headers.host) as string | undefined;
  if (host && ALLOWED_ORIGIN.test(`https://${host}`)) return `https://${host}`;
  return SITE_URL;
};

// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = new RegExp("[\\u0000-\\u001f\\u007f]", "g");

/** Trim, strip control characters and cap the length of user supplied text. */
export const clean = (value: unknown, max = 200): string | undefined => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.replace(CONTROL_CHARS, " ").trim();
  return trimmed ? trimmed.slice(0, max) : undefined;
};

export const isEmail = (value: string | undefined): value is string =>
  !!value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

export const errorMessage = (err: unknown): string => {
  if (err instanceof Stripe.errors.StripeError) return err.message;
  if (err instanceof Error) return err.message;
  return "Unexpected error";
};
