import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with small and local businesses regularly, and we scale the solution to your stage and budget rather than pushing a fixed package.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. DigitalyMarket is global-first and works remotely with clients across time zones, with India as a secondary focus market.",
  },
  {
    q: "Do you work with manufacturers and B2B companies?",
    a: "Manufacturers and B2B companies are our primary focus. We understand longer sales cycles, technical products and enquiry-driven growth.",
  },
  {
    q: "Can I hire DigitalyMarket for just one service?",
    a: "Absolutely. You can start with a single capability — GEO, paid marketing, a website or e-commerce growth — and expand later if it makes sense.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. Ongoing growth work is delivered through monthly retainers so strategy, execution and optimization stay connected.",
  },
  {
    q: "Do you create custom packages?",
    a: "Every engagement is built around your goals, market and current digital presence. There is no standard package list.",
  },
  {
    q: "How does the process work?",
    a: "We discover, define a strategy, build the required assets or campaigns, optimize with data, then keep scaling what works.",
  },
  {
    q: "How do I get started?",
    a: "Start a conversation or send a WhatsApp message. Tell us where your business is today and what's getting in the way — we'll take it from there.",
  },
];

export function Faq() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
            Questions, answered honestly.
          </h2>
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
