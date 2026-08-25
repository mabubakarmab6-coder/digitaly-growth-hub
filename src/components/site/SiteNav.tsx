import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Cta } from "./Cta";
import { BrandLogo } from "./BrandLogo";

import { NAV_LINKS, INQUIRY_PATH } from "./constants";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-hairline bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20 lg:flex lg:justify-between">
        <a href="/" aria-label="DigitalyMarket home" className="min-w-0 shrink-0">
          <BrandLogo className="h-9 w-auto sm:h-10 lg:h-11" />
        </a>


        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Cta href={INQUIRY_PATH}>Start a Conversation</Cta>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-card text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-hairline bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page py-6">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="border-b border-hairline/70 last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-medium text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Cta href={INQUIRY_PATH} onClick={() => setOpen(false)} className="mt-6 w-full" size="lg">
              Start a Conversation
            </Cta>
          </nav>
        </div>
      )}
    </header>
  );
}
