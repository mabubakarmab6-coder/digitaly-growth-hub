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
    q: "Do I need to know which service I need before contacting you?",
    a: "No. Most people arrive with a business problem, not a service in mind. Describing what's happening is enough to start.",
  },
  {
    q: "How do you determine what my business actually needs?",
    a: "We understand the business first, then diagnose where growth is genuinely constrained before recommending anything.",
  },
  {
    q: "Do you offer custom solutions?",
    a: "Yes — everything is built around your goals, market and current digital presence. There is no fixed package list.",
  },
  {
    q: "Can multiple capabilities be combined?",
    a: "They can, when it's justified. Many businesses only need work in one or two areas at a time.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. Small and local businesses often have the clearest growth problems — what matters is that the work is proportionate to the goal.",
  },
  {
    q: "Do you work with B2B and manufacturing businesses?",
    a: "Yes. Longer buying cycles and technical products need a different approach to discovery, credibility and enquiry quality — that's factored into the diagnosis.",
  },
  {
    q: "Can you work alongside an existing marketing team?",
    a: "Yes. We can support an in-house team on a specific capability rather than replacing what already works.",
  },
  {
    q: "Do you offer ongoing or retainer support?",
    a: "Ongoing support is available when continuous strategy, execution and optimization genuinely benefit the business.",
  },
  {
    q: "What happens during the first conversation?",
    a: "We ask about your business, goals and what's getting in the way — and share an honest view of where the opportunity likely sits.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. DigitalyMarket is global-first and works remotely across time zones, with India as a secondary focus market.",
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
            href="/#faq"
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
