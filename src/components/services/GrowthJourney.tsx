import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const steps = [
  { label: "Discover", copy: "Be found when people look." },
  { label: "Acquire", copy: "Reach the right demand." },
  { label: "Convert", copy: "Make action easy." },
  { label: "Grow", copy: "Build repeatable momentum." },
];

export function GrowthJourney() {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Connected journey</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Discover → Acquire → Convert → Grow
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A way of thinking about growth, not a mandatory funnel. Most businesses only need work
            in one or two places at a time.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.label} className="relative">
              <Reveal
                delay={i * 80}
                className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-6 shadow-soft"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
              </Reveal>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute top-1/2 -right-3 hidden h-4 w-4 -translate-y-1/2 text-primary/40 lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          If your business already sells through marketplaces, that presence sits across{" "}
          <span className="font-medium text-foreground">Discover, Convert and Grow</span> at the
          same time — which is where{" "}
          <Link
            to="/services/marketplace-optimization"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            marketplace optimization
          </Link>{" "}
          fits into the same journey.
        </p>
      </div>
    </section>
  );
}

