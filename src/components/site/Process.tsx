import { Reveal } from "./Reveal";

const stages = [
  { no: "01", title: "Discover", copy: "Understand your business, audience and goals." },
  { no: "02", title: "Strategy", copy: "Identify the right opportunities and growth channels." },
  { no: "03", title: "Build", copy: "Create the required digital assets and campaigns." },
  { no: "04", title: "Optimize", copy: "Use data and feedback to improve performance." },
  { no: "05", title: "Grow", copy: "Continue improving what works and scaling intelligently." },
];

export function Process() {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            No complicated process.
            <span className="block text-muted-foreground">Just a clear path to growth.</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute top-[1.35rem] left-[0.6rem] h-full w-px bg-hairline lg:top-[1.35rem] lg:left-0 lg:h-px lg:w-full"
            aria-hidden="true"
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {stages.map((stage, i) => (
              <li key={stage.no} className="relative pl-10 lg:pl-0">
                <Reveal delay={i * 100}>
                  <span
                    className="absolute top-3.5 left-0 h-3 w-3 rounded-full bg-primary ring-4 ring-background lg:static lg:block"
                    aria-hidden="true"
                  />
                  <div className="lg:mt-3">
                    <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                      {stage.no}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {stage.copy}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
