import { Cta } from "./Cta";
import { ContactActions } from "./ContactActions";
import { BrandLogo } from "./BrandLogo";
import { INQUIRY_PATH } from "./constants";



const agencyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "About Founder", href: "/about#founder" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: INQUIRY_PATH },
];

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Website Creation", href: "/services/web-creation" },
  { label: "Paid Marketing", href: "/services/paid-marketing" },
  { label: "Generative Engine Optimization", href: "/services/GEO" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="container-page pt-14 pb-28 md:pt-20 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <a href="/" aria-label="DigitalyMarket home" className="inline-block">
              <BrandLogo className="h-10 w-auto" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Digital growth solutions built around your business.
            </p>
          </div>


          <nav aria-label="Agency">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
              Agency
            </h2>
            <ul className="mt-5 space-y-3">
              {agencyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
              Start here
            </h2>
            <Cta href={INQUIRY_PATH} className="mt-5 w-full sm:w-auto">
              Start a Growth Conversation
            </Cta>
            <ContactActions className="mt-5" />

          </div>
        </div>

        <div className="mt-14 border-t border-hairline pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DigitalyMarket. Digital growth agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
