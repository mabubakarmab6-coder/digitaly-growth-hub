import { createFileRoute } from "@tanstack/react-router";
import { analyticsService } from "@/data/expanded-services";
import { ExpandedServicePage } from "@/components/services/ExpandedServicePage";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
const service = analyticsService;
const url = "https://digitalymarket.com/services/analytics-cro";
const title = service.eyebrow + " | DigitalyMarket";
const description = service.summary.slice(0, 155);
export const Route = createFileRoute("/services/analytics-cro")({
  component: Page,
  head: () => ({
    meta: [{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:url",content:url},{name:"twitter:card",content:"summary_large_image"}],
    links:[{rel:"canonical",href:url}],
    scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Service",name:service.eyebrow,description,url,provider:{"@type":"Organization",name:"DigitalyMarket",url:"https://digitalymarket.com"}})}],
  }),
});
function Page(){return <div className="min-h-dvh bg-background"><SiteNav/><main><ExpandedServicePage service={service}/></main><SiteFooter/><GlobalFloatingCta/></div>;}
