import { ArrowRight, Compass } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import heroEcosystem from "@/assets/hero-ecosystem.jpg";

const arc = ["Business", "Diagnosis", "Growth"];

export function AboutHero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="max-w-xl">
          <p className="eyebrow">About DigitalyMarket</p>
          <h1 className="mt-5 text-[2.15rem] leading-[1.08] font-semibold text-foreground sm:text-5xl lg:text-[3.4rem]">
            Growth starts with understanding{" "}
            <span className="text-gradient-accent">the business behind it.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            DigitalyMarket is a digital growth partner built around a simple conviction: the
            business problem comes first, and the marketing decision comes after it. We're a young
            agency with experienced thinking behind it — and we'd rather be judged on how we reason
            than on how loudly we market ourselves.
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
            <Cta href="#contact" size="lg" className="w-full sm:w-auto">
              Start a Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
            <Cta href="#how-we-think" variant="outline" size="lg" className="w-full sm:w-auto">
              <Compass className="h-4 w-4" aria-hidden="true" /> See How We Think
            </Cta>
          </div>
        </div>

        <Reveal delay={120} className="relative">
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/50 blur-2xl"
            aria-hidden="true"
          />
          <figure className="overflow-hidden rounded-[1.75rem] border border-hairline bg-card shadow-lift">
            <img
              src={heroEcosystem}
              alt="Abstract visual of a connected digital growth ecosystem linking discovery, acquisition and conversion"
              loading="eager"
              decoding="async"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="border-t border-hairline p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
              A growth system is only as good as the understanding it's built on.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
