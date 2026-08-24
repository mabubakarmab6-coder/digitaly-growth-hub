/**
 * DigitalyMarket contact / conversion destinations.
 *
 * Contact strategy is inquiry-first: every lead-generation CTA routes to the
 * growth conversation inquiry experience. Direct-contact routes (phone, tel:,
 * WhatsApp, personal email) are intentionally not exposed on the public site.
 *
 * LinkedIn is intentionally empty until a verified profile URL exists;
 * the button renders in a "coming soon" state while empty.
 */
export const INQUIRY_PATH = "/start";

export const CONTACT_EMAIL = "mohammad@digitalymarket.com";
export const INSTAGRAM_URL = "https://www.instagram.com/digital.y.market/";
export const LINKEDIN_URL = "";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/#insights" },
  { label: "Abubakar", href: "/#founder" },
] as const;
