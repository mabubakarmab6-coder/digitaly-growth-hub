import { Search, Stethoscope, Lightbulb, Hammer, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const stages = [
  {
    no: "01",
    title: "Understand",
    copy: "The business, the market, the goal and what's realistically in the way.",
    icon: Search,
  },
  {
    no: "02",
    title: "Diagnose",
    copy: "Separate the symptom from the actual constraint on growth.",
    icon: Stethoscope,
  },
  {
    no: "03",
    title: "Recommend",
    copy: "Propose only the work that changes the outcome — and say what doesn't.",
    icon: Lightbulb,
  },
  {
    no: "04",
    title: "Build",
    copy: "Execute the digital assets, campaigns and systems the diagnosis calls for.",
    icon: Hammer,
  },
  {
    no: "05",
    title: "Optimize",
    copy: "Improve what works, retire what doesn't, and compound the result.",
    icon: TrendingUp,
  },
];

export function AboutHowWeThink() {
  return (
    <section id="how-we-think" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How we think</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            One way of working, applied to every business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            This is our operating philosophy, not a service ladder. Each stage earns the next one.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* Connecting line: vertical on mobile, horizontal from lg */}
          <div
            className="absolute top-0 left-[1.15rem] h-full w-px bg-gradient-to-b from-primary/40 via-hairline to-transparent lg:top-[1.6rem] lg:left-0 lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden="true"
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <li key={stage.no} className="relative pl-14 lg:pl-0">
                  <Reveal delay={i * 100}>
                    <span className="absolute top-0 left-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-card text-primary shadow-soft ring-4 ring-surface lg:static lg:mb-4 lg:flex">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                      {stage.no}
                    </span>
                    <h3 className="mt-1.5 text-lg font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {stage.copy}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
