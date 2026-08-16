import { Search, MousePointerClick, LayoutTemplate, ShoppingCart, Unlink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const situations = [
  {
    icon: Search,
    title: "People aren't finding you",
    copy: "Your business is capable, but it rarely shows up where buyers now look — search and AI-assisted discovery.",
  },
  {
    icon: MousePointerClick,
    title: "Attention isn't turning into action",
    copy: "You're paying for clicks and impressions, but the enquiries or sales don't match the spend.",
  },
  {
    icon: LayoutTemplate,
    title: "Your website isn't doing its job",
    copy: "Visitors arrive, read a little and leave without a clear reason or an easy way to act.",
  },
  {
    icon: ShoppingCart,
    title: "Your store isn't reaching its potential",
    copy: "Products are live and traffic exists, but discovery, conversion or repeat purchase is falling short.",
  },
  {
    icon: Unlink,
    title: "Nothing feels connected",
    copy: "You've tried different marketing activities over time, but they never added up to one working system.",
  },
];

export function GrowthStuck() {
  return (
    <section id="growth-stuck" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Start with the problem</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Where is your growth getting stuck?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            These are situations we see often. You may recognise one, a few, or something different
            entirely — that's exactly what a first conversation is for.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {situations.map(({ icon: Icon, title, copy }, i) => (
            <li key={title}>
              <Reveal
                delay={i * 70}
                className="flex h-full gap-4 rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift sm:p-7"
              >
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
