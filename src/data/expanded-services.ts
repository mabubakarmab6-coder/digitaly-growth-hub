import seoImage from "@/assets/hero-professional.jpg";
import commerceImage from "@/assets/service-ecommerce.jpg";
import measurementImage from "@/assets/hero-ecommerce.jpg";

export type ExpandedService = {
  key: string; eyebrow: string; h1: string; summary: string; image: string; alt: string;
  difference: string; challenges: { title: string; copy: string }[];
  capabilities: string[]; steps: { name: string; copy: string }[];
  questions: { q: string; a: string }[]; related: { title: string; href: string }[];
};

export const seoService: ExpandedService = {
  key: "SEO", eyebrow: "Search Engine Optimisation (SEO)",
  h1: "Be easier to find when customers are actively searching.",
  summary: "Improve how conventional search engines crawl, understand and display your pages. We connect technical health, useful content and buyer intent to genuine business opportunities.",
  image: seoImage, alt: "Professional working environment representing search planning",
  difference: "SEO focuses on conventional organic search, including Google and Bing results, indexing, keywords, technical quality and local visibility. GEO is a distinct offering for discovery through generative AI answers.",
  challenges: [
    {title:"Relevant buyers cannot find you",copy:"Important service, product and location pages are missing from relevant searches."},
    {title:"Traffic does not turn into demand",copy:"The content attracts visitors but does not answer the questions that matter before enquiry."},
    {title:"Technical barriers",copy:"Crawl, index, internal-link or mobile issues reduce discoverability."}
  ],
  capabilities: ["Search-intent and opportunity analysis","Technical SEO and indexability","Site architecture and internal linking","On-page content and metadata","Local SEO and business profile guidance","Search Console review and reporting"],
  steps: [
    {name:"Understand",copy:"Learn the business, buyer decisions and priority markets."},
    {name:"Diagnose",copy:"Review crawlability, content relevance and search visibility."},
    {name:"Prioritise",copy:"Rank fixes against value, confidence and effort."},
    {name:"Implement",copy:"Improve pages, links and technical foundations."},
    {name:"Measure",copy:"Review qualified organic discovery and enquiries."}
  ],
  questions: [
    {q:"How is SEO different from GEO?",a:"SEO centres on conventional search results and crawl/index systems. GEO studies how a business is represented and referenced in generative AI answers. Both benefit from clear, trustworthy, accessible information, but require different measurement."},
    {q:"Can you guarantee rankings?",a:"No. Search visibility depends on competition, search-engine evaluation and changing user behaviour. We measure progress against a documented baseline."}
  ],
  related:[{title:"GEO",href:"/services/GEO"},{title:"Website Development",href:"/services/web-creation"}]
};

export const marketplaceService: ExpandedService = {
  key:"E-commerce / Marketplace", eyebrow:"E-commerce & Marketplace Growth",
  h1:"Grow the right channels. Improve the buying experience.",
  summary:"Your own store and third-party marketplaces are different commercial environments. We diagnose discovery, catalogue quality, customer experience, operations and contribution before recommending changes.",
  image:commerceImage,alt:"Products prepared for an e-commerce purchase experience",
  difference:"A branded online store gives control over the customer experience and measurement. Marketplace growth additionally depends on listing relevance, platform policy, account health, fulfilment and platform-specific advertising.",
  challenges:[
    {title:"Products are hard to discover",copy:"Product taxonomy, listings and content are incomplete or inconsistent."},
    {title:"Demand fails to convert",copy:"Delivery clarity, product information and checkout friction create hesitation."},
    {title:"Sales hide poor economics",copy:"Growth decisions overlook margins, returns, acquisition costs and repeat purchases."}
  ],
  capabilities:["Storefront and marketplace diagnosis","Seller account and catalogue optimisation","Listing and product-content improvements","Marketplace advertising planning","Conversion-path improvements","Channel economics and performance reporting"],
  steps:[
    {name:"Understand",copy:"Review customers, product economics and capacity."},
    {name:"Diagnose",copy:"Inspect listings, operations and checkout friction."},
    {name:"Prioritise",copy:"Choose the most promising channels and fixes."},
    {name:"Implement",copy:"Improve the catalogue, storefront and promotions."},
    {name:"Measure",copy:"Compare qualified demand and contribution."}
  ],
  questions:[
    {q:"Do you support both stores and marketplaces?",a:"Yes, subject to platform access and business scope. We separate storefront improvements from marketplace account, catalogue and advertising work."},
    {q:"Should we start with advertising?",a:"Not always. Product fit, stock reliability and a persuasive buying journey may need fixing first."}
  ],
  related:[{title:"Website Development",href:"/services/web-creation"},{title:"Paid Marketing",href:"/services/paid-marketing"}]
};

export const analyticsService: ExpandedService = {
  key:"Analytics & CRO", eyebrow:"Analytics, Tracking & Conversion Optimisation",
  h1:"Stop counting activity. Start learning what drives outcomes.",
  summary:"Clear measurement helps you understand customer behaviour and remove avoidable buying friction. We prioritise trustworthy events, practical reporting and evidence-led conversion improvement.",
  image:measurementImage,alt:"E-commerce setting representing digital customer journeys",
  difference:"Tracking, attribution and conversion optimisation solve related but different problems. The agency's own future T&T implementation remains a separate workstream; this is the client-facing service.",
  challenges:[
    {title:"Numbers disagree",copy:"Platforms report conflicting results and unclear event ownership."},
    {title:"Your funnel is invisible",copy:"Teams cannot identify where promising visitors drop off."},
    {title:"Traffic is blamed for everything",copy:"The offer, landing page or enquiry experience could be the real limitation."}
  ],
  capabilities:["Measurement planning and conversion definitions","GTM and GA4 architecture assessments","Google and Meta conversion-quality review","Consent-aware event design","Landing-page and form diagnostics","Hypothesis-led CRO and business reporting"],
  steps:[
    {name:"Understand",copy:"Define meaningful business outcomes."},
    {name:"Diagnose",copy:"Audit events, attribution and journey friction."},
    {name:"Prioritise",copy:"Identify high-value corrections and experiments."},
    {name:"Implement",copy:"Improve measurement and conversion pathways."},
    {name:"Measure",copy:"Compare observed outcomes with a baseline."}
  ],
  questions:[
    {q:"Will you replace our analytics setup?",a:"Not automatically. We audit working infrastructure and correct missing or duplicated measurement before recommending replacement."},
    {q:"Can attribution prove every sale's origin?",a:"No. Attribution has model and privacy limitations. We distinguish observed events, modelled estimates and verified business outcomes."}
  ],
  related:[{title:"Paid Marketing",href:"/services/paid-marketing"},{title:"Website Development",href:"/services/web-creation"}]
};
export const expandedServices=[seoService,marketplaceService,analyticsService];
