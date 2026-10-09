import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { PaidMarketingPage } from "@/components/services/PaidMarketingPage";
import { paidMarketing } from "@/data/paid-marketing";

const { title, description, url } = paidMarketing;

export const Route = createFileRoute("/services/paid-marketing")({
  component: PaidPage,
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
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Service", name: "Paid Marketing", serviceType: "Paid Marketing Strategy and Campaign Management", description, url, provider: { "@type": "Organization", name: "DigitalyMarket", url: "https://digitalymarket.com" } },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalymarket.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://digitalymarket.com/services" },
            { "@type": "ListItem", position: 3, name: "Paid Marketing", item: url },
          ] },
        ],
      }),
    }],
  }),
});

function PaidPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <PaidMarketingPage />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
