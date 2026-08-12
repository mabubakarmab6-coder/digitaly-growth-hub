import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServiceCards } from "@/components/services/ServiceCards";
import { ServiceOutcomes } from "@/components/services/ServiceOutcomes";
import { NotSureSection } from "@/components/services/NotSureSection";
import { GrowthPaths } from "@/components/services/GrowthPaths";
import { WhoWeHelp } from "@/components/services/WhoWeHelp";
import { HowWeWork } from "@/components/services/HowWeWork";
import { WhyDigitalyMarket } from "@/components/services/WhyDigitalyMarket";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

const title =
  "Digital Marketing Services | GEO, Paid Marketing, Websites & E-commerce | DigitalyMarket";
const description =
  "Explore DigitalyMarket's GEO, paid marketing, website creation and e-commerce growth services for manufacturers, B2B companies, service businesses and e-commerce brands.";
const url = "https://digitaly-growth-hub.lovable.app/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "DigitalyMarket Services",
          itemListElement: [
            ["Generative Engine Optimization", "/services/geo"],
            ["Paid Marketing", "/services/paid-marketing"],
            ["Website Creation", "/services/web-creation"],
            ["E-commerce Growth", "/services/ecommerce-growth"],
          ].map(([name, path], i) => ({
            "@type": "ListItem",
            position: i + 1,
            name,
            url: `https://digitaly-growth-hub.lovable.app${path}`,
          })),
        }),
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <ServicesHero />
        <ServicesIntro />
        <ServiceCards />
        <ServiceOutcomes />
        <NotSureSection />
        <GrowthPaths />
        <WhoWeHelp />
        <HowWeWork />
        <WhyDigitalyMarket />
        <ServicesFaq />
        <ServicesFinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
