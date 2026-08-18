import logoAsset from "@/assets/digitalymarket-logo.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Official DigitalyMarket horizontal logo.
 * Never recreate this as text — always render the official asset.
 */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="DigitalyMarket"
      width={935}
      height={400}
      className={cn("h-8 w-auto object-contain sm:h-9 lg:h-10", className)}
    />
  );
}
