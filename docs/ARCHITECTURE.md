# DigitalyMarket Architecture

## Stack

- TanStack Start
- React / TypeScript
- Tailwind-based styling
- shadcn-style reusable UI components
- File-based routing

## Route map

`src/routes/index.tsx` → `/`

`src/routes/services.tsx` → `/services`

`src/routes/__root.tsx` → application shell

`src/routes/routeTree.gen.ts` → generated route tree; do not edit manually.

## Site components

`src/components/site/` contains reusable site-level components including navigation, hero, positioning, industries, services, process, credibility, founder, FAQ, CTAs, footer and WhatsApp actions.

## Services components

`src/components/services/` contains the `/services` page system, including service cards, outcomes, audience, growth paths, process, FAQ and CTA components.

## Assets

Current important assets include:
- hero ecosystem visual
- manufacturing, local, professional and e-commerce industry images
- GEO, paid, web and e-commerce service images
- founder portrait
- founder seated image
- founder standing image

## SEO implementation

Route-level metadata is defined alongside route components. JSON-LD is currently implemented on the homepage and services page.

## Safe development rules

- Do not edit generated `routeTree.gen.ts` manually.
- Reuse existing site components before creating duplicates.
- Do not add dependencies unless there is a clear need.
- Preserve accessibility and semantic HTML.
- Preserve responsive behavior.
- Keep URLs intentional and stable.
- Test all visible links after navigation changes.
- Do not create placeholder routes just to satisfy a menu.
- Update `/docs` after material architecture or scope decisions.
