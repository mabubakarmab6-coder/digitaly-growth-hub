# WebP conversion and verification

## Result

- Converted 37 images: 22 local images, six existing CDN images, and nine existing editorial photographs.
- Total source payload: 10,170,727 bytes; WebP payload: 5,230,756 bytes — 48.57% less across the converted inventory, not a per-page speed measurement.
- Kept every original image dimension and existing layout, crop, alternative description, and loading setting.
- Both approved logos and the three PNG product screenshots use lossless WebP; decoded pixel equality was verified.
- Photography uses quality 80–90 WebP, selected to avoid increasing file size where practical.
- The four homepage consultation-image variants were already WebP and remain unchanged.

## Integration and compatibility

- All active image imports and rendered content-image URLs now use WebP asset pointers.
- Existing editorial photographs are unchanged in subject and framing; their shared URLs now live in `src/data/editorial-images.ts`.
- Removed 22 superseded local PNG/JPG files after updating consumers.
- Retained `public/favicon.png` and both `public/work/*-og.jpg` social-preview images for compatibility; their existing public URLs remain available.
- Retained original CDN pointers and objects so previous deployments do not lose those assets; they are no longer imported by website components.
- Filled missing social metadata on six existing content pages, retaining their titles, descriptions, indexing directives and canonical destinations.
- No dependencies, tracking, styles, enquiry processing, navigation destinations, or business content changed.

## Verification

- All 37 uploaded images returned HTTP 200 and `image/webp`; their downloaded bytes decoded as WebP with the expected dimensions.
- Favicon and both social-preview compatibility images returned HTTP 200.
- All 29 sitemap pages plus the diagnostic page returned HTTP 200, with one H1, the required page metadata, and no broken images or rendered PNG/JPG content images.
- Homepage, founder, Web Creation, manufacturing industry, SensyTalk and Gems Gallery checked at 320, 375, 768, 1011 and 1440 pixels: all 30 page/width combinations loaded their images with no horizontal overflow.
- Browser screenshots reviewed for desktop/mobile homepage, founder and service-page presentation.
- The existing consultation dialog opened and closed successfully; no enquiry was submitted.
- No browser runtime errors during the checks.
- Existing test suite: 12 passed, zero failures.
- Automatic preview build: passed after the image-reference changes.
- Publication: not performed.