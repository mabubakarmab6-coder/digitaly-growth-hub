import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { ServiceComingSoon } from "@/components/services/ServiceComingSoon";

const title = "Website Creation | DigitalyMarket";
const description =
  "Website creation at DigitalyMarket: clear, credible websites that turn attention into enquiries. Detailed page coming soon.";
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
  }),
});

function WebPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <ServiceComingSoon
          eyebrow="Website Creation"
          title="Turn attention into a clearer digital experience."
          intro="A website should explain value quickly and make the next step obvious for the people you want to hear from."
        />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
