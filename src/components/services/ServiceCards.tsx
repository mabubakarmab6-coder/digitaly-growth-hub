import { ArrowRight, Check } from "lucide-react";
import geoImage from "@/assets/service-geo.jpg";
import paidImage from "@/assets/service-paid.jpg";
import webImage from "@/assets/service-web.jpg";
import ecommerceImage from "@/assets/service-ecommerce.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CapabilityList } from "./CapabilityList";

const services = [
  {
    no: "01",
    title: "Generative Engine Optimization",
    copy: "Improve how your business is discovered across modern search and AI-driven discovery experiences.",
    outcomes: [
      "More visibility in AI and search",
      "More qualified organic discovery",
      "Stronger digital authority",
    ],
    capabilities: [
      "GEO strategy",
      "AI search visibility",
      "Entity optimization",
      "Content optimization",
      "Topical authority",
      "Discoverability strategy",
    ],
    cta: "Explore GEO",
    href: "/services/geo",
    image: geoImage,
    alt: "Abstract knowledge graph of connected nodes representing AI search and entity discovery",
  },
  {
    no: "02",
    title: "Paid Marketing",
    copy: "Build and optimize paid campaigns around measurable business objectives.",
    outcomes: [
      "More leads",
      "More sales",
      "Faster customer acquisition",
      "Better advertising efficiency",
    ],
    capabilities: [
      "Google Ads",
      "Meta Ads",
      "Performance campaigns",
      "Retargeting",
      "Conversion tracking",
      "Campaign optimization",
    ],
    cta: "Explore Paid Marketing",
    href: "/services/paid-marketing",
    image: paidImage,
    alt: "Abstract performance marketing chart with rising curves and campaign data bars",
  },
  {
    no: "03",
    title: "Website Creation",
    copy: "Create websites that communicate value clearly and turn attention into enquiries.",
    outcomes: [
      "Professional digital presence",
      "More enquiries",
      "Better conversion",
      "Stronger brand credibility",
    ],
    capabilities: [
      "Business websites",
      "Landing pages",
      "E-commerce websites",
      "Conversion-focused UX",
      "Website redesign",
      "Analytics and tracking",
    ],
    cta: "Explore Website Creation",
    href: "/services/web-creation",
    image: webImage,
    alt: "Layered website interface layout blocks illustrating responsive web design",
  },
  {
    no: "04",
    title: "E-commerce Growth",
    copy: "Strengthen your online store and marketplace presence from visibility to conversion.",
    outcomes: [
      "Better store and marketplace visibility",
      "More sales",
      "Better conversion",
      "Stronger product and listing performance",
      "Sustainable e-commerce growth",
    ],
    capabilities: [
      "E-commerce strategy",
      "Marketplace optimization",
      "Product and listing optimization",
      "Shopify growth",
      "Amazon support",
      "Flipkart support",
      "Conversion optimization",
    ],
    cta: "Explore E-commerce Growth",
    href: "/services/ecommerce-growth",
    image: ecommerceImage,
    alt: "Abstract e-commerce product cards, shopping cart and upward growth arrow",
  },
];

export function ServiceCards() {
  return (
    <section id="core-services" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Core services</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Four ways we help businesses grow.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Each service can stand on its own. When your goals require more, we can combine
            capabilities into a broader growth system.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <li key={service.no}>
              <Reveal
                delay={i * 80}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <div className="aspect-16/9 overflow-hidden bg-surface">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary/70">
                    Service {service.no}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.copy}
                  </p>

                  <h4 className="mt-7 text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
                    Business outcomes
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-7 text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
                    Capabilities
                  </h4>
                  <CapabilityList items={service.capabilities} className="mt-4" />

                  <a
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    {service.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
