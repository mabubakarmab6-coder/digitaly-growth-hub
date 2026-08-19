import { Reveal } from "@/components/site/Reveal";

const areas = [
  "E-commerce",
  "Marketplaces",
  "Sales & Business Development",
  "Operations & CRM",
  "Digital Growth",
  "Website & Digital Projects",
];

const pillars = [
  {
    label: "Experience",
    copy: "Time spent inside sales, e-commerce, marketplace, operations and business development environments — where growth decisions carry commercial consequences.",
  },
  {
    label: "Expertise",
    copy: "A working command of modern discovery, paid acquisition, website conversion, e-commerce growth and marketplace performance.",
  },
  {
    label: "Evidence",
    copy: "DigitalyMarket is a new agency, so we don't borrow proof. What we show is our reasoning, our diagnosis and the work as it develops.",
  },
  {
    label: "Trust",
    copy: "You'll be told when something isn't worth doing. That's usually the fastest way to build a relationship worth keeping.",
  },
];

export function AboutExperience() {
  return (
    <section id="experience" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Experience &amp; expertise</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Credibility built on real business exposure.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The agency is young. The thinking behind it comes from years of working across the
            commercial side of businesses — not from a marketing playbook.
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
            >
              {area}
            </li>
          ))}
        </ul>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <li key={pillar.label}>
              <Reveal
                delay={i * 70}
                className="h-full rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift sm:p-7"
              >
                <h3 className="text-base font-semibold text-foreground">{pillar.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
