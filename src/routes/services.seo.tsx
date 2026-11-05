import { DymServiceDetail } from "@/components/dym-next/DymPages";
import { createFileRoute } from "@tanstack/react-router";
import { seoService } from "@/data/expanded-services";
import { ExpandedServicePage } from "@/components/services/ExpandedServicePage";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
const service = seoService;
const url = "https://digitalymarket.com/services/seo";
const title = service.eyebrow + " | DigitalyMarket";
const description = service.summary.slice(0, 155);
export const Route = createFileRoute("/services/seo")({
  component: Page,
  head: () => ({
    meta: [{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:url",content:url},{name:"twitter:card",content:"summary_large_image"}],
    links:[{rel:"canonical",href:url}],
    scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Service",name:service.eyebrow,description,url,provider:{"@type":"Organization",name:"DigitalyMarket",url:"https://digitalymarket.com"}})}],
  }),
});
function Page(){return <DymServiceDetail name="seo"/>;}
