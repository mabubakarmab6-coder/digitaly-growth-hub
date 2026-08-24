import type { MouseEvent } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { INQUIRY_PATH } from "./constants";

/**
 * One global floating CTA, rendered on every public page.
 * Scrolls to the page's existing conversation section when present,
 * otherwise falls back to the homepage contact section.
 */
export function GlobalFloatingCta() {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof document === "undefined") return;
    const target = document.getElementById("contact");
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof history !== "undefined") history.replaceState(null, "", "#contact");
  };

  return (
    <div
      className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-5 sm:bottom-5 lg:right-6 lg:bottom-6"
      style={{
        paddingRight: "env(safe-area-inset-right)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <a
        href={INQUIRY_PATH}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DigitalyMarket on WhatsApp"
        title="Chat on WhatsApp"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-card text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>

      <a
        href="/#contact"
        onClick={onClick}
        aria-label="Start a conversation with DigitalyMarket"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold tracking-tight text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="hidden sm:inline">Start a Conversation</span>
        <span className="sm:hidden">Let's Talk</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
