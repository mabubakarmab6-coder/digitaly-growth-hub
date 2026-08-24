import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { InquiryFlow } from "@/components/inquiry/InquiryFlow";

const title = "Start a Growth Conversation | DigitalyMarket";
const description =
  "Tell us where your business is today and what's getting in the way. A short, structured enquiry — we review it and reply by email with the next appropriate step.";

export const Route = createFileRoute("/start")({
  component: StartPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://digitalymarket.com/start" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://digitalymarket.com/start" }],
  }),
});

function StartPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <section className="hero-glow section-y">
          <div className="container-page">
            <InquiryFlow />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
