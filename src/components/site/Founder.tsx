import founderImage from "@/assets/founder-placeholder.jpg";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

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
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-hairline bg-card shadow-soft">
            <img
              src={founderImage}
              alt="Placeholder portrait frame for Mohammad Abubakar, Founder of DigitalyMarket"
              loading="lazy"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-semibold tracking-tight text-navy-foreground/80">
                MA
              </span>
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-navy/70 px-5 py-3 text-xs text-navy-foreground/80 backdrop-blur-sm">
              Professional portrait coming soon
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Founder</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Meet the person behind the growth mindset.
          </h2>
          <p className="mt-6 text-lg font-semibold text-foreground">Mohammad Abubakar</p>
          <p className="text-sm text-primary">Founder &amp; Growth Strategist</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Abubakar's career has moved across sales, e-commerce, marketplaces, operations, business
            development and entrepreneurship. DigitalyMarket brings those experiences together into
            a modern approach to digital growth.
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
            <Cta href="#contact" size="lg">
              Explore Abubakar <ArrowRight className="h-4 w-4" />
            </Cta>
            <Cta href="#contact" variant="outline" size="lg">
              Looking to Hire?
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
