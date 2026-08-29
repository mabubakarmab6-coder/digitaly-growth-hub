import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { ServiceComingSoon } from "@/components/services/ServiceComingSoon";

const title = "Marketplace Optimization | Marketplace SEO & Listing Growth | DigitalyMarket";
const description =
  "Marketplace Optimization at DigitalyMarket: improving marketplace search visibility, product listing quality and conversion across the platforms your business already sells on. Detailed page coming soon.";
const url = "https://digitalymarket.com/services/marketplace-optimization";

export const Route = createFileRoute("/services/marketplace-optimization")({
  component: MarketplaceOptimizationPage,
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
  }),
});

function MarketplaceOptimizationPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <ServiceComingSoon
          eyebrow="Marketplace Optimization"
          title="Your marketplace presence is another storefront — it needs to be found and chosen."
          intro="Marketplace optimization covers search visibility, listing and catalog quality, product content and conversion across the marketplaces your business already sells on. It stays platform-agnostic — the work depends on where your customers actually buy."
        />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
