import { ArrowRight, Compass, Search, Megaphone, Globe, ShoppingBag, TrendingUp } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";

const nodes = [
  { icon: Search, label: "GEO", desc: "AI & search discovery" },
  { icon: Megaphone, label: "Paid Marketing", desc: "Demand & acquisition" },
  { icon: Globe, label: "Website", desc: "Conversion destination" },
  { icon: ShoppingBag, label: "E-commerce", desc: "Store & marketplace" },
];

export function ServicesHero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="max-w-xl">
          <p className="eyebrow">Digital Growth Services</p>
          <h1 className="mt-5 text-[2.4rem] leading-[1.06] font-semibold text-foreground sm:text-5xl lg:text-[3.4rem]">
            Digital solutions built around{" "}
            <span className="text-gradient-accent">your growth goals.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose the capability you need — or bring us the business problem. We'll help identify
            the right digital path for where you want to go.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact" size="lg">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Cta>
            <Cta href="#not-sure" variant="outline" size="lg">
              <Compass className="h-4 w-4" aria-hidden="true" /> I'm Not Sure What I Need
            </Cta>
          </div>
        </div>

        <Reveal delay={120} className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/50 blur-2xl"
            aria-hidden="true"
          />
          <div className="rounded-[1.75rem] border border-hairline bg-card p-6 shadow-lift sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary/70 uppercase">
              The growth system
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {nodes.map(({ icon: Icon, label, desc }) => (
                <li
                  key={label}
                  className="rounded-xl border border-hairline bg-surface/70 p-4 transition-colors duration-300 hover:border-primary/30"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-accent/60 p-4">
              <TrendingUp className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground">
                Business growth — measured on your terms
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
