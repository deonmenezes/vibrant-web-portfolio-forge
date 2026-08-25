/**
 * Single source of truth for what can be paid for on virelity.com.
 *
 * Shared by the browser (CheckoutButton / Pay page) and the Vercel API
 * functions in /api (which import it with a relative path). Amounts are in
 * USD cents. A package with `amount: null` is quote-only and falls back to
 * the WhatsApp / booking flow instead of Stripe Checkout.
 *
 * Stripe Product ids were created once in the live account with
 * metadata.slug = <service slug>; they only exist for dashboard reporting.
 */

export const SITE_URL = "https://www.virelity.com";
export const CURRENCY = "usd";

/** Custom / invoice payments must fall inside this range (USD cents). */
export const MIN_CUSTOM_AMOUNT = 1_00; // $1
export const MAX_CUSTOM_AMOUNT = 100_000_00; // $100,000

/** Generic product used for invoices / deposits not tied to a service. */
export const CUSTOM_PRODUCT_ID = "prod_V8TRnjtcCMwVAL";

export interface CatalogPackage {
  /** Stable id sent to the API, e.g. "basic-website". */
  id: string;
  /** Display name, must match the `name` used on the service page. */
  name: string;
  /** Price in USD cents, or null when the package is quote-only. */
  amount: number | null;
}

export interface CatalogService {
  slug: string;
  name: string;
  productId: string;
  packages: CatalogPackage[];
}

export const SERVICES: CatalogService[] = [
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    productId: "prod_V8TRrYY6psJL0N",
    packages: [
      { id: "ai-starter", name: "AI Starter", amount: 5_000_00 },
      { id: "ai-business", name: "AI Business", amount: 15_000_00 },
      { id: "enterprise-ai", name: "Enterprise AI", amount: null },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    productId: "prod_V8TRpT29iZcAMX",
    packages: [
      { id: "basic-website", name: "Basic Website", amount: 3_500_00 },
      { id: "e-commerce", name: "E-commerce", amount: 8_500_00 },
      { id: "custom-web-app", name: "Custom Web App", amount: null },
    ],
  },
  {
    slug: "vr-ar-development",
    name: "VR/AR Development",
    productId: "prod_V8TR4ChDCYBjJC",
    packages: [
      { id: "ar-mobile-app", name: "AR Mobile App", amount: 15_000_00 },
      { id: "vr-experience", name: "VR Experience", amount: 35_000_00 },
      { id: "enterprise-solution", name: "Enterprise Solution", amount: null },
    ],
  },
  {
    slug: "3d-development",
    name: "3D Development",
    productId: "prod_V8TRCqRQRuLSsk",
    packages: [
      { id: "basic-3d-model", name: "Basic 3D Model", amount: 2_000_00 },
      { id: "professional-3d", name: "Professional 3D", amount: 8_000_00 },
      { id: "enterprise-3d", name: "Enterprise 3D", amount: null },
    ],
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    productId: "prod_V8TRswdBqBRXqP",
    packages: [
      { id: "basic-video-edit", name: "Basic Video Edit", amount: null },
      { id: "professional-edit", name: "Professional Edit", amount: 1_500_00 },
      { id: "premium-production", name: "Premium Production", amount: null },
    ],
  },
  {
    slug: "design-services",
    name: "Design Services",
    productId: "prod_V8TRK1loFxowPW",
    packages: [
      { id: "basic-design", name: "Basic Design", amount: 800_00 },
      { id: "professional", name: "Professional", amount: 2_500_00 },
      { id: "enterprise", name: "Enterprise", amount: null },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    productId: "prod_V8TRkXFjA28vcN",
    packages: [
      { id: "starter-marketing", name: "Starter Marketing", amount: 1_200_00 },
      { id: "growth-marketing", name: "Growth Marketing", amount: 3_500_00 },
      { id: "enterprise-marketing", name: "Enterprise Marketing", amount: null },
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    productId: "prod_V8TRhVqt2Lfv22",
    packages: [
      { id: "basic-mobile-app", name: "Basic Mobile App", amount: 8_000_00 },
      { id: "cross-platform-app", name: "Cross-Platform App", amount: 15_000_00 },
      { id: "enterprise-mobile-app", name: "Enterprise Mobile App", amount: null },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    productId: "prod_V8TRNELJgpVnGK",
    packages: [
      { id: "basic-ui-ux-design", name: "Basic UI/UX Design", amount: 2_500_00 },
      { id: "professional-ui-ux", name: "Professional UI/UX", amount: 6_000_00 },
      { id: "enterprise-ui-ux", name: "Enterprise UI/UX", amount: null },
    ],
  },
  {
    slug: "ar-vr-marketing",
    name: "AR/VR Marketing",
    productId: "prod_V8TREB3uT4Q2tt",
    packages: [
      { id: "ar-social-campaign", name: "AR Social Campaign", amount: 8_000_00 },
      { id: "interactive-product-demo", name: "Interactive Product Demo", amount: 18_000_00 },
      { id: "full-vr-campaign", name: "Full VR Campaign", amount: null },
    ],
  },
];

export const findService = (slug: string | undefined | null): CatalogService | undefined =>
  slug ? SERVICES.find((s) => s.slug === slug) : undefined;

export const findPackage = (
  serviceSlug: string | undefined | null,
  packageIdOrName: string | undefined | null,
): { service: CatalogService; pkg: CatalogPackage } | undefined => {
  const service = findService(serviceSlug);
  if (!service || !packageIdOrName) return undefined;
  const pkg = service.packages.find((p) => p.id === packageIdOrName || p.name === packageIdOrName);
  return pkg ? { service, pkg } : undefined;
};

export const formatUsd = (cents: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
