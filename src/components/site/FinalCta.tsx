import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";
import { ContactActions } from "./ContactActions";
import { INQUIRY_PATH } from "./constants";

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
            <Cta href={INQUIRY_PATH} variant="onNavy" size="lg">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Cta>
            <Cta
              href={INQUIRY_PATH}
              variant="outlineNavy"
              size="lg"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Cta>
          </div>
          <ContactActions tone="navy" className="mt-8 justify-center" />
        </Reveal>
      </div>
    </section>
  );
}

