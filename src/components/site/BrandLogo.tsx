import logoAsset from "@/assets/digitalymarket-logo.png.asset.json";
import headerLogoAsset from "@/assets/digitalymarket-header-logo.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Official DigitalyMarket horizontal logo.
 * Never recreate this as text — always render the official asset.
 */
export function BrandLogo({ className, placement }: { className?: string; placement?: "header" }) {
  const isHeader = placement === "header";
  return (
    <img
      src={isHeader ? headerLogoAsset.url : logoAsset.url}
      alt="DigitalyMarket"
      width={isHeader ? 633 : 768}
      height={isHeader ? 380 : 512}
      className={cn(isHeader ? "block h-14 w-auto max-w-full object-contain md:h-[68px]" : "h-8 w-auto object-contain sm:h-9 lg:h-10", className)}
    />
  );
}
