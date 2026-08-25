import { useState, type ReactNode } from "react";
import { Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { findPackage, formatUsd } from "@/data/catalog";
import { startCheckout } from "@/lib/stripeCheckout";

interface CheckoutButtonProps {
  /** Service slug, e.g. "web-development". */
  service: string;
  /** Package display name or id as used in the service page's `packages` array. */
  packageName: string;
  className?: string;
  children?: ReactNode;
  /** Used when the package is quote-only: opens this link in a new tab. */
  fallbackHref?: string;
  /** Used when the package is quote-only: e.g. open the booking dialog. */
  onFallback?: () => void;
}

/**
 * "Get Started" CTA for service packages. Priced packages go to Stripe
 * Checkout; quote-only packages keep the existing WhatsApp / booking flow.
 */
export const CheckoutButton = ({
  service,
  packageName,
  className,
  children = "Get Started",
  fallbackHref,
  onFallback,
}: CheckoutButtonProps) => {
  const [loading, setLoading] = useState(false);
  const match = findPackage(service, packageName);
  const payable = !!match && match.pkg.amount !== null && match.pkg.amount > 0;

  if (!payable) {
    if (fallbackHref) {
      return (
        <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      );
    }
    return (
      <button type="button" onClick={onFallback} className={className}>
        {children}
      </button>
    );
  }

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await startCheckout({ service, package: match.pkg.id });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not start checkout.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
        className={`${className ?? ""} disabled:opacity-70 disabled:cursor-wait`}
      >
        {loading ? (
          <span className="inline-flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Redirecting to Stripe
          </span>
        ) : (
          children
        )}
      </button>
      <p className="mt-2 flex items-center justify-center gap-1 text-xs opacity-70">
        <Lock className="h-3 w-3" aria-hidden="true" />
        Secure {formatUsd(match.pkg.amount ?? 0)} checkout via Stripe
      </p>
    </div>
  );
};

export default CheckoutButton;
