import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";

const journey = [
  "Sales",
  "E-commerce",
  "Marketplaces",
  "Operations & CRM",
  "Business Development",
  "Entrepreneurship",
  "Digital Growth",
];

export function WhyUs() {
  return (
    <section id="about" className="surface-navy section-y">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-navy-foreground/70">Why DigitalyMarket</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.75rem]">
            Marketing experience is useful.
            <span className="block text-navy-muted">Business experience is better.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            We've worked close to the business side — selling, managing marketplaces, working with
            customers, improving operations and building growth initiatives. That experience shapes
            how we approach digital marketing today.
          </p>
          <Cta href="#founder" variant="onNavy" size="lg" className="mt-9">
            Meet Abubakar <ArrowRight className="h-4 w-4" />
          </Cta>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-navy-foreground/50">
            This is founder experience across previous roles and ventures — not a list of
            DigitalyMarket clients.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="relative border-l border-navy-foreground/20 pl-8">
            {journey.map((step, i) => (
              <li key={step} className="relative pb-8 last:pb-0">
                <span
                  className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-navy-foreground/60"
                  aria-hidden="true"
                />
                <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-navy-foreground/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-lg font-medium tracking-tight">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
