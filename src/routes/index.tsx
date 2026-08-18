import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Positioning } from "@/components/site/Positioning";
import { Industries } from "@/components/site/Industries";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Credibility } from "@/components/site/Credibility";
import { WorkAndInsights } from "@/components/site/WorkAndInsights";
import { Faq } from "@/components/site/Faq";
import { Founder } from "@/components/site/Founder";
import { FinalCta } from "@/components/site/FinalCta";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";

import { SiteFooter } from "@/components/site/SiteFooter";

const title = "DigitalyMarket | Digital Growth Agency for Modern Businesses";
const description =
  "DigitalyMarket helps manufacturers, B2B companies, service businesses and e-commerce brands grow through GEO, paid marketing, websites and e-commerce solutions.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://digitalymarket.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://digitalymarket.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "DigitalyMarket",
          description,
          founder: {
            "@type": "Person",
            name: "Mohammad Abubakar",
            jobTitle: "Founder & Growth Strategist",
          },
          areaServed: "Worldwide",
          knowsAbout: [
            "Generative Engine Optimization",
            "Paid Marketing",
            "Website Creation",
            "E-commerce Growth",
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Positioning />
        <Industries />
        <Services />
        <WhyUs />
        <Process />
        <Credibility />
        <WorkAndInsights />
        <div id="faq">
          <Faq />
        </div>
        <Founder />
        <FinalCta />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>

  );
}
