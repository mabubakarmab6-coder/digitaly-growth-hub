import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import geoImage from "@/assets/service-geo.jpg";
import paidImage from "@/assets/service-paid.jpg";
import webImage from "@/assets/service-web.jpg";
import ecommerceImage from "@/assets/service-ecommerce.jpg";
import marketplaceAsset from "@/assets/service-marketplace.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";



const capabilities = [
  {
    no: "01",
    journey: "Discover",
    problem:
      "Your customers are searching differently — but your business may not be showing up where decisions are being made.",
    title: "Generative Engine Optimization",
    outcome:
      "Improve how your business is understood and discovered across search and AI-driven discovery.",
    cta: "Explore GEO",
    href: "/services/geo",
    image: geoImage,
    alt: "Abstract knowledge graph of connected nodes representing search and AI discovery",
  },
  {
    no: "02",
    journey: "Acquire",
    problem:
      "You're paying for attention, but the right people aren't consistently taking action.",
    title: "Paid Marketing",
    outcome: "Create a more focused path from targeted attention to meaningful action.",
    cta: "Explore Paid Marketing",
    href: "/services/paid-marketing",
    image: paidImage,
    alt: "Abstract performance marketing visual with rising curves and campaign data bars",
  },
  {
    no: "03",
    journey: "Convert",
    problem:
      "Your website may be getting visitors without turning enough of them into enquiries or customers.",
    title: "Website Creation",
    outcome:
      "Create a digital experience that makes it easier for the right visitors to understand, trust and act.",
    cta: "Explore Website Creation",
    href: "/services/web-creation",
    image: webImage,
    alt: "Layered website interface blocks illustrating a conversion-focused web layout",
  },
  {
    no: "04",
    journey: "Grow",
    problem:
      "Your online store has potential, but the path from discovery to purchase and repeat business isn't working hard enough.",
    title: "E-commerce Growth",
    outcome:
      "Build a stronger e-commerce growth system from discovery through conversion and retention.",
    cta: "Explore E-commerce Growth",
    href: "/services/ecommerce-growth",
    image: ecommerceImage,
    alt: "Abstract commerce visual with product cards, cart and an upward growth arrow",
  },
] as const;

export function CapabilityCards() {
  return (
    <section id="capabilities" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Four capabilities. One growth journey.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Each capability answers a different business problem. They can work alone or together —
            and none of them is a default recommendation.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {capabilities.map((c, i) => (
            <li key={c.no}>
              <Reveal
                delay={i * 80}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <div className="relative aspect-16/9 overflow-hidden bg-surface">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase backdrop-blur">
                    {c.no} · {c.journey}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Business problem
                  </p>
                  <p className="mt-2 text-base font-medium text-foreground">{c.problem}</p>

                  <h3 className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {c.outcome}
                  </p>

                  <Link
                    to={c.href}
                    className="mt-8 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
