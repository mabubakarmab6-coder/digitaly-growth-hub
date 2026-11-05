import { ArrowRight, Check } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { INQUIRY_PATH } from "@/components/site/constants";
import type { ExpandedService } from "@/data/expanded-services";

export function ExpandedServicePage({ service }: { service: ExpandedService }) {
  return <>
    <section className="border-b border-hairline bg-background">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-24">
        <div>
          <a href="/services" className="text-sm text-muted-foreground hover:text-primary">Services / {service.eyebrow}</a>
          <p className="eyebrow mt-10">{service.eyebrow}</p>
          <h1 className="editorial-display mt-5 text-[2.6rem] leading-[1.07] font-semibold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.6rem]">{service.h1}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{service.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={INQUIRY_PATH} inquiryService={service.key} size="lg">Start a Growth Conversation <ArrowRight className="h-4 w-4" /></Cta>
            <Cta href="/services" variant="outline" size="lg">All Services</Cta>
          </div>
        </div>
        <figure className="overflow-hidden rounded-3xl border border-hairline bg-card shadow-lift">
          <img src={service.image} alt={service.alt} className="aspect-[4/5] w-full object-cover" />
          <figcaption className="px-5 py-3 text-xs text-muted-foreground">Contextual image; not evidence of a client engagement.</figcaption>
        </figure>
      </div>
    </section>
    <section className="section-y"><div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div><p className="eyebrow">What this means</p><h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">The right service for the right constraint.</h2></div>
      <p className="self-center border-l-2 border-primary/40 pl-6 text-lg leading-relaxed text-muted-foreground">{service.difference}</p>
    </div></section>
    <section className="section-y bg-surface/60"><div className="container-page"><p className="eyebrow">Where businesses get stuck</p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">Diagnose the business challenge before prescribing a channel.</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">{service.challenges.map((s,i)=><article className="border-t border-primary/40 pt-5" key={s.title}><span className="text-xs font-semibold text-primary">0{i+1}</span><h3 className="mt-3 text-xl font-semibold text-foreground">{s.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p></article>)}</div>
    </div></section>
    <section className="section-y"><div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div><p className="eyebrow">Capabilities</p><h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Practical work, shaped around your priorities.</h2><p className="mt-5 text-muted-foreground">No predetermined package. Scope depends on the business, resources and readiness.</p></div>
      <ul className="grid gap-3 sm:grid-cols-2">{service.capabilities.map(x=><li key={x} className="flex gap-3 rounded-xl border border-hairline bg-card p-5 text-sm leading-relaxed text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{x}</li>)}</ul>
    </div></section>
    <section className="surface-navy section-y"><div className="container-page"><p className="eyebrow text-navy-muted">How we work</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Understand. Diagnose. Prioritise. Build. Measure.</h2><ol className="mt-12 grid gap-8 md:grid-cols-5">{service.steps.map((s,i)=><li key={s.name} className="border-t border-white/30 pt-5"><span className="text-sm text-navy-muted">0{i+1}</span><h3 className="mt-3 font-semibold">{s.name}</h3><p className="mt-3 text-sm leading-relaxed text-navy-muted">{s.copy}</p></li>)}</ol></div></section>
    <section className="section-y"><div className="container-page grid gap-12 lg:grid-cols-2">
      <div><p className="eyebrow">Questions</p><h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Important distinctions, clear answers.</h2></div>
      <div className="space-y-8">{service.questions.map(x=><div key={x.q}><h3 className="text-lg font-semibold text-foreground">{x.q}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.a}</p></div>)}</div>
    </div></section>
    <section className="section-y border-t border-hairline bg-surface/60"><div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
      <div><p className="eyebrow">Next step</p><h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Tell us what is getting in the way.</h2><p className="mt-4 text-muted-foreground">We start with the business, not the service menu.</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">{service.related.map(s=><a key={s.href} className="font-medium text-primary underline underline-offset-4" href={s.href}>{s.title}</a>)}</div>
      </div><Cta href={INQUIRY_PATH} inquiryService={service.key} size="lg">Discuss Your Business <ArrowRight className="h-4 w-4" /></Cta>
    </div></section>
  </>;
}
