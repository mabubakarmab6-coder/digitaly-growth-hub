import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

const examples = [
  {
    context: "Manufacturing & B2B",
    example:
      "Capability discovery and credible technical content often matter more than volume of traffic.",
    slug: "manufacturing-b2b",
  },
  {
    context: "Professional Services",
    example: "Expertise visibility and trust usually shape enquiries more than ad spend alone.",
    slug: "professional-services",
  },
  {
    context: "Local Businesses",
    example: "Local discovery and an effortless path to booking or calling tend to decide outcomes.",
    slug: "local-business",
  },
  {
    context: "E-commerce",
    example:
      "Product discovery, store experience and repeat purchase behaviour often move together.",
    slug: "ecommerce",
  },
] as const;

export function BusinessContext() {
  return (
    <section id="context" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Business context</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            The capabilities stay consistent. The way we apply them changes.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Illustrative examples of how the same capability can look different depending on the
            business — not predefined packages.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {examples.map((item, i) => (
            <li key={item.context}>
              <Reveal
                delay={i * 70}
                className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift sm:p-7"
              >
                <h3 className="text-base font-semibold text-foreground">{item.context}</h3>
                <p className="mt-1 text-[0.7rem] font-semibold tracking-[0.16em] text-primary/70 uppercase">
                  Example
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.example}</p>
                <Link
                  to="/industries/$slug"
                  params={{ slug: item.slug }}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  See this industry <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <Link
            to="/industries"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Explore all industries <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
