import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";

import { ServicesHero } from "@/components/services/ServicesHero";
import { GrowthStuck } from "@/components/services/GrowthStuck";
import { DiagnoseFirst } from "@/components/services/DiagnoseFirst";
import { CapabilityCards } from "@/components/services/CapabilityCards";
import { GrowthJourney } from "@/components/services/GrowthJourney";
import { CapabilityEcosystem } from "@/components/services/CapabilityEcosystem";
import { BusinessContext } from "@/components/services/BusinessContext";
import { CredibilityBridge } from "@/components/services/CredibilityBridge";
import { FounderSignature } from "@/components/services/FounderSignature";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

const title =
  "Digital Growth Services | GEO, Paid Marketing, Websites & E-commerce | DigitalyMarket";
const description =
  "DigitalyMarket's core capabilities — GEO, paid marketing, website creation, e-commerce growth and marketplace optimization. We understand and diagnose your business first, then recommend what actually makes sense.";

const url = "https://digitalymarket.com/services";

export const Route = createFileRoute("/services/")({
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
          name: "DigitalyMarket Capabilities",
          itemListElement: [
            ["Generative Engine Optimization", "/services/geo"],
            ["Paid Marketing", "/services/paid-marketing"],
            ["Website Creation", "/services/web-creation"],
            ["E-commerce Growth", "/services/ecommerce-growth"],
            ["Marketplace Optimization", "/services/marketplace-optimization"],
          ].map(([name, path], i) => ({
            "@type": "ListItem",
            position: i + 1,
            name,
            url: `https://digitalymarket.com${path}`,
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
        <GrowthStuck />
        <DiagnoseFirst />
        <CapabilityCards />
        <GrowthJourney />
        <CapabilityEcosystem />
        <BusinessContext />
        <CredibilityBridge />
        <FounderSignature />
        <ServicesFaq />
        <ServicesFinalCta />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
