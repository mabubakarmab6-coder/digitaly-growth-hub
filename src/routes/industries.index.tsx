import { DymIndustryHub } from "@/components/dym-next/DymPages";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { Cta } from "@/components/site/Cta";
import { ContactActions } from "@/components/site/ContactActions";
import { INQUIRY_PATH } from "@/components/site/constants";
import { industries } from "@/data/industries";

const title = "Industries We Work With | Digital Growth by Industry | DigitalyMarket";
const description =
  "Digital growth built around your industry — manufacturing and B2B, professional services, local and service businesses, and e-commerce brands.";
const url = "https://digitalymarket.com/industries";

export const Route = createFileRoute("/industries/")({
  component: IndustriesHub,
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
          "@type": "ItemList",
          name: "Industries DigitalyMarket works with",
          itemListElement: industries.map((industry, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: industry.name,
            url: `https://digitalymarket.com/industries/${industry.slug}`,
          })),
        }),
      },
    ],
  }),
});

const principles = [
  {
    title: "Context before tactics",
    copy: "How your customers decide matters more than which channel is currently fashionable.",
  },
  {
    title: "Honest about fit",
    copy: "If something isn't the right lever for your stage, we'll say so rather than sell it.",
  },
  {
    title: "Built around your reality",
    copy: "Cycle length, margins, geography and team capacity all shape what actually works.",
  },
];

function IndustriesHub(){return <DymIndustryHub/>;}
