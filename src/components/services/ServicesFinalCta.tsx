import { ArrowRight } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { ContactActions } from "@/components/site/ContactActions";
import { INQUIRY_PATH } from "@/components/site/constants";

export function ServicesFinalCta() {
  return (
    <section id="contact" className="surface-navy section-y">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-navy-foreground/70">Let's talk</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.9rem]">
            Let's figure out what your business actually needs.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            You don't need to arrive with a marketing plan. Bring us the problem. We'll start there.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta
              href={INQUIRY_PATH}
              variant="onNavy"
              size="lg"
              className="w-full sm:w-auto"
            >
              Start My Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
            <Cta
              href={INQUIRY_PATH}
              variant="outlineNavy"
              size="lg"
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </Cta>
          </div>
          <ContactActions tone="navy" className="mt-8 justify-center" />
          <p className="mt-8 text-sm text-navy-foreground/60">
            Custom solutions only. Ongoing support is discussed when it genuinely fits the business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
