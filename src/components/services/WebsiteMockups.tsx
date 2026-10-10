import { ArrowUpRight, Menu, Plus } from "lucide-react";
import lamps from "@/assets/web-studio-lamps.jpg";

export function StudioScreen({
  mobile = false,
  compact = false,
  eager = false,
}: {
  mobile?: boolean;
  compact?: boolean;
  eager?: boolean;
}) {
  return (
    <div
      className={`studio-screen ${mobile ? "studio-mobile" : ""} ${compact ? "studio-compact" : ""}`}
      aria-hidden="true"
    >
      <div className="studio-nav">
        <span className="font-semibold">
          FORM<span className="text-muted-foreground"> / light</span>
        </span>
        <div className="studio-links">
          <span>Collection</span>
          <span>Our approach</span>
          <span>
            Contact <ArrowUpRight size={10} />
          </span>
        </div>
        {mobile && <Menu size={14} />}
      </div>
      <div className="studio-visual">
        <img src={lamps} width={1536} height={1024} alt="" loading={eager ? "eager" : "lazy"} />
        <div className="studio-copy">
          <span className="studio-kicker">Considered objects. Everyday spaces.</span>
          <p>
            Light that
            <br />
            feels at home.
          </p>
          <span className="studio-action">
            Explore the collection <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
      <div className="studio-bottom">
        <span>Designed with intention.</span>
        <span>
          Explore our approach <Plus size={12} />
        </span>
      </div>
    </div>
  );
}

export function BrowserMockup({
  compact = false,
  eager = false,
}: {
  compact?: boolean;
  eager?: boolean;
}) {
  return (
    <div className="web-browser">
      <div className="web-browser-bar">
        <span className="web-browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span>form-light.example</span>
        <span aria-hidden="true">↗</span>
      </div>
      <StudioScreen compact={compact} eager={eager} />
    </div>
  );
}

export function HeroMockup() {
  return (
    <figure className="web-hero-figure">
      <div className="web-hero-desktop">
        <BrowserMockup eager />
      </div>
      <div className="web-phone">
        <div className="web-phone-speaker" />
        <StudioScreen mobile eager />
      </div>
      <figcaption>
        FORM / light — fictional website concept. Illustrative design, not client work.
      </figcaption>
    </figure>
  );
}

export function PathVisual({ kind }: { kind: "create" | "redesign" | "optimize" }) {
  if (kind === "create")
    return (
      <figure className="web-path-visual web-create">
        <BrowserMockup compact />
        <figcaption>New website concept</figcaption>
      </figure>
    );
  if (kind === "redesign")
    return (
      <figure className="web-path-visual web-redesign">
        <div className="web-before">
          <span className="text-[10px] text-muted-foreground">Before</span>
          <div className="mt-3 border-b border-hairline pb-2 text-xs font-semibold">
            FORM / light
          </div>
          <div className="mt-3 text-[10px] leading-relaxed">Welcome to our website</div>
          <img
            src={lamps}
            alt=""
            width={1536}
            height={1024}
            loading="lazy"
            className="mt-3 aspect-[4/3] w-full object-cover"
          />
          <div className="mt-3 h-1.5 w-3/4 bg-hairline" />
          <div className="mt-2 h-1.5 bg-hairline" />
        </div>
        <div className="web-after">
          <span className="mb-2 block text-[10px] text-primary">After</span>
          <StudioScreen mobile />
        </div>
        <figcaption>Illustrative structure and design comparison</figcaption>
      </figure>
    );
  return (
    <figure className="web-path-visual web-optimize">
      <div className="web-journey-line" />
      <div className="web-product-detail">
        <img src={lamps} alt="" width={1536} height={1024} loading="lazy" />
        <span className="text-xs font-semibold">The Arc Collection</span>
        <span className="text-[10px] text-muted-foreground">Materials · Dimensions · Care</span>
      </div>
      <div className="web-next-step">
        <span className="text-[10px] text-muted-foreground">A clearer next step</span>
        <span className="mt-2 flex items-center gap-3 text-xs font-semibold">
          Explore the collection <ArrowUpRight size={14} />
        </span>
      </div>
      <figcaption>Illustrative product-to-enquiry journey</figcaption>
    </figure>
  );
}
