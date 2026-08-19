import { Reveal } from "@/components/site/Reveal";

const beliefs = [
  {
    no: "01",
    title: "Business before tactics",
    copy: "A channel is a means, never the starting point. If we can't explain how the work moves the business, it shouldn't be on the plan.",
  },
  {
    no: "02",
    title: "Clarity before complexity",
    copy: "Most growth problems get simpler once they're framed properly. Complexity is added only when the situation genuinely demands it.",
  },
  {
    no: "03",
    title: "Useful work over vanity metrics",
    copy: "Impressions and follower counts are easy to grow. We'd rather move enquiries, orders and the quality of demand.",
  },
  {
    no: "04",
    title: "Honest positioning",
    copy: "DigitalyMarket is new. We say so. Credibility comes from experience and reasoning we can actually stand behind.",
  },
  {
    no: "05",
    title: "Long-term value over short-term noise",
    copy: "The goal is a growth system a business can keep — not a spike that disappears when the spend stops.",
  },
];

export function AboutBeliefs() {
  return (
    <section id="beliefs" className="section-y">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
              Principles that decide what we recommend.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              These aren't slogans. They're the filters we apply before suggesting any piece of
              work.
            </p>
          </Reveal>

          <ol className="divide-y divide-hairline border-t border-hairline">
            {beliefs.map((belief, i) => (
              <li key={belief.no}>
                <Reveal
                  delay={i * 70}
                  className="group flex flex-col gap-2 py-7 sm:flex-row sm:gap-8"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary sm:pt-1.5">
                    {belief.no}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {belief.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {belief.copy}
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
