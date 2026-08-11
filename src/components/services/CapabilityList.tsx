import { cn } from "@/lib/utils";

export function CapabilityList({
  items,
  className,
  tone = "light",
}: {
  items: readonly string[];
  className?: string;
  tone?: "light" | "navy";
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium",
            tone === "navy"
              ? "border-navy-foreground/20 bg-navy-foreground/10 text-navy-foreground/90"
              : "border-hairline bg-secondary text-secondary-foreground",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
