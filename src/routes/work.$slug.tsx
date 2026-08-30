import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { Reveal } from "@/components/site/Reveal";
import { workProjects } from "@/data/work";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Cta } from "@/components/site/Cta";
import { INQUIRY_PATH } from "@/components/site/constants";

const origin = "https://digitalymarket.com";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = workProjects.find(p => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found | DigitalyMarket" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const url = `${origin}/work/${params.slug}`;
    const title = `${project.title} - Digital Portfolio | DigitalyMarket`;
    return {
      meta: [
        { title: title },
        { name: "description", content: project.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: project.shortDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.shortDescription },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: WorkNotFound,
  component: WorkPage,
});

function WorkPage() {
  const { project } = Route.useLoaderData();
  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <article className="container-page py-16 sm:py-20 lg:py-28">
          <Reveal className="max-w-4xl mx-auto">
             <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="h-4 w-4" /> Back to Work
             </Link>
             
             <div className="mb-6">
                <span className="w-fit rounded-full border border-hairline bg-surface px-3 py-1 text-[0.65rem] font-bold tracking-wider text-primary uppercase">
                   {project.category}
                </span>
             </div>
             
             <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {project.title}
             </h1>
             
             <div className="mt-8 flex flex-wrap gap-8 border-y border-hairline py-6 text-sm">
                <div>
                  <span className="block text-muted-foreground mb-1">Client</span>
                  <span className="font-semibold text-foreground">{project.client}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground mb-1">Year</span>
                  <span className="font-semibold text-foreground">{project.year}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground mb-1">Services</span>
                  <span className="font-semibold text-foreground">{project.services.join(", ")}</span>
                </div>
             </div>

             {/* Description blocks */}
             <div className="mt-12 text-foreground space-y-6 text-lg leading-relaxed">
                {project.fullDescription.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
             </div>
             
             {/* Key Results */}
             {project.results && project.results.length > 0 && (
               <div className="mt-16 bg-surface/50 rounded-3xl p-8 sm:p-12 border border-hairline">
                  <h3 className="text-2xl font-semibold mb-8 text-center">Project Highlights</h3>
                  <div className="grid sm:grid-cols-3 gap-8 text-center">
                    {project.results.map((result, i) => (
                      <div key={i}>
                        <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{result.metric}</div>
                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{result.label}</div>
                      </div>
                    ))}
                  </div>
               </div>
             )}
             
             {/* Tech Stack */}
             <div className="mt-16">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {tech}
                    </span>
                  ))}
                </div>
             </div>
             
             <div className="mt-20 pt-10 border-t border-hairline text-center">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to start your project?</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We build high-performance digital solutions tailored for growth.</p>
                <Cta href={INQUIRY_PATH} size="lg">
                   Start a Conversation
                </Cta>
             </div>
          </Reveal>
        </article>
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}

function WorkNotFound() {
  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <SiteNav />
      <main className="container-page py-20 flex-1">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          We couldn't find that project.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          The case study may have moved or been deleted. Browse our portfolio.
        </p>
        <Link
          to="/work"
          className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          View all work
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
