import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { workProjects } from "@/data/work";

const title = "Our Work & Digital Portfolio | DigitalyMarket";
const description =
  "Explore our latest work where we turn complex challenges into scalable digital solutions for modern businesses.";
const url = "https://digitalymarket.com/work";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
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
  }),
});

function WorkIndex() {
  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="border-b border-hairline bg-surface/50">
          <div className="container-page py-16 sm:py-20 lg:py-28">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Digital Portfolio</p>
              <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                Real projects. <span className="text-primary">Real growth.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore our latest work where we turn complex challenges into scalable digital solutions. See how we build authoritative online brands and showcase high-impact web design.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page">
            <ul className="grid gap-8 lg:gap-12">
              {workProjects.map((project, i) => (
                <li key={project.id}>
                  <Reveal delay={i * 90}>
                    <Link
                      to="/work/$slug"
                      params={{ slug: project.slug }}
                      className="group block overflow-hidden rounded-3xl border border-hairline bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                    >
                      <div className="grid md:grid-cols-2">
                        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                          <span className="w-fit rounded-full border border-hairline bg-surface px-3 py-1 text-[0.65rem] font-bold tracking-wider text-primary uppercase mb-5">
                            {project.category}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            {project.shortDescription}
                          </p>
                          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground transition-all group-hover:text-primary group-hover:gap-3">
                            View Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="relative aspect-video md:aspect-auto md:h-full bg-surface overflow-hidden border-t md:border-t-0 md:border-l border-hairline">
                          {/* Placeholder abstract design similar to homepage */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-surface" />
                          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
                          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-accent/20 blur-2xl group-hover:bg-accent/30 transition-colors duration-700" />
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
