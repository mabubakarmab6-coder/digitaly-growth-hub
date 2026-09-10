import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { INQUIRY_PATH } from "@/components/site/constants";

const url = "https://digitalymarket.com/work/gemstone-gallery";
const liveUrl = "https://gemsgallery.digitalymarket.com/";
const brandUrl = "https://digitalymarket.com/";
const ogImage = "https://digitalymarket.com/work/gems-gallery-og.jpg";

const title = "Gems Gallery Case Study | B2B Website & Digital Growth | DigitalyMarket";
const description =
  "Explore how DigitalyMarket developed a B2B digital presence for Gems Gallery through business research, UX, website development, SEO foundations and GEO-aware strategy.";

export const Route = createFileRoute("/work/gemstone-gallery")({
  component: GemsGalleryCaseStudy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Gems Gallery Case Study | DigitalyMarket" },
      {
        property: "og:description",
        content:
          "A case study exploring B2B positioning, UX, website development, SEO foundations and GEO-aware strategy for a gemstone manufacturing business.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gems Gallery Case Study | DigitalyMarket" },
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
              headline: "Gems Gallery Case Study: Turning gemstone manufacturing expertise into a digital B2B presence",
              description,
              image: ogImage,
              mainEntityOfPage: url,
              author: { "@type": "Organization", name: "DigitalyMarket", url: brandUrl },
              publisher: { "@type": "Organization", name: "DigitalyMarket", url: brandUrl },
              about: {
                "@type": "CreativeWork",
                name: "Gems Gallery",
                url: liveUrl,
                creator: { "@type": "Organization", name: "DigitalyMarket", url: brandUrl },
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: brandUrl },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://digitalymarket.com/work" },
                { "@type": "ListItem", position: 3, name: "Gems Gallery", item: url },
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

function GemsGalleryCaseStudy() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy">
          <img
            src="/work/gems-gallery-hero.jpg"
            alt="Abstract composition of faceted and polished gemstone forms over a navy digital grid, representing gemstone manufacturing and digital strategy"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"
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
                  Gems Gallery
                </li>
              </ol>
            </nav>

            <Reveal className="mt-10 max-w-3xl">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] text-navy-foreground/70 uppercase">
                Case Study
              </p>
              <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-navy-foreground sm:text-5xl lg:text-[3.5rem]">
                Gems Gallery
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-navy-foreground/80 sm:text-xl">
                Turning gemstone manufacturing expertise into a digital B2B presence.
              </p>

              <ul className="mt-9 flex flex-wrap gap-2">
                {[
                  "Independent Portfolio Project",
                  "Gemstone Manufacturing",
                  "Jaipur, India",
                  "Website Development · Digital Growth",
                ].map((meta) => (
                  <li
                    key={meta}
                    className="rounded-full border border-navy-foreground/20 px-3 py-1.5 text-xs font-semibold tracking-tight text-navy-foreground/85"
                  >
                    {meta}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Cta
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="onNavy"
                  size="lg"
                >
                  View Live Website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Cta>
                <Cta href={brandUrl} variant="outlineNavy" size="lg">
                  Back to DigitalyMarket
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
              heading="An offline manufacturing business, translated into a focused digital presence."
              intro="Gems Gallery is an independent portfolio project exploring how an established, manufacturing-oriented gemstone business can communicate its expertise to professional buyers online."
            />
            <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Industry", "Gemstone Manufacturing"],
                ["Location", "Jaipur, Rajasthan, India"],
                ["Audience", "B2B buyers & gemstone professionals"],
                ["Scope", "Strategy · UX · Content · Website · SEO Foundations · GEO Awareness"],
                ["Solution", "Focused 3-page B2B website"],
                ["Conversion paths", "Request a Quote (primary) · WhatsApp (secondary)"],
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
              eyebrow="Project snapshot"
              heading="Not prompt → AI → website."
              intro="The project moved through a deliberate sequence before a single page was published."
            />
            <div className="mt-10">
              <FlowChain
                steps={["Research", "Strategy", "Design", "Development", "Review", "Published website"]}
              />
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="The challenge"
              heading="Offline expertise does not automatically become digital visibility."
              intro="Gemstone manufacturing businesses can hold years of practical expertise while having limited digital infrastructure for communicating that expertise beyond their existing network. The question became: how can an offline manufacturing capability be translated into a digital experience that helps professional buyers understand the business, evaluate its capabilities and start a conversation?"
            />
            <div className="mt-10">
              <FlowChain
                steps={[
                  "Offline manufacturing expertise",
                  "Digital communication",
                  "Buyer understanding",
                  "Business inquiry",
                ]}
              />
            </div>
            <Reveal className="mt-10 max-w-3xl rounded-3xl border-l-2 border-primary bg-surface/70 p-7">
              <p className="text-base leading-relaxed text-muted-foreground">
                A website does not automatically create global customers. It creates an owned digital
                destination that can support future discovery through channels such as SEO, GEO, paid
                acquisition, outreach, social and partnerships.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Objectives */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead eyebrow="Objectives" heading="Four objectives defined the project." />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Create an owned digital presence", "A destination capable of communicating manufacturing capability."],
                ["02", "Facilitate professional inquiries", "Through Quote Requests and WhatsApp."],
                ["03", "Position toward B2B buyers", "Professional buyers rather than retail consumers."],
                ["04", "Build focused information architecture", "A structure designed to build trust."],
              ].map(([index, t, body], i) => (
                <Reveal key={index} delay={i * 70}>
                  <Card index={index!} title={t!} body={body!} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="Research"
              heading="Understanding the business before deciding the structure."
              intro="Research was discussion and questionnaire based: understanding how the business operates, how gemstones are processed and what professional buyers need to know before making contact. It preceded every structural decision."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Business understanding", "How the business operates and where its real capability sits."],
                ["Manufacturing processes", "How stones move from rough material to finished output."],
                ["B2B requirements", "What professional buyers evaluate before engaging a manufacturer."],
                ["Buyer communication", "The language and detail buyers expect to see."],
                ["Digital opportunity", "Where an owned digital presence could realistically help."],
              ].map(([t, body], i) => (
                <Reveal key={t} delay={i * 60}>
                  <Card title={t!} body={body!} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic direction */}
        <section className="section-y bg-navy">
          <div className="container-page">
            <SectionHead
              eyebrow="Strategic direction"
              heading="From selling gemstones to communicating manufacturing capability."
              intro="The strategy deliberately positioned the website toward professional buyers — manufacturers, wholesalers, sourcing professionals and miners — rather than retail consumers. That single decision reshaped the entire experience."
              onNavy
            />
            <div className="mt-10">
              <FlowChain
                steps={["Manufacturing", "Capabilities", "Process", "Trust", "Inquiry"]}
                onNavy
              />
            </div>
            <Reveal className="mt-8 max-w-2xl">
              <p className="text-sm leading-relaxed text-navy-foreground/70">
                An e-commerce flow (Product → Cart → Checkout) would have optimised for a transaction
                the business does not run online. An informational B2B flow optimises for the decision a
                professional buyer actually makes: whether this manufacturer is worth contacting.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Audience */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead eyebrow="Audience" heading="Who the experience was designed for." />
            <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="rounded-3xl bg-navy p-10 text-center shadow-lift">
                  <p className="text-xs font-bold tracking-[0.2em] text-navy-foreground/60 uppercase">
                    Centre of the experience
                  </p>
                  <p className="mt-4 text-2xl font-semibold tracking-tight text-navy-foreground">
                    Gems Gallery
                  </p>
                </div>
              </Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Manufacturers",
                  "Sourcing professionals",
                  "Production professionals",
                  "Miners",
                  "Gemstone professionals",
                ].map((a, i) => (
                  <li key={a}>
                    <Reveal delay={i * 60}>
                      <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-card p-5 shadow-soft">
                        <span
                          className="h-2.5 w-2.5 rotate-45 bg-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-semibold tracking-tight text-foreground">{a}</span>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* IA */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead
              eyebrow="Information architecture"
              heading="A focused three-page structure."
              intro="The architecture was intentionally narrow so every page carried a job: Understand → Evaluate → Trust → Inquire."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["Home", "Business positioning"],
                ["Manufacturing", "Capabilities & process"],
                ["About", "Context & trust"],
              ].map(([t, body], i) => (
                <Reveal key={t} delay={i * 70}>
                  <div className="h-full rounded-3xl border border-hairline bg-card p-8 shadow-soft">
                    <p className="text-xs font-bold tracking-widest text-primary uppercase">Page 0{i + 1}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Request a Quote", "WhatsApp"].map((c) => (
                <div
                  key={c}
                  className="rounded-2xl border border-dashed border-primary/40 bg-card p-5 text-center text-sm font-semibold text-foreground"
                >
                  Conversion path: {c}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <FlowChain steps={["Understand", "Evaluate", "Trust", "Inquire"]} />
            </div>
          </div>
        </section>

        {/* Website showcase */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="The website"
              heading="A published, owned digital asset."
              intro="The live site is the clearest way to review the outcome — the structure, language and conversion paths described here are all visible on it."
            />
            <Reveal className="mt-12">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl border border-hairline bg-navy shadow-lift transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 border-b border-navy-foreground/10 px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-foreground/25" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-foreground/25" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-foreground/25" aria-hidden="true" />
                  <span className="ml-3 truncate text-xs text-navy-foreground/60">
                    gemsgallery.digitalymarket.com
                  </span>
                </div>
                <img
                  src="/work/gems-gallery-hero.jpg"
                  alt="Visual representation of the Gems Gallery B2B website direction: faceted gemstone geometry on a deep navy digital layout"
                  loading="lazy"
                  width={1600}
                  height={1008}
                  className="aspect-[16/10] w-full object-cover opacity-90"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
                  <p className="text-sm text-navy-foreground/70">
                    Home · Manufacturing · About — with Quote Request and WhatsApp inquiry paths.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-foreground group-hover:gap-3">
                    Explore the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Page roles */}
        <section className="section-y bg-surface">
          <div className="container-page grid gap-12 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-3xl border border-hairline bg-card p-8">
                <p className="eyebrow">Home page</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  Establishing what the business is.
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Business positioning",
                    "Manufacturing identity",
                    "Audience relevance",
                    "Capabilities",
                    "Process",
                    "Material spectrum",
                    "Conversion paths",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs font-semibold tracking-tight text-foreground">
                  What is this? → What do they do? → Can they help me? → How do I start?
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-hairline bg-card p-8">
                <p className="eyebrow">Manufacturing page</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  Showing capability in the buyer's language.
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Barni Polishing",
                    "Cabochon Manufacturing",
                    "Faceted Cut Stones",
                    "Full-Suite Manufacturing",
                    "Customer-Supplied Lots",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Capabilities are described as processes, not as production capacity, machinery or
                  certifications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-3xl border border-hairline bg-card p-8">
                <p className="eyebrow">About page</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  Providing the context that reduces uncertainty.
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {["Business context", "Since 1990", "Jaipur", "Sanjay Singh", "Values"].map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs font-semibold tracking-tight text-foreground">
                  Relevance → Capability → Trust
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Conversion journey */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="Intended conversion journey"
              heading="The path the experience was designed to support."
              intro="This is the intended journey, not measured performance data."
            />
            <div className="mt-10">
              <FlowChain steps={["Discover", "Understand", "Trust", "Consider", "Inquire"]} />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Request a Quote", "WhatsApp"].map((c) => (
                <div
                  key={c}
                  className="rounded-2xl border border-hairline bg-surface p-5 text-center text-sm font-semibold text-foreground"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACTDF */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead
              eyebrow="ACTDF framework"
              heading="Five factors behind the B2B digital experience."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Audience", "Who is the experience for?", "Professional B2B buyers, not retail consumers."],
                ["Context", "What business environment are they operating in?", "Gemstone manufacturing and sourcing in Jaipur."],
                ["Trust", "What reduces uncertainty?", "Clear capability descriptions and business context."],
                ["Discovery", "How can the business be found?", "An owned site with SEO foundations and GEO-aware structure."],
                ["Friction", "What could prevent action?", "Unclear positioning or a hidden way to inquire."],
              ].map(([t, q, note], i) => (
                <Reveal key={t} delay={i * 60}>
                  <div className="h-full rounded-3xl border border-hairline bg-card p-6 shadow-soft">
                    <h3 className="text-sm font-bold tracking-widest text-primary uppercase">{t}</h3>
                    <p className="mt-3 text-sm font-semibold tracking-tight text-foreground">{q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8 text-center">
              <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                B2B digital experience
              </p>
            </Reveal>
          </div>
        </section>

        {/* Trade-off */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="Strategic trade-off"
              heading="Colour-based material spectrum instead of gemstone names."
              intro="Not every decision is universally correct. This one was made deliberately, with a known cost."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["Advantage", "Broader visual positioning across materials."],
                ["Trade-off", "Less immediate semantic specificity."],
                ["Future opportunity", "Dedicated gemstone-specific content can increase specificity and search opportunities."],
              ].map(([t, body], i) => (
                <Reveal key={t} delay={i * 70}>
                  <Card title={t!} body={body!} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEO + GEO */}
        <section className="section-y bg-surface">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-hairline bg-card p-8">
                <p className="eyebrow">SEO foundations</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  Search-friendly structure, built in from the start.
                </h2>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Semantic structure",
                    "Heading hierarchy",
                    "Descriptive URLs",
                    "Metadata",
                    "Image alt text",
                    "Basic search-friendly architecture",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Foundations only. No rankings, organic traffic or search-generated leads are claimed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-hairline bg-card p-8">
                <p className="eyebrow">GEO awareness</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  Written to be understood, by people and by machines.
                </h2>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Clear terminology",
                    "Structured information",
                    "Explicit manufacturing capabilities",
                    "Clear business context",
                    "Understandable headings",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  A GEO-aware foundation. No AI-search rankings, citations or traffic are claimed.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Human + AI */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="AI-assisted development"
              heading="Human strategy. AI-assisted execution."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                ["Human", ["Research", "Business understanding", "Audience", "Strategy", "UX decisions", "Content direction", "Review"]],
                ["AI", ["Development assistance", "Coding", "Implementation", "Iteration support"]],
              ].map(([t, items], i) => (
                <Reveal key={t as string} delay={i * 80}>
                  <div className="h-full rounded-3xl border border-hairline bg-card p-8 shadow-soft">
                    <h3 className="text-sm font-bold tracking-widest text-primary uppercase">{t as string}</h3>
                    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                      {(items as string[]).map((x) => (
                        <li key={x} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8 text-center">
              <p className="text-base font-semibold tracking-tight text-foreground">
                → Final digital experience
              </p>
            </Reveal>
          </div>
        </section>

        {/* Execution */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHead eyebrow="Execution" heading="What DigitalyMarket delivered on this project." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["Website Creation", "Designed and developed a focused 3-page B2B website to communicate capabilities and drive inquiries.", "/services/web-creation"],
                ["SEO", "Applied foundational SEO principles including semantic structures, heading hierarchy and descriptive URLs.", "/services/geo"],
                ["GEO", "Used clear headings, explicit terminology and structured capability descriptions for generative engine readability.", "/services/geo"],
              ].map(([t, body], i) => (
                <Reveal key={t} delay={i * 70}>
                  <Card title={t!} body={body!} />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
              >
                Explore DigitalyMarket services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Outcome */}
        <section className="section-y bg-navy">
          <div className="container-page">
            <SectionHead
              eyebrow="Project outcome"
              heading="A focused digital foundation for future B2B growth."
              onNavy
            />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "B2B audience",
                "Focused architecture",
                "Website completed",
                "Inquiry paths",
                "SEO foundations",
                "GEO awareness",
                "Published digital asset",
              ].map((x, i) => (
                <li key={x}>
                  <Reveal delay={i * 50}>
                    <div className="h-full rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 text-sm font-semibold tracking-tight text-navy-foreground">
                      {x}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal className="mt-10 max-w-2xl rounded-3xl border border-navy-foreground/15 p-7">
              <p className="text-xs font-bold tracking-widest text-navy-foreground/60 uppercase">
                Project outcome ≠ performance data
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
                This is an independent portfolio project. No validated performance data exists, so no
                traffic, leads, revenue, ROI, conversion rate, search ranking or AI-citation figures are
                reported here.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Next steps */}
        <section className="section-y">
          <div className="container-page">
            <SectionHead
              eyebrow="Next steps"
              heading="What could come next — clearly separate from what is complete."
            />
            <ol className="mt-12 space-y-5">
              {[
                ["Technical foundation", "Complete remaining technical SEO work."],
                ["Measurement", "Track traffic → engagement → inquiry."],
                ["Content", "Expand manufacturing and gemstone-specific content."],
                ["Acquisition", "SEO · GEO · Paid · Outreach · Social · Partnerships"],
                ["Optimization", "Measure and improve the actual business funnel."],
              ].map(([t, body], i) => (
                <li key={t}>
                  <Reveal delay={i * 60}>
                    <div className="flex gap-5 rounded-3xl border border-hairline bg-card p-7 shadow-soft">
                      <span className="text-sm font-bold text-primary">0{i + 1}</span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">{t}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className="mt-6">
              <p className="text-xs text-muted-foreground">
                These are future recommendations, not completed work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Closing */}
        <section className="section-y bg-surface">
          <div className="container-page">
            <Reveal className="max-w-3xl">
              <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-4xl">
                A website is the deliverable. The strategy is the value.
              </h2>
            </Reveal>
            <div className="mt-10">
              <FlowChain
                steps={[
                  "Business",
                  "Audience",
                  "Positioning",
                  "Experience",
                  "Trust",
                  "Discovery",
                  "Conversion",
                  "Future measurement",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-y bg-navy">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] text-navy-foreground/70 uppercase">
                Next
              </p>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold tracking-tight text-navy-foreground sm:text-4xl">
                See the project, or talk about yours.
              </h2>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Cta href={liveUrl} target="_blank" rel="noopener noreferrer" variant="onNavy" size="lg">
                  View the Live Gems Gallery Website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Cta>
                <Cta href={brandUrl} variant="outlineNavy" size="lg">
                  Explore DigitalyMarket <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Cta>
              </div>
              <div className="mt-7 flex flex-wrap gap-6 text-sm">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 font-semibold text-navy-foreground/80 hover:text-navy-foreground"
                >
                  View more work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to={INQUIRY_PATH}
                  className="inline-flex items-center gap-2 font-semibold text-navy-foreground/80 hover:text-navy-foreground"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-semibold text-navy-foreground/80 hover:text-navy-foreground"
                >
                  About DigitalyMarket <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
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
