import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How does DigitalyMarket approach digital growth?",
    a: "We take a diagnostic, systems-first approach. Rather than applying generic marketing playbooks, we identify where your growth is genuinely constrained—whether in positioning, conversion friction, search visibility, or acquisition—and engineer tailored solutions built around your business model.",
  },
  {
    q: "Which types of businesses are the best fit for your agency?",
    a: "We primarily partner with manufacturers, B2B companies, professional service firms, and established e-commerce brands. We understand long sales cycles, technical products, and high-consideration decision-making.",
  },
  {
    q: "Can we engage DigitalyMarket for a single specialized service?",
    a: "Yes. Engagements can begin with a targeted objective—such as a website overhaul, conversion optimization, or GEO strategy—and naturally expand into an integrated multi-channel roadmap as your requirements develop.",
  },
  {
    q: "What does your onboarding and discovery process look like?",
    a: "Every partnership begins with a thorough diagnostic phase. We evaluate your existing digital presence, audience intent, competitive positioning, and conversion bottlenecks to build an evidence-backed roadmap before any execution begins.",
  },
  {
    q: "How do you track analytics and evaluate performance?",
    a: "We configure clean, reliable tracking infrastructure and evaluate performance against meaningful commercial indicators: qualified enquiry volume, conversion rate, search visibility, and audience engagement, rather than superficial vanity impressions.",
  },
  {
    q: "Do you guarantee specific rankings, traffic, or lead volumes?",
    a: "No credible agency guarantees specific rankings or lead volumes, as search algorithms and market competition evolve constantly. We guarantee disciplined strategy, modern technical execution, transparent reporting, and continuous data-informed optimization.",
  },
  {
    q: "Do you collaborate with international clients?",
    a: "Yes. DigitalyMarket operates globally with distributed systems, serving clients across North America, Europe, the Middle East, and Asia with seamless remote communication and clear milestone tracking.",
  },
  {
    q: "How do we start a conversation with your team?",
    a: "Submit an enquiry through our form detailing your business and primary objectives. We review your submission, conduct an initial review of your digital presence, and follow up by email with relevant insights and recommended next steps.",
  },
];

export function Faq() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Clear answers about our methodology, client partnerships, diagnostic process, and how we drive measurable digital growth.
          </p>
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
