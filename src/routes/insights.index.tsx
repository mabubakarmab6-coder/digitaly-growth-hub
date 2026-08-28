import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts } from "@/data/blog";

const title = "Digital Growth Blog & Insights | DigitalyMarket";
const description =
  "Expert insights, guides, and practical advice on digital marketing, SEO, GEO, and business growth.";
const url = "https://digitalymarket.com/insights";

export const Route = createFileRoute("/insights/")({
  component: InsightsIndex,
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
          "@type": "Blog",
          name: "DigitalyMarket Insights",
          description,
          url,
        }),
      },
    ],
  }),
});

function InsightsIndex() {
  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="border-b border-hairline bg-surface/50">
          <div className="container-page py-16 sm:py-20 lg:py-28">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Insights & Guides</p>
              <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                Practical advice for <span className="text-primary">digital growth.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore our expert insights on SEO, digital marketing strategy, paid media, and everything you need to grow your business online.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <li key={post.slug}>
                  <Reveal delay={i * 90} className="h-full">
                    <Link
                      to="/insights/$slug"
                      params={{ slug: post.slug }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift p-7"
                    >
                      <div className="flex flex-1 flex-col">
                        <span className="text-xs font-medium text-muted-foreground mb-3">{post.publishDate}</span>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {post.description}
                        </p>
                        <div className="mt-auto pt-6 flex items-center justify-between">
                           <span className="text-xs font-medium text-foreground">{post.author}</span>
                           <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                             Read <ArrowRight className="h-4 w-4" aria-hidden="true" />
                           </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
