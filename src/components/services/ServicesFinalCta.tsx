import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/components/site/constants";

export function ServicesFinalCta() {
  return (
    <section id="contact" className="surface-navy section-y">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-navy-foreground/70">Let's talk</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.9rem]">
            Don't know exactly what you need? That's okay.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Tell us about your business, your goals and what's getting in the way. We'll help you
            figure out where digital can make the biggest difference.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="onNavy"
              size="lg"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
            <Cta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineNavy"
              size="lg"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </Cta>
          </div>
          <a
            href="tel:+917734905729"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-foreground/80 transition-colors hover:text-navy-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
