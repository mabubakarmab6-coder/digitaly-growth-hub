import { createFileRoute } from "@tanstack/react-router";
import { GeoServicePage } from "@/components/services/GeoServicePage";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";

const title = "Generative Engine Optimization (GEO) Services | DigitalyMarket";
const description =
  "Understand Generative Engine Optimization and DigitalyMarket's approach to clearer business information across AI-powered and answer-oriented discovery.";
const url = "https://digitalymarket.com/services/GEO";

export const Route = createFileRoute("/services/GEO")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Generative Engine Optimization",
              serviceType: "Generative Engine Optimization",
              description,
              url,
              provider: {
                "@type": "Organization",
                name: "DigitalyMarket",
                url: "https://digitalymarket.com",
              },
              areaServed: "Worldwide",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalymarket.com/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://digitalymarket.com/services" },
                { "@type": "ListItem", position: 3, name: "Generative Engine Optimization", item: url },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

function GeoPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <GeoServicePage />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}