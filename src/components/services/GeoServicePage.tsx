import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Braces,
  Building2,
  Check,
  CircleHelp,
  Compass,
  FileText,
  Globe2,
  MapPin,
  Network,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  Waypoints,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { INQUIRY_PATH } from "@/components/site/constants";

const primaryCta = "Learn how Generative Engine Optimization can help your business";

const discoveryStages = [
  {
    label: "Traditional search",
    title: "Find relevant pages.",
    copy: "Search results organize useful pages around a query. This remains an important part of digital discovery.",
    icon: Search,
  },
  {
    label: "Answer-oriented search",
    title: "Find useful answers.",
    copy: "Featured answers and voice experiences try to resolve a question directly while still drawing on discoverable sources.",
    icon: CircleHelp,
  },
  {
    label: "Generative discovery",
    title: "Interpret context and formulate an answer.",
    copy: "Generative systems can synthesize information about questions, entities and available sources into a contextual response.",
    icon: Waypoints,
  },
] as const;

const optimizationAreas = [
  ["Business and entity clarity", "Make who you are, what you offer, who you serve and where you operate unambiguous."],
  ["Information architecture", "Connect services, products, topics and supporting information in a logical structure."],
  ["Content quality and context", "Explain subjects with enough depth, specificity and context to be genuinely useful."],
  ["Question and answer intent", "Address the real questions people ask while researching, comparing and deciding."],
  ["First-party information", "Publish accurate details, expertise and evidence that originate with the business."],
  ["Authority and external context", "Strengthen relevant signals beyond the website without manufacturing proof."],
  ["Digital consistency", "Keep important business information aligned across owned and relevant third-party properties."],
  ["Structured information", "Use semantic structure and appropriate markup to clarify relationships for machines and people."],
  ["Technical discoverability", "Protect crawlability, indexability, performance, canonicals and other foundational signals."],
  ["Internal linking", "Show how related pages and ideas fit together instead of leaving them isolated."],
  ["Website experience", "Make the information easy for a person to read, evaluate and act on."],
] as const;

const methodology = [
  {
    title: "Diagnose",
    copy: "Understand the existing digital footprint before prescribing work.",
    detail: "We assess search visibility, measurable generative visibility, brand and entity understanding, the website, content, digital properties, trust signals and competitive context.",
  },
  {
    title: "Clarify",
    copy: "Make the business easier to understand.",
    detail: "We improve brand information, products and services, entity relationships, information architecture and structured information where appropriate.",
  },
  {
    title: "Answer",
    copy: "Build information around genuine questions and intent.",
    detail: "We combine AEO principles with useful answers, context, depth, expertise and clarity for the decisions customers are actually making.",
  },
  {
    title: "Strengthen",
    copy: "Improve the signals surrounding the business.",
    detail: "That may include first-party evidence, relevant external presence, industry context, authority, reputation and consistency.",
  },
  {
    title: "Optimize",
    copy: "Improve the foundations that support discoverability.",
    detail: "We address technical access, internal linking, information structure, content organization, website experience and SEO, AEO and GEO alignment.",
  },
  {
    title: "Adapt",
    copy: "Treat GEO as an evolving practice, not a one-time installation.",
    detail: "Where measurement is meaningful, we monitor relevant experiences, identify information gaps or representation issues and refine the supporting content and signals.",
  },
] as const;

const audiences = [
  {
    title: "Manufacturers & B2B",
    copy: "Clarify products, capabilities, applications, industries served and specialist expertise for research-led buying journeys.",
    icon: Building2,
  },
  {
    title: "Professional services",
    copy: "Communicate expertise, services, specialization and problem-solving context without relying on inflated claims.",
    icon: Compass,
  },
  {
    title: "Local businesses",
    copy: "Strengthen information about location, services, operating context and the needs behind local customer searches.",
    icon: MapPin,
  },
  {
    title: "E-commerce brands",
    copy: "Improve how products, categories, brand context and product relationships are described across the store.",
    icon: ShoppingBag,
  },
  {
    title: "Marketplace businesses",
    copy: "Connect marketplace presence, owned channels and consistent brand information across the wider discovery ecosystem.",
    icon: Store,
  },
] as const;

const ecosystem = [
  ["Website", Globe2],
  ["SEO", Search],
  ["AEO", CircleHelp],
  ["Content", FileText],
  ["Brand / entity", Building2],
  ["Authority", ShieldCheck],
  ["Structured information", Braces],
  ["Digital presence", Network],
  ["Customer intent", Compass],
  ["E-commerce", ShoppingBag],
  ["Marketplace presence", Store],
] as const;

const relatedServices = [
  {
    title: "Website Creation",
    copy: "Build the information structure and experience that discovery ultimately depends on.",
    to: "/services/web-creation" as const,
  },
  {
    title: "Paid Marketing",
    copy: "Capture active demand while organic and generative discoverability develops over time.",
    to: "/services/paid-marketing" as const,
  },
  {
    title: "E-commerce Growth",
    copy: "Connect product discovery with category clarity, store experience and conversion.",
    to: "/services/ecommerce-growth" as const,
  },
  {
    title: "Marketplace Optimization",
    copy: "Align marketplace listings and storefronts with the brand's wider digital presence.",
    to: "/services/marketplace-optimization" as const,
  },
] as const;

export function GeoServicePage() {
  return (
    <>
      <section className="hero-glow overflow-hidden border-b border-hairline py-16 sm:py-20 lg:py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/services" className="transition-colors hover:text-foreground">
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-foreground">Generative Engine Optimization</span>
            </nav>
            <p className="eyebrow mt-8">Generative Engine Optimization</p>
            <h1 className="mt-4 max-w-3xl text-[2.45rem] leading-[1.07] font-semibold text-foreground sm:text-5xl lg:text-6xl">
              Be Visible in the Age of AI Discovery
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Search is evolving beyond traditional results. People now ask answer engines and
              generative systems about businesses, products, services and solutions. GEO helps make
              your information easier to understand, discover and evaluate within that changing
              environment.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta href={INQUIRY_PATH} size="lg" className="h-auto min-h-12 py-3 text-center">
                {primaryCta} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Cta>
              <Cta href="#how-geo-works" variant="outline" size="lg">
                See how GEO works <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="relative mx-auto max-w-xl rounded-lg border border-hairline bg-card p-5 shadow-lift sm:p-7"
              aria-label="A question connects with multiple information sources that support a synthesized business answer"
            >
              <div className="rounded-lg border border-primary/20 bg-accent p-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Question</span>
                <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  “Which partner can help our manufacturing business improve digital discovery?”
                </p>
              </div>
              <div className="my-4 flex justify-center text-primary" aria-hidden="true">
                <ArrowDown className="h-5 w-5" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium text-muted-foreground">
                <span className="rounded-lg border border-hairline bg-surface px-2 py-3">Website</span>
                <span className="rounded-lg border border-hairline bg-surface px-2 py-3">Content</span>
                <span className="rounded-lg border border-hairline bg-surface px-2 py-3">Context</span>
              </div>
              <div className="my-4 flex justify-center text-primary" aria-hidden="true">
                <ArrowDown className="h-5 w-5" />
              </div>
              <div className="rounded-lg border border-hairline bg-navy p-5 text-navy-foreground">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-navy-muted uppercase">
                  <Waypoints className="h-4 w-4" aria-hidden="true" /> Interpretation & synthesis
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                  Clear entities, connected information and useful context help systems formulate a
                  more accurate answer about the business.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="how-geo-works" className="section-y scroll-mt-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The changing landscape</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Search Is Becoming More Conversational
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Traditional search, direct answers and generative discovery now coexist. The change is
              not the end of search; it is an expansion of how people explore and evaluate information.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-4 lg:grid-cols-3">
            {discoveryStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.label} delay={index * 80}>
                  <li className="relative h-full rounded-lg border border-hairline bg-card p-7 shadow-soft">
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                    </div>
                    <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                      {stage.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.copy}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Why GEO matters</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Your Website Isn’t the Whole Story Anymore
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A website can exist without making the business easy to interpret. Discovery systems
              still need clear information about what you do, who you serve, where you operate, what
              you know and how your products or services relate to a customer’s need.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              GEO improves the connected information around those questions. It does not control an
              answer engine; it gives people and systems clearer material to work with.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-4">
              <div className="rounded-lg border border-hairline bg-card p-6 shadow-soft">
                <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">A buyer may ask</span>
                <p className="mt-3 text-lg font-medium leading-relaxed text-foreground">
                  “Which digital marketing agency can help a manufacturer improve its online presence?”
                </p>
              </div>
              <div className="rounded-lg border border-hairline bg-card p-6 shadow-soft">
                <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Or compare</span>
                <p className="mt-3 text-lg font-medium leading-relaxed text-foreground">
                  “What should a B2B manufacturer look for when choosing a digital marketing partner?”
                </p>
              </div>
              <p className="px-1 text-sm leading-relaxed text-muted-foreground">
                The journey may include search results, direct answers, AI-generated summaries and
                source pages. Clear, consistent information matters across all of them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Connected disciplines</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              SEO Isn’t Disappearing. GEO Expands Discoverability.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each discipline has a different emphasis, but they share technical quality, useful
              information, clarity and trust as foundations.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["SEO", "Search visibility", "Help relevant pages become crawlable, understandable and discoverable in search results."],
              ["AEO", "Answer-oriented visibility", "Shape clear, directly useful information around the questions people are trying to resolve."],
              ["GEO", "Generative discovery", "Strengthen entity understanding, context, relevance, authority and accessible information for generative experiences."],
            ].map(([name, focus, copy], index) => (
              <Reveal key={name} delay={index * 80}>
                <article className="h-full rounded-lg border border-hairline bg-card p-7 shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-primary">
                    {name}
                  </div>
                  <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Primary focus</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{focus}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-8 max-w-3xl rounded-lg border border-primary/20 bg-accent p-6 text-center">
            <p className="text-lg font-semibold text-foreground">SEO remains the foundation. GEO expands the destination.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The work</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              GEO Is About More Than Keywords
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              It is not a matter of inserting AI-related phrases into a website. It is the coordinated
              work of making a business and its information clearer across the digital ecosystem.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {optimizationAreas.map(([title, copy], index) => (
              <Reveal key={title} delay={(index % 3) * 50}>
                <li className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">DigitalyMarket methodology</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Diagnose → Clarify → Answer → Strengthen → Optimize → Adapt
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The sequence turns GEO from an abstract idea into practical work. The exact priorities
              depend on what the diagnosis reveals about the business and its current digital presence.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {methodology.map((stage, index) => (
              <Reveal key={stage.title} delay={(index % 3) * 70}>
                <li className="h-full rounded-lg border border-hairline bg-card p-7 transition-shadow hover:shadow-soft">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{stage.title}</h3>
                  <p className="mt-2 font-medium text-foreground">{stage.copy}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y surface-navy overflow-hidden">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-navy-muted uppercase">The connected system</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl">GEO Is Not an Isolated Tactic</h2>
            <p className="mt-5 text-base leading-relaxed text-navy-muted sm:text-lg">
              It works across the wider digital ecosystem. The centre is not a platform or a trick—it
              is a coherent understanding of the business and the information surrounding it.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="grid gap-3 sm:grid-cols-2">
                {ecosystem.slice(0, 6).map(([label, Icon]) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 p-4">
                    <Icon className="h-4 w-4 shrink-0 text-navy-muted" aria-hidden="true" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mx-auto flex h-32 w-32 flex-col items-center justify-center rounded-full border border-navy-foreground/30 bg-navy-foreground text-center text-navy shadow-lift">
                <Blocks className="h-5 w-5" aria-hidden="true" />
                <strong className="mt-2 text-xl">GEO</strong>
                <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase">Connected context</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {ecosystem.slice(6).map(([label, Icon]) => (
                  <div key={label} className="flex items-center gap-3 rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 p-4">
                    <Icon className="h-4 w-4 shrink-0 text-navy-muted" aria-hidden="true" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Business relevance</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Where GEO Can Fit Into Your Business
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              GEO is not equally urgent for every business. Its value is strongest where customers
              research, compare, ask detailed questions or need help understanding a complex offer.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Reveal key={audience.title} delay={index * 60}>
                  <article className="h-full rounded-lg border border-hairline bg-card p-6 shadow-soft">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 font-semibold text-foreground">{audience.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audience.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-hairline bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Wider capabilities</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              A Coherent Digital Ecosystem
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              GEO works best when the digital ecosystem behind the business is coherent. That can
              involve the website, paid demand, commerce and marketplace presence—not as an automatic
              package, but where the diagnosis shows a real connection.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedServices.map((service, index) => (
              <Reveal key={service.title} delay={(index % 2) * 60}>
                <Link
                  to={service.to}
                  className="group flex h-full flex-col rounded-lg border border-hairline bg-card p-6 transition-all hover:border-primary/30 hover:shadow-soft"
                >
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Professional transparency</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Let’s Be Clear About What GEO Can Do
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              GEO can improve information clarity, discoverability, context, consistency,
              answer-readiness, entity understanding and the supporting authority signals around a
              business.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Those are meaningful improvements because they create a better foundation for both human
              evaluation and machine interpretation.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-lg border border-hairline bg-card p-7 shadow-soft sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">What no responsible strategy can guarantee</h3>
              <ul className="mt-6 space-y-3">
                {["A specific AI citation or recommendation", "A specific AI-generated answer", "A fixed ranking or amount of traffic", "A fixed revenue or business outcome"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-hairline pt-6 text-sm font-medium leading-relaxed text-foreground">
                AI systems decide how they interpret and present information. Our role is to strengthen
                the signals and information those systems can work with.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y surface-navy">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-navy-muted uppercase">Next step</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl">
              Is Your Business Ready for Generative Discovery?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">
              Your customers are changing how they search. Let’s understand where your digital presence
              stands and where GEO may fit.
            </p>
            <Cta href={INQUIRY_PATH} variant="onNavy" size="lg" className="mt-9 h-auto min-h-12 py-3 text-center">
              {primaryCta} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}