import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Cta } from "./Cta";
import { BrandLogo } from "./BrandLogo";

import { NAV_LINKS, INQUIRY_PATH } from "./constants";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string; description?: string }[];
};

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const menuId = `nav-menu-${item.label.toLowerCase()}`;

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex items-center gap-1">
        <a
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </a>
        <button
          type="button"
          aria-label={`${item.label} menu`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </button>
      </div>
      {open && (
        <div id={menuId} className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <ul className="w-72 rounded-2xl border border-hairline bg-popover p-2 text-popover-foreground shadow-lg">
            {item.children!.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-muted focus-visible:bg-muted"
                >
                  <span className="block text-sm font-medium text-foreground">{c.label}</span>
                  {c.description && (
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {c.description}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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

  const links = NAV_LINKS as readonly NavItem[];

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
          <ul className="flex items-center gap-7">
            {links.map((link) =>
              link.children ? (
                <DesktopDropdown key={link.label} item={link} />
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
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
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-hairline bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page py-6">
            <ul className="flex flex-col">
              {links.map((link) => {
                const isOpen = expanded === link.label;
                return (
                  <li key={link.label} className="border-b border-hairline/70 last:border-0">
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block flex-1 py-4 text-lg font-medium text-foreground"
                      >
                        {link.label}
                      </a>
                      {link.children && (
                        <button
                          type="button"
                          aria-label={`${isOpen ? "Hide" : "Show"} ${link.label} pages`}
                          aria-expanded={isOpen}
                          onClick={() => setExpanded(isOpen ? null : link.label)}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground"
                        >
                          <ChevronDown
                            className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
                          />
                        </button>
                      )}
                    </div>
                    {link.children && isOpen && (
                      <ul className="pb-3 pl-3">
                        {link.children.map((c) => (
                          <li key={c.href}>
                            <a
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="block py-2.5 text-base text-muted-foreground hover:text-foreground"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
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
