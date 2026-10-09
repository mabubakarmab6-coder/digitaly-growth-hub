import { ArrowDown, ArrowRight, Check, Target, SlidersHorizontal, ChartNoAxesCombined } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cta } from "@/components/site/Cta";
import { INQUIRY_PATH } from "@/components/site/constants";
import { paidMarketing as content } from "@/data/paid-marketing";

function GrowthCta({ onNavy = false }: { onNavy?: boolean }) {
  return <Cta href={INQUIRY_PATH} inquiryService="Paid Marketing" variant={onNavy ? "onNavy" : "primary"} size="lg">Discuss Your Growth Goals <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Cta>;
}

const heading = "mt-4 text-3xl leading-tight font-semibold tracking-normal text-foreground sm:text-4xl";
const body = "text-base leading-relaxed text-muted-foreground";
const relatedLink = "font-medium text-primary underline underline-offset-4";

export function PaidMarketingPage() {
  return <>
    <section aria-labelledby="paid-hero" className="border-b border-hairline bg-background py-14 sm:py-20 lg:py-24">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link to="/services" className="hover:text-foreground">Services</Link><span aria-hidden="true"> / </span><span>Paid Marketing</span></nav>
        <div className="mt-10 max-w-3xl">
          <p className="eyebrow">Paid Marketing</p>
          <h1 id="paid-hero" className="mt-4 text-4xl leading-tight font-semibold tracking-normal text-foreground sm:text-5xl">Paid marketing, built around your business goals.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Reach relevant audiences with a strategy that connects your offer, campaigns and conversion journey. We start with what your business needs—not a platform or a package.</p>
          <div className="mt-8"><GrowthCta /></div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Strategy, campaign management and optimization. Scoped to your business.</p>
        </div>
        <ol className="mt-12 grid gap-5 border-t border-hairline pt-6 sm:grid-cols-4" aria-label="Paid marketing approach">
          {["Understand the business", "Choose the right approach", "Execute and measure", "Learn and optimize"].map((step, i) => <li key={step} className="flex items-center gap-3 text-sm font-medium"><span className="text-primary">0{i + 1}</span>{step}</li>)}
        </ol>
      </div>
    </section>

    <section aria-labelledby="paid-challenges" className="section-y">
      <div className="container-page">
        <p className="eyebrow">Challenges & opportunities</p><h2 id="paid-challenges" className={`${heading} max-w-2xl`}>When advertising deserves a closer look.</h2>
        <p className={`mt-5 max-w-2xl ${body}`}>Paid marketing can be useful in different situations. The first step is identifying which constraint actually matters to your business.</p>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{content.challenges.map(item => <div key={item.title} className="border-t border-hairline pt-5"><h3 className="text-lg font-semibold tracking-normal">{item.title}</h3><p className={`mt-3 ${body}`}>{item.body}</p></div>)}</div>
        <p className={`mt-10 max-w-3xl ${body}`}>Performance is shaped by the offer, audience, competition, landing page, budget, tracking and sales process. Advertising alone cannot repair every weakness in that system.</p>
      </div>
    </section>

    <section aria-labelledby="paid-manages" className="section-y bg-surface">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-2"><div><p className="eyebrow">What DigitalyMarket manages</p><h2 id="paid-manages" className={heading}>A connected campaign system.</h2></div><p className={`${body} self-end`}>Paid marketing management brings planning, execution and learning together. The platforms and responsibilities depend on the engagement—not an exhaustive channel checklist.</p></div>
        <ol className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">{content.capabilities.map((item, i) => <li key={item.title} className="flex gap-4 border-t border-hairline pt-6"><span className="text-sm font-semibold text-primary">0{i + 1}</span><div><h3 className="text-lg font-semibold tracking-normal">{item.title}</h3><p className={`mt-3 ${body}`}>{item.body}</p></div></li>)}</ol>
        <p className={`mt-10 max-w-3xl border-t border-hairline pt-6 ${body}`}><strong className="text-foreground">Clear scope before work begins.</strong> Deliverables and supporting work are agreed together. Landing-page development, advanced tracking implementation and deeper conversion-rate optimization may need a separate scope.</p>
      </div>
    </section>

    <section aria-labelledby="paid-process" className="section-y">
      <div className="container-page"><p className="eyebrow">How the engagement works</p><h2 id="paid-process" className={heading}>From business context to the next informed decision.</h2><p className={`mt-5 max-w-2xl ${body}`}>A straightforward sequence, adapted to your starting point. Timelines and deliverables vary with the work agreed.</p>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">{content.process.map((step, i) => <li key={step.title} className="border-t-2 border-primary/30 pt-5"><span className="text-sm font-semibold text-primary">0{i + 1}</span><h3 className="mt-4 text-lg font-semibold tracking-normal">{step.title}</h3><p className={`mt-3 ${body}`}>{step.body}</p></li>)}</ol>
      </div>
    </section>

    <section aria-labelledby="paid-measure" className="section-y surface-navy">
      <div className="container-page"><p className="eyebrow text-navy-muted">Measurement & optimization</p><h2 id="paid-measure" className="mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-normal sm:text-4xl">Measure what matters. Understand what it means.</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-muted">Launching ads is only the beginning. Choose measures that fit the objective, then interpret them alongside the quality of the data and the customer journey.</p>
        <dl className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">{content.measurement.map(item => <div key={item.objective} className="border-t border-navy-foreground/20 pt-5"><dt className="text-lg font-semibold">{item.objective}</dt><dd className="mt-3 text-base leading-relaxed"><p>{item.metrics}</p><p className="mt-2 text-navy-muted">{item.context}</p></dd></div>)}</dl>
        <figure className="mt-12 border-y border-navy-foreground/20 py-8"><ol className="grid gap-8 sm:grid-cols-3">{[{ icon: Target, title: "Observe", text: "Check results and data quality." }, { icon: SlidersHorizontal, title: "Test", text: "Make a focused, justified change." }, { icon: ChartNoAxesCombined, title: "Learn", text: "Review the evidence and refine." }].map(item => <li key={item.title} className="flex gap-4"><item.icon className="mt-1 h-6 w-6 shrink-0 text-navy-muted" aria-hidden="true" /><div><p className="font-semibold">{item.title}</p><p className="mt-2 text-sm leading-relaxed text-navy-muted">{item.text}</p></div></li>)}</ol><figcaption className="mt-6 text-sm text-navy-muted">The optimization cycle—not a report of campaign results.</figcaption></figure>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-navy-muted">Reviews may cover audience and keyword quality, creative and messaging, campaign structure, budget allocation, landing-page friction and lead or purchase quality. Tracking accuracy and attribution limitations affect what can be concluded. Clicks alone do not establish commercial success.</p>
      </div>
    </section>

    <section aria-labelledby="paid-fit" className="section-y">
      <div className="container-page"><p className="eyebrow">Is it right for your business?</p><h2 id="paid-fit" className={heading}>Start with readiness, not a sales pitch.</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2"><div><h3 className="text-xl font-semibold tracking-normal">Worth exploring when you have</h3><ul className="mt-6 space-y-4">{content.readiness.map(item => <li key={item} className={`flex gap-3 ${body}`}><Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul></div><div className="border-t border-hairline pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"><h3 className="text-xl font-semibold tracking-normal">Sometimes the foundations come first</h3><p className={`mt-6 ${body}`}>If the offer, website, tracking, budget or follow-up process isn't ready, preparation may be the more useful investment. Smaller businesses aren't automatically ruled out; the approach should fit their circumstances.</p><p className={`mt-5 ${body}`}>A clearer <Link to="/services/web-creation" className={relatedLink}>website and conversion journey</Link> or a connected <Link to="/services/ecommerce-growth" className={relatedLink}>e-commerce growth approach</Link> may support the next step. <Link to="/services/GEO" className={relatedLink}>Generative Engine Optimization</Link> addresses a different part of digital discovery—it does not replace paid campaign strategy.</p></div></div>
        <p className={`mt-10 max-w-2xl ${body}`}>We'll discuss what makes sense for your business rather than automatically recommending campaign management or every related service.</p><div className="mt-7"><GrowthCta /></div>
      </div>
    </section>

    <section aria-labelledby="paid-faq" className="section-y bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Frequently asked questions</p><h2 id="paid-faq" className={heading}>Before you enquire.</h2><p className={`mt-5 ${body}`}>Practical answers about scope, costs, readiness and realistic expectations.</p></div><Accordion type="single" collapsible>{content.faqs.map((faq, i) => <AccordionItem key={faq.q} value={`paid-${i}`}><AccordionTrigger className="text-left text-base leading-relaxed">{faq.q}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion></div>
    </section>

    <section aria-labelledby="paid-close" className="section-y border-b border-hairline pb-28 sm:pb-32"><div className="container-page"><div className="max-w-3xl"><p className="eyebrow">Your next step</p><h2 id="paid-close" className={heading}>Let's understand what growth means for your business.</h2><p className={`mt-6 max-w-2xl ${body}`}>Tell us about your goals, your current activity and what's getting in the way. We'll explore an appropriate next step and a tailored scope—not a pre-set package.</p><div className="mt-8"><GrowthCta /></div><Link to="/services" className={`mt-7 inline-flex items-center gap-2 text-sm ${relatedLink}`}>Explore our wider capabilities <ArrowDown className="h-4 w-4 -rotate-90" aria-hidden="true" /></Link></div></div></section>
  </>;
}