import { Reveal } from "@/components/site/Reveal";
import founderStanding from "@/assets/founder-standing.jpg.asset.json";

const beats = [
  {
    label: "Experience",
    copy: "Years spent close to how businesses actually operate — sales, e-commerce, marketplaces, operations, CRM and business development.",
  },
  {
    label: "Lessons",
    copy: "The recurring pattern: digital work often fails not because the tactic was bad, but because nobody understood the business problem it was meant to solve.",
  },
  {
    label: "Why we exist",
    copy: "DigitalyMarket was created to close that gap — to sit on the business side of the table first, and reach for the marketing tools second.",
  },
];

export function AboutStory() {
  return (
    <section id="origin" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal>
          <figure className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-lift">
            <img
              src={founderStanding.url}
              alt="Mohammad Abubakar Siddiqui, founder of DigitalyMarket, standing in a professional setting"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover object-[50%_20%]"
            />
          </figure>
        </Reveal>

        <div>
          <Reveal className="max-w-xl">
            <p className="eyebrow">Origin</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
              Built from the business side, not the agency side.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              DigitalyMarket didn't begin as a marketing idea. It began with years of watching
              businesses buy digital services that were never connected to the outcome they actually
              needed.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-6">
            {beats.map((beat, i) => (
              <li key={beat.label}>
                <Reveal
                  delay={i * 90}
                  className="relative border-l-2 border-hairline pl-6 transition-colors duration-500 hover:border-primary/50"
                >
                  <span
                    className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <h3 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    {beat.label}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {beat.copy}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
