import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";
import { PHONE_DISPLAY, WHATSAPP_URL } from "./constants";

export function FinalCta() {
  return (
    <section id="contact" className="surface-navy section-y">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-navy-foreground/70">Let's talk</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.9rem]">
            Your next stage of growth could start with one conversation.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Tell us where your business is today, where you want to go, and what's getting in the
            way. We'll help you identify where digital can make the biggest difference.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="onNavy" size="lg">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Cta>
            <Cta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineNavy"
              size="lg"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
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
