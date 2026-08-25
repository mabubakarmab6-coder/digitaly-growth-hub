import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { INQUIRY_PATH } from "./constants";

const services = [
  {
    no: "01",
    title: "Generative Engine Optimization",
    copy: "Improve how your business is discovered across modern search and AI-driven discovery experiences.",
    capabilities: [
      "GEO strategy",
      "AI search visibility",
      "Entity and content optimization",
      "Topical authority",
      "Discoverability strategy",
    ],
    cta: "Explore GEO",
  },
  {
    no: "02",
    title: "Paid Marketing",
    copy: "Build and optimize paid campaigns around measurable business objectives.",
    capabilities: [
      "Google Ads",
      "Meta Ads",
      "Performance campaigns",
      "Retargeting",
      "Conversion tracking",
      "Campaign optimization",
    ],
    cta: "Explore Paid Marketing",
  },
  {
    no: "03",
    title: "Website Creation",
    copy: "Create websites that communicate value clearly and turn attention into enquiries.",
    capabilities: [
      "Business websites",
      "Landing pages",
      "E-commerce websites",
      "Conversion-focused UX",
      "Website redesign",
      "Analytics and tracking",
    ],
    cta: "Explore Web Creation",
  },
  {
    no: "04",
    title: "E-commerce Growth",
    copy: "Strengthen your online store and marketplace presence from visibility to conversion.",
    capabilities: [
      "E-commerce strategy",
      "Marketplace optimization",
      "Product and listing optimization",
      "Shopify growth",
      "Amazon, Etsy and marketplace support",
      "Conversion optimization",
    ],
    cta: "Explore E-commerce",
  },
  {
    no: "05",
    title: "Marketplace Optimization",
    copy: "Make your marketplace presence discoverable, persuasive and optimised for conversion.",
    capabilities: [
      "Marketplace SEO",
      "Product listing optimization",
      "Keyword and search-term strategy",
      "Catalog and category optimization",
      "Storefront optimization",
      "Marketplace analytics",
    ],
    cta: "Explore Marketplace Optimization",
  },
];

export function Services() {
  return (
    <section id="services" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Five ways we help businesses grow.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose the capability you need — or bring us the problem and we'll help identify the
            right path.
          </p>
        </Reveal>


        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <li key={service.no}>
              <Reveal
                delay={i * 80}
                className="group flex h-full flex-col rounded-2xl border border-hairline bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-9"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-primary/70">
                  Service {service.no}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.copy}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="rounded-full border border-hairline bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
                <a
                  href={INQUIRY_PATH}
                  className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  {service.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
