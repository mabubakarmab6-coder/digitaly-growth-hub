import { FEATURED_WORK_SLUG, workProjects } from "./work";

/** Homepage display subset; auxiliary service routes remain unchanged. */
export const homepageServices = [
  { title: "Web Creation", href: "/services/web-creation", description: "Business-first websites with growth readiness built into design and development.", icon: "web" },
  { title: "Paid Marketing", href: "/services/paid-marketing", description: "Needs-first, strategy-led paid acquisition around meaningful business outcomes.", icon: "paid" },
  { title: "GEO (Generative Engine Optimization)", href: "/services/GEO", description: "Build clearer, more credible signals for AI answer-engine discoverability.", icon: "geo" },
] as const;

export const homepageWork = [...workProjects].sort((a, b) =>
  a.slug === FEATURED_WORK_SLUG ? -1 : b.slug === FEATURED_WORK_SLUG ? 1 : 0,
);