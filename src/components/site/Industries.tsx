import manufacturing from "@/assets/industry-manufacturing.jpg";
import professional from "@/assets/industry-professional.jpg";
import local from "@/assets/industry-local.jpg";
import ecommerce from "@/assets/industry-ecommerce.jpg";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    title: "Manufacturers & B2B",
    copy: "Build a stronger digital presence, generate better enquiries and create a reliable acquisition system.",
    image: manufacturing,
    alt: "Modern manufacturing floor with precision machinery under natural light",
  },
  {
    title: "Professional Services",
    copy: "Turn expertise into visibility, trust and qualified enquiries.",
    image: professional,
    alt: "Calm professional services office with a consultation table and documents",
  },
  {
    title: "Local & Service Businesses",
    copy: "Help customers discover you, trust you and take action.",
    image: local,
    alt: "Warm local service business interior with a welcoming front counter",
  },
  {
    title: "E-commerce Businesses",
    copy: "Improve visibility, customer acquisition and online growth.",
    image: ecommerce,
    alt: "Minimal branded e-commerce packaging and products arranged in daylight",
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-y">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Who we help</p>
          <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Built for businesses ready to grow.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From manufacturers building their digital presence to local businesses looking for their
            next customer, we build growth solutions around where your business is today.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <li key={card.title}>
              <Reveal
                delay={i * 90}
                className="group h-full overflow-hidden rounded-2xl border border-hairline bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-16/9 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.copy}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Not sure where you fit? Let's talk. <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
