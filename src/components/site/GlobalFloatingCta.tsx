import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { INQUIRY_PATH } from "./constants";

/**
 * One global floating CTA, rendered on every public page.
 * Inquiry-first: it always opens the growth conversation experience.
 */
export function GlobalFloatingCta() {
  return (
    <div
      className="pointer-events-none fixed right-4 bottom-4 z-40 flex justify-end sm:right-5 sm:bottom-5 lg:right-6 lg:bottom-6"
      style={{
        paddingRight: "env(safe-area-inset-right)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <Link
        to={INQUIRY_PATH}
        aria-label="Start a growth conversation with DigitalyMarket"
        className="pointer-events-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold tracking-tight text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="hidden sm:inline">Start a Growth Conversation</span>
        <span className="sm:hidden">Let's Talk</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
