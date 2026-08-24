import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { INQUIRY_PATH } from "@/components/site/constants";

export function ServiceComingSoon({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="hero-glow section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-foreground">{eyebrow}</span>
          </nav>
          <p className="eyebrow mt-8">{eyebrow}</p>
          <h1 className="mt-4 text-[2.2rem] leading-[1.08] font-semibold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The detailed page for this capability is being written. In the meantime, the fastest way
            to find out whether it fits your business is a short conversation.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Cta href={INQUIRY_PATH} size="lg">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Start My Growth Conversation
            </Cta>
            <Cta href="/services#capabilities" variant="outline" size="lg">
              Back to Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
