import { ArrowRight, Check, Minus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { ContactActions } from "@/components/site/ContactActions";
import { INQUIRY_PATH } from "@/components/site/constants";
import { industryBySlug, type Industry } from "@/data/industries";

export function IndustryDetail({ industry }: { industry: Industry }) {
  const related = industry.related
    .map((slug) => industryBySlug[slug])
    .filter(Boolean) as Industry[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-hairline bg-surface/50">
        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/industries" className="transition-colors hover:text-foreground">
                    Industries
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{industry.shortName}</li>
              </ol>
            </nav>
            <p className="eyebrow">{industry.eyebrow}</p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              {industry.h1Lead} <span className="text-primary">{industry.h1Accent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {industry.heroCopy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta href="#industry-contact" size="lg">
                Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Cta>
              <Cta href="/services" variant="outline" size="lg">
                Explore Services
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-hairline shadow-lift">
              <img
                src={industry.heroImage}
                alt={industry.heroAlt}
                width={1280}
                height={960}
                className="aspect-4/3 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Context */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {industry.context.heading}
            </h2>
            <div className="mt-6 space-y-5">
              {industry.context.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {industry.context.notes.map((note) => (
                <li
                  key={note.label}
                  className="rounded-2xl border border-hairline bg-card p-6 shadow-soft"
                >
                  <h3 className="text-sm font-semibold text-foreground">{note.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Gap */}
      <section className="section-y border-y border-hairline bg-surface/60">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The gap</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {industry.gap.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {industry.gap.intro}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-hairline bg-card p-8 shadow-soft">
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                What you already have
              </h3>
              <ul className="mt-6 space-y-3">
                {industry.gap.have.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="rounded-2xl border border-hairline bg-card p-8 shadow-soft">
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                What growth now asks for
              </h3>
              <ul className="mt-6 space-y-3">
                {industry.gap.need.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stuck points */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Common patterns</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {industry.stuck.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {industry.stuck.intro}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {industry.stuck.items.map((item) => (
                <li key={item} className="flex gap-4 py-5 text-sm leading-relaxed text-foreground">
                  <Minus className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-y border-y border-hairline bg-surface/60">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Challenges</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              What tends to hold growth back — and why it matters.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.challenges.map((c, i) => (
              <li key={c.title}>
                <Reveal
                  delay={i * 60}
                  className="h-full rounded-2xl border border-hairline bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="block h-8 w-8 rounded-lg bg-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.why}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bridges */}
      <section className="section-y">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">From challenge to opportunity</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Every constraint points to a practical next move.
            </h2>
          </Reveal>
          <ul className="mt-12 space-y-5">
            {industry.bridges.map((b, i) => (
              <li key={b.challenge}>
                <Reveal
                  delay={i * 70}
                  className="grid gap-6 rounded-2xl border border-hairline bg-card p-7 shadow-soft lg:grid-cols-[1fr_auto_1fr] lg:items-center"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.challenge}</p>
                  <ArrowRight
                    className="hidden h-5 w-5 text-primary lg:block"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm leading-relaxed font-medium text-foreground">
                      {b.opportunity}
                    </p>
                    <p className="mt-2 text-xs font-semibold tracking-wide text-primary uppercase">
                      {b.area}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights */}
      <section className="surface-navy section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          {industry.insights.map((insight, i) => (
            <Reveal key={insight.title} delay={i * 100}>
              <p className="eyebrow text-navy-foreground/70">{insight.eyebrow}</p>
              <h2 className="mt-4 text-2xl leading-[1.2] font-semibold sm:text-3xl">
                {insight.title}
              </h2>
              <div className="mt-5 space-y-4">
                {insight.body.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-navy-foreground/75 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Framework */}
      <section className="section-y">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Framework</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {industry.framework.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {industry.framework.intro}
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {industry.framework.steps.map((step, i) => (
              <li key={step.label}>
                <Reveal
                  delay={i * 70}
                  className="h-full rounded-2xl border border-hairline bg-card p-6 shadow-soft"
                >
                  <span className="text-xs font-semibold tracking-widest text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Evaluate */}
      <section className="section-y border-y border-hairline bg-surface/60">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What we look at</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              How we evaluate a business in this space.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.evaluate.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 60} className="h-full rounded-2xl border border-hairline bg-card p-7">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Questions from {industry.shortName.toLowerCase()} businesses.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {industry.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-hairline">
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-y border-t border-hairline bg-surface/60">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Related industries</p>
              <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Explore other businesses we work with.
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((rel, i) => (
                <li key={rel.slug}>
                  <Reveal delay={i * 80}>
                    <Link
                      to="/industries/$slug"
                      params={{ slug: rel.slug }}
                      className="group flex h-full flex-col rounded-2xl border border-hairline bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                    >
                      <h3 className="text-lg font-semibold text-foreground">{rel.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {rel.hubCopy}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                        {rel.hubCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="industry-contact" className="surface-navy section-y">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-navy-foreground/70">Let's talk</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.9rem]">
              Tell us about your business — we'll help identify the right path.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
              You don't need to arrive with a brief. Share where things are today and what feels
              stuck, and we'll be honest about what would actually move the needle.
            </p>
            <div className="mt-10 flex justify-center">
              <Cta
                href={INQUIRY_PATH}
                variant="onNavy"
                size="lg"
                className="w-full sm:w-auto"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Cta>
            </div>
            <ContactActions tone="navy" className="mt-8 justify-center" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
