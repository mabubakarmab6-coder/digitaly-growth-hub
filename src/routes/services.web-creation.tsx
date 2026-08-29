import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

const service = services.find((s) => s.slug === "web-creation")!;
const title = service.metaTitle;
const description = service.metaDescription;
const url = "https://digitalymarket.com/services/web-creation";

export const Route = createFileRoute("/services/web-creation")({
  component: WebPage,
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
          "@type": "Service",
          name: service.eyebrow,
          description,
          url,
          provider: { "@type": "Organization", name: "DigitalyMarket", url: "https://digitalymarket.com" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Services", item: "https://digitalymarket.com/services" },
            { "@type": "ListItem", position: 2, name: service.eyebrow, item: url },
          ],
        }),
      },
    ],
  }),
});

function WebPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <ServiceDetail service={service} />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
