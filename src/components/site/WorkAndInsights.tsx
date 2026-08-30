import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";
import { INQUIRY_PATH } from "./constants";
import { blogPosts } from "@/data/blog";
import { workProjects } from "@/data/work";
import { Link } from "@tanstack/react-router";

export function WorkAndInsights() {
  return (
    <>
      <section id="work" className="section-y">
        <div className="container-page">
          <Reveal className="overflow-hidden rounded-3xl border border-hairline bg-card p-8 shadow-soft sm:p-14 lg:p-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="eyebrow">Work</p>
                <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
                  Real projects. Real growth.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Explore our latest work where we turn complex challenges into scalable digital solutions. See how we build authoritative online brands and showcase high-impact web design.
                </p>
                <Cta href={INQUIRY_PATH} size="lg" className="mt-8">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Cta>
              </div>
              <div className="relative aspect-square sm:aspect-video lg:aspect-[4/3] rounded-3xl border border-hairline bg-surface overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-surface opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                  <span className="w-fit rounded-full border border-hairline bg-card/80 backdrop-blur-sm px-3 py-1 text-[0.65rem] font-bold tracking-wider text-primary uppercase mb-3">
                    {workProjects[0]?.category || "Website Development"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{workProjects[0]?.title || "Digital Portfolio"}</h3>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground line-clamp-2">
                    {workProjects[0]?.shortDescription || "A modern, high-performance portfolio website engineered to showcase creative design, in-depth case studies, and digital marketing expertise."}
                  </p>
                  <Link to="/work/$slug" params={{ slug: workProjects[0]?.slug || "gemstone-gallery" }} className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3 relative z-20">
                    View Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                {/* Abstract geometric shapes for visual interest */}
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-accent/20 blur-2xl group-hover:bg-accent/30 transition-colors duration-700" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="insights" className="section-y border-t border-hairline bg-surface/60">
        <div className="container-page">
          <Reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Insights</p>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
                Ideas for businesses that want to grow.
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
