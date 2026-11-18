import { useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Globe2,
  Megaphone,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { INQUIRY_PATH } from "@/components/site/constants";
import { workProjects } from "@/data/work";
import { DymShell, dymServices } from "./DymShell";
import "./dym-services-landing.css";

const diagnostics = [
  {
    goal: "More enquiries",
    metrics: [
      ["1,200", "Website visits"],
      ["24", "Enquiries"],
      ["2.0%", "Enquiry rate"],
    ],
    question: "Where do potential buyers drop off?",
    check:
      "Compare form starts with completed enquiries before spending more to bring visitors in.",
    href: "/services/web-creation",
  },
  {
    goal: "More online sales",
    metrics: [
      ["4,000", "Product views"],
      ["120", "Orders"],
      ["3.0%", "Order rate"],
    ],
    question: "Are the right products getting enough visibility?",
    check:
      "Compare listing conversion and margin by product before increasing marketplace ad spend.",
    href: "/services/ecommerce-marketplace-growth",
  },
  {
    goal: "Clearer reporting",
    metrics: [
      ["40", "GA4 enquiries"],
      ["32", "CRM enquiries"],
      ["8", "Count difference"],
    ],
    question: "Why do analytics and sales records disagree?",
    check:
      "Reconcile event counts with CRM records and check for duplicate events or missing records.",
    href: "/services/analytics-cro",
  },
] as const;

const detailByService = {
  "/services/web-creation": {
    icon: Globe2,
    summary:
      "Turn more visits into enquiries or sales with a clearer website, storefront or checkout.",
    scope: "UX, information architecture, mobile conversion paths",
    measurement: "Website enquiry rate or checkout completion rate",
  },
  "/services/ecommerce-marketplace-growth": {
    icon: ShoppingBag,
    summary: "Help customers find, evaluate and buy your products on marketplaces.",
    scope: "Catalogue optimisation, listing content, sponsored listings",
    measurement: "Listing conversion rate and advertising cost of sales (ACoS)",
  },
  "/services/paid-marketing": {
    icon: Megaphone,
    summary: "Find which campaigns bring in sales or enquiries your team can actually use.",
    scope: "Google Ads, Meta Ads, campaign structure, creative testing",
    measurement: "Cost per qualified lead or customer acquisition cost (CAC)",
  },
  "/services/seo": {
    icon: Search,
    summary:
      "Make it easier for customers to find your business when they search for what you sell.",
    scope: "Crawlability, indexing, search intent, local SEO",
    measurement: "Organic enquiries and non-brand search clicks",
  },
  "/services/GEO": {
    icon: Sparkles,
    summary: "Make your business easier to understand and reference in AI-generated answers.",
    scope: "Entity clarity, source consistency, citation-ready content",
    measurement: "Brand mentions and cited sources across a defined query sample",
  },
  "/services/analytics-cro": {
    icon: ChartNoAxesCombined,
    summary: "Find where customers drop off and make decisions with more reliable data.",
    scope: "GA4, Google Tag Manager, event validation, funnel analysis",
    measurement: "Verified enquiry or purchase events and step-by-step drop-off",
  },
} satisfies Record<
  (typeof dymServices)[number][2],
  {
    icon: typeof Globe2;
    summary: string;
    scope: string;
    measurement: string;
  }
>;

const projectDetails = {
  "gemstone-gallery": {
    status: "Independent portfolio project",
    detail:
      "Designed a 3-page B2B website that helps wholesale buyers assess manufacturing capabilities and request a quote.",
  },
  SensyTalk: {
    status: "Deployed preview · Production rollout pending",
    detail:
      "Redesigned the B2B messaging website and built an interactive ROI calculator for buyers evaluating the product.",
  },
} as const;

const projects = workProjects.flatMap((project) => {
  const detail = projectDetails[project.slug as keyof typeof projectDetails];
  return detail ? [{ ...project, ...detail }] : [];
});

const approach = [
  [
    "Diagnose",
    "Identify the constraint",
    "Review the buyer journey, available data and business objective.",
  ],
  [
    "Prioritise",
    "Agree on the work",
    "Define deliverables, responsibilities, cost drivers and the measure of success.",
  ],
  [
    "Execute & measure",
    "Build, check and improve",
    "Deliver the agreed scope and review what the data supports doing next.",
  ],
] as const;

const faqs = [
  [
    "Do I need to know which service I need?",
    "No. Describe what you want to improve and choose ‘Not sure yet’ in the enquiry form. We can start from the business problem.",
  ],
  [
    "What happens after I send an enquiry?",
    "We review what you share and get in touch to clarify the objective and discuss fit. If there is a fit, we agree the scope, cost and timing before work begins.",
  ],
  [
    "What determines the cost and timeline?",
    "The starting point, the deliverables and the work your team can handle all affect the quote. For paid campaigns, campaign management and ad spend are separate considerations.",
  ],
] as const;

function EnquiryLink({ className = "dm-btn dm-btn-primary" }: { className?: string }) {
  return (
    <a href={INQUIRY_PATH} className={className}>
      Send an enquiry <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

function GrowthDiagnostic() {
  const [example, setExample] = useState<(typeof diagnostics)[number]>(diagnostics[0]);

  return (
    <section className="dms-diagnostic" aria-labelledby="growth-diagnostic">
      <div className="dms-panel-head">
        <Activity size={20} aria-hidden="true" />
        <h2 id="growth-diagnostic">How we diagnose growth</h2>
      </div>
      <div className="dms-goals" role="group" aria-label="Choose a business goal">
        {diagnostics.map((item) => (
          <button
            type="button"
            key={item.goal}
            aria-pressed={example === item}
            aria-controls="dms-example"
            onClick={() => setExample(item)}
          >
            {item.goal}
          </button>
        ))}
      </div>
      <div id="dms-example" aria-live="polite">
        <p className="dms-example-label">Illustrative data</p>
        <dl className="dms-metrics">
          {example.metrics.map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="dms-insight">
          <h3>{example.question}</h3>
          <p>{example.check}</p>
          <a href={example.href}>
            Explore the related service <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function DymServicesLanding() {
  return (
    <DymShell showFloatingCta={false}>
      <div className="dms-landing">
        <section className="dms-hero" aria-labelledby="services-title">
          <div className="dm-container dms-wrap">
            <div className="dm-breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Services</span>
            </div>
            <div className="dms-hero-grid">
              <div className="dms-hero-copy">
                <span className="dm-eyebrow">Founder-led digital growth consultancy</span>
                <h1 id="services-title">
                  Fix what’s holding <span>your growth back.</span>
                </h1>
                <p>
                  We help e-commerce brands, manufacturers and local businesses find where they’re
                  losing sales or enquiries, then build and measure the changes that address it.
                </p>
                <div className="dm-cta-row">
                  <EnquiryLink />
                  <a href="#capabilities" className="dm-btn dm-btn-outline">
                    Explore services <ArrowDown size={16} aria-hidden="true" />
                  </a>
                </div>
                <p className="dms-hero-note">
                  <Check size={16} aria-hidden="true" /> Tell us the problem in your own words.
                </p>
              </div>
              <GrowthDiagnostic />
            </div>
          </div>
        </section>

        <section id="capabilities" className="dms-section" aria-labelledby="capabilities-title">
          <div className="dm-container dms-wrap">
            <div className="dms-section-head">
              <div>
                <span className="dm-eyebrow">Capabilities</span>
                <h2 id="capabilities-title">Six ways we can help.</h2>
              </div>
              <p>
                See what each service can cover and which numbers help judge whether the work is
                moving you toward your goal.
              </p>
            </div>
            <div className="dms-services-grid">
              {dymServices.map(([, title, href]) => {
                const { icon: Icon, summary, scope, measurement } = detailByService[href];
                return (
                  <article className="dms-service" key={href}>
                    <span className="dms-service-icon">
                      <Icon size={23} aria-hidden="true" />
                    </span>
                    <h3>
                      <a href={href}>
                        {title} <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    </h3>
                    <p>{summary}</p>
                    <dl>
                      <div>
                        <dt>What we work on</dt>
                        <dd>{scope}</dd>
                      </div>
                      <div>
                        <dt>What we measure</dt>
                        <dd>{measurement}</dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>
            <div className="dms-services-action">
              <EnquiryLink />
            </div>
          </div>
        </section>

        <section id="projects" className="dms-section dms-work" aria-labelledby="work-title">
          <div className="dm-container dms-wrap">
            <div className="dms-section-head">
              <div>
                <span className="dm-eyebrow">Selected work</span>
                <h2 id="work-title">See what we built.</h2>
              </div>
              <a href="/work" className="dm-link">
                All project examples <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="dms-project-grid">
              {projects.map((project) => (
                <a className="dms-project" key={project.id} href={`/work/${project.slug}`}>
                  <img
                    src={project.imageUrl}
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    alt={`${project.title} website preview`}
                  />
                  <div>
                    <p className="dms-project-status">{project.status}</p>
                    <h3>
                      {project.title} <ArrowRight size={18} aria-hidden="true" />
                    </h3>
                    <p>{project.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="dms-section" aria-labelledby="method-title">
          <div className="dm-container dms-wrap">
            <div className="dms-section-head">
              <div>
                <span className="dm-eyebrow">How we work</span>
                <h2 id="method-title">From business problem to agreed scope.</h2>
              </div>
            </div>
            <ol className="dms-approach">
              {approach.map(([phase, outcome, description], index) => (
                <li key={phase}>
                  <span className="dms-step">
                    {String(index + 1).padStart(2, "0")} / {phase}
                  </span>
                  <h3>{outcome}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dms-section dms-questions" aria-labelledby="questions-title">
          <div className="dm-container dms-wrap dms-faq-grid">
            <h2 id="questions-title">Before you enquire.</h2>
            <div className="dms-faq">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question} <ChevronDown size={19} aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="dms-section dms-close" aria-labelledby="enquiry-title">
          <div className="dm-container dms-wrap dms-conversion">
            <BarChart3 size={31} aria-hidden="true" />
            <div>
              <h2 id="enquiry-title">What do you want to improve?</h2>
              <p>
                Share your goal and where you’re stuck. We’ll review your enquiry and discuss the
                next step with you.
              </p>
            </div>
            <EnquiryLink className="dm-btn dm-btn-white" />
          </div>
        </section>
      </div>
    </DymShell>
  );
}
