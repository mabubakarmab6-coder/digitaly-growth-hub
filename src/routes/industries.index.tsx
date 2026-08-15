import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { ContactActions } from "@/components/site/ContactActions";
import { WHATSAPP_URL } from "@/components/site/constants";
import { industries } from "@/data/industries";

const title = "Industries We Work With | Digital Growth by Industry | DigitalyMarket";
const description =
  "Digital growth built around your industry — manufacturing and B2B, professional services, local and service businesses, and e-commerce brands.";
const url = "https://digitaly-growth-hub.lovable.app/industries";

export const Route = createFileRoute("/industries/")({
  component: IndustriesHub,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries DigitalyMarket works with",
          itemListElement: industries.map((industry, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: industry.name,
            url: `https://digitaly-growth-hub.lovable.app/industries/${industry.slug}`,
          })),
        }),
      },
    ],
  }),
});

const principles = [
  {
    title: "Context before tactics",
    copy: "How your customers decide matters more than which channel is currently fashionable.",
  },
  {
    title: "Honest about fit",
    copy: "If something isn't the right lever for your stage, we'll say so rather than sell it.",
  },
  {
    title: "Built around your reality",
    copy: "Cycle length, margins, geography and team capacity all shape what actually works.",
  },
];

function IndustriesHub() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <section className="border-b border-hairline bg-surface/50">
          <div className="container-page py-16 sm:py-20 lg:py-28">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Industries</p>
              <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                Different businesses grow in{" "}
                <span className="text-primary">different ways.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                A manufacturer being shortlisted by a procurement team and a local service business
                being chosen in a two-minute search are not the same problem. We start from how your
                customers actually decide, then build the digital system around it.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Cta href="#industry-list" size="lg">
                  Find your industry <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Cta>
                <Cta href="/services" variant="outline" size="lg">
                  Explore Services
                </Cta>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="industry-list" className="section-y">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Where we work</p>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
                Four kinds of businesses we understand well.
              </h2>
            </Reveal>

            <ul className="mt-14 grid gap-6 sm:grid-cols-2">
              {industries.map((industry, i) => (
                <li key={industry.slug}>
                  <Reveal delay={i * 90} className="h-full">
                    <Link
                      to="/industries/$slug"
                      params={{ slug: industry.slug }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                    >
                      <div className="aspect-16/9 overflow-hidden">
                        <img
                          src={industry.cardImage}
                          alt={industry.cardAlt}
                          loading="lazy"
                          width={1024}
                          height={576}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {industry.hubCopy}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                          {industry.hubCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-y border-y border-hairline bg-surface/60">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">How we approach it</p>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
                Industry knowledge is a starting point, not a template.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
              {principles.map((p, i) => (
                <li key={p.title}>
                  <Reveal delay={i * 80} className="h-full rounded-2xl border border-hairline bg-card p-7">
                    <span className="block h-8 w-8 rounded-lg bg-accent" aria-hidden="true" />
                    <h3 className="mt-5 text-base font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="surface-navy section-y">
          <div className="container-page">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-navy-foreground/70">Don't see your industry?</p>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.9rem]">
                The principles travel further than the labels.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                If your business isn't listed here, that doesn't mean we can't help. Tell us how your
                customers find and choose you, and we'll tell you honestly whether we're a good fit.
              </p>
              <div className="mt-10 flex justify-center">
                <Cta
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
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
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
