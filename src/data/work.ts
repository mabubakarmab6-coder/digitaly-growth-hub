export type ServiceStatus = "Completed" | "Ongoing" | "Planned" | "Not Applicable";

export interface ProjectServiceArea {
  id: string;
  title: string;
  status: ServiceStatus;
  shortDescription?: string;
}

export interface WorkProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string[];
  challenge?: string;
  objectives?: string[];
  approach?: string;
  client: string;
  year: string;
  services: string[]; // High-level tags
  detailedServices?: ProjectServiceArea[]; // For the 17-section Case Study
  technologies: string[];
  imageUrl: string;
  liveUrl?: string; // External client website
  projectHubSlug?: string; // e.g. 'gemstone-gallery' mapping to /projects/gemstone-gallery
  status?: string; // Overall project status
  nextSteps?: string;
  results: {
    metric: string;
    label: string;
  }[];
}

export const workProjects: WorkProject[] = [
  {
    id: "gemstone-gallery",
    slug: "gemstone-gallery",
    title: "Gems Gallery",
    category: "Website Development & Digital Growth",
    shortDescription: "Translating an established offline gemstone manufacturing capability into a clearer, more credible, and conversion-oriented B2B digital presence.",
    fullDescription: [
      "Gems Gallery is an independent portfolio project exploring how an established, manufacturing-oriented gemstone business can translate its offline expertise into a clearer, more credible and conversion-oriented digital presence.",
      "The project combined business research, B2B positioning, information architecture, UX, content strategy, SEO foundations, GEO awareness and AI-assisted website development.",
      "The strategy deliberately positioned the website toward professional buyers (manufacturers, wholesalers, miners) rather than retail consumers. The central question became: What does a professional buyer need to understand before deciding whether to contact a manufacturer?",
      "The architecture was intentionally focused into a 3-page informational B2B website (Home, Manufacturing, About) designed to establish Understanding → Capability → Trust → Action.",
      "A website does not automatically create global customers. Instead, it creates an owned digital destination that can support future discovery and acquisition. Therefore, the website was treated as the foundation of a broader digital acquisition system."
    ],
    challenge: "Gemstone manufacturing businesses can possess years of practical expertise while still having limited digital infrastructure for communicating that expertise to people outside their existing network. The core challenge was: How can an offline manufacturing capability be translated into a digital experience that helps professional buyers understand the business, evaluate its capabilities and initiate a conversation?",
    objectives: [
      "Create an owned digital presence capable of communicating manufacturing capability.",
      "Facilitate professional inquiries via Quote Requests and WhatsApp.",
      "Position the brand toward professional B2B buyers rather than retail consumers.",
      "Design a focused information architecture that builds trust."
    ],
    approach: "The project began with business understanding and research into gemstone workflows and B2B buying considerations. This research drove the strategy, which defined the B2B audience, established the positioning, and dictated the information architecture before moving into UX, content, and AI-assisted execution.",
    client: "Gems Gallery (Portfolio Project)",
    year: "2026",
    services: ["Business Research", "B2B Positioning", "Website Development", "SEO", "GEO"],
    detailedServices: [
      { id: "website-creation", title: "Website", status: "Completed", shortDescription: "Designed and developed a focused 3-page B2B website to communicate capabilities and drive inquiries." },
      { id: "seo", title: "SEO", status: "Completed", shortDescription: "Applied foundational SEO principles including semantic structures, heading hierarchy, and descriptive URLs." },
      { id: "geo", title: "GEO", status: "Completed", shortDescription: "Considered Generative Engine Optimization by using clear headings, explicit terminology, and structured capability descriptions." },
      { id: "performance-marketing", title: "Performance Marketing", status: "Not Applicable" },
      { id: "ecommerce-optimization", title: "E-Commerce Optimization", status: "Not Applicable" },
      { id: "marketplace-optimization", title: "Marketplace Optimization", status: "Not Applicable" }
    ],
    technologies: ["UX Strategy", "Information Architecture", "AI-Assisted Development", "SEO", "GEO"],
    imageUrl: "",
    liveUrl: "https://gemsgallery.digitalymarket.com",
    status: "Completed",
    nextSteps: "Future improvements could include technical SEO completion, tracking measurement from traffic to inquiry, and content expansion around manufacturing processes.",
    results: [
      {
        metric: "B2B",
        label: "Focused Audience"
      },
      {
        metric: "3-Page",
        label: "Strategic Funnel"
      },
      {
        metric: "Foundational",
        label: "SEO & GEO"
      }
    ]
  }
];
