import { Plus } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const paths = [
  {
    goal: "Need more visibility?",
    parts: ["GEO", "Website"],
    copy: "Strengthen your digital foundation and improve how potential customers discover your business.",
  },
  {
    goal: "Need more leads?",
    parts: ["Website", "Paid Marketing"],
    copy: "Create a conversion-ready destination and drive targeted traffic toward it.",
  },
  {
    goal: "Need more online sales?",
    parts: ["E-commerce", "Paid Marketing", "GEO"],
    copy: "Combine discoverability, acquisition and conversion to support sustainable online growth.",
  },
  {
    goal: "Building a complete digital foundation?",
    parts: ["Website", "GEO", "Paid Marketing", "E-commerce"],
    copy: "Build the core digital systems required to attract, convert and grow customers.",
  },
];

export function GrowthPaths() {
  return (
    <section id="growth-system" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Growth system</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            One service can solve a problem. The right combination can build a growth system.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Digital growth rarely happens through one isolated activity. Depending on your goals,
            different capabilities can work together.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {paths.map((path, i) => (
            <li key={path.goal}>
              <Reveal
                delay={i * 80}
                className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-9"
              >
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">{path.goal}</h3>
                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3">
                  {path.parts.map((part, index) => (
                    <span key={part} className="flex items-center gap-2">
                      {index > 0 && (
                        <Plus className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
                      )}
                      <span className="rounded-xl border border-primary/20 bg-accent/60 px-3.5 py-2 text-sm font-semibold text-foreground">
                        {part}
                      </span>
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {path.copy}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <p className="text-sm text-muted-foreground">
            These are examples, not predefined packages. Your combination depends entirely on your
            goals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
