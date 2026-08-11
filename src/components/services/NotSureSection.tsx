import { ArrowRight, MessageCircle } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/components/site/constants";

export function NotSureSection() {
  return (
    <section id="not-sure" className="surface-navy section-y">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-navy-foreground/70">Guidance</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[2.75rem]">
            Not sure what your business needs?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            You don't need to know the answer before you contact us.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/70">
            Tell us what you're trying to achieve, what's currently holding your business back, and
            where you want to go. We'll help you identify the right digital growth path.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="onNavy"
              size="lg"
            >
              Help Me Find the Right Solution <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
            <Cta href="#contact" variant="outlineNavy" size="lg">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Start a Conversation
            </Cta>
          </div>

          <p className="mt-7 text-sm text-navy-foreground/60">
            No pressure. No forced package. Just a practical conversation about your business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
