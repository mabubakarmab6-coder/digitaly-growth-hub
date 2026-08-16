import { Search, Megaphone, Globe, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const nodes = [
  { icon: Search, label: "GEO", copy: "Discovery across search and AI answers." },
  { icon: Megaphone, label: "Paid Marketing", copy: "Reach and demand, on demand." },
  { icon: Globe, label: "Website Creation", copy: "The place where interest becomes action." },
  { icon: ShoppingBag, label: "E-commerce Growth", copy: "From product discovery to repeat buyers." },
];

export function CapabilityEcosystem() {
  return (
    <section id="ecosystem" className="surface-navy section-y">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-navy-foreground/70">Ecosystem</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.6rem]">
            Growth rarely happens in isolation.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            The right capabilities can work together — but only when they're right for your
            business. This is a contextual ecosystem, not a package.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {nodes.slice(0, 2).map(({ icon: Icon, label, copy }, i) => (
              <li key={label}>
                <Reveal
                  delay={i * 80}
                  className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 transition-colors duration-500 hover:border-navy-foreground/35"
                >
                  <Icon className="h-5 w-5 text-navy-foreground/80" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{copy}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal
            delay={120}
            className="mx-auto flex aspect-square w-44 items-center justify-center rounded-full border border-navy-foreground/25 bg-navy-foreground/10 p-6 text-center sm:w-52"
          >
            <p className="text-sm font-semibold tracking-wide">Your business growth</p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {nodes.slice(2).map(({ icon: Icon, label, copy }, i) => (
              <li key={label}>
                <Reveal
                  delay={i * 80}
                  className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 transition-colors duration-500 hover:border-navy-foreground/35"
                >
                  <Icon className="h-5 w-5 text-navy-foreground/80" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{copy}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center text-sm text-navy-foreground/60">
          Some businesses need one capability. Some need two. Very few need all four at once.
        </p>
      </div>
    </section>
  );
}
