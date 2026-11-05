import { DymFounderPage } from "@/components/dym-next/DymPages";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import standing from "@/assets/founder-standing.jpg.asset.json";
import seated from "@/assets/founder-seated.jpg.asset.json";
import portrait from "@/assets/founder-portrait.jpg.asset.json";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Cta } from "@/components/site/Cta";
import { INQUIRY_PATH } from "@/components/site/constants";
const url="https://digitalymarket.com/founder";
const title="Mohammad Abubakar Siddiqui | Founder of DigitalyMarket";
const description="Meet the founder of DigitalyMarket: a commercial perspective shaped by e-commerce, marketplaces, sales, operations and digital growth.";
export const Route=createFileRoute("/founder")({
  component:FounderPage,
  head:()=>({
    meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:url",content:url}],
    links:[{rel:"canonical",href:url}],
    scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"ProfilePage",mainEntity:{"@type":"Person",name:"Mohammad Abubakar Siddiqui",jobTitle:"Founder & Growth Strategist",worksFor:{"@type":"Organization",name:"DigitalyMarket",url:"https://digitalymarket.com"}}})}],
  }),
});
const experience=[
  ["E-commerce & marketplaces","Practical exposure to online selling, catalogue operations and customer journeys."],
  ["Sales & business development","Understanding buyer requirements, commercial decisions and long-term relationships."],
  ["Operations & CRM","Connecting customer experience and operational delivery with business outcomes."],
  ["Digital strategy","Applying commercial experience to digital growth systems, messaging and acquisition."]
];
function FounderPage(){return <DymFounderPage />;}
