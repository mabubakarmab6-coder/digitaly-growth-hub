import heroImage from "@/assets/hero-ecosystem.jpg";
import { Cta } from "./Cta";
import { WHATSAPP_URL } from "./constants";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-32">
        <div className="max-w-xl">
          <p className="eyebrow">Digital Growth Agency</p>
          <h1 className="mt-5 text-[2.4rem] leading-[1.06] font-semibold text-foreground sm:text-5xl lg:text-[3.75rem]">
            Turn Your Digital Presence{" "}
            <span className="text-gradient-accent">Into Business Growth.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            GEO, paid marketing, websites and e-commerce solutions built around your business goals
            — not a one-size-fits-all package.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact" size="lg">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Cta>
            <Cta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Cta>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Custom strategies <span className="text-primary/60">•</span> Global-first{" "}
            <span className="text-primary/60">•</span> Built around your business
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/50 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-[1.75rem] border border-hairline bg-card shadow-lift">
            <img
              src={heroImage}
              width={1200}
              height={1200}
              alt="Abstract visualization of a connected digital growth ecosystem linking search discovery, website, analytics and e-commerce signals"
              className="h-full w-full object-cover"
            />
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:absolute lg:-bottom-8 lg:left-6 lg:mt-0 lg:grid-cols-2 lg:gap-2">
            {[
              ["GEO", "AI discovery"],
              ["Paid", "Acquisition"],
            ].map(([term, desc]) => (
              <div
                key={term}
                className="rounded-xl border border-hairline bg-card/90 px-4 py-3 shadow-soft backdrop-blur"
              >
                <dt className="text-xs font-semibold tracking-wide text-foreground">{term}</dt>
                <dd className="text-xs text-muted-foreground">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
