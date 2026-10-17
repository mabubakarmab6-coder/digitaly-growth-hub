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
    slug: "web-creation",
    eyebrow: "Website Creation",
    metaTitle: "Website Creation & Design Services | DigitalyMarket",
    metaDescription:
      "Websites built to explain value quickly and convert attention into enquiries — clear structure, fast performance, honest copy and a technical foundation that supports search.",
    h1: "A Website That Explains Your Value and Makes the Next Step Obvious.",
    intro:
      "Most business websites fail quietly. They look acceptable, load slowly, describe the company instead of the customer's problem, and leave the visitor unsure what to do. A website should carry the argument for your business when nobody from your team is in the room.",
    whatItIsHeading: "What the Work Covers",
    whatItIs: [
      "Positioning and message architecture: what to say, in what order, so a stranger understands the value within seconds.",
      "Information architecture: a page and navigation structure that reflects how people actually decide.",
      "Design and build: a clean, modern interface that works properly on the phone most of your visitors use.",
      "Conversion paths: obvious, low-friction next steps for people at different levels of readiness.",
      "Technical foundation: performance, accessibility, semantic structure, metadata and schema so the site is search- and AI-ready from day one.",
      "Content that is truthful — no invented claims, logos or statistics.",
    ],
    signalsHeading: "Signs the Website Is the Constraint",
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
    approachHeading: "How We Approach Websites",
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
    outcomesHeading: "What a Good Website Should Lead To",
    outcomes: [
      "Visitors who understand your value quickly",
      "A clear, obvious next step on every meaningful page",
      "Fast, accessible pages on mobile and desktop",
      "A technical base that supports search and AI discovery",
      "Fewer unqualified enquiries and more relevant conversations",
    ],
    evaluateHeading: "What We'd Evaluate First",
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
        q: "Do you redesign existing websites or build new platforms from scratch?",
        a: "Both. If your existing platform has sound architecture, we can refine the positioning, messaging, and conversion pathways without unnecessary reconstruction. If legacy technical debt or inflexible page builders constrain your growth, we engineer a modern, high-performance platform from the ground up.",
      },
      {
        q: "Will the website be engineered for SEO and AI answer engine discovery?",
        a: "Yes. Semantic HTML structure, schema markup, Core Web Vitals optimization, accessible components, and machine-readable content hierarchies are foundational elements of every build from day one, not afterthought add-ons.",
      },
      {
        q: "Can our internal team easily update content and publish pages?",
        a: "Yes. We configure clean, accessible content structures and workflows so your marketing team can publish updates, case studies, and insights without breaking layouts or relying on ongoing developer intervention.",
      },
      {
        q: "How long does a website creation project typically take?",
        a: "Project timelines depend on sitemap scope, custom interactive components, and content approval cycles. We establish an explicit milestone timeline following the diagnostic phase rather than relying on arbitrary estimates.",
      },
    ],
    related: [
      { slug: "geo", label: "Generative Engine Optimization" },
    ],
  },
  {
    slug: "paid-marketing",
    eyebrow: "Paid Marketing",
    metaTitle: "Paid Marketing Services | Search, Social & Demand Capture | DigitalyMarket",
    metaDescription:
      "Paid marketing built around business outcomes — intent-led targeting, message clarity, landing experiences and measurement that shows what a lead actually costs.",
    h1: "Put Your Offer in Front of the Right People — and Know What It Costs.",
    intro:
      "Paid media is the fastest way to test demand and the fastest way to waste money. It works when targeting, message and destination all point at the same business objective, and when measurement is honest enough to tell you which parts are carrying the result.",
    whatItIsHeading: "What the Work Covers",
    whatItIs: [
      "Objective definition: what a successful outcome is worth to your business before any budget moves.",
      "Channel selection based on where demand already exists — capturing intent before trying to create it.",
      "Audience and keyword structure that separates buyers from browsers instead of blending them into one average.",
      "Creative and messaging built around the buyer's objection, not the brand's adjectives.",
      "Landing experience: the page the click lands on is part of the campaign, not an afterthought.",
      "Measurement: conversion tracking, lead quality feedback and a clear read on cost per real enquiry.",
    ],
    signalsHeading: "Signs Paid Marketing Is the Constraint",
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
    approachHeading: "How We Approach Paid",
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
    outcomesHeading: "What Good Paid Marketing Should Lead To",
    outcomes: [
      "A clear, defensible cost per qualified enquiry",
      "Budget concentrated on the segments that convert",
      "Messaging that matches what the buyer is actually deciding",
      "Landing experiences that don't leak the traffic you paid for",
      "Reporting you can make decisions from without translation",
    ],
    evaluateHeading: "What We'd Evaluate First",
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
        q: "Which advertising platforms are best suited for our business?",
        a: "We remain platform-agnostic and follow proven buyer intent. High-consideration search categories typically start on search networks like Google Ads, whereas visually driven, targeted audience categories often leverage Meta or LinkedIn. The platform decision stems from your buyer's research habits.",
      },
      {
        q: "How do you ensure campaigns attract qualified buyers rather than junk leads?",
        a: "We align campaign targeting tightly with buyer intent, apply negative keyword filtering, and optimize ad messaging around concrete buyer criteria. Furthermore, we ensure the destination landing page pre-qualifies visitors before they initiate an enquiry.",
      },
      {
        q: "Do you optimize landing experiences as part of paid marketing?",
        a: "Yes. An advertising campaign cannot succeed if the destination page creates friction or fails to explain value. We audit and refine landing page messaging, conversion pathways, and tracking triggers to ensure traffic converts effectively.",
      },
      {
        q: "How do you measure campaign performance and progress?",
        a: "We track verified commercial actions: qualified enquiry volume, conversion rate, buyer engagement, and pipeline progression. You receive clean, transparent reporting that attributes performance directly to specific campaigns and audiences.",
      },
    ],
    related: [
      { slug: "web-creation", label: "Website Creation" },
      { slug: "geo", label: "Generative Engine Optimization" },
    ],
  },
  {
    slug: "geo",
    eyebrow: "Generative Engine Optimization",
    metaTitle: "Generative Engine Optimization (GEO) Services | DigitalyMarket",
    metaDescription:
      "GEO services that make your business understandable to search engines and AI answer engines — entity clarity, structured data, topical depth and content people actually cite.",
    h1: "Be Discoverable Where People Now Search — Including AI Answers.",
    intro:
      "People no longer only type keywords into a search box. They ask assistants, compare options inside AI answers and arrive already half-decided. Generative Engine Optimization is the work of making your business clear, credible and quotable enough to be part of those answers — and still rank in classic search.",
    whatItIsHeading: "What GEO Actually Involves",
    whatItIs: [
      "Entity clarity: making it unambiguous who you are, what you do, who you serve and where — across your site, structured data and the places that describe your business.",
      "Topical depth: covering the questions your buyers genuinely ask, in enough detail that your pages are the most useful source on the topic rather than the shortest.",
      "Machine-readable structure: clean headings, semantic HTML, schema markup and internal links so both crawlers and language models can parse the relationships between your pages.",
      "Answer-shaped content: definitions, comparisons, criteria and trade-offs written plainly, so an engine can lift a correct, attributable summary from your page.",
      "Technical foundation: crawlability, indexability, page speed and correct canonicals — the parts that quietly cap everything else.",
    ],
    signalsHeading: "Signs GEO Is the Constraint",
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
    approachHeading: "How We Approach GEO",
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
    outcomesHeading: "What Good GEO Should Lead To",
    outcomes: [
      "A business that is described consistently and correctly wherever it appears",
      "Content that answers buying questions rather than restating your services",
      "Pages that engines can parse, attribute and summarise accurately",
      "Discovery that compounds instead of resetting with each campaign",
      "Enquiries from people who already understand what you do",
    ],
    evaluateHeading: "What We'd Evaluate First",
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
        q: "How does Generative Engine Optimization (GEO) differ from traditional SEO?",
        a: "GEO builds upon core SEO fundamentals—crawlability, structured data, topical depth—and expands them for AI answer engines. It optimizes your entity clarity, data schema, and content formatting so large language models can parse, attribute, and cite your business when answering buyer queries.",
      },
      {
        q: "How quickly do GEO optimizations begin to take effect?",
        a: "Technical and structural improvements are indexed quickly by web crawlers. Establishing topical authority and consistent brand citation across generative answer engines compounds over several months as language models refresh their training datasets and real-time search retrievals.",
      },
      {
        q: "Can you guarantee that our business will be cited in AI answers?",
        a: "No credible firm guarantees inclusion in AI answers because LLMs and answer engines evolve continuously without public ranking rules. What we do is eliminate entity ambiguity, build citable data structures, and establish authoritative topical coverage so your brand is the most credible source available.",
      },
      {
        q: "Do we need to publish high volumes of blog content for GEO?",
        a: "Depth and structure matter far more than raw volume. A focused architecture of comprehensive, answer-shaped pages that address genuine buyer decisions will consistently outperform an unfocused library of thin blog posts.",
      },
    ],
    related: [
      { slug: "web-creation", label: "Website Creation" },
      { slug: "paid-marketing", label: "Paid Marketing" },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
