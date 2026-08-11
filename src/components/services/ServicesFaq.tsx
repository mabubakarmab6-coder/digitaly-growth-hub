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
    q: "Can I hire DigitalyMarket for only one service?",
    a: "Yes. You can start with a single capability — GEO, paid marketing, a website or e-commerce growth — and expand later only if it makes sense.",
  },
  {
    q: "What if I don't know which service I need?",
    a: "That's completely normal. Tell us your goal and what's getting in the way, and we'll recommend the most practical path.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with small and local businesses and scale the solution to your stage and budget.",
  },
  {
    q: "Do you work with manufacturers and B2B companies?",
    a: "Manufacturers and B2B companies are a primary focus. We understand longer sales cycles and enquiry-driven growth.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. DigitalyMarket is global-first and works remotely across time zones, with India as a secondary focus market.",
  },
  {
    q: "Do you offer custom solutions?",
    a: "Every engagement is built around your goals, market and current digital presence. There is no fixed package list.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. Ongoing growth work runs as a monthly retainer so strategy, execution and optimization stay connected.",
  },
  {
    q: "How do I get started?",
    a: "Start a conversation or send a WhatsApp message. Share where your business is today and we'll take it from there.",
  },
];

export function ServicesFaq() {
  return (
    <section id="faq" className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
            Questions before you start?
          </h2>
          <a
            href="/faq"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            View All FAQs <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-hairline">
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
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
