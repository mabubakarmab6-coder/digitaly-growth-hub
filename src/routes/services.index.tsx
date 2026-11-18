import { createFileRoute } from "@tanstack/react-router";
import { DymServicesLanding } from "@/components/dym-next/DymServicesLanding";
import { dymServices } from "@/components/dym-next/DymShell";

const siteUrl = "https://digitalymarket.com";
const title = "Digital Growth Services | DigitalyMarket";
const description =
  "Explore founder-led digital growth services for e-commerce brands, manufacturers and local businesses, from websites and paid media to SEO, GEO and analytics.";
const url = siteUrl + "/services";

export const Route = createFileRoute("/services/")({
  component: DymServicesLanding,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: dymServices.map(([, name, href], index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            url: siteUrl + href,
          })),
        }),
      },
    ],
  }),
});
