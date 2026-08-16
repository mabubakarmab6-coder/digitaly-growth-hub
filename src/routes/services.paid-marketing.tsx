import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ServiceComingSoon } from "@/components/services/ServiceComingSoon";

const title = "Paid Marketing | DigitalyMarket";
const description =
  "Paid marketing at DigitalyMarket: campaigns built around measurable business objectives, not vanity metrics. Detailed page coming soon.";
const url = "https://digitaly-growth-hub.lovable.app/services/paid-marketing";

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
  }),
});

function PaidPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <ServiceComingSoon
          eyebrow="Paid Marketing"
          title="Put your offer in front of the right people."
          intro="Paid marketing works when the targeting, the message and the destination all point at the same business objective."
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
