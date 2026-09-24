import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { blogBySlug } from "@/data/blog";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { INQUIRY_PATH } from "@/components/site/constants";

const origin = "https://digitalymarket.com";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = blogBySlug[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Blog post not found | DigitalyMarket" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const url = `${origin}/insights/${params.slug}`;
    const title = post.seoTitle ?? `${post.title} | DigitalyMarket`;
    return {
      meta: [
        { title: title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.publishDate },
        { property: "article:modified_time", content: post.modifiedDate ?? post.publishDate },
        { property: "article:author", content: post.author },
        ...(post.category ? [{ property: "article:section", content: post.category }] : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.publishDate,
            dateModified: post.modifiedDate ?? post.publishDate,
            author: {
              "@type": "Person",
              name: post.author,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
            publisher: {
              "@type": "Organization",
              name: "DigitalyMarket",
              logo: {
                "@type": "ImageObject",
                url: `${origin}/favicon.png`,
              }
            }
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: origin },
              { "@type": "ListItem", position: 2, name: "Insights", item: `${origin}/insights` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        }
      ],
    };
  },
  notFoundComponent: InsightsNotFound,
  component: InsightsPage,
});

function InsightsPage() {
  const { post } = Route.useLoaderData();
  const relatedPosts = (post.relatedSlugs ?? [])
    .map((slug) => blogBySlug[slug])
    .filter((relatedPost) => relatedPost !== undefined);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${post.publishDate}T00:00:00Z`));
  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <article className="container-page py-16 sm:py-20 lg:py-28">
          <Reveal className="max-w-3xl mx-auto">
             {post.category ? (
               <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                 <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
                 <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                 <Link to="/insights" className="transition-colors hover:text-foreground">Insights</Link>
                 <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                 <span aria-current="page" className="text-foreground">{post.title}</span>
               </nav>
             ) : (
               <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
                  <ArrowLeft className="h-4 w-4" /> Back to Insights
               </Link>
             )}
             {post.category ? <p className="eyebrow mb-5">{post.category}</p> : null}
             <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl">
                {post.title}
             </h1>
             <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.publishDate}>{formattedDate}</time>
             </div>
             <div 
               className="mt-12 text-foreground" 
               dangerouslySetInnerHTML={{ __html: post.content }} 
             />
             
             <div className="mt-16 pt-8 border-t border-hairline">
                <h3 className="text-2xl font-semibold mb-4">Ready to implement a digital marketing strategy?</h3>
                <p className="text-muted-foreground mb-6">Let's discuss how we can help your business grow online.</p>
                <Cta href={INQUIRY_PATH}>
                   Start a Conversation
                </Cta>
             </div>
              {relatedPosts.length > 0 ? (
                <section aria-labelledby="related-insights" className="mt-16 border-t border-hairline pt-10">
                  <p className="eyebrow">Continue learning</p>
                  <h2 id="related-insights" className="mt-4 text-2xl font-semibold text-foreground">Related insights</h2>
                  <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                    {relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.slug}>
                        <Link
                          to="/insights/$slug"
                          params={{ slug: relatedPost.slug }}
                          className="group flex items-center justify-between gap-5 py-5 text-base font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          <span>{relatedPost.title}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
          </Reveal>
        </article>
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}

function InsightsNotFound() {
  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <SiteNav />
      <main className="container-page py-20 flex-1">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          We couldn't find that article.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          The post may have moved or been deleted. Browse our latest insights on the blog.
        </p>
        <Link
          to="/insights"
          className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          View all insights
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
