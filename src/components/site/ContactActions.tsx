import { Instagram, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "./constants";

type Action = {
  label: string;
  icon: LucideIcon;
  href: string;
  external?: boolean;
  ariaLabel: string;
};

/**
 * Secondary contact channels only. The primary conversion path is the
 * inquiry experience — no phone, tel: or WhatsApp routes are exposed here.
 */
const actions: Action[] = [
  {
    label: "Email",
    icon: Mail,
    href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "",
    ariaLabel: "Email DigitalyMarket",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: INSTAGRAM_URL,
    external: true,
    ariaLabel: "Visit DigitalyMarket on Instagram",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: LINKEDIN_URL,
    external: true,
    ariaLabel: "Visit DigitalyMarket on LinkedIn",
  },
];

type Tone = "navy" | "light";

const toneStyles: Record<Tone, { enabled: string; disabled: string }> = {
  navy: {
    enabled:
      "border-navy-foreground/20 text-navy-foreground/85 hover:border-navy-foreground/45 hover:bg-navy-foreground/10 hover:text-navy-foreground",
    disabled: "border-navy-foreground/10 text-navy-foreground/35",
  },
  light: {
    enabled:
      "border-hairline bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground hover:shadow-soft",
    disabled: "border-hairline/70 text-muted-foreground/45",
  },
};

export function ContactActions({
  tone = "light",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const styles = toneStyles[tone];

  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {actions.map(({ label, icon: Icon, href, external, ariaLabel }) => {
        const base =
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                aria-label={ariaLabel}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(base, styles.enabled)}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ) : (
              <span
                aria-disabled="true"
                title={`${label} link coming soon`}
                className={cn(base, styles.disabled, "cursor-default")}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
                <span className="sr-only"> — link coming soon</span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
