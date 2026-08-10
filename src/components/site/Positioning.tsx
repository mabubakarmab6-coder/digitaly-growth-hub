import { Sparkles, Target, Layout, ShoppingBag } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Sparkles,
    title: "GEO",
    copy: "Get discovered across modern search and AI-driven discovery.",
  },
  {
    icon: Target,
    title: "Paid Marketing",
    copy: "Reach the right customers with performance-focused campaigns.",
  },
  {
    icon: Layout,
    title: "Web Creation",
    copy: "Build digital experiences that communicate value and generate enquiries.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    copy: "Strengthen online visibility, conversion and growth.",
  },
];

export function Positioning() {
  return (
    <section className="section-y border-t border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <h2 className="max-w-md text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Growth shouldn't start with a marketing package.
          </h2>
          <p className="max-w-xl self-end text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every business has different challenges, customers and growth opportunities.
            DigitalyMarket brings together strategy, technology and execution to build the right
            digital growth system for your business.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <li key={pillar.title}>
              <Reveal
                delay={i * 80}
                className="group h-full bg-card p-7 transition-colors duration-300 hover:bg-accent/40"
              >
                <pillar.icon
                  className="h-6 w-6 text-primary transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
