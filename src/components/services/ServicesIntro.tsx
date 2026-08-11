import { Reveal } from "@/components/site/Reveal";

const steps = [
  { label: "Business goal", desc: "What you actually want to achieve." },
  { label: "Right strategy", desc: "The approach that fits your market." },
  { label: "Right capabilities", desc: "Only what genuinely moves the goal." },
  { label: "Better execution", desc: "Built, launched and measured properly." },
  { label: "Growth", desc: "Compounding results, not one-off activity." },
];

export function ServicesIntro() {
  return (
    <section className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="max-w-xl">
          <p className="eyebrow">The approach</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            You don't need more marketing. You need the right digital system.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every business has different customers, challenges and opportunities. That's why we
            don't start with a fixed package. We start by understanding what you're trying to
            achieve.
          </p>
        </Reveal>

        <ol className="relative space-y-4">
          {steps.map((step, i) => (
            <li key={step.label}>
              <Reveal
                delay={i * 80}
                className="flex items-start gap-4 rounded-2xl border border-hairline bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift sm:p-6"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{step.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
