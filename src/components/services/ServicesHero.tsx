import { ArrowRight, Search, Megaphone, Globe, ShoppingBag, Compass } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/components/site/constants";

const nodes = [
  { icon: Search, label: "Discover", desc: "Be found by the right people" },
  { icon: Megaphone, label: "Acquire", desc: "Reach demand that matters" },
  { icon: Globe, label: "Convert", desc: "Turn interest into action" },
  { icon: ShoppingBag, label: "Grow", desc: "Build repeatable momentum" },
];

const arc = ["Problem", "Opportunity", "Growth"];

export function ServicesHero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="max-w-xl">
          <p className="eyebrow">What we can help you grow</p>
          <h1 className="mt-5 text-[2.15rem] leading-[1.08] font-semibold text-foreground sm:text-5xl lg:text-[3.4rem]">
            Growth doesn't start with a service. It starts with{" "}
            <span className="text-gradient-accent">understanding the problem.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us where your business is getting stuck. We'll understand the problem first, then
            recommend the right growth path — not a package you don't need.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-2.5">
            {arc.map((step, i) => (
              <li key={step} className="flex items-center gap-2.5">
                <span className="rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground">
                  {step}
                </span>
                {i < arc.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact" size="lg">
              Start My Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
            <Cta href="#capabilities" variant="outline" size="lg">
              <Compass className="h-4 w-4" aria-hidden="true" /> Explore Our Capabilities
            </Cta>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            You don't need to know which service you need.{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Just tell us what's happening.
            </a>
          </p>
        </div>

        <Reveal delay={120} className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/50 blur-2xl"
            aria-hidden="true"
          />
          <div className="rounded-[1.75rem] border border-hairline bg-card p-6 shadow-lift sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary/70 uppercase">
              The growth journey
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {nodes.map(({ icon: Icon, label, desc }, i) => (
                <li
                  key={label}
                  className="rounded-xl border border-hairline bg-surface/70 p-4 transition-colors duration-300 hover:border-primary/30"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-primary/20 bg-accent/60 p-4">
              <p className="text-sm font-semibold text-foreground">
                Capabilities are chosen after we understand the business — never before.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
