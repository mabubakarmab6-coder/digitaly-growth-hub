# DigitalyMarket Project Bible

## 1. Purpose

DigitalyMarket is being built as a premium, modern and approachable digital growth agency brand. The website's job is to explain what the agency does, establish trust through truthful founder experience, and convert qualified visitors into conversations.

## 2. Core positioning

**Positioning:** DigitalyMarket helps businesses turn their digital presence into measurable business growth.

**Primary market:** manufacturers and B2B companies.

**Secondary market:** professional services, local/service businesses and e-commerce businesses.

**Core capabilities:**
1. Generative Engine Optimization (GEO)
2. Paid Marketing
3. Website Creation
4. E-commerce Growth

**Business model:** custom solutions and premium monthly retainers.

**Primary conversion:** Start a Conversation.
**Secondary conversion:** WhatsApp.
**Founder/recruiter path:** Explore Abubakar / Looking to Hire.

## 3. Non-negotiable truthfulness rules

- Never invent clients, testimonials, reviews, awards, certifications, partnerships, revenue, campaign results or case studies.
- Previous employers and employment results are founder experience, not DigitalyMarket client work.
- Never imply a large internal team if the operating model does not support that claim.
- If proof does not exist yet, use transparent positioning instead of fake social proof.

## 4. Current scope

The original brief was homepage-first. The repository now contains both `/` and `/services`. This is an existing implementation fact and must be managed deliberately rather than ignored.

### Current routes
- `/` — homepage
- `/services` — services overview

### Future routes to consider after IA approval
- Service detail pages
- Industries pages
- Work/portfolio
- Insights
- About/founder profile
- Contact

Do not create a large number of routes merely to fill navigation.

## 5. Development priorities

Priority order:
1. Protect the brand/message foundation.
2. Keep the homepage polished and conversion-focused.
3. Make route architecture intentional.
4. Ensure every visible link and CTA has a valid destination.
5. Complete technical SEO and production-domain readiness.
6. Add deeper pages only when their content can be truthful and useful.

## 6. Design principles

Premium should come from design quality, hierarchy, typography, spacing and clarity — not intimidation.

Use:
- clean white/off-white surfaces
- deep navy sections
- sophisticated blue accents
- restrained indigo/purple gradients
- editorial layouts
- generous whitespace
- subtle borders and shadows
- restrained micro-interactions

Avoid:
- cyberpunk
- excessive neon
- AI robots
- dark sci-fi clichés
- gaming aesthetics
- excessive glassmorphism
- generic marketing stock imagery

## 7. Conversion philosophy

The website should always make the next step obvious without creating CTA overload.

Primary: conversation.
Secondary: WhatsApp.
Recruiter path: founder/profile or hiring path.

CTAs should feel human, direct and useful rather than aggressive.

## 8. Content philosophy

Lead with business outcomes and clarity. Explain capabilities in plain language. Use founder experience as the current credibility foundation. As real client work becomes available, replace placeholders with documented proof.

## 9. Current technical foundation

The repository uses TanStack Start with file-based routing and React/TypeScript components. The site has reusable site and service components, Tailwind/shadcn-style UI infrastructure, local image assets and SEO metadata in route definitions.

## 10. Decision log

### 2026-08-12 — Documentation-first reset
The project is being paused for a documentation and source-of-truth pass before further feature expansion. This is intended to prevent repeated prompts, contradictory requirements and accidental scope drift.

### 2026-08-12 — `/services` discovered
The repository contains a substantial `/services` page despite the original homepage-only instruction. It should be treated as existing work and resolved through the roadmap/IA rather than silently removed.

### 2026-08-12 — Founder images added
Real founder assets are present and the founder section now uses a real image rather than a placeholder.

## 11. Working rule for future AI prompts

Before making a change:
1. Read the relevant documentation in `/docs`.
2. Inspect the existing implementation.
3. State what is already present.
4. Change only the requested scope.
5. Do not invent proof.
6. Verify responsive/accessibility/SEO impact.
7. Update documentation when a material project decision changes.
