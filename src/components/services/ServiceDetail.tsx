import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { INQUIRY_PATH } from "@/components/site/constants";
import type { ServiceContent } from "@/data/services";

export function ServiceDetail({ service }: { service: ServiceContent }) {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow section-y">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/services" className="transition-colors hover:text-foreground">
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-foreground">{service.eyebrow}</span>
            </nav>
            <p className="eyebrow mt-8">{service.eyebrow}</p>
            <h1 className="mt-4 text-[2.2rem] leading-[1.08] font-semibold text-foreground sm:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta href={INQUIRY_PATH} size="lg">
                Start My Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Cta>
              <Cta href="/services#capabilities" variant="outline" size="lg">
                See All Capabilities <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What it involves */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">The work</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {service.whatItIsHeading}
            </h2>
          </Reveal>
          <Reveal>
            <ul className="space-y-5">
              {service.whatItIs.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Signals */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Diagnosis</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {service.signalsHeading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.signals.map((signal) => (
              <Reveal key={signal.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{signal.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-y">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {service.approachHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We understand the business before recommending anything. Nothing here is sold as a
              fixed package — the sequence depends on what the diagnosis finds.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {service.approach.map((stage, i) => (
              <Reveal key={stage.title}>
                <li className="h-full rounded-2xl border border-border p-6">
                  <span className="text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes + evaluate */}
      <section className="section-y surface-navy">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-3xl leading-[1.15] font-semibold sm:text-4xl">
              {service.outcomesHeading}
            </h2>
            <ul className="mt-8 space-y-4">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-base leading-relaxed text-navy-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-navy-muted">
              DigitalyMarket is a new agency. We publish no invented client results — the outcomes
              above describe what this work is designed to achieve, judged against your own baseline.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl leading-[1.15] font-semibold sm:text-4xl">
              {service.evaluateHeading}
            </h2>
            <ul className="mt-8 space-y-4">
              {service.evaluate.map((e) => (
                <li key={e} className="flex gap-3 text-base leading-relaxed text-navy-muted">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Fit */}
      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold text-foreground">This usually fits</h2>
              <ul className="mt-6 space-y-4">
                {service.fitFor.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold text-foreground">This is the wrong starting point if</h2>
              <ul className="mt-6 space-y-4">
                {service.notFitFor.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-y bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              {service.eyebrow} questions
            </h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="section-y">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
              Not sure this is the right starting point?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Most businesses arrive with a problem, not a service in mind. Describe what's happening
              and we'll tell you honestly where the constraint likely sits — even if the answer isn't
              this capability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={INQUIRY_PATH} size="lg">
                Start My Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Cta>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <span className="text-muted-foreground">Related capabilities:</span>
              {service.related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}` as string}
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
