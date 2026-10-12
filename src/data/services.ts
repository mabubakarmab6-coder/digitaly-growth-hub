export interface ServiceSignal {
  title: string;
  body: string;
}

export interface ServiceStage {
  title: string;
  body: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatItIsHeading: string;
  whatItIs: string[];
  signalsHeading: string;
  signals: ServiceSignal[];
  approachHeading: string;
  approach: ServiceStage[];
  outcomesHeading: string;
  outcomes: string[];
  evaluateHeading: string;
  evaluate: string[];
  fitFor: string[];
  notFitFor: string[];
  faqs: ServiceFaq[];
  related: { slug: string; label: string }[];
}

export const services: ServiceContent[] = [
  {
    slug: "geo",
    eyebrow: "Generative Engine Optimization",
    metaTitle: "Generative Engine Optimization (GEO) Services | DigitalyMarket",
    metaDescription:
      "GEO services that make your business understandable to search engines and AI answer engines — entity clarity, structured data, topical depth and content people actually cite.",
    h1: "Be discoverable where people now search — including AI answers.",
    intro:
      "People no longer only type keywords into a search box. They ask assistants, compare options inside AI answers and arrive already half-decided. Generative Engine Optimization is the work of making your business clear, credible and quotable enough to be part of those answers — and still rank in classic search.",
    whatItIsHeading: "What GEO actually involves",
    whatItIs: [
      "Entity clarity: making it unambiguous who you are, what you do, who you serve and where — across your site, structured data and the places that describe your business.",
      "Topical depth: covering the questions your buyers genuinely ask, in enough detail that your pages are the most useful source on the topic rather than the shortest.",
      "Machine-readable structure: clean headings, semantic HTML, schema markup and internal links so both crawlers and language models can parse the relationships between your pages.",
      "Answer-shaped content: definitions, comparisons, criteria and trade-offs written plainly, so an engine can lift a correct, attributable summary from your page.",
      "Technical foundation: crawlability, indexability, page speed and correct canonicals — the parts that quietly cap everything else.",
    ],
    signalsHeading: "Signs GEO is the constraint",
    signals: [
      {
        title: "You're invisible in AI answers",
        body: "Competitors get named when someone asks an assistant for options in your category, and you don't — even when your offer is stronger.",
      },
      {
        title: "Traffic exists, relevance doesn't",
        body: "You get sessions, but rarely from the people with real buying intent for what you sell.",
      },
      {
        title: "Your site describes, it doesn't explain",
        body: "Pages state what you offer without answering the questions a buyer weighs before choosing.",
      },
      {
        title: "Nothing links together",
        body: "Individual pages exist in isolation, so no topic ever accumulates authority.",
      },
    ],
    approachHeading: "How we approach GEO",
    approach: [
      {
        title: "Understand",
        body: "We learn the business, the offer, the buyer and the decision they're actually making before touching anything.",
      },
      {
        title: "Diagnose",
        body: "We audit visibility, technical health, content coverage and how clearly your entity is defined across the web.",
      },
      {
        title: "Prioritise",
        body: "We separate what will move discovery from what is merely tidy, and sequence the work accordingly.",
      },
      {
        title: "Build",
        body: "Technical fixes, structured data, content architecture and pages written to answer real questions.",
      },
      {
        title: "Optimise",
        body: "We track how visibility changes across search and AI surfaces, then keep refining coverage and clarity.",
      },
    ],
    outcomesHeading: "What good GEO should lead to",
    outcomes: [
      "A business that is described consistently and correctly wherever it appears",
      "Content that answers buying questions rather than restating your services",
      "Pages that engines can parse, attribute and summarise accurately",
      "Discovery that compounds instead of resetting with each campaign",
      "Enquiries from people who already understand what you do",
    ],
    evaluateHeading: "What we'd evaluate first",
    evaluate: [
      "How search engines and AI tools currently describe your business",
      "Crawlability, indexation and technical blockers",
      "Structured data coverage and accuracy",
      "Topical gaps between your content and real buyer questions",
      "Internal linking and site architecture",
      "Competing sources that currently own the answers you want",
    ],
    fitFor: [
      "Businesses whose buyers research before contacting anyone",
      "Technical or considered-purchase categories",
      "Companies that want discovery to compound over time",
    ],
    notFitFor: [
      "Anyone needing qualified leads within days — paid marketing is the honest answer there",
      "Businesses unwilling to publish genuinely useful information",
    ],
    faqs: [
      {
        q: "Is GEO different from SEO?",
        a: "It overlaps heavily. GEO keeps every SEO fundamental — crawlability, structure, useful content — and adds the clarity and answer-shaped writing that AI systems rely on when they summarise a category. Treating them as separate disciplines usually produces worse results than treating GEO as SEO with a wider surface area.",
      },
      {
        q: "How long before anything changes?",
        a: "Technical and structural fixes register quickly. Topical authority and consistent inclusion in AI answers build over months, not weeks. We're explicit about which parts of the plan are fast and which are slow.",
      },
      {
        q: "Can you guarantee we'll appear in AI answers?",
        a: "No, and nobody credible can. Answer engines change frequently and don't publish ranking rules. What we can do is remove ambiguity, improve coverage and make your pages the most citable source in your niche.",
      },
      {
        q: "Do we need to publish a lot of content?",
        a: "Not necessarily volume — depth. A smaller set of pages that fully answer the decisions your buyers make usually outperforms a large library of thin posts.",
      },
    ],
    related: [
      { slug: "paid-marketing", label: "Paid Marketing" },
      { slug: "web-creation", label: "Website Creation" },
    ],
  },
  {
    slug: "paid-marketing",
    eyebrow: "Paid Marketing",
    metaTitle: "Paid Marketing Services | Search, Social & Demand Capture | DigitalyMarket",
    metaDescription:
      "Paid marketing built around business outcomes — intent-led targeting, message clarity, landing experiences and measurement that shows what a lead actually costs.",
    h1: "Put your offer in front of the right people — and know what it costs.",
    intro:
      "Paid media is the fastest way to test demand and the fastest way to waste money. It works when targeting, message and destination all point at the same business objective, and when measurement is honest enough to tell you which parts are carrying the result.",
    whatItIsHeading: "What the work covers",
    whatItIs: [
      "Objective definition: what a successful outcome is worth to your business before any budget moves.",
      "Channel selection based on where demand already exists — capturing intent before trying to create it.",
      "Audience and keyword structure that separates buyers from browsers instead of blending them into one average.",
      "Creative and messaging built around the buyer's objection, not the brand's adjectives.",
      "Landing experience: the page the click lands on is part of the campaign, not an afterthought.",
      "Measurement: conversion tracking, lead quality feedback and a clear read on cost per real enquiry.",
    ],
    signalsHeading: "Signs paid marketing is the constraint",
    signals: [
      {
        title: "Spend is up, enquiries aren't",
        body: "Impressions and clicks look healthy but very little converts into a conversation.",
      },
      {
        title: "Leads arrive unqualified",
        body: "You're paying for volume from people who were never going to buy.",
      },
      {
        title: "You can't attribute anything",
        body: "Tracking is partial or broken, so decisions are made on instinct.",
      },
      {
        title: "You need demand now",
        body: "Organic discovery is being built, but the pipeline needs something working this quarter.",
      },
    ],
    approachHeading: "How we approach paid",
    approach: [
      {
        title: "Understand",
        body: "Margins, sales cycle, what a customer is worth and what you can afford to pay for one.",
      },
      {
        title: "Diagnose",
        body: "Existing accounts, tracking integrity, wasted spend, and whether the destination page can convert at all.",
      },
      {
        title: "Structure",
        body: "Campaigns organised by intent so budget can be shifted toward what performs.",
      },
      {
        title: "Launch",
        body: "Deliberately small first, with clean measurement, before scaling anything.",
      },
      {
        title: "Optimise",
        body: "Continuous testing of audiences, creative and landing pages against cost per qualified enquiry.",
      },
    ],
    outcomesHeading: "What good paid marketing should lead to",
    outcomes: [
      "A clear, defensible cost per qualified enquiry",
      "Budget concentrated on the segments that convert",
      "Messaging that matches what the buyer is actually deciding",
      "Landing experiences that don't leak the traffic you paid for",
      "Reporting you can make decisions from without translation",
    ],
    evaluateHeading: "What we'd evaluate first",
    evaluate: [
      "Current account structure and where spend is leaking",
      "Conversion tracking accuracy and lead-quality feedback loops",
      "Offer clarity and competitive positioning in the auction",
      "Landing page relevance and friction",
      "Realistic cost expectations for your category",
    ],
    fitFor: [
      "Businesses with a defined offer and capacity to handle enquiries",
      "Categories where people already search for the solution",
      "Teams that want measurable, adjustable demand",
    ],
    notFitFor: [
      "Businesses with no clear offer or pricing logic yet",
      "Anyone expecting paid spend to fix a weak destination page",
    ],
    faqs: [
      {
        q: "What budget do we need to start?",
        a: "It depends on your category's competition and what a customer is worth to you. We'd rather set a budget that can produce a statistically readable result on one channel than spread a small budget thinly across several.",
      },
      {
        q: "Which platforms do you work with?",
        a: "We stay platform-agnostic and follow the demand. Search-led categories usually start with search; visual and impulse categories usually start with social. The decision comes from your buyer, not a preferred toolset.",
      },
      {
        q: "Do you also fix the landing page?",
        a: "When the page is the bottleneck, yes — otherwise the campaign is paying for traffic that was never going to convert. That work may sit under website creation depending on scope.",
      },
      {
        q: "How quickly will we see results?",
        a: "Early signal usually appears within weeks; a reliable cost per qualified enquiry takes longer because it depends on your sales cycle and how quickly you can feed back on lead quality.",
      },
    ],
    related: [
      { slug: "web-creation", label: "Website Creation" },
      { slug: "geo", label: "Generative Engine Optimization" },
    ],
  },
  {
    slug: "web-creation",
    eyebrow: "Website Creation",
    metaTitle: "Website Creation & Design Services | DigitalyMarket",
    metaDescription:
      "Websites built to explain value quickly and convert attention into enquiries — clear structure, fast performance, honest copy and a technical foundation that supports search.",
    h1: "A website that explains your value and makes the next step obvious.",
    intro:
      "Most business websites fail quietly. They look acceptable, load slowly, describe the company instead of the customer's problem, and leave the visitor unsure what to do. A website should carry the argument for your business when nobody from your team is in the room.",
    whatItIsHeading: "What the work covers",
    whatItIs: [
      "Positioning and message architecture: what to say, in what order, so a stranger understands the value within seconds.",
      "Information architecture: a page and navigation structure that reflects how people actually decide.",
      "Design and build: a clean, modern interface that works properly on the phone most of your visitors use.",
      "Conversion paths: obvious, low-friction next steps for people at different levels of readiness.",
      "Technical foundation: performance, accessibility, semantic structure, metadata and schema so the site is search- and AI-ready from day one.",
      "Content that is truthful — no invented claims, logos or statistics.",
    ],
    signalsHeading: "Signs the website is the constraint",
    signals: [
      {
        title: "Traffic arrives and leaves",
        body: "Visitors reach the site but very few reach a contact form or a conversation.",
      },
      {
        title: "It doesn't reflect the business",
        body: "The site describes an older, smaller or different version of what you now do.",
      },
      {
        title: "Mobile is an afterthought",
        body: "The desktop layout is fine; the phone experience is where people give up.",
      },
      {
        title: "Everything is hard to change",
        body: "Small updates require developer time, so the site stays out of date.",
      },
    ],
    approachHeading: "How we approach websites",
    approach: [
      {
        title: "Understand",
        body: "Who buys, what they compare you against and what usually stalls the decision.",
      },
      {
        title: "Diagnose",
        body: "Where the current site loses people — structure, message, speed, trust or friction.",
      },
      {
        title: "Plan",
        body: "Sitemap, page purposes, message hierarchy and the conversion path for each audience.",
      },
      {
        title: "Build",
        body: "Design and development with performance, accessibility and search foundations built in.",
      },
      {
        title: "Optimise",
        body: "Post-launch review of behaviour and enquiry quality, then targeted refinement.",
      },
    ],
    outcomesHeading: "What a good website should lead to",
    outcomes: [
      "Visitors who understand your value quickly",
      "A clear, obvious next step on every meaningful page",
      "Fast, accessible pages on mobile and desktop",
      "A technical base that supports search and AI discovery",
      "Fewer unqualified enquiries and more relevant conversations",
    ],
    evaluateHeading: "What we'd evaluate first",
    evaluate: [
      "Clarity of the message in the first screen",
      "Page speed and Core Web Vitals on mobile",
      "Navigation logic and depth of key pages",
      "Conversion friction — forms, CTAs and trust signals",
      "Technical SEO foundations and structured data",
      "How easy the site is for your team to maintain",
    ],
    fitFor: [
      "Businesses whose site no longer matches their offer",
      "Companies planning to invest in search or paid traffic",
      "Teams that want a site they can keep current",
    ],
    notFitFor: [
      "Anyone wanting a template filled with claims they can't support",
      "Projects where design is the only goal and outcomes don't matter",
    ],
    faqs: [
      {
        q: "Do you redesign existing sites or only build new ones?",
        a: "Both. Sometimes the structure is sound and the message is the problem, in which case a rebuild would be wasteful. The diagnosis decides.",
      },
      {
        q: "Will the site be built for SEO and AI discovery?",
        a: "Yes. Semantic structure, metadata, schema, performance and crawlability are part of the build rather than a later add-on.",
      },
      {
        q: "Can we update content ourselves?",
        a: "That's a decision we make together based on how often your content changes and who will maintain it.",
      },
      {
        q: "How long does a website take?",
        a: "It depends on scope, page count and how quickly content and approvals move. We give a realistic range after the diagnosis rather than a headline number upfront.",
      },
    ],
    related: [
      { slug: "geo", label: "Generative Engine Optimization" },
    ],
  },

];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
