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
function FounderPage(){
  return <div className="min-h-dvh bg-background"><SiteNav/><main>
    <section className="border-b border-hairline bg-surface/50"><div className="container-page grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
      <div><a href="/about" className="text-sm text-muted-foreground hover:text-primary">About DigitalyMarket / Founder</a><p className="eyebrow mt-10">Founder & Growth Strategist</p>
        <h1 className="editorial-display mt-5 text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[4.2rem]">Business experience before marketing prescriptions.</h1>
        <p className="mt-7 text-xl font-semibold text-foreground">Mohammad Abubakar Siddiqui</p><p className="mt-1 text-sm text-primary">Founder of DigitalyMarket</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">My professional background spans sales, e-commerce, marketplaces, operations and business development. DigitalyMarket brings that experience together in a more thoughtful approach to digital growth.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Cta href={INQUIRY_PATH} size="lg">Start a Growth Conversation <ArrowRight className="h-4 w-4"/></Cta><Cta href="/about" variant="outline" size="lg">About the Agency</Cta></div>
      </div>
      <figure className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-lift"><img src={standing.url} alt="Founder standing in a professional setting" width={1024} height={1440} className="aspect-[3/4] w-full object-cover object-top"/><figcaption className="px-5 py-3 text-xs text-muted-foreground">Mohammad Abubakar Siddiqui — DigitalyMarket</figcaption></figure>
    </div></section>
    <section className="section-y"><div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div><p className="eyebrow">The idea behind the consultancy</p><h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Understand the bottleneck. Then build the solution.</h2></div>
      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground"><p>Businesses do not need every available marketing service. They need to understand which constraint is actually limiting progress—demand, positioning, the website, sales operations or the customer experience.</p><p>That is why our approach begins with buyer behaviour, commercial realities and available resources before deciding which digital levers make sense.</p><blockquote className="border-l-2 border-primary pl-6 font-semibold text-foreground">“Understand · Strategize · Grow.”</blockquote></div>
    </div></section>
    <section className="surface-navy section-y"><div className="container-page"><p className="eyebrow text-navy-muted">Background</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">Commercial experience that shapes digital decisions.</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">{experience.map(([title,copy],i)=><article key={title} className="border-t border-white/30 pt-5"><span className="text-sm text-navy-muted">0{i+1}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-navy-muted">{copy}</p></article>)}</div>
    </div></section>
    <section className="section-y"><div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
      <figure className="overflow-hidden rounded-3xl border border-hairline"><img src={seated.url} width={1024} height={1280} loading="lazy" alt="Founder seated at a desk" className="aspect-[4/5] w-full object-cover"/></figure>
      <div><p className="eyebrow">How we think</p><h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">A practical, considered approach to growth.</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">We look at the whole customer journey: where people find a business, why they choose it, what stops them from enquiring or buying, and how success should be measured. We recommend action only when it solves a genuine problem.</p><Cta href="/services" size="lg" variant="outline" className="mt-8">Explore Our Capabilities</Cta></div>
    </div></section>
    <section className="section-y border-t border-hairline bg-surface/50"><div className="container-page grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
      <figure className="max-w-sm overflow-hidden rounded-3xl border border-hairline"><img src={portrait.url} width={768} height={960} loading="lazy" alt="Professional portrait of the founder" className="aspect-[4/5] w-full object-cover"/></figure>
      <div><p className="eyebrow">Let's talk</p><h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Start with your business, not a package.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Tell us where your business is today, where you'd like it to be and what's standing in the way.</p><Cta href={INQUIRY_PATH} className="mt-8" size="lg">Discuss Your Business <ArrowRight className="h-4 w-4"/></Cta></div>
    </div></section>
  </main><SiteFooter/><GlobalFloatingCta/></div>;
}
