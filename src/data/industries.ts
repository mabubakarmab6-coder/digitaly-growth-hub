import manufacturingHero from "@/assets/hero-manufacturing.jpg";
import professionalHero from "@/assets/hero-professional.jpg";
import localHero from "@/assets/hero-local.jpg";
import ecommerceHero from "@/assets/hero-ecommerce.jpg";
import manufacturingCard from "@/assets/industry-manufacturing.jpg";
import professionalCard from "@/assets/industry-professional.jpg";
import localCard from "@/assets/industry-local.jpg";
import ecommerceCard from "@/assets/industry-ecommerce.jpg";

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  hubCopy: string;
  hubCta: string;
  cardImage: string;
  cardAlt: string;
  heroImage: string;
  heroAlt: string;
  h1Lead: string;
  h1Accent: string;
  heroCopy: string;
  metaTitle: string;
  metaDescription: string;
  context: { heading: string; paragraphs: string[]; notes: { label: string; text: string }[] };
  gap: { heading: string; intro: string; have: string[]; need: string[] };
  stuck: { heading: string; intro: string; items: string[] };
  challenges: { title: string; why: string }[];
  bridges: { challenge: string; opportunity: string; area: string }[];
  insights: { eyebrow: string; title: string; body: string[] }[];
  framework: { heading: string; intro: string; steps: { label: string; desc: string }[] };
  evaluate: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing-b2b",
    name: "Manufacturing & B2B",
    shortName: "Manufacturing & B2B",
    eyebrow: "Industry — Manufacturing & B2B",
    hubCopy:
      "Build stronger digital visibility, communicate your capabilities clearly, and create better paths to qualified business enquiries.",
    hubCta: "Explore Manufacturing & B2B",
    cardImage: manufacturingCard,
    cardAlt: "Modern manufacturing floor with precision machinery under natural light",
    heroImage: manufacturingHero,
    heroAlt: "Precision machined components on a workbench inside a modern manufacturing facility",
    h1Lead: "Digital growth for manufacturers and",
    h1Accent: "B2B companies.",
    heroCopy:
      "Your capability is real. The question is whether the people evaluating suppliers can find it, understand it and trust it before they ever contact you.",
    metaTitle: "Digital Marketing for Manufacturers & B2B Companies | DigitalyMarket",
    metaDescription:
      "Digital growth for manufacturers, suppliers and B2B companies — stronger visibility, clearer capability communication and better qualified enquiries. Start with a conversation.",
    context: {
      heading: "How digital growth works in a B2B business",
      paragraphs: [
        "Manufacturing and B2B buying rarely happens in a single session. A specification is written, options are researched quietly, a shortlist forms, and only then does an enquiry arrive. Much of that journey happens without you in the room.",
        "That means digital is not a replacement for your sales team — it is what your sales team walks into. When a buyer, engineer or procurement lead arrives at a conversation already convinced you are credible, the entire cycle behaves differently.",
      ],
      notes: [
        {
          label: "Research happens first",
          text: "Capability is often judged before contact, from whatever is publicly available.",
        },
        {
          label: "Multiple people decide",
          text: "Technical, commercial and management perspectives each look for different proof.",
        },
        {
          label: "Cycles vary widely",
          text: "A repeat component order and a new tooling programme are not the same journey.",
        },
      ],
    },
    gap: {
      heading: "Your business has evolved. Has your digital presence kept up?",
      intro:
        "Most manufacturers we speak to have built genuine capability over years. The digital layer around that capability is often the part that stayed still.",
      have: [
        "Proven production capability",
        "Technical expertise and know-how",
        "Existing customers and repeat business",
        "A reputation inside your network",
        "A sales team that closes well in person",
      ],
      need: [
        "Visibility with buyers outside your network",
        "Capability that is understandable at a glance",
        "Credibility that survives quiet research",
        "Enquiries from better-fit prospects",
        "A website that carries the sales conversation",
      ],
    },
    stuck: {
      heading: "Where manufacturing and B2B businesses get stuck",
      intro:
        "Not every business has every one of these. Depending on your market and stage, some may sound familiar.",
      items: [
        "Growth depends heavily on referrals, exhibitions and existing relationships.",
        "The website reads as a brochure rather than a working part of the sales process.",
        "Technical strength is obvious internally but hard to grasp from the outside.",
        "Enquiries arrive, but many are the wrong size, sector or scope.",
        "Competitors with weaker capability appear stronger online.",
      ],
    },
    challenges: [
      {
        title: "Invisible during research",
        why: "If you are not present while a buyer is quietly shortlisting, you are competing for a place you never had.",
      },
      {
        title: "Capability that is hard to interpret",
        why: "Machine lists and certifications answer 'what you own', not 'can you solve my problem'.",
      },
      {
        title: "Unqualified enquiries",
        why: "Sales time spent filtering poor-fit leads is time not spent on the ones worth winning.",
      },
      {
        title: "Long, multi-person cycles",
        why: "Different stakeholders need different reassurance, and one page rarely serves all of them.",
      },
      {
        title: "No supporting proof",
        why: "Buyers look for evidence of similar work; without it, decisions default to the safer known name.",
      },
      {
        title: "Digital treated as marketing only",
        why: "When digital is disconnected from sales, it produces activity instead of enquiries.",
      },
    ],
    bridges: [
      {
        challenge: "Potential customers struggle to understand your capabilities.",
        opportunity:
          "Make capability, tolerances, processes and applications easier to discover and interpret.",
        area: "Digital presence, website structure and content strategy",
      },
      {
        challenge: "Enquiries come from the wrong kind of buyer.",
        opportunity:
          "Frame who you serve best so the right prospects self-identify earlier in the journey.",
        area: "Positioning, messaging and acquisition strategy",
      },
      {
        challenge: "You are absent from how buyers research today.",
        opportunity:
          "Be findable in search and in AI-assisted discovery when a solution is being scoped.",
        area: "Visibility and discovery strategy",
      },
    ],
    insights: [
      {
        eyebrow: "Strategic insight",
        title: "Buyers do not shortlist suppliers. They shortlist certainty.",
        body: [
          "In most B2B decisions, someone has to defend the choice internally. That person is not looking for the most impressive supplier — they are looking for the one they can justify.",
          "Which is why capability alone rarely wins the shortlist. What wins is clarity: what you do, who you do it for, what problems you routinely solve, and what happens next. When those answers are easy to find, you reduce the perceived risk of choosing you.",
        ],
      },
      {
        eyebrow: "Strategic insight",
        title: "A capability page is a sales asset, not a specification sheet.",
        body: [
          "Most manufacturing websites are organised around internal structure: machines, departments, certifications. Buyers arrive organised around their problem instead.",
          "Reorganising the same information around applications and outcomes often changes enquiry quality before anything is spent on advertising.",
        ],
      },
    ],
    framework: {
      heading: "How a B2B buyer actually moves",
      intro:
        "A useful frame for where your digital presence may be losing momentum. Every business sits differently on it.",
      steps: [
        { label: "Problem", desc: "A requirement or constraint appears internally." },
        { label: "Research", desc: "Options are explored quietly, often without contact." },
        { label: "Shortlist", desc: "A handful of credible suppliers survive the filter." },
        { label: "Enquiry", desc: "Contact is made, usually late and well informed." },
        { label: "Relationship", desc: "Trust is confirmed and repeat business follows." },
      ],
    },
    evaluate: [
      {
        title: "Current digital visibility",
        desc: "Where you appear when someone researches your capability, and where you do not.",
      },
      {
        title: "Capability communication",
        desc: "How clearly your processes, applications and standards read to an outsider.",
      },
      {
        title: "Enquiry quality",
        desc: "What kinds of enquiries arrive today and which ones you actually want more of.",
      },
      {
        title: "Buyer journey",
        desc: "Who is involved in a typical decision and what each person needs to see.",
      },
      {
        title: "Competitive landscape",
        desc: "How comparable suppliers present themselves and where the gaps sit.",
      },
      {
        title: "Existing digital assets",
        desc: "Technical documentation, product data and imagery already available internally.",
      },
    ],
    faqs: [
      {
        q: "Do you only work with large manufacturers?",
        a: "No. We work with small and mid-sized manufacturers as well as larger B2B companies, and we scale the work to your stage.",
      },
      {
        q: "Our sales cycle is long. Does digital still matter?",
        a: "Often more, not less. Long cycles mean more research happens before contact, so what a buyer finds during that research directly affects the shortlist.",
      },
      {
        q: "Do I need to know which service I need before contacting you?",
        a: "No. Most conversations start with a business situation, not a service. We work out the right path together.",
      },
      {
        q: "Can you work with technical or niche products?",
        a: "Yes. We start by learning the product and the buyer before writing a word of public-facing content.",
      },
      {
        q: "Can you work with businesses outside India?",
        a: "Yes. DigitalyMarket is global-first and works remotely across time zones, with India as a secondary focus market.",
      },
      {
        q: "How do you decide what solution is right?",
        a: "We understand the business, diagnose the real constraint, then recommend only what we believe will move it.",
      },
    ],
    related: ["professional-services", "ecommerce"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    shortName: "Professional Services",
    eyebrow: "Industry — Professional Services",
    hubCopy: "Turn expertise into visibility, credibility and meaningful enquiries.",
    hubCta: "Explore Professional Services",
    cardImage: professionalCard,
    cardAlt: "Calm professional services office with a consultation table and documents",
    heroImage: professionalHero,
    heroAlt: "Two professionals in a focused consultation across a table with documents",
    h1Lead: "Digital growth for firms that sell",
    h1Accent: "expertise.",
    heroCopy:
      "Your clients are buying judgement they cannot inspect in advance. Digital's job is to make that judgement visible, credible and easy to act on.",
    metaTitle: "Digital Marketing for Professional Services Firms | DigitalyMarket",
    metaDescription:
      "Digital growth for consultants, accounting firms and specialist practices — make expertise visible, build credibility and generate meaningful enquiries.",
    context: {
      heading: "How digital growth works in a professional practice",
      paragraphs: [
        "Professional services are bought on confidence. The client cannot test the outcome before committing, so they look for signals: clarity of thinking, relevance of experience, and how well you understand a situation like theirs.",
        "That makes your digital presence less about promotion and more about demonstration. The firms that grow well online are usually the ones that show how they think, not the ones that describe how good they are.",
      ],
      notes: [
        {
          label: "Trust precedes enquiry",
          text: "Most people decide whether to contact you before they ever speak to you.",
        },
        {
          label: "Specificity converts",
          text: "A clearly defined client and problem beats a broad service list.",
        },
        {
          label: "Referrals still matter",
          text: "Digital usually validates a referral rather than replacing it.",
        },
      ],
    },
    gap: {
      heading: "Your expertise has deepened. Has your visibility followed?",
      intro:
        "Most established practices already hold the substance. What is often missing is the public surface that lets someone new recognise it.",
      have: [
        "Deep specialist expertise",
        "A record of solving real client problems",
        "Strong relationships and referrals",
        "Professional credibility in your circle",
        "Clear internal service definitions",
      ],
      need: [
        "Discoverability beyond your existing network",
        "Evidence of thinking that a stranger can read",
        "A site that explains fit, not just services",
        "Enquiries from clients you want to serve",
        "A simple, low-friction way to start a conversation",
      ],
    },
    stuck: {
      heading: "Where professional practices get stuck",
      intro: "Depending on your firm's size and specialism, some of these may apply more than others.",
      items: [
        "Growth is almost entirely referral-dependent and hard to forecast.",
        "The website describes services but never demonstrates thinking.",
        "The firm feels interchangeable with others in the same category.",
        "Enquiries arrive from people who cannot afford or do not fit the practice.",
        "Content gets published occasionally, without a clear purpose.",
      ],
    },
    challenges: [
      {
        title: "Expertise that stays private",
        why: "If your thinking never becomes public, prospects have nothing to evaluate you on except price.",
      },
      {
        title: "Generic service descriptions",
        why: "Category language makes qualified buyers work harder to see whether you fit their situation.",
      },
      {
        title: "Referral concentration",
        why: "A pipeline built on relationships is fragile when those relationships change.",
      },
      {
        title: "Unclear ideal client",
        why: "When everyone is a potential client, nobody feels the message was written for them.",
      },
      {
        title: "High-friction contact",
        why: "A vague contact form asks for commitment before confidence has been earned.",
      },
      {
        title: "Inconsistent publishing",
        why: "Sporadic content signals effort, not authority, and rarely compounds.",
      },
    ],
    bridges: [
      {
        challenge: "Prospects cannot judge your expertise before meeting you.",
        opportunity: "Make your thinking visible in a form that can be read, shared and trusted.",
        area: "Content strategy, website experience and discovery",
      },
      {
        challenge: "The firm reads like every other firm in the category.",
        opportunity:
          "Sharpen positioning so the right client recognises themselves within seconds.",
        area: "Positioning, messaging and website experience",
      },
      {
        challenge: "Good-fit clients never find you.",
        opportunity: "Be present where your specialism is searched for and referenced.",
        area: "Visibility, search and AI-assisted discovery",
      },
    ],
    insights: [
      {
        eyebrow: "Strategic insight",
        title: "Authority is not claimed. It is inferred.",
        body: [
          "Nobody believes a firm because it calls itself a leading practice. They believe it because something they read made a complicated thing simpler.",
          "This is why a single genuinely useful explanation of a problem your clients face will usually outperform a page of credentials. It gives the reader an experience of your judgement instead of a description of it.",
        ],
      },
      {
        eyebrow: "Strategic insight",
        title: "Narrowing the message rarely narrows the pipeline.",
        body: [
          "Most practices resist specificity because it feels like turning work away. In practice the opposite tends to happen: a clearly defined focus makes referrals easier to give and makes you easier to remember.",
          "The service range does not have to shrink. The message just has to lead with the client you serve best.",
        ],
      },
    ],
    framework: {
      heading: "How a client arrives at a professional firm",
      intro: "A simple way to locate where confidence is being lost.",
      steps: [
        { label: "Trigger", desc: "A problem becomes urgent enough to act on." },
        { label: "Discovery", desc: "A referral, a search or a piece of content." },
        { label: "Evaluation", desc: "Fit, specialism and credibility are assessed quietly." },
        { label: "Confidence", desc: "Enough certainty forms to make contact." },
        { label: "Engagement", desc: "The relationship begins and expands over time." },
      ],
    },
    evaluate: [
      {
        title: "Positioning clarity",
        desc: "Who you serve best, and whether that is obvious within seconds of arriving.",
      },
      {
        title: "Visibility for your specialism",
        desc: "Whether you appear when your specific problem area is researched.",
      },
      {
        title: "Website experience",
        desc: "How well the site explains fit, process and what happens after contact.",
      },
      {
        title: "Existing expertise assets",
        desc: "Talks, notes, frameworks and answers you already give clients repeatedly.",
      },
      {
        title: "Enquiry sources",
        desc: "Where current clients actually come from, and how repeatable that is.",
      },
      {
        title: "Conversion points",
        desc: "How easy it is to take the next step, and how much commitment it asks for.",
      },
    ],
    faqs: [
      {
        q: "Can a small practice work with DigitalyMarket?",
        a: "Yes. Small and independent practices are a good fit, and the scope is built around your stage and budget.",
      },
      {
        q: "We rely on referrals. Do we need digital at all?",
        a: "Referrals are usually verified online before contact. Digital's first job is to confirm the referral rather than replace it.",
      },
      {
        q: "Do you write content for regulated professions?",
        a: "We can, with your review. Accuracy and compliance stay with your team, and nothing is published without your approval.",
      },
      {
        q: "Do I need to know which service I need before contacting you?",
        a: "No. Tell us the situation and we will work out the right path with you.",
      },
      {
        q: "Do you offer custom solutions?",
        a: "Every engagement is shaped around your practice, market and current presence. There is no fixed package list.",
      },
      {
        q: "Can you work with firms outside India?",
        a: "Yes. We are global-first and work remotely across time zones.",
      },
    ],
    related: ["manufacturing-b2b", "local-business"],
  },
  {
    slug: "local-business",
    name: "Local & Service Businesses",
    shortName: "Local & Service",
    eyebrow: "Industry — Local & Service Businesses",
    hubCopy:
      "Help the right customers discover your business, understand your value and take action.",
    hubCta: "Explore Local & Service Businesses",
    cardImage: localCard,
    cardAlt: "Warm local service business interior with a welcoming front counter",
    heroImage: localHero,
    heroAlt: "A friendly staff member welcoming a customer at a modern service business counter",
    h1Lead: "Digital growth for local and",
    h1Accent: "service businesses.",
    heroCopy:
      "Most local decisions are made quickly, on a phone, between two or three options. The goal is simple: be one of them, and be the easiest to act on.",
    metaTitle: "Digital Marketing for Local & Service Businesses | DigitalyMarket",
    metaDescription:
      "Digital growth for gyms, salons, clinics and local service providers — be discovered by nearby customers, build trust and make it easy to book or call.",
    context: {
      heading: "How digital growth works for a local business",
      paragraphs: [
        "Local buying decisions are fast and comparative. Someone searches, glances at a few options, forms an impression in seconds and acts. There is very little time to persuade.",
        "That compresses everything into three practical questions: can they find you, do they trust you quickly, and is taking the next step effortless. Most local growth problems live in one of those three places.",
      ],
      notes: [
        {
          label: "Mobile is the default",
          text: "Almost every local decision starts and often ends on a phone.",
        },
        {
          label: "Proximity is not enough",
          text: "Being nearby only helps if you appear at the moment of searching.",
        },
        {
          label: "Small friction costs a lot",
          text: "An unclear price, an unanswered question or a slow page ends the visit.",
        },
      ],
    },
    gap: {
      heading: "Your service is good. Is it easy to find and easy to choose?",
      intro:
        "Local businesses usually deliver well in person. The gap tends to sit in the few minutes before a customer ever walks in.",
      have: [
        "A service customers genuinely like",
        "Regulars who return and recommend",
        "Local reputation built over time",
        "Staff who convert well face to face",
        "Clear pricing understood internally",
      ],
      need: [
        "Visibility at the moment of searching",
        "Trust established before the first visit",
        "Clear answers to practical questions",
        "A frictionless way to call, book or message",
        "A reason to choose you over the nearby option",
      ],
    },
    stuck: {
      heading: "Where local and service businesses get stuck",
      intro: "You may recognise a few of these; not every business faces all of them.",
      items: [
        "Customers nearby simply do not know the business exists.",
        "Listings and information are inconsistent across places people look.",
        "The website looks fine but does not answer practical questions.",
        "Enquiries come in but are slow to be answered or followed up.",
        "Busy and quiet periods swing hard, with no way to influence them.",
      ],
    },
    challenges: [
      {
        title: "Low discovery at the right moment",
        why: "Local intent is short-lived; if you are not visible when it happens, it goes elsewhere.",
      },
      {
        title: "Weak first impression",
        why: "People judge a local business in seconds from photos, clarity and tone.",
      },
      {
        title: "Unanswered practical questions",
        why: "Price ranges, timings, location and process are often the real decision points.",
      },
      {
        title: "Hard-to-take action",
        why: "Every extra tap between interest and booking loses a share of customers.",
      },
      {
        title: "Inconsistent follow-up",
        why: "An enquiry that waits hours has usually already been served by someone else.",
      },
      {
        title: "No repeat mechanism",
        why: "Local growth compounds through returning customers, not only new ones.",
      },
    ],
    bridges: [
      {
        challenge: "Nearby customers do not know you exist.",
        opportunity: "Be present and consistent wherever local discovery happens.",
        area: "Local visibility and discovery strategy",
      },
      {
        challenge: "People visit the site but do not act.",
        opportunity: "Answer the practical questions and make the next step one tap away.",
        area: "Website experience and conversion",
      },
      {
        challenge: "Demand is unpredictable week to week.",
        opportunity: "Create a steadier flow of enquiries you can plan staffing around.",
        area: "Acquisition and paid channels",
      },
    ],
    insights: [
      {
        eyebrow: "Strategic insight",
        title: "Most local businesses do not have a traffic problem.",
        body: [
          "When we look at a struggling local business, the issue is rarely that nobody visited. It is that the people who visited could not quickly answer their own questions.",
          "Fixing clarity — what you do, what it costs roughly, where you are, how to start — usually produces more enquiries than adding a new channel on top of the same confusion.",
        ],
      },
      {
        eyebrow: "Strategic insight",
        title: "Speed of response is a marketing channel.",
        body: [
          "For local services, the business that replies first frequently wins, regardless of who ranked higher.",
          "That makes response handling part of the growth system rather than an operational detail — and it is often the cheapest improvement available.",
        ],
      },
    ],
    framework: {
      heading: "The local customer journey",
      intro: "Short, fast and easy to lose. Each stage is a place to win or drop the customer.",
      steps: [
        { label: "Need", desc: "Something needs doing, usually soon." },
        { label: "Search", desc: "A quick look at nearby options, mostly on mobile." },
        { label: "Judge", desc: "Photos, clarity and reputation form an instant impression." },
        { label: "Act", desc: "A call, a message or a booking — if it is easy." },
        { label: "Return", desc: "A good experience turns into repeat and referral." },
      ],
    },
    evaluate: [
      {
        title: "Local discovery presence",
        desc: "Whether you show up consistently where nearby customers are looking.",
      },
      {
        title: "Mobile experience",
        desc: "How the site behaves on a phone, at speed, on a weak connection.",
      },
      {
        title: "Customer questions",
        desc: "The practical things people ask before booking, and whether they are answered.",
      },
      {
        title: "Conversion points",
        desc: "How many taps stand between interest and a call, message or booking.",
      },
      {
        title: "Enquiry handling",
        desc: "How fast enquiries are answered and what happens if nobody picks up.",
      },
      {
        title: "Repeat and reputation",
        desc: "What currently brings customers back and how reviews are being handled.",
      },
    ],
    faqs: [
      {
        q: "Do you only work with large businesses?",
        a: "No. Small local businesses are a genuine fit, and we scale the work to your budget and stage.",
      },
      {
        q: "We only serve one city. Is that too small?",
        a: "Not at all. A single-location business often has the clearest, fastest wins available.",
      },
      {
        q: "Do I need a new website?",
        a: "Sometimes, often not. Many local businesses get further by fixing clarity and conversion on what already exists.",
      },
      {
        q: "Do I need to know which service I need before contacting you?",
        a: "No. Describe what is happening in the business and we will start there.",
      },
      {
        q: "Can you help with paid ads for a small budget?",
        a: "We will tell you honestly whether a budget is workable before suggesting it. If it is not, we will suggest something else.",
      },
      {
        q: "Can you work with businesses outside India?",
        a: "Yes. We work remotely with local businesses in other markets too.",
      },
    ],
    related: ["professional-services", "ecommerce"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    shortName: "E-commerce",
    eyebrow: "Industry — E-commerce",
    hubCopy:
      "Build stronger digital commerce experiences across discovery, acquisition and conversion.",
    hubCta: "Explore E-commerce",
    cardImage: ecommerceCard,
    cardAlt: "Minimal branded e-commerce packaging and products arranged in daylight",
    heroImage: ecommerceHero,
    heroAlt: "Minimal branded product packaging beside a phone showing a clean product page",
    h1Lead: "Digital growth for",
    h1Accent: "e-commerce brands.",
    heroCopy:
      "Traffic is rarely the whole story. Growth usually comes from how products are discovered, how they are presented, and what happens after the first order.",
    metaTitle: "E-commerce Growth & Digital Marketing Agency | DigitalyMarket",
    metaDescription:
      "E-commerce growth across product discovery, acquisition, store experience, conversion and retention — built around your catalogue, margins and goals.",
    context: {
      heading: "How digital growth works in e-commerce",
      paragraphs: [
        "E-commerce is unusually measurable, which makes it easy to optimise the wrong thing. Spend rises, sessions rise, and profitability quietly does not.",
        "The useful view is the whole system: how products get discovered, how well the store converts the attention it already receives, and how much a customer is worth beyond their first purchase. Changing one without the others rarely holds.",
      ],
      notes: [
        {
          label: "Discovery is fragmenting",
          text: "Products are found through search, social, marketplaces and AI-assisted answers.",
        },
        {
          label: "Margin decides strategy",
          text: "What is viable at 20% margin is very different from 60%.",
        },
        {
          label: "Retention changes the maths",
          text: "Repeat purchase rate determines how much you can afford to acquire.",
        },
      ],
    },
    gap: {
      heading: "Your catalogue has grown. Has your commerce experience kept up?",
      intro:
        "Most stores start simple and accumulate. What worked at fifty orders a month often quietly caps growth later.",
      have: [
        "Products people genuinely want",
        "An existing store and order flow",
        "Some customer base and reviews",
        "Operational and fulfilment capability",
        "Data on what already sells",
      ],
      need: [
        "Discovery beyond one dependent channel",
        "Product pages that answer real hesitation",
        "Acquisition that stays profitable at scale",
        "A conversion path with less leakage",
        "Reasons and mechanisms for repeat purchase",
      ],
    },
    stuck: {
      heading: "Where e-commerce brands get stuck",
      intro: "Depending on your category and stage, some of these will matter more than others.",
      items: [
        "Ad costs rise and profitability falls as spend increases.",
        "Almost all revenue depends on a single channel.",
        "Traffic looks healthy but conversion sits below expectation.",
        "Product pages do not answer the questions that stop a purchase.",
        "First orders happen, second orders rarely do.",
      ],
    },
    challenges: [
      {
        title: "Single-channel dependence",
        why: "When one platform's costs or rules change, the whole business feels it immediately.",
      },
      {
        title: "Weak product discovery",
        why: "If products are not findable in the ways people search, paid spend carries everything.",
      },
      {
        title: "Product pages that under-sell",
        why: "Unanswered doubts about fit, quality, delivery or returns end a session silently.",
      },
      {
        title: "Conversion leakage",
        why: "Small friction across the path compounds into a meaningful share of lost revenue.",
      },
      {
        title: "Acquisition cost pressure",
        why: "Rising costs are survivable with repeat purchase and unsustainable without it.",
      },
      {
        title: "No retention system",
        why: "Every month restarting from zero customers is the most expensive way to grow.",
      },
    ],
    bridges: [
      {
        challenge: "Products are hard to discover outside paid channels.",
        opportunity: "Broaden how and where products can be found before purchase intent forms.",
        area: "Visibility, search and AI-assisted discovery",
      },
      {
        challenge: "Visitors browse but do not buy.",
        opportunity:
          "Remove hesitation with better product presentation and a cleaner path to checkout.",
        area: "Store experience and conversion",
      },
      {
        challenge: "Growth stops being profitable as spend rises.",
        opportunity: "Improve what a customer is worth so acquisition has more room to work.",
        area: "Acquisition strategy and retention",
      },
    ],
    insights: [
      {
        eyebrow: "Strategic insight",
        title: "Most stores scale spend before they fix economics.",
        body: [
          "Doubling the budget on a store that converts poorly doubles the cost of the same problem. The order matters: conversion and customer value first, scale second.",
          "This is unglamorous work — product pages, objections, delivery clarity, post-purchase flow — but it is what makes paid acquisition survivable at a larger number.",
        ],
      },
      {
        eyebrow: "Strategic insight",
        title: "Product discovery is no longer one search box.",
        body: [
          "Customers now find products through conventional search, social feeds, marketplaces and increasingly through AI-assisted answers that summarise options for them.",
          "That shifts some weight from ranking a page to being clearly described, structured and referenced well enough that systems can represent your products accurately.",
        ],
      },
    ],
    framework: {
      heading: "The commerce growth loop",
      intro: "Growth compounds when each stage feeds the next rather than being optimised alone.",
      steps: [
        { label: "Discover", desc: "The product is found by someone who could want it." },
        { label: "Consider", desc: "Presentation answers doubts about fit and value." },
        { label: "Convert", desc: "The path to purchase stays simple and trustworthy." },
        { label: "Retain", desc: "The first order becomes a second and a third." },
        { label: "Scale", desc: "Better economics allow acquisition to expand profitably." },
      ],
    },
    evaluate: [
      {
        title: "Channel mix",
        desc: "Where revenue comes from today and how concentrated that dependence is.",
      },
      {
        title: "Store experience",
        desc: "How the catalogue, navigation and product pages perform against real intent.",
      },
      {
        title: "Conversion path",
        desc: "Where sessions drop between landing, cart and completed order.",
      },
      {
        title: "Product presentation",
        desc: "Imagery, descriptions and structured data that shape both people and systems.",
      },
      {
        title: "Unit economics",
        desc: "Margin, acquisition cost and repeat rate — what the business can actually afford.",
      },
      {
        title: "Retention potential",
        desc: "Whether the category supports repeat purchase and what currently drives it.",
      },
    ],
    faqs: [
      {
        q: "Do you work with small stores?",
        a: "Yes. Early-stage stores are a fit, though we will be honest if paid spend is not yet the right lever.",
      },
      {
        q: "Which platforms do you work with?",
        a: "We work across common commerce platforms and focus on the growth system rather than a single technology.",
      },
      {
        q: "Do you sell traffic packages?",
        a: "No. Traffic without conversion and retention rarely produces profitable growth, so we look at the whole loop.",
      },
      {
        q: "Do I need to know which service I need before contacting you?",
        a: "No. Share your store, your numbers if you are comfortable, and what feels stuck.",
      },
      {
        q: "Can you work with brands outside India?",
        a: "Yes. We work with e-commerce brands globally and remotely.",
      },
      {
        q: "Do you offer monthly retainers?",
        a: "Yes. E-commerce growth compounds, so ongoing work usually runs as a monthly retainer.",
      },
    ],
    related: ["local-business", "manufacturing-b2b"],
  },
];

export const industryBySlug = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry]),
) as Record<string, Industry>;
