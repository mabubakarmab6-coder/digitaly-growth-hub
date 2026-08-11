import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";

const stages = [
  {
    no: "01",
    title: "Discover",
    copy: "Understand your business, audience, goals and current digital position.",
  },
  {
    no: "02",
    title: "Diagnose",
    copy: "Identify what's working, what's missing and where the biggest opportunities are.",
  },
  {
    no: "03",
    title: "Recommend",
    copy: "Determine which capability or combination of capabilities makes sense.",
  },
  {
    no: "04",
    title: "Build & execute",
    copy: "Create, launch and implement the agreed solution.",
  },
  {
    no: "05",
    title: "Optimize",
    copy: "Use data, feedback and learning to improve what works.",
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            The service comes after the strategy.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We don't start by trying to sell you everything. We first understand the business,
            identify the opportunity and recommend the most practical path.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {stages.map((stage, i) => (
            <li key={stage.no}>
              <Reveal
                delay={i * 80}
                className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-primary/70">
                  {stage.no}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12">
          <Cta href="#contact" size="lg">
            Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
