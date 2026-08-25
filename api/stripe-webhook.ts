import type { VercelRequest, VercelResponse } from "@vercel/node";
import type Stripe from "stripe";
import { formatUsd } from "../src/data/catalog";
import { errorMessage, getStripe } from "./_stripe";

/**
 * Stripe needs the exact raw bytes to verify the signature. @vercel/node
 * buffers the body and replays it through the "data"/"end" events (not the
 * async iterator), so read it with the event API and never touch req.body.
 */
const readRawBody = (req: VercelRequest): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer | string) => {
      chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });

/**
 * Best-effort notification into the same Google Sheet the booking form uses,
 * so every payment shows up next to leads without needing a database.
 */
const notifySheet = async (session: Stripe.Checkout.Session, headline: string) => {
  const url = process.env.VITE_GOOGLE_SCRIPT_URL;
  if (!url) return;
  const meta = session.metadata ?? {};
  const details = [
    headline,
    `Amount: ${formatUsd(session.amount_total ?? 0)} ${(session.currency ?? "usd").toUpperCase()}`,
    meta.service ? `Service: ${meta.service}` : null,
    meta.package ? `Package: ${meta.package}` : null,
    meta.reference ? `Reference: ${meta.reference}` : null,
    meta.note ? `Note: ${meta.note}` : null,
    `Session: ${session.id}`,
  ]
    .filter(Boolean)
    .join(" | ");
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: session.customer_details?.name ?? meta.customer_name ?? "Stripe customer",
        email: session.customer_details?.email ?? session.customer_email ?? "",
        phone: session.customer_details?.phone ?? "",
        message: details,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.warn("[stripe-webhook] sheet notification failed", err);
  }
};

/**
 * POST /api/stripe-webhook
 *
 * Registered in Stripe for checkout.session.completed and
 * checkout.session.async_payment_{succeeded,failed}. Stripe itself is the
 * system of record; this just fans out notifications.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers["stripe-signature"];
  if (!secret || typeof signature !== "string") {
    return res.status(400).json({ error: "Missing webhook signature or secret" });
  }

  let event: Stripe.Event;
  try {
    const raw = await readRawBody(req);
    event = getStripe().webhooks.constructEvent(raw, signature, secret);
  } catch (err) {
    console.warn("[stripe-webhook] signature verification failed", errorMessage(err));
    return res.status(400).json({ error: `Webhook error: ${errorMessage(err)}` });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log(`[stripe-webhook] checkout completed ${session.id} payment_status=${session.payment_status}`);
      if (session.payment_status === "paid") {
        await notifySheet(session, "PAYMENT RECEIVED via virelity.com");
      } else {
        await notifySheet(session, "PAYMENT PENDING (async method) via virelity.com");
      }
      break;
    }
    case "checkout.session.async_payment_succeeded": {
      await notifySheet(event.data.object, "PAYMENT RECEIVED (async) via virelity.com");
      break;
    }
    case "checkout.session.async_payment_failed": {
      await notifySheet(event.data.object, "PAYMENT FAILED (async) via virelity.com");
      break;
    }
    default:
      console.log(`[stripe-webhook] ignored ${event.type}`);
  }

  return res.status(200).json({ received: true });
}
