import { DymServiceHub } from "@/components/dym-next/DymPages";
import {createFileRoute} from "@tanstack/react-router";
import {ArrowRight} from "lucide-react";
import photo from "@/assets/industry-manufacturing.jpg";
import {SiteNav} from "@/components/site/SiteNav";
import {SiteFooter} from "@/components/site/SiteFooter";
import {GlobalFloatingCta} from "@/components/site/GlobalFloatingCta";
import {Cta} from "@/components/site/Cta";
import {INQUIRY_PATH} from "@/components/site/constants";
const offerings=[
 {title:"Website & E-commerce Development",href:"/services/web-creation",description:"Creation, redevelopment and redesign of useful, persuasive websites."},
 {title:"E-commerce & Marketplace Growth",href:"/services/ecommerce-marketplace-growth",description:"Catalogue, storefront, seller operations and marketplace performance."},
 {title:"Performance Marketing",href:"/services/paid-marketing",description:"Search and social acquisition guided by buyer intent and commercial outcomes."},
 {title:"Search Engine Optimisation (SEO)",href:"/services/seo",description:"Technical, local and organic search visibility in conventional search engines."},
 {title:"Generative Engine Optimisation (GEO)",href:"/services/GEO",description:"Business discoverability and representation in generative AI answers."},
 {title:"Analytics, Tracking & CRO",href:"/services/analytics-cro",description:"Measurement foundations, journey diagnosis and conversion optimisation."}
];
const title="Digital Growth Services | DigitalyMarket";
const description="Explore DigitalyMarket's website, marketplace, paid marketing, SEO, GEO and conversion optimisation services.";
const url="https://digitalymarket.com/services";
export const Route=createFileRoute("/services/")({
 component:Page,
 head:()=>({
 meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:url",content:url},{name:"twitter:card",content:"summary_large_image"}],
 links:[{rel:"canonical",href:url}],
 scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"ItemList",itemListElement:offerings.map((s,i)=>({"@type":"ListItem",position:i+1,name:s.title,url:"https://digitalymarket.com"+s.href}))})}]
 })});
function Page(){return <DymServiceHub />;}
