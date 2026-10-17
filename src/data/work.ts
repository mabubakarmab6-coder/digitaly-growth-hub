export const GEMS_GALLERY_LIVE_URL = "https://lapidary-lab-suite.vercel.app/";

/** Project featured in the homepage Work section. */
export const FEATURED_WORK_SLUG = "SensyTalk";

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
    imageUrl: "/work/gems-gallery-hero.jpg",
    liveUrl: GEMS_GALLERY_LIVE_URL,
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
  },
  {
    id: "sensytalk",
    slug: "SensyTalk",
    title: "SensyTalk",
    category: "B2B SaaS Redesign & CRO Engineering",
    shortDescription: "Transforming an official Meta WhatsApp Partner's digital presence from a fragmented WordPress page builder into a high-converting, evidence-led B2B SaaS experience.",
    fullDescription: [
      "SensyTalk is an official Meta WhatsApp Business Solution Partner (BSP) delivering cloud-based WhatsApp marketing broadcasts, 24/7 AI chatbots, a collaborative multi-agent inbox, and the proprietary SensyConnect Telecalling CRM Android app.",
      "Despite possessing enterprise-grade messaging infrastructure, SensyTalk's legacy website suffered from deceptive popup lead forms, unpinned navigation, a broken mobile menu, and an absence of direct product proof.",
      "DigitalyMarket executed an end-to-end transformation: diagnosing conversion leaks through a rigorous CRO audit, establishing a dual-audience messaging architecture, crafting an obsidian and emerald high-contrast design system, and implementing a blazing-fast React 19 Single Page Application.",
      "The new platform incorporates an interactive business ROI calculator with customizable order values and INR/USD currency toggling, dedicated vertical landing pages for high-intent industries, and a persistent Click-to-WhatsApp widget that lets prospects test automated bot response speeds in real time."
    ],
    challenge: "SensyTalk's legacy website operated more like an unpolished promotional flyer than an enterprise B2B platform. High-intent evaluators clicking 'See All Features' were trapped in aggressive lead forms, the header vanished on scroll, mobile subpages were completely unreachable, and the site lacked a live WhatsApp chat trigger to demonstrate product capability.",
    objectives: [
      "Pass the 5-Second Test by positioning SensyTalk as a comprehensive B2B messaging operating system rather than a bulk promo tool.",
      "Eliminate deceptive conversion traps and replace forced lead capture with transparent product tours and interactive specs.",
      "Engineer a dual-layer evaluation architecture balancing plain-English business ROI with technical Meta Cloud API v18.0 specs.",
      "Provide empirical product proof with an authentic Click-to-WhatsApp live test widget and real platform screenshots.",
      "Replace bloated WordPress/Elementor dependencies with a lightweight, high-performance React front-end architecture."
    ],
    approach: "The project commenced with an evidence-led CRO and technical DOM audit, uncovering empirical structural bottlenecks on the live WordPress site. We then overhauled the value proposition around customer drop-off reduction and 98% open rates before engineering the high-contrast UI and custom React 19 application.",
    client: "SensyTalk (Meta WhatsApp Business Solution Partner)",
    year: "2026",
    services: ["CRO Audit", "B2B Messaging Strategy", "UX/UI Design System", "React 19 Engineering", "SEO & GEO Architecture"],
    detailedServices: [
      { id: "cro-audit", title: "Conversion Rate Optimization (CRO)", status: "Completed", shortDescription: "Audited live DOM and user flows, eliminating popup traps and streamlining visitor conversion pathways." },
      { id: "ux-ui", title: "UX/UI Design System", status: "Completed", shortDescription: "Engineered an obsidian and emerald dark design system with 11.4:1 contrast ratios and modular component cards." },
      { id: "website-creation", title: "Web Creation & Front-End Engineering", status: "Completed", shortDescription: "Engineered a production-ready Single Page Application with dynamic ROI calculator and deep hash routing." },
      { id: "seo", title: "Technical SEO Foundations", status: "Completed", shortDescription: "Structured semantic heading hierarchies, canonical URLs, and Core Web Vitals optimization." },
      { id: "geo", title: "Generative Engine Optimization (GEO)", status: "Completed", shortDescription: "Architected Schema.org JSON-LD and direct question-and-answer vectors for AI answer engines." }
    ],
    technologies: ["React 19", "Vite 8", "Tailwind CSS", "Lucide Icons", "TypeScript", "CRO", "SEO", "GEO"],
    imageUrl: "/work/sensytalk-hero.jpg",
    liveUrl: "https://sensytalk-redesign.vercel.app",
    status: "Preview Deployed (Production Rollout Pending)",
    nextSteps: "Production DNS cutover from legacy WordPress to Vercel, automated CRM webhook ingestion, and 30-day post-launch conversion tracking.",
    results: [
      {
        metric: "1.72s",
        label: "Build Speed (Vite 8)"
      },
      {
        metric: "11.4:1",
        label: "WCAG AA Contrast Ratio"
      },
      {
        metric: "100%",
        label: "Friction-Free Exploration"
      }
    ]
  }
];

