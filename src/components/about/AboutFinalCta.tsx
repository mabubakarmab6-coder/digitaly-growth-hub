import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { ContactActions } from "@/components/site/ContactActions";
import { WHATSAPP_URL } from "@/components/site/constants";

export function AboutFinalCta() {
  return (
    <section id="contact" className="surface-navy section-y">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-navy-foreground/70">Let's talk</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.9rem]">
            Bring us the business problem. We'll start there.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            No pitch deck, no pressure. Just a conversation about where your business is today and
            what's getting in the way.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="onNavy"
              size="lg"
              className="w-full sm:w-auto"
            >
              Start a Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
            <Cta href="/#founder" variant="outlineNavy" size="lg" className="w-full sm:w-auto">
              Meet Mohammad Abubakar Siddiqui
            </Cta>
          </div>
          <ContactActions tone="navy" className="mt-8 justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
