import { DymInsightsPage } from "@/components/dym-next/DymPages";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts } from "@/data/blog";

const orderedPosts = [...blogPosts].sort((a, b) => b.publishDate.localeCompare(a.publishDate));

const title = "Digital Growth Blog & Insights | DigitalyMarket";
const description =
  "Expert insights, guides, and practical advice on digital marketing, SEO, GEO, and business growth.";
const url = "https://digitalymarket.com/insights";

export const Route = createFileRoute("/insights/")({
  component: InsightsIndex,
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
          "@type": "Blog",
          name: "DigitalyMarket Insights",
          description,
          url,
        }),
      },
    ],
  }),
});

function InsightsIndex(){return <DymInsightsPage/>;}
