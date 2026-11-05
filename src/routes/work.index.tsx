import { DymWorkPage } from "@/components/dym-next/DymPages";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { workProjects } from "@/data/work";

const title = "Our Work & Digital Portfolio | DigitalyMarket";
const description =
  "Explore our latest work where we turn complex challenges into scalable digital solutions for modern businesses.";
const url = "https://digitalymarket.com/work";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
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

function WorkIndex(){return <DymWorkPage/>;}
