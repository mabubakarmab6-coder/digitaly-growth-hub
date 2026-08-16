import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ServiceComingSoon } from "@/components/services/ServiceComingSoon";

const title = "E-commerce Growth | DigitalyMarket";
const description =
  "E-commerce growth at DigitalyMarket: strengthening discovery, store experience and conversion across online stores and marketplaces. Detailed page coming soon.";
const url = "https://digitalymarket.com/services/ecommerce-growth";

export const Route = createFileRoute("/services/ecommerce-growth")({
  component: EcommercePage,
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

function EcommercePage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <ServiceComingSoon
          eyebrow="E-commerce Growth"
          title="From product discovery to repeat customers."
          intro="Online stores grow when discovery, product presentation and conversion improve together — not in isolation."
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
