import type { VercelRequest, VercelResponse } from "@vercel/node";
import type Stripe from "stripe";
import {
  CURRENCY,
  CUSTOM_PRODUCT_ID,
  MAX_CUSTOM_AMOUNT,
  MIN_CUSTOM_AMOUNT,
  findPackage,
  findService,
  formatUsd,
} from "../src/data/catalog";
import { clean, errorMessage, getStripe, isEmail, resolveOrigin } from "./_stripe";

/**
 * POST /api/checkout
 *
 * Two shapes are accepted:
 *   { service: "web-development", package: "basic-website", email?, name? }
 *   { amount: 1250.5, service?, email?, name?, reference?, note? }   // custom / invoice
 *
 * Prices for packages are always taken from the server-side catalog, never
 * from the request. Returns { url, id } for a hosted Stripe Checkout session.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (typeof req.body === "object" && req.body) || {};
  const serviceSlug = clean(body.service, 64);
  const packageId = clean(body.package, 64);
  const name = clean(body.name, 120);
  const email = clean(body.email, 254)?.toLowerCase();
  const reference = clean(body.reference, 120);
  const note = clean(body.note, 500);

  if (email && !isEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  let lineItem: Stripe.Checkout.SessionCreateParams.LineItem;
  let description: string;
  const metadata: Record<string, string> = { source: "virelity.com" };

  if (packageId) {
    const match = findPackage(serviceSlug, packageId);
    if (!match || match.pkg.amount === null || match.pkg.amount <= 0) {
      return res.status(400).json({ error: "This package is quote based. Please contact us for pricing." });
    }
    description = `${match.service.name} - ${match.pkg.name}`;
    metadata.service = match.service.slug;
    metadata.package = match.pkg.id;
    lineItem = {
      quantity: 1,
      price_data: {
        currency: CURRENCY,
        product: match.service.productId,
        unit_amount: match.pkg.amount,
      },
    };
  } else {
    const amountUsd = Number(body.amount);
    if (!Number.isFinite(amountUsd)) {
      return res.status(400).json({ error: "Please enter an amount." });
    }
    const cents = Math.round(amountUsd * 100);
    if (cents < MIN_CUSTOM_AMOUNT || cents > MAX_CUSTOM_AMOUNT) {
      return res.status(400).json({
        error: `Amount must be between ${formatUsd(MIN_CUSTOM_AMOUNT)} and ${formatUsd(MAX_CUSTOM_AMOUNT)}.`,
      });
    }
    const service = findService(serviceSlug);
    description = `${service ? service.name : "Virelity Services"}${reference ? ` - ${reference}` : ""}`;
    if (service) metadata.service = service.slug;
    metadata.kind = "custom";
    lineItem = {
      quantity: 1,
      price_data: {
        currency: CURRENCY,
        product: service?.productId ?? CUSTOM_PRODUCT_ID,
        unit_amount: cents,
      },
    };
  }

  if (name) metadata.customer_name = name;
  if (reference) metadata.reference = reference;
  if (note) metadata.note = note;

  const origin = resolveOrigin(req);

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      line_items: [lineItem],
      customer_email: email,
      customer_creation: "always",
      billing_address_collection: "required",
      invoice_creation: {
        enabled: true,
        invoice_data: { description, metadata },
      },
      payment_intent_data: { description, metadata },
      metadata,
      success_url: `${origin}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pay/cancelled`,
    });

    return res.status(200).json({ url: session.url, id: session.id });
  } catch (err) {
    console.error("[checkout] failed to create session", err);
    return res.status(500).json({ error: errorMessage(err) });
  }
}
