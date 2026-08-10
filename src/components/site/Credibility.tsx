import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  "E-commerce",
  "Marketplace Experience",
  "Sales & Business Development",
  "Operations & CRM",
  "Digital Growth",
];

export function Credibility() {
  return (
    <section className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Built on real-world business experience.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            DigitalyMarket brings together experience across e-commerce, marketplaces, sales,
            operations, CRM, business development and entrepreneurship.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <li key={pillar}>
              <Reveal
                delay={i * 70}
                className="h-full rounded-2xl border border-hairline bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="block h-8 w-8 rounded-lg bg-accent" aria-hidden="true" />
                <h3 className="mt-5 text-sm font-semibold text-foreground">{pillar}</h3>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <a
            href="#founder"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Explore Abubakar's Experience <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
