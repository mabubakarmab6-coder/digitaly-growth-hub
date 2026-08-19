import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

const audiences = [
  {
    title: "Manufacturers & B2B",
    copy: "Longer buying cycles, technical products and enquiry quality that matters more than volume.",
    slug: "manufacturing-b2b",
  },
  {
    title: "Professional & Service Businesses",
    copy: "Where visible expertise and trust shape enquiries more than spend alone.",
    slug: "professional-services",
  },
  {
    title: "Local Businesses",
    copy: "Local discovery and an effortless path to a call, booking or visit.",
    slug: "local-business",
  },
  {
    title: "E-commerce Businesses",
    copy: "Product discovery, store experience and repeat purchase moving together.",
    slug: "ecommerce",
  },
] as const;

export function AboutWhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Who we work with</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            We adapt the growth solution to the business — not the other way around.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We work with businesses globally, with a strong understanding of the Indian market. What
            matters is whether the problem is real and the work is proportionate to it.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {audiences.map((item, i) => (
            <li key={item.slug}>
              <Reveal delay={i * 70} className="h-full">
                <Link
                  to="/industries/$slug"
                  params={{ slug: item.slug }}
                  className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-7"
                >
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    See this industry <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
