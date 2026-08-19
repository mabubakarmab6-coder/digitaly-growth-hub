import { ArrowRight } from "lucide-react";
import founderSeated from "@/assets/founder-seated.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";

export function AboutFounder() {
  return (
    <section id="founder" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-hairline bg-card shadow-lift">
            <img
              src={founderSeated.url}
              alt="Mohammad Abubakar Siddiqui, founder of DigitalyMarket, seated at his desk"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover object-[50%_28%]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-navy/0 px-5 pt-10 pb-4 text-xs font-medium text-navy-foreground/90">
              Mohammad Abubakar Siddiqui — Founder &amp; Growth Strategist
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={110}>
          <p className="eyebrow">Founder</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            The person accountable for how we think.
          </h2>
          <p className="mt-6 text-lg font-semibold text-foreground">
            Mohammad Abubakar Siddiqui
          </p>
          <p className="text-sm text-primary">Founder &amp; Growth Strategist</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            A career built across sales, e-commerce, marketplaces, operations, CRM and business
            development — which is why the first question at DigitalyMarket is always about the
            business, not the service.
          </p>
          <blockquote className="mt-6 max-w-xl border-l-2 border-primary/40 pl-5 text-base leading-relaxed text-foreground italic">
            "Tell me what's happening in the business. We'll work out what's worth doing."
          </blockquote>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href="/#founder" variant="outline" size="lg" className="w-full sm:w-auto">
              Meet Mohammad Abubakar Siddiqui{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
