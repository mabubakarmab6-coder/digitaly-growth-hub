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
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services", description: "Find the right starting point" },
      { label: "Generative Engine Optimization", href: "/services/GEO", description: "Visibility in search and AI answers" },
      { label: "Paid Marketing", href: "/services/paid-marketing", description: "Strategy and campaign management" },
      { label: "Website Creation", href: "/services/web-creation", description: "Websites built around business goals" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "All Industries", href: "/industries" },
      { label: "Manufacturing & B2B", href: "/industries/manufacturing-b2b" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Local Business", href: "/industries/local-business" },
      { label: "E-commerce", href: "/industries/ecommerce" },
    ],
  },
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "All Work", href: "/work" },
      { label: "Gems Gallery", href: "/work/gemstone-gallery", description: "B2B website case study" },
      { label: "SensyTalk", href: "/work/SensyTalk", description: "B2B SaaS redesign" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About DigitalyMarket", href: "/about", description: "Who we are and how we think" },
      { label: "About Founder", href: "/about#founder", description: "Meet Mohammad Abubakar Siddiqui" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "All Insights", href: "/insights" },
      { label: "What Is Digital Marketing?", href: "/insights/what-is-digital-marketing" },
      { label: "How Does Digital Marketing Work?", href: "/insights/how-does-digital-marketing-work" },
      { label: "What Is SEO?", href: "/insights/what-is-seo" },
    ],
  },
  { label: "Abubakar", href: "/#founder" },
] as const;
