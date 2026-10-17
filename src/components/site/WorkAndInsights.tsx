import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { blogPosts } from "@/data/blog";
import { FEATURED_WORK_SLUG, workProjects } from "@/data/work";
import { Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function WorkAndInsights() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const initialIndex = workProjects.findIndex((p) => p.slug === FEATURED_WORK_SLUG);
  const startIndex = initialIndex >= 0 ? initialIndex : 0;

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <section id="work" className="section-y">
        <div className="container-page">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Work &amp; Case Studies</p>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
                Real Projects. Real Growth.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore our latest work where we turn complex challenges into scalable digital solutions. See how we build authoritative online brands and showcase high-impact web design.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-semibold text-muted-foreground tracking-wider mr-2">
                {String(current + 1).padStart(2, "0")} / {String(count || workProjects.length).padStart(2, "0")}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => api?.scrollPrev()}
                className="h-10 w-10 rounded-full border-hairline bg-card hover:bg-accent hover:text-foreground transition-all"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => api?.scrollNext()}
                className="h-10 w-10 rounded-full border-hairline bg-card hover:bg-accent hover:text-foreground transition-all"
                aria-label="Next project"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              startIndex,
            }}
            className="w-full"
          >
            <CarouselContent>
              {workProjects.map((project) => (
                <CarouselItem key={project.id} className="basis-full">
                  <div className="overflow-hidden rounded-3xl border border-hairline bg-card p-6 shadow-soft sm:p-10 lg:p-14 transition-all duration-500 hover:shadow-lift">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
                      {/* Left: Project Information */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="rounded-full border border-hairline bg-surface px-3 py-1 text-[0.68rem] font-bold tracking-wider text-primary uppercase">
                              {project.category}
                            </span>
                            <span className="text-xs font-medium text-muted-foreground">
                              {project.client}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                            <Link
                              to="/work/$slug"
                              params={{ slug: project.slug }}
                              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
                            >
                              {project.title}
                            </Link>
                          </h3>

                          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            {project.shortDescription}
                          </p>

                          {/* Key Results Grid */}
                          {project.results && project.results.length > 0 && (
                            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-hairline py-4">
                              {project.results.map((res) => (
                                <div key={res.label}>
                                  <p className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                                    {res.metric}
                                  </p>
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {res.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                          <Link
                            to="/work/$slug"
                            params={{ slug: project.slug }}
                            className="action-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:gap-3"
                          >
                            View Case Study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Live Site <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: Project Preview Image */}
                      <Link
                        to="/work/$slug"
                        params={{ slug: project.slug }}
                        aria-label={`View ${project.title} case study`}
                        className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-hairline bg-surface shadow-inner block"
                      >
                        <img
                          src={project.imageUrl || "/work/sensytalk-hero.jpg"}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          width={1200}
                          height={750}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground bg-card/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-hairline shadow-soft">
                            Explore Project <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots navigation */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {workProjects.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                onClick={() => api?.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}: ${project.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="section-y border-t border-hairline bg-surface/60">
        <div className="container-page">
          <Reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Insights</p>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
                Ideas for Businesses That Want to Grow.
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Explore Insights <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post, i) => (
              <li key={post.slug}>
                <Reveal
                  delay={i * 80}
                  className="h-full"
                >
                  <Link 
                    to="/insights/$slug" 
                    params={{ slug: post.slug }}
                    className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft group"
                  >
                    <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-primary uppercase">
                      Digital Marketing
                    </span>
                    <h3 className="mt-4 flex-1 text-base leading-snug font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span className="mt-6 text-xs font-medium tracking-wide text-muted-foreground flex items-center justify-between">
                      {post.publishDate}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
