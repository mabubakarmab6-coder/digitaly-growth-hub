import { Eye, Users, ShoppingCart, Layers } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CapabilityList } from "./CapabilityList";

const outcomes = [
  {
    icon: Eye,
    title: "More visibility",
    copy: "For businesses that need to be discovered.",
    capabilities: ["GEO", "Website", "Content", "E-commerce"],
  },
  {
    icon: Users,
    title: "More leads",
    copy: "For businesses that need qualified enquiries.",
    capabilities: ["Paid Marketing", "Website", "GEO"],
  },
  {
    icon: ShoppingCart,
    title: "More sales",
    copy: "For businesses focused on revenue growth.",
    capabilities: ["Paid Marketing", "E-commerce", "Website"],
  },
  {
    icon: Layers,
    title: "Better digital foundation",
    copy: "For businesses that need stronger digital infrastructure.",
    capabilities: ["Website", "GEO", "E-commerce"],
  },
];

export function ServiceOutcomes() {
  return (
    <section id="outcomes" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Outcomes</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Start with what you want to achieve.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            These are illustrative pathways rather than fixed packages — a way to see which
            capabilities usually support each goal.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {outcomes.map(({ icon: Icon, title, copy, capabilities }, i) => (
            <li key={title}>
              <Reveal
                delay={i * 80}
                className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <CapabilityList items={capabilities} className="mt-6" />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
