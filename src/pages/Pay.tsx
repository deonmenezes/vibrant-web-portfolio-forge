import { useMemo, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { m as motion } from "framer-motion";
import { ArrowRight, CreditCard, Loader2, Lock, ShieldCheck, Receipt } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES, MAX_CUSTOM_AMOUNT, MIN_CUSTOM_AMOUNT, findService, formatUsd } from "@/data/catalog";
import { startCheckout } from "@/lib/stripeCheckout";

const inputClass =
  "w-full bg-white text-black border-4 border-black px-4 py-3 font-bold placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-vision-gold";
const labelClass = "block text-white font-black uppercase tracking-wider text-sm mb-2";

const parseAmount = (raw: string | null): string => {
  if (!raw) return "";
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? String(n) : "";
};

/**
 * /pay - pay an invoice, deposit or milestone for any Virelity service.
 * Deep-linkable: /pay?amount=1500&service=web-development&ref=INV-042&email=client@x.com
 */
const Pay = () => {
  const [params] = useSearchParams();
  const initialService = findService(params.get("service"))?.slug ?? "";

  const [service, setService] = useState(initialService);
  const [amount, setAmount] = useState(parseAmount(params.get("amount")));
  const [name, setName] = useState(params.get("name") ?? "");
  const [email, setEmail] = useState(params.get("email") ?? "");
  const [reference, setReference] = useState(params.get("ref") ?? params.get("reference") ?? "");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const amountCents = useMemo(() => Math.round(Number(amount) * 100), [amount]);
  const amountValid = Number.isFinite(amountCents) && amountCents >= MIN_CUSTOM_AMOUNT && amountCents <= MAX_CUSTOM_AMOUNT;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!amountValid) {
      toast.error(`Enter an amount between ${formatUsd(MIN_CUSTOM_AMOUNT)} and ${formatUsd(MAX_CUSTOM_AMOUNT)}.`);
      return;
    }
    setSubmitting(true);
    try {
      await startCheckout({
        amount: Number(amount),
        service: service || undefined,
        name: name.trim() || undefined,
        email: email.trim() || undefined,
        reference: reference.trim() || undefined,
        note: note.trim() || undefined,
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not start checkout.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Helmet>
        <title>Pay Virelity | Secure Invoice & Project Payments</title>
        <meta
          name="description"
          content="Pay a Virelity invoice, deposit or project milestone securely with card, Apple Pay or Google Pay via Stripe."
        />
        <link rel="canonical" href="https://www.virelity.com/pay" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
              <span className="relative block bg-black border-4 border-white px-4 py-2 text-white font-black uppercase tracking-widest text-sm">
                Payments
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-4">
              Pay an invoice
              <span className="block text-vision-gold">or deposit</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Settle a Virelity invoice, project deposit or milestone in a couple of clicks. Card, Apple Pay and
              Google Pay are accepted. You will receive a Stripe receipt and invoice PDF by email.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 relative"
              noValidate
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-vision-gold" />
              <div className="relative bg-black border-4 border-white p-6 md:p-10 space-y-6">
                <div>
                  <label htmlFor="pay-amount" className={labelClass}>
                    Amount (USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-black/60">$</span>
                    <input
                      id="pay-amount"
                      type="number"
                      inputMode="decimal"
                      min={MIN_CUSTOM_AMOUNT / 100}
                      max={MAX_CUSTOM_AMOUNT / 100}
                      step="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="1500.00"
                      className={`${inputClass} pl-9 text-2xl`}
                    />
                  </div>
                  <p className="text-white/50 text-xs mt-2">
                    Between {formatUsd(MIN_CUSTOM_AMOUNT)} and {formatUsd(MAX_CUSTOM_AMOUNT)}.
                  </p>
                </div>

                <div>
                  <label htmlFor="pay-service" className={labelClass}>
                    Service
                  </label>
                  <select
                    id="pay-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">General / invoice payment</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pay-name" className={labelClass}>
                      Your name
                    </label>
                    <input
                      id="pay-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="pay-email" className={labelClass}>
                      Email for receipt
                    </label>
                    <input
                      id="pay-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="pay-reference" className={labelClass}>
                    Invoice / project reference
                  </label>
                  <input
                    id="pay-reference"
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="INV-0042 or project name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="pay-note" className={labelClass}>
                    Note (optional)
                  </label>
                  <textarea
                    id="pay-note"
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Milestone 2 of 3, deposit for VR demo..."
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !amountValid}
                  aria-busy={submitting}
                  className="w-full px-6 py-5 font-black uppercase text-lg text-center border-4 border-black bg-vision-gold text-black inline-flex items-center justify-center gap-3 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#fff] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Redirecting to Stripe
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5" aria-hidden="true" />
                      Pay {amountValid ? formatUsd(amountCents) : "now"}
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="flex items-center justify-center gap-2 text-white/60 text-xs">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  Payments are processed by Stripe. Virelity never sees your card details.
                </p>
              </div>
            </motion.form>

            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                {
                  icon: <ShieldCheck className="h-6 w-6" aria-hidden="true" />,
                  title: "Secure by Stripe",
                  text: "PCI compliant hosted checkout with 3D Secure, Apple Pay and Google Pay.",
                },
                {
                  icon: <Receipt className="h-6 w-6" aria-hidden="true" />,
                  title: "Receipt + invoice",
                  text: "A receipt and a downloadable invoice PDF are emailed automatically after payment.",
                },
                {
                  icon: <CreditCard className="h-6 w-6" aria-hidden="true" />,
                  title: "Fixed price packages",
                  text: "Prefer a package? Every service page has priced packages with one click checkout.",
                },
              ].map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white/20" />
                  <div className="relative bg-black border-4 border-white p-5 flex gap-4">
                    <div className="text-vision-gold shrink-0">{item.icon}</div>
                    <div>
                      <h2 className="text-white font-black uppercase mb-1">{item.title}</h2>
                      <p className="text-white/60 text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                to="/services"
                className="block text-center px-6 py-4 font-black uppercase border-4 border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                Browse service packages
              </Link>
              <p className="text-white/50 text-sm text-center">
                Questions about an invoice?{" "}
                <a href="mailto:deon.menezes@virelity.com" className="text-vision-gold underline">
                  deon.menezes@virelity.com
                </a>
              </p>
            </motion.aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pay;
