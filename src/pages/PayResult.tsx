import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { m as motion } from "framer-motion";
import { CheckCircle2, XCircle, Loader2, FileText, ArrowRight, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { findPackage, findService, formatUsd } from "@/data/catalog";
import { trackEvent } from "@/lib/analytics";

interface SessionSummary {
  status: string | null;
  paymentStatus: string | null;
  amountTotal: number | null;
  currency: string | null;
  email: string | null;
  name: string | null;
  description: string | null;
  service: string | null;
  package: string | null;
  invoiceUrl: string | null;
  invoicePdf: string | null;
}

const Shell = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-black">
    <Helmet>
      <title>{title} | Virelity</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Navbar />
    <main className="flex-1 pt-32 pb-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-vision-gold" />
          <div className="relative bg-black border-4 border-white p-8 md:p-12">{children}</div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

const primaryBtn =
  "inline-flex items-center justify-center gap-2 px-6 py-4 font-black uppercase border-4 border-black bg-vision-gold text-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#fff]";
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 px-6 py-4 font-black uppercase border-4 border-white text-white hover:bg-white hover:text-black transition-colors";

/**
 * Handles both /pay/success?session_id=cs_... and /pay/cancelled.
 */
const PayResult = () => {
  const { pathname } = useLocation();
  const [params] = useSearchParams();
  const cancelled = pathname.endsWith("/cancelled");
  const sessionId = params.get("session_id");

  const [summary, setSummary] = useState<SessionSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(!cancelled && !!sessionId);

  useEffect(() => {
    if (cancelled || !sessionId) return;
    let active = true;
    fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`)
      .then(async (res) => {
        const data = (await res.json()) as SessionSummary & { error?: string };
        if (!res.ok) throw new Error(data.error || "Could not load payment details.");
        return data;
      })
      .then((data) => {
        if (!active) return;
        setSummary(data);
        if (data.paymentStatus === "paid") {
          trackEvent("purchase", "payments", data.package ? `${data.service}/${data.package}` : "custom", (data.amountTotal ?? 0) / 100);
        }
      })
      .catch((err: Error) => active && setError(err.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [cancelled, sessionId]);

  if (cancelled) {
    return (
      <Shell title="Payment cancelled">
        <XCircle className="h-14 w-14 text-white mb-6" aria-hidden="true" />
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Payment cancelled</h1>
        <p className="text-white/70 text-lg mb-8">
          No charge was made. You can try again whenever you are ready, or message us if something went wrong.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/pay" className={primaryBtn}>
            Try again <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a href="https://wa.me/918104796542" target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
            <MessageSquare className="h-5 w-5" aria-hidden="true" /> WhatsApp us
          </a>
        </div>
      </Shell>
    );
  }

  if (loading) {
    return (
      <Shell title="Confirming payment">
        <Loader2 className="h-14 w-14 text-vision-gold animate-spin mb-6" aria-hidden="true" />
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase">Confirming your payment</h1>
      </Shell>
    );
  }

  if (error || !summary) {
    return (
      <Shell title="Payment">
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Thank you</h1>
        <p className="text-white/70 text-lg mb-8">
          {error ?? "We could not load the payment details, but if Stripe showed a success screen your payment went through."}{" "}
          A receipt will arrive by email.
        </p>
        <Link to="/" className={primaryBtn}>
          Back to home <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </Shell>
    );
  }

  const paid = summary.paymentStatus === "paid";
  const pkg = findPackage(summary.service, summary.package);
  const service = findService(summary.service);
  const what = pkg
    ? `${pkg.service.name} - ${pkg.pkg.name}`
    : [service?.name ?? "Virelity services", summary.description].filter(Boolean).join(" - ");

  return (
    <Shell title={paid ? "Payment received" : "Payment processing"}>
      <CheckCircle2 className="h-14 w-14 text-vision-gold mb-6" aria-hidden="true" />
      <h1 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">
        {paid ? "Payment received" : "Payment processing"}
      </h1>
      <p className="text-white/70 text-lg mb-8">
        {paid
          ? "Thank you! We have your payment and will be in touch shortly to kick things off."
          : "Your payment method is still processing. We will email you as soon as it clears."}
      </p>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-y-4 border-white py-6 mb-8 text-white">
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/50 font-bold">Amount</dt>
          <dd className="text-2xl font-black">
            {summary.amountTotal !== null ? formatUsd(summary.amountTotal) : "-"}{" "}
            <span className="text-sm text-white/60">{summary.currency?.toUpperCase()}</span>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/50 font-bold">For</dt>
          <dd className="font-bold">{what}</dd>
        </div>
        {summary.email && (
          <div>
            <dt className="text-xs uppercase tracking-wider text-white/50 font-bold">Receipt sent to</dt>
            <dd className="font-bold break-all">{summary.email}</dd>
          </div>
        )}
        {summary.name && (
          <div>
            <dt className="text-xs uppercase tracking-wider text-white/50 font-bold">Billed to</dt>
            <dd className="font-bold">{summary.name}</dd>
          </div>
        )}
      </dl>

      <div className="flex flex-wrap gap-4">
        {summary.invoiceUrl && (
          <a href={summary.invoiceUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
            <FileText className="h-5 w-5" aria-hidden="true" /> View invoice
          </a>
        )}
        <Link to="/" className={secondaryBtn}>
          Back to home <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </Shell>
  );
};

export default PayResult;
