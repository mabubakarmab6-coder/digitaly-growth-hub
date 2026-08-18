import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { ServiceComingSoon } from "@/components/services/ServiceComingSoon";

const title = "Generative Engine Optimization (GEO) | DigitalyMarket";
const description =
  "GEO at DigitalyMarket: improving how your business is discovered across modern search and AI-driven answers. Detailed page coming soon.";
const url = "https://digitalymarket.com/services/geo";

export const Route = createFileRoute("/services/geo")({
  component: GeoPage,
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

function GeoPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <ServiceComingSoon
          eyebrow="Generative Engine Optimization"
          title="Be discoverable where people now search — including AI answers."
          intro="GEO is about making your business understandable and findable across modern search and AI-driven discovery experiences."
        />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
