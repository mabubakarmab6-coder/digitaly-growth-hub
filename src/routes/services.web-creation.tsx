import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { WebCreationPage } from "@/components/services/WebCreationPage";

const title = "Website Design & Development Services | DigitalyMarket";
const description =
  "Explore business-focused website creation, redesign, and optimization built around your goals, user experience, and growth readiness.";
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
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "Service", name: "Website Design & Development", serviceType: "Website Creation, Redesign and Optimization", description, url, provider: { "@type": "Organization", name: "DigitalyMarket", url: "https://digitalymarket.com" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalymarket.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://digitalymarket.com/services" },
        { "@type": "ListItem", position: 3, name: "Web Creation", item: url },
      ] },
    ] }) }],
  }),
});

function WebPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <WebCreationPage />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
