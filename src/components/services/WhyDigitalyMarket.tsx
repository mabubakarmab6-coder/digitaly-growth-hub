import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const pillars = [
  {
    title: "E-commerce experience",
    copy: "Hands-on work running online stores, listings and product performance.",
  },
  {
    title: "Marketplace experience",
    copy: "Practical exposure to how marketplaces reward visibility and conversion.",
  },
  {
    title: "Sales & business development",
    copy: "Understanding how enquiries actually turn into customers.",
  },
  {
    title: "Operations & CRM",
    copy: "Experience with the systems and follow-up behind reliable growth.",
  },
  {
    title: "Entrepreneurship",
    copy: "A builder's view of cost, risk and what a business can realistically commit to.",
  },
];

export function WhyDigitalyMarket() {
  return (
    <section id="why" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Why DigitalyMarket</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Marketing experience is useful. Business experience is better.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We've worked close to the business side — selling, managing marketplaces, working with
            customers, improving operations and building growth initiatives. That experience shapes
            how we approach digital marketing today.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This reflects founder and professional experience, not DigitalyMarket client projects.
          </p>
          <a
            href="/abubakar"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Meet Abubakar <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <ul className="space-y-4">
          {pillars.map((pillar, i) => (
            <li key={pillar.title}>
              <Reveal
                delay={i * 70}
                className="rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift"
              >
                <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
