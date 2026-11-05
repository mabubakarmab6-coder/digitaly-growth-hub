import { createFileRoute } from "@tanstack/react-router";
import { DymHome } from "@/components/dym-next/DymHome";


const title = "DigitalyMarket | Business-First Digital Growth Consultancy";
const description =
  "DigitalyMarket helps e-commerce brands, manufacturers and local businesses identify growth constraints through websites, paid acquisition, SEO, GEO and marketplace strategy.";

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
            "Website Creation",
            "Paid Marketing",
            "Generative Engine Optimization",
            "Search Engine Optimization",
            "E-commerce and Marketplace Growth",
          ],
        }),
      },
    ],
  }),
});


function Home(){return <DymHome/>;}
