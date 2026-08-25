import { Cta } from "./Cta";
import { ContactActions } from "./ContactActions";
import { BrandLogo } from "./BrandLogo";
import { INQUIRY_PATH } from "./constants";



const agencyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/#insights" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: INQUIRY_PATH },
];

const personalLinks = [
  { label: "Abubakar", href: "/#founder" },
  { label: "Experience", href: "/#founder" },
  { label: "Portfolio", href: "/#work" },
  { label: "Hire Me", href: INQUIRY_PATH },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="container-page py-14 md:py-20">
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

          <nav aria-label="Personal">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
              Personal
            </h2>
            <ul className="mt-5 space-y-3">
              {personalLinks.map((link) => (
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
