import { ArrowRight, Search, Megaphone, Globe, ShoppingBag, Store } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

const capabilities = [
  {
    title: "Generative Engine Optimization",
    copy: "Be understood and discovered where buying decisions now start.",
    href: "/services/geo",
    icon: Search,
  },
  {
    title: "Paid Marketing",
    copy: "Turn targeted attention into meaningful action.",
    href: "/services/paid-marketing",
    icon: Megaphone,
  },
  {
    title: "Website Creation",
    copy: "A digital experience built to convert the right visitors.",
    href: "/services/web-creation",
    icon: Globe,
  },
  {
    title: "E-commerce Growth",
    copy: "Discovery, conversion and repeat purchase, working together.",
    href: "/services/ecommerce-growth",
    icon: ShoppingBag,
  },
  {
    title: "Marketplace Optimization",
    copy: "Listings that get found, chosen and converted.",
    href: "/services/marketplace-optimization",
    icon: Store,
  },
] as const;

export function AboutCapabilities() {
  return (
    <section id="what-we-do" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
            Five capabilities, applied only where they fit.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The diagnosis decides which of these matter for your business — often it's one or two,
            not all five.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <li key={cap.title}>
                <Reveal delay={i * 60} className="h-full">
                  <Link
                    to={cap.href}
                    className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-base font-semibold text-foreground">{cap.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cap.copy}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-10">
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            See the full services overview <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
