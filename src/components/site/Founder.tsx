import founderSeated from "@/assets/founder-seated.jpg.asset.json";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";
import { INQUIRY_PATH } from "./constants";

const highlights = [
  "E-commerce",
  "Growth Marketing",
  "Business Development",
  "Marketplace Experience",
  "Digital Strategy",
];

export function Founder() {
  return (
    <section id="founder" className="section-y border-t border-hairline bg-surface/60">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-hairline bg-card shadow-lift">
            <div className="aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
              <img
                src={founderSeated.url}
                alt="DigitalyMarket founder Mohammad Abubakar seated at his desk in a professional setting"
                loading="lazy"
                decoding="async"
                width={1024}
                height={1536}
                className="h-full w-full object-cover object-[50%_28%]"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-navy/0 px-5 pt-10 pb-4 text-xs font-medium text-navy-foreground/90">
              Mohammad Abubakar — Founder &amp; Growth Strategist
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Agency Leadership Grounded in Commercial Execution.
          </h2>
          <p className="mt-6 text-lg font-semibold text-foreground">Mohammad Abubakar</p>
          <p className="text-sm text-primary">Founder &amp; Principal Growth Strategist</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            DigitalyMarket was founded on a direct principle: digital marketing should be measured
            by commercial business outcomes, customer acquisition economics, and qualified pipeline.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            With a background spanning commercial sales, e-commerce, marketplace scale, B2B operations,
            and multi-channel growth systems, Abubakar leads the agency's strategic advisory and
            growth architecture for ambitious clients.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href={INQUIRY_PATH} size="lg">
              Start a Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
            <Cta href="/about" variant="outline" size="lg">
              Our Strategic Methodology
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
