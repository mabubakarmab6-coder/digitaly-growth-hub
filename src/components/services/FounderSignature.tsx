import { ArrowRight } from "lucide-react";
import founderSeated from "@/assets/founder-seated.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";

export function FounderSignature() {
  return (
    <section id="founder" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-start gap-7 rounded-3xl border border-hairline bg-card p-7 shadow-soft sm:flex-row sm:items-center sm:gap-9 sm:p-9">
          <img
            src={founderSeated.url}
            alt="Mohammad Abubakar Siddiqui, founder of DigitalyMarket, seated at his desk"
            loading="lazy"
            decoding="async"
            width={320}
            height={320}
            className="h-24 w-24 shrink-0 rounded-2xl object-cover object-[50%_25%] sm:h-32 sm:w-32"
          />
          <div>
            <p className="eyebrow">From the founder</p>
            <p className="mt-3 text-lg font-semibold text-foreground">
              Mohammad Abubakar Siddiqui
            </p>
            <p className="text-sm text-primary">Founder &amp; Growth Strategist</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A background across sales, e-commerce, marketplaces, operations and business
              development — which is why the first question here is always about the business, not
              the service.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              "Tell me what's happening. We'll work out what's worth doing."
            </p>
            <a
              href="/#founder"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Meet the Founder <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
