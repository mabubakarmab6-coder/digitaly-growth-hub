import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";

const faqs = [
  {
    q: "How does DigitalyMarket actually work?",
    a: "We understand the business first, diagnose where growth is constrained, then recommend the work that changes the outcome — and build and optimize from there.",
  },
  {
    q: "Do you work with businesses internationally?",
    a: "Yes. We work with businesses globally, with a particularly strong understanding of the Indian market.",
  },
  {
    q: "Do you offer custom solutions?",
    a: "Everything is custom. There are no fixed packages — the scope follows the diagnosis, your goals and your current digital presence.",
  },
  {
    q: "How does an engagement begin?",
    a: "With a conversation about what's happening in the business. You don't need to arrive knowing which service you need.",
  },
];

export function AboutFaq() {
  return (
    <section id="faq" className="section-y border-y border-hairline bg-surface/60">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            A few things people ask first.
          </h2>
          <a
            href="/services#faq"
            className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Read the full FAQ <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`about-faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export const aboutFaqs = faqs;
