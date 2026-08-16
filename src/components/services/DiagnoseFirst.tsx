import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const stages = [
  { no: "01", title: "Understand", copy: "Your business, customers, goals and current position." },
  { no: "02", title: "Diagnose", copy: "Find the real constraint, not the obvious symptom." },
  { no: "03", title: "Recommend", copy: "Only what genuinely moves the goal forward." },
  { no: "04", title: "Build", copy: "Execute the agreed solution properly." },
  { no: "05", title: "Optimize", copy: "Learn from the data and improve what works." },
];

export function DiagnoseFirst() {
  return (
    <section id="how-we-think" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Diagnose first</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            We don't start with a service. We start with the business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            You don't need to know which capability you need before contacting us. Working out what
            actually makes sense is part of the job.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {stages.map((stage, i) => (
            <li key={stage.no} className="relative">
              <Reveal
                delay={i * 70}
                className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-primary/70">
                  {stage.no}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.copy}</p>
              </Reveal>
              {i < stages.length - 1 && (
                <ArrowRight
                  className="absolute top-1/2 -right-3 hidden h-4 w-4 -translate-y-1/2 text-primary/40 xl:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
