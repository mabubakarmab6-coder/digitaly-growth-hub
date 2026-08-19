import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutWhyWeExist } from "@/components/about/AboutWhyWeExist";
import { AboutHowWeThink } from "@/components/about/AboutHowWeThink";
import { AboutBeliefs } from "@/components/about/AboutBeliefs";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutCapabilities } from "@/components/about/AboutCapabilities";
import { AboutFounder } from "@/components/about/AboutFounder";
import { AboutWhoWeWorkWith } from "@/components/about/AboutWhoWeWorkWith";
import { AboutFaq, aboutFaqs } from "@/components/about/AboutFaq";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";

const title = "About DigitalyMarket | A Business-First Digital Growth Partner";
const description =
  "DigitalyMarket understands the business before recommending the marketing. Meet the thinking, the principles and the founder — Mohammad Abubakar Siddiqui — behind the agency.";
const url = "https://digitalymarket.com/about";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          url,
          mainEntity: {
            "@type": "Organization",
            name: "DigitalyMarket",
            url: "https://digitalymarket.com",
            description:
              "A business-first digital growth partner offering GEO, paid marketing, website creation, e-commerce growth and marketplace optimization.",
            founder: {
              "@type": "Person",
              name: "Mohammad Abubakar Siddiqui",
              jobTitle: "Founder & Growth Strategist",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: aboutFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutWhyWeExist />
        <AboutHowWeThink />
        <AboutBeliefs />
        <AboutExperience />
        <AboutCapabilities />
        <AboutFounder />
        <AboutWhoWeWorkWith />
        <AboutFaq />
        <AboutFinalCta />
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
