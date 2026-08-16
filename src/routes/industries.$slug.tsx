import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { IndustryDetail } from "@/components/industries/IndustryDetail";
import { industryBySlug } from "@/data/industries";

const origin = "https://digitalymarket.com";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industryBySlug[params.slug];
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Industry not found | DigitalyMarket" }, { name: "robots", content: "noindex" }],
      };
    }
    const { industry } = loaderData;
    const url = `${origin}/industries/${params.slug}`;
    return {
      meta: [
        { title: industry.metaTitle },
        { name: "description", content: industry.metaDescription },
        { property: "og:title", content: industry.metaTitle },
        { property: "og:description", content: industry.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: industry.metaTitle },
        { name: "twitter:description", content: industry.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: origin },
              { "@type": "ListItem", position: 2, name: "Industries", item: `${origin}/industries` },
              { "@type": "ListItem", position: 3, name: industry.name, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: industry.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: IndustryNotFound,
  component: IndustryPage,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <IndustryDetail industry={industry} />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function IndustryNotFound() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main className="container-page section-y">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          We couldn't find that industry.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          The page may have moved. Browse the industries we work with, or start a conversation and
          tell us about your business.
        </p>
        <a
          href="/industries"
          className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          View all industries
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
