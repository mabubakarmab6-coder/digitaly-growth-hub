import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const pillars = [
  {
    label: "Experience",
    copy: "Years spent close to the business side — sales, e-commerce, marketplaces, operations and business development.",
  },
  {
    label: "Expertise",
    copy: "A working understanding of modern discovery, paid acquisition, website conversion and e-commerce growth.",
  },
  {
    label: "Evidence",
    copy: "DigitalyMarket is new, so we show our thinking openly rather than borrowing proof we haven't earned.",
  },
];

export function CredibilityBridge() {
  return (
    <section id="credibility" className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Credibility</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Want to see how we think?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore our approach, the way we frame problems and the work as it develops. We'd rather
            be judged on reasoning than on claims.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This reflects founder and professional experience, not DigitalyMarket client projects.
          </p>
          <a
            href="/#work"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Explore Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <ol className="space-y-4">
          {pillars.map((pillar, i) => (
            <li key={pillar.label}>
              <Reveal
                delay={i * 80}
                className="rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift"
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
