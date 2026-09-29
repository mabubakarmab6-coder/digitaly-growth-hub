# Implement the Generative Engine Optimization service page

## Scope
Build one production-ready GEO service page at the exact requested URL, `/services/GEO`, while preserving the existing DigitalyMarket design system, navigation, footer, inquiry flow, analytics, and unrelated pages.

## Implementation
- Create a dedicated `/services/GEO` route using the existing site shell, semantic design tokens, spacing, typography, CTA, reveal patterns, and responsive conventions.
- Keep `/services/geo` working and direct it permanently to the canonical uppercase URL so existing links and indexed traffic are not broken.
- Build the page as an educational journey:
  1. Hero: changing discovery landscape and the approved inquiry CTA.
  2. Search progression: traditional search → answer-oriented search → generative discovery.
  3. Why GEO matters, with practical business questions and entity clarity.
  4. Accessible SEO/AEO/GEO comparison showing overlap rather than replacement.
  5. What GEO optimizes beyond keywords.
  6. DigitalyMarket methodology: Diagnose → Clarify → Answer → Strengthen → Optimize → Adapt.
  7. Connected GEO ecosystem visualization with a mobile-specific stacked layout.
  8. Relevance for manufacturers/B2B, professional services, local businesses, e-commerce, and marketplaces.
  9. Contextual links to existing related service pages only.
  10. Transparent explanation of what GEO can improve and what it cannot guarantee.
  11. Final CTA into the existing `/start` inquiry experience.
- Use lightweight CSS/React visuals only; no stock imagery, AI clichés, new libraries, or heavy scripts.
- Add route-specific title, description, canonical, Open Graph/Twitter metadata, and truthful `Service` plus `BreadcrumbList` structured data.
- Update confirmed internal references and sitemap entry to the canonical `/services/GEO` URL without changing unrelated content.

## Technical details
- Create a focused GEO page component under the existing services component area rather than expanding the generic service detail template for all services.
- Use native semantic elements and existing `Cta`, `Reveal`, `SiteNav`, `SiteFooter`, and `GlobalFloatingCta` components.
- Keep all visual values token-based and ensure diagrams collapse into readable vertical structures on narrow screens.
- Avoid guarantees, fabricated results, invented evidence, phone/WhatsApp links, duplicate analytics, or a second form.

## QA
- Verify `/services/GEO` returns 200 and `/services/geo` preserves visitors through a permanent redirect.
- Confirm H1, metadata, canonical, structured data, sitemap, CTA destination, and all internal links.
- Test desktop, tablet, and mobile for readability, focus behavior, no horizontal overflow, no broken content, and no console errors.
- Check that the existing services overview and inquiry flow still work.
- Search the new implementation for placeholder copy, unsupported claims, prohibited contact methods, and accidental broken routes.
