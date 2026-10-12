# Commerce service retirement

## Removed routes and files
- `/services/ecommerce-growth` — deleted `src/routes/services.ecommerce-growth.tsx`, including its page component, canonical and social metadata.
- `/services/marketplace-optimization` — deleted `src/routes/services.marketplace-optimization.tsx`, including its page component, canonical and social metadata.
- Deleted `src/components/services/ServiceComingSoon.tsx`; only the two retired routes used it.
- Removed the two page content records and retired related-service references from `src/data/services.ts`. Kept shared types, remaining records and the reusable ServiceDetail component.
- The route tree regenerated automatically; it was not manually edited.

## References updated
- Homepage capability strip and service listings; About capabilities; Services capability cards and ecosystem nodes. Count-dependent text now reflects three services.
- Removed related-service cards on GEO, unwrapped contextual links on Paid Marketing and Web Creation, and removed the marketplace link in GrowthJourney while retaining its explanatory text.
- Unwrapped seven retired service links in Insights articles without deleting or rewriting the educational content. Existing commerce Insights and industry pages remain available.
- Removed retired URLs from the sitemap and Services ItemList structured data. Updated homepage and Services metadata/service topic declarations to match the remaining offerings.
- Main navigation and footer already contained no retired service URLs and remain unchanged.
- Shared images/assets, styles, tracking, enquiry fields/options, submission handling and remaining service narratives were preserved.
- Historical handover documents remain historical records, not live navigation or SEO references.

## Verification
- Both retired routes return HTTP 404 in the local preview, without redirects.
- All 24 sitemap pages return HTTP 200, have one H1 and nonempty title, description, Open Graph title and Open Graph description.
- No retired service URL remains in runtime source, rendered internal links or sitemap entries.
- Crawled 25 internal destinations: no new unintended 404s; the pre-existing `/services/seo` link still returns 404 and was left unchanged as unrelated scope.
- Remaining GEO, Paid Marketing and Web Creation pages load successfully; desktop service listing shows three cards.
- Phone navigation to Services works and has no horizontal overflow.
- The existing enquiry dialog opens and closes using Escape; no submission was sent or integrations changed.
- No browser runtime errors observed during the crawl.
- Two retirement-rule tests in `src/data/services.test.ts` passed with `bun test src/data/services.test.ts`.
- Latest automatic build/type check reported `build OK`.

## Release and redirect decisions
- Implemented only in preview; not published.
- No replacement route or unified page was created.
- No redirect destination is proposed because the replacement URL has not been approved. When the unified page is separately approved, review permanent redirects from each old URL to that approved URL; until then both remain removed (404).
- The earlier Google enquiry delivery timeout remains outside this removal task; full delivery was not retested.