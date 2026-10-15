import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ExternalLink, ShieldCheck, Zap, MessageSquare, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { INQUIRY_PATH } from "@/components/site/constants";

const url = "https://digitalymarket.com/work/SensyTalk";
const liveUrl = "https://sensytalk-redesign.vercel.app/";
const originalUrl = "https://sensytalk.com/";
const brandUrl = "https://digitalymarket.com/";
const ogImage = "https://digitalymarket.com/work/sensytalk-og.jpg";

const title = "SensyTalk Case Study | Meta WhatsApp Partner Website Redesign | DigitalyMarket";
const description =
  "How DigitalyMarket redesigned the web presence for SensyTalk (official Meta WhatsApp Partner) through CRO audits, B2B outcome messaging, high-contrast UX/UI, and full-stack React 19 engineering.";

export const Route = createFileRoute("/work/SensyTalk")({
  component: SensyTalkCaseStudy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "SensyTalk Case Study | DigitalyMarket" },
      {
        property: "og:description",
        content:
          "An evidence-led case study documenting the CRO audit, B2B messaging shift, UX/UI design system, and React 19 implementation for Meta WhatsApp Partner SensyTalk.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SensyTalk Case Study | DigitalyMarket" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "SensyTalk Case Study: Turning Meta WhatsApp Infrastructure Into a High-Converting B2B Web Experience",
              description,
              image: ogImage,
              mainEntityOfPage: url,
              author: { "@type": "Organization", name: "DigitalyMarket", url: brandUrl },
              publisher: { "@type": "Organization", name: "DigitalyMarket", url: brandUrl },
              about: {
                "@type": "CreativeWork",
                name: "SensyTalk Web Redesign",
                url: liveUrl,
                creator: { "@type": "Organization", name: "DigitalyMarket", url: brandUrl },
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: brandUrl },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://digitalymarket.com/work" },
                { "@type": "ListItem", position: 3, name: "SensyTalk", item: url },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

/* ---------- small building blocks ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionHead({
  eyebrow,
  heading,
  intro,
  onNavy = false,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  onNavy?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl ${
          onNavy ? "text-navy-foreground" : "text-foreground"
        }`}
      >
        {heading}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            onNavy ? "text-navy-foreground/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

function FlowChain({ steps, onNavy = false }: { steps: string[]; onNavy?: boolean }) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-3 sm:contents">
          <span
            className={`flex-1 rounded-2xl border px-4 py-3 text-center text-sm font-semibold tracking-tight sm:flex-none ${
              onNavy
                ? "border-navy-foreground/15 bg-navy-foreground/5 text-navy-foreground"
                : "border-hairline bg-card text-foreground shadow-soft"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <ArrowRight
              className={`h-4 w-4 shrink-0 self-center rotate-90 sm:rotate-0 ${
                onNavy ? "text-navy-foreground/40" : "text-muted-foreground"
              }`}
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Card({
  title: t,
  body,
  index,
}: {
  title: string;
  body?: string;
  index?: string;
}) {
  return (
    <div className="h-full rounded-3xl border border-hairline bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
      {index ? <span className="text-sm font-bold tracking-widest text-primary">{index}</span> : null}
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">{t}</h3>
      {body ? <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p> : null}
    </div>
  );
}

/* ---------- page ---------- */

function SensyTalkCaseStudy() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy">
          <img
            src="/work/sensytalk-hero.jpg"
            alt="SensyTalk redesigned homepage hero interface showing official Meta WhatsApp Business Solution Partner positioning and live product tour"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/50"
            aria-hidden="true"
          />
          <div className="container-page relative py-16 sm:py-20 lg:py-28">
            <nav aria-label="Breadcrumb" className="text-sm text-navy-foreground/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="transition-colors hover:text-navy-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">→</li>
                <li>
                  <Link to="/work" className="transition-colors hover:text-navy-foreground">
                    Work
                  </Link>
                </li>
                <li aria-hidden="true">→</li>
                <li aria-current="page" className="text-navy-foreground">
                  SensyTalk
                </li>
              </ol>
            </nav>

            <Reveal className="mt-10 max-w-3xl">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] text-navy-foreground/70 uppercase">
                B2B SaaS Case Study
              </p>
              <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-navy-foreground sm:text-5xl lg:text-[3.5rem]">
                SensyTalk
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-navy-foreground/80 sm:text-xl">
                Turning official Meta WhatsApp API infrastructure into a high-converting, evidence-led B2B web experience.
              </p>

              <ul className="mt-9 flex flex-wrap gap-2">
                {[
                  "Official Meta WhatsApp Partner",
                  "B2B SaaS / Business Messaging",
                  "CRO Audit & Value Repositioning",
                  "React 19 & Tailwind CSS SPA",
                  "Dynamic ROI Engine",
                ].map((meta) => (
                  <li
                    key={meta}
                    className="rounded-full border border-navy-foreground/20 px-3 py-1.5 text-xs font-semibold tracking-tight text-navy-foreground/85"
                  >
                    {meta}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Cta
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="onNavy"
                  size="lg"
                >
                  View Redesign Preview <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Cta>
                <Cta
                  href={originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlineNavy"
                  size="lg"
                >
                  Inspect Original Site <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Cta>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="Project overview"
              heading="A high-performance SaaS platform trapped behind an outdated web storefront."
              intro="SensyTalk is an official Meta WhatsApp Business Solution Partner (BSP) with enterprise-grade tech: 24/7 AI chatbots, a multi-agent shared inbox, and the SensyConnect telecalling CRM Android app. DigitalyMarket led an end-to-end transformation to align their web presence with enterprise buyer expectations."
            />
            <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Client", "SensyTalk (Official Meta BSP)"],
                ["Industry", "B2B SaaS / Conversational Commerce"],
                ["Target Audience", "Founders, Heads of Growth, IT & Operations Directors"],
                ["Work Scope", "CRO Audit · Content Strategy · UX/UI Architecture · React 19 SPA · SEO/GEO"],
                ["Current Status", "Deployed to Vercel Preview (Production cutover pending)"],
                ["Key Innovations", "Dynamic Business ROI Calculator · Live Click-to-WhatsApp Trigger · Pinned Header"],
              ].map(([k, v], i) => (
                <Reveal key={k} delay={i * 60}>
                  <div className="h-full rounded-3xl border border-hairline bg-surface/60 p-7">
                    <dt className="text-xs font-bold tracking-widest text-primary uppercase">{k}</dt>
                    <dd className="mt-3 text-base font-semibold tracking-tight text-foreground">{v}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* Snapshot */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead
              eyebrow="Execution pipeline"
              heading="Evidence first. Code second."
              intro="We never start with guesswork or generic templates. The redesign moved through a deliberate sequence grounded in empirical audit findings."
            />
            <div className="mt-10">
              <FlowChain
                steps={[
                  "1. CRO & Technical DOM Audit",
                  "2. B2B Outcome Positioning",
                  "3. Obsidian & Emerald UX System",
                  "4. Full-Stack React 19 Build",
                  "5. Devil's Advocate QA Review",
                  "6. Deployed Vercel Preview",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="The challenge"
              heading="Great infrastructure. Multiple conversion bottlenecks."
              intro="Despite strong underlying technology, our deep inspection of the legacy WordPress/Elementor codebase uncovered critical conversion leaks that broke the buyer journey before trust could be established."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["01", "The Lead Form Trap", "Buttons labeled 'See All Features' unexpectedly opened an Elementor lead capture form (#elementor-action:popup...). High-intent evaluators bounced immediately."],
                ["02", "Unpinned Header Navigation", "The navigation header lacked sticky positioning and vanished on scroll, leaving visitors stranded on long-form pages without navigation or CTAs."],
                ["03", "Mobile Drawer Collapse", "Navigation links were hidden on screens below 768px without a mobile drawer, making product and solutions pages completely unreachable on smartphones."],
                ["04", "The WhatsApp Irony", "A platform selling WhatsApp automation had ZERO live Click-to-WhatsApp triggers on its own site. Prospects couldn't test bot response speed firsthand."],
                ["05", "Unverified Analytics", "MonsterInsights analytics was unauthenticated ('No tracking code set'), leaving the client with zero baseline visibility into funnel drop-offs."],
                ["06", "Rigid Pricing & Currency Lock", "Pricing was hardcoded strictly to Indian Rupees (₹) with arbitrary multipliers, instantly alienating international evaluators."],
              ].map(([index, t, body], i) => (
                <Reveal key={index} delay={i * 70}>
                  <Card index={index!} title={t!} body={body!} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Objectives */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead
              eyebrow="Strategic Objectives"
              heading="Five pillars of the transformation."
              intro="Every architectural decision was tied directly to friction reduction and buyer psychological clarity."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Pillar 1", "Pass the 5-Second Test", "Communicate category, Meta BSP trust credentials, and primary business value above the fold."],
                ["Pillar 2", "Eliminate Deceptive Conversion Traps", "Replace form-trapping popup links with transparent product tours and deep specifications."],
                ["Pillar 3", "Dual-Layer Audience Architecture", "Balance plain-English revenue outcomes for founders with REST API / webhook specs for developers."],
                ["Pillar 4", "Empirical Product Proof", "Deploy an authentic Click-to-WhatsApp live test widget and real platform dashboard screencasts."],
                ["Pillar 5", "Lightning Front-End Engineering", "Migrate from bloated Elementor plugins to a clean React 19 SPA compiling in 1.72 seconds."],
              ].map(([index, t, body], i) => (
                <Reveal key={index} delay={i * 70}>
                  <Card index={index!} title={t!} body={body!} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy: Outcome Messaging */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="Positioning & Messaging"
              heading="From technical feature jargon to commercial urgency."
              intro="We completely re-anchored the messaging around customer drop-off reduction, speed-to-reply, and verified Meta market benchmarks."
            />
            <div className="mt-12 overflow-x-auto rounded-3xl border border-hairline bg-card shadow-soft">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-hairline bg-surface/80 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="p-6">Feature / Capability</th>
                    <th className="p-6">Legacy Mechanic-Focused Copy</th>
                    <th className="p-6 text-primary">Redesigned Commercial Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    ["Hero Headline", "5X Revolutionize Your Business with WhatsApp", "Your Customers Are On WhatsApp. Are You Reaching Them First?"],
                    ["WhatsApp Broadcasts", "Send Out Promotional Content (Officially)", "Reach 10,000+ Customers Directly on WhatsApp with 98% Open Rates"],
                    ["Multi-Agent Inbox", "The Most Complete WhatsApp Platform", "One WhatsApp Number, Unlimited Agents: Never Miss a Hot Lead"],
                    ["Telecalling CRM", "Mobile Laptop App", "Android Auto-Dialer with Instant Post-Call WhatsApp Brochure Triggers"],
                    ["Cart Recovery", "Sell your Products on WhatsApp", "Automate Checkout Recovery: Recover Lost E-Commerce Carts in < 15 Mins"],
                  ].map(([feature, oldCopy, newCopy], i) => (
                    <tr key={i} className="hover:bg-surface/40 transition-colors">
                      <td className="p-6 font-semibold text-foreground">{feature}</td>
                      <td className="p-6 text-muted-foreground line-through opacity-75">{oldCopy}</td>
                      <td className="p-6 font-semibold text-primary">{newCopy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Visual UI Showcase */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead
              eyebrow="UX/UI & Visual System"
              heading="High-contrast obsidian & emerald architecture."
              intro="Inspired by modern developer-first SaaS benchmarks (Linear, Supabase, Stripe), we engineered a WCAG AA-compliant visual system with an 11.4:1 contrast ratio."
            />
            
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-soft">
                  <img
                    src="/work/sensytalk-inbox.jpg"
                    alt="SensyTalk multi-agent shared inbox and visual drag-and-drop chatbot builder interface"
                    className="w-full object-cover"
                  />
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-foreground">Multi-Agent Shared Inbox & Chatbot Canvas</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Structured conversation tags (Hot Lead, Qualified, Follow-up) paired with a visual drag-and-drop automation builder.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-soft">
                  <img
                    src="/work/sensytalk-pricing.jpg"
                    alt="SensyTalk transparent pricing tiers with interactive dynamic ROI calculator"
                    className="w-full object-cover"
                  />
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-foreground">Transparent Pricing & Dynamic ROI Calculator</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Founders customize contact volumes and Average Order Value ($AOV$) in real time with an instant INR (₹) / USD ($) currency switcher.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Front-End Engineering */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="Front-End Architecture"
              heading="Zero bloat. Instant execution."
              intro="We replaced fragile page builders with a clean, decoupled React 19 Single Page Application."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["1.72s", "Vite 8 Build Speed", "1,928 modules transformed cleanly with zero compilation warnings."],
                ["105.8 kB", "Gzipped JS Bundle", "Lightweight code delivery ensuring instantaneous First Contentful Paint."],
                ["Deep Hash", "Route Navigation", "Full deep-linking support for /#products-page and /#api-docs without 404s."],
                ["100% Local", "Asset Isolation", "All product screenshots and badges bundled locally, eliminating external link-rot."],
              ].map(([metric, title, desc], i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="rounded-3xl border border-hairline bg-surface/60 p-7 text-center">
                    <div className="text-3xl font-extrabold text-primary sm:text-4xl">{metric}</div>
                    <div className="mt-2 text-base font-semibold text-foreground">{title}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Claim Governance & Evidence */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead
              eyebrow="Evidence & Transparency"
              heading="Radical honesty. Zero fabricated metrics."
              intro="At DigitalyMarket, we adhere to strict evidence governance. We distinguish clearly between what was observed, what was implemented, and what remains pending."
            />
            <div className="mt-10 rounded-3xl border-l-4 border-primary bg-card p-8 shadow-soft">
              <h3 className="text-xl font-bold text-foreground">Project Boundary & Validation Register</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                • <strong>Production Status:</strong> The redesign is currently deployed and serving on the Vercel Edge Network preview (<a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">sensytalk-redesign.vercel.app</a>). The root domain <code className="text-foreground">sensytalk.com</code> remains on WordPress pending client DNS cutover.<br />
                • <strong>Zero Synthetic Performance Claims:</strong> We do not publish unverified metrics (+35% conversion lift, +120% leads) without live production A/B testing data.<br />
                • <strong>Benchmark Attribution:</strong> The 98% open rate and 45-60% CTR are explicitly cited as Meta official WhatsApp industry benchmarks, not SensyTalk proprietary sales claims.
              </p>
            </div>
          </div>
        </section>

        {/* Ready to Start CTA */}
        <section className="section-y">
          <div className="container-page">
            <Reveal className="rounded-3xl border border-hairline bg-gradient-to-br from-card via-surface to-card p-10 sm:p-16 text-center shadow-lift">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Is your SaaS trapped behind an outdated website?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine deep CRO audits, B2B outcome positioning, and modern front-end engineering to turn websites into 24/7 revenue engines.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Cta href={INQUIRY_PATH} size="lg">
                  Start a Project Conversation
                </Cta>
                <Cta href={liveUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                  Inspect SensyTalk Preview <ArrowUpRight className="h-4 w-4" />
                </Cta>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
