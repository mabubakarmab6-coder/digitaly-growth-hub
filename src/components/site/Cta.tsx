import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 min-h-11 px-6 active:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift hover:bg-primary/92",
        outline:
          "border border-hairline bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft",
        onNavy:
          "bg-navy-foreground text-navy hover:-translate-y-0.5 hover:bg-navy-foreground/92 shadow-soft",
        outlineNavy:
          "border border-navy-foreground/25 text-navy-foreground hover:-translate-y-0.5 hover:border-navy-foreground/50 hover:bg-navy-foreground/10",
        ghost: "px-0 text-primary hover:gap-3",
      },
      size: {
        default: "",
        lg: "min-h-12 px-7 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type CtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof ctaVariants>;

export function Cta({ className, variant, size, ...props }: CtaProps) {
  return <a className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}
