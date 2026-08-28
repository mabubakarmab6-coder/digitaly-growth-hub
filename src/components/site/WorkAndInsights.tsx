import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";
import { INQUIRY_PATH } from "./constants";
import { blogPosts } from "@/data/blog";
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
                  Our next chapter is being built.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  DigitalyMarket is building its public portfolio around real projects, real
                  challenges and real solutions. As projects go live, this space will showcase the
                  thinking and execution behind the work.
                </p>
                <Cta href={INQUIRY_PATH} size="lg" className="mt-8">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Cta>
              </div>
              <div
                className="grid grid-cols-2 gap-3 sm:gap-4"
                aria-hidden="true"
              >
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-4/3 rounded-2xl border border-hairline bg-surface"
                    style={{ opacity: 1 - i * 0.18 }}
                  />
                ))}
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
