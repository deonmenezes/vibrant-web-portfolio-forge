import type { VercelRequest, VercelResponse } from "@vercel/node";
import { errorMessage, getStripe } from "./_stripe.js";

/**
 * GET /api/checkout-session?session_id=cs_...
 *
 * Read-only summary of a Checkout Session for the /pay/success page. Only
 * exposes what the payer already knows (amount, their email, receipt links).
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = typeof req.query.session_id === "string" ? req.query.session_id : "";
  if (!/^cs_(live|test)_[A-Za-z0-9]+$/.test(id)) {
    return res.status(400).json({ error: "Invalid session id" });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(id, { expand: ["invoice"] });
    const invoice = typeof session.invoice === "object" && session.invoice ? session.invoice : null;

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({
      status: session.status,
      paymentStatus: session.payment_status,
      amountTotal: session.amount_total,
      currency: session.currency,
      email: session.customer_details?.email ?? session.customer_email ?? null,
      name: session.customer_details?.name ?? session.metadata?.customer_name ?? null,
      description: session.metadata?.reference ?? null,
      service: session.metadata?.service ?? null,
      package: session.metadata?.package ?? null,
      invoiceUrl: invoice?.hosted_invoice_url ?? null,
      invoicePdf: invoice?.invoice_pdf ?? null,
    });
  } catch (err) {
    console.error("[checkout-session] lookup failed", err);
    return res.status(404).json({ error: errorMessage(err) });
  }
}
