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
function Page(){return <div className="min-h-dvh bg-background"><SiteNav/><main>
<section className="border-b border-hairline"><div className="container-page grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24"><div><p className="eyebrow">Capabilities</p><h1 className="mt-5 text-[2.75rem] font-semibold leading-[1.06] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.75rem]">The right capability for the challenge in front of you.</h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">No preset packages. We find the bottleneck, understand your readiness and recommend the right strategy, technology and execution.</p><Cta href={INQUIRY_PATH} size="lg" className="mt-9">Start a Growth Conversation <ArrowRight className="h-4 w-4"/></Cta></div><figure className="overflow-hidden rounded-3xl border border-hairline shadow-lift"><img src={photo} alt="Manufacturing facility representing real business operations" className="aspect-[4/5] w-full object-cover"/></figure></div></section>
<section id="capabilities" className="section-y bg-surface/50"><div className="container-page"><div className="grid gap-8 lg:grid-cols-2 lg:gap-20"><h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Six connected capabilities.<span className="block text-primary">One business-first approach.</span></h2><p className="self-end text-lg leading-relaxed text-muted-foreground">SEO and GEO are separate services. Each discipline has its own business case and measurement requirements.</p></div><div className="mt-12 divide-y divide-hairline border-y border-hairline">{offerings.map((s,i)=><a key={s.href} href={s.href} className="group grid gap-4 py-7 sm:grid-cols-[3rem_1fr_1fr_auto] sm:items-center sm:gap-8"><span className="text-sm font-semibold text-primary">{String(i+1).padStart(2,"0")}</span><h3 className="text-xl font-semibold text-foreground">{s.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p><ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1"/></a>)}</div></div></section>
<section className="section-y"><div className="container-page grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow">Flexible engagement</p><h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Strategy, execution or a mix of both.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Some businesses need direction first. Others need focused delivery. The engagement should match the constraint, not a template.</p></div><Cta href={INQUIRY_PATH} size="lg">Discuss Your Priorities <ArrowRight className="h-4 w-4"/></Cta></div></section>
</main><SiteFooter/><GlobalFloatingCta/></div>;}
