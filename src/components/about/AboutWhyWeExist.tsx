import { Reveal } from "@/components/site/Reveal";

const contrast = [
  {
    label: "What often happens",
    points: [
      "A service is chosen before the problem is defined.",
      "Channels are run in isolation from each other.",
      "Activity is reported; the business question stays unanswered.",
    ],
    tone: "muted",
  },
  {
    label: "How we approach it",
    points: [
      "The business goal and constraint are established first.",
      "Capabilities are selected only where they change the outcome.",
      "Work is judged against the business result it was meant to move.",
    ],
    tone: "primary",
  },
] as const;

export function AboutWhyWeExist() {
  return (
    <section id="why-we-exist" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why we exist</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Marketing works better when it answers a business question.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fragmented, one-size-fits-all digital work can look busy and still leave the real
            constraint untouched. It's rarely anyone's fault — it happens when the tactic is decided
            before the business is understood.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            DigitalyMarket exists to reverse that order: understand the business, diagnose where
            growth is genuinely constrained, then recommend and build only what earns its place.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {contrast.map((block, i) => (
            <Reveal
              key={block.label}
              delay={i * 90}
              className={
                block.tone === "primary"
                  ? "rounded-2xl border border-primary/25 bg-accent/60 p-6 shadow-soft sm:p-8"
                  : "rounded-2xl border border-hairline bg-card p-6 sm:p-8"
              }
            >
              <h3 className="text-sm font-semibold tracking-[0.14em] text-foreground uppercase">
                {block.label}
              </h3>
              <ul className="mt-5 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      className={
                        block.tone === "primary"
                          ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40"
                      }
                      aria-hidden="true"
                    />
                    <span
                      className={
                        block.tone === "primary" ? "text-foreground" : "text-muted-foreground"
                      }
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
