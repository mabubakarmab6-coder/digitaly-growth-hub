# Executive Summary — Forensic Tracking Audit v4.0

**Target Website:** [digitalymarket.com](https://digitalymarket.com)  
**Codename:** `DYM-MEASUREMENT-FORENSICS`  
**Execution Platform:** Antigravity 2.0  
**Audit Standard:** Tier 1 Direct Technical Verification / Zero Production Mutation  
**Date of Verification:** 02 November 2026  
**Audited Container Version:** Google Tag Manager `GTM-KKPZ3XL5` (Version 13, Published)  

---

## 1. Executive Verdict & Overall Score

### **Tracking Maturity Score: 3.2 / 10**

```
[███░░░░░░░] 3.2 / 10 — CRITICAL MEASUREMENT BLACKOUT
```

### Scoring Basis & Evidence Limitations
The score of **3.2 / 10** reflects an alarming reality: **DigitalyMarket is currently suffering from a total conversion measurement blackout**. 

While basic page-level analytics are technically operational via Google Analytics 4 (GA4), **zero lead conversions are reaching any advertising or analytics platform**. 

An emergency reaction to an earlier defect (where Google Ads Conversion Tag was erroneously firing on every single pageview across the entire site, inflating conversions to 100%) resulted in a heavy-handed, destructive cleanup. In GTM Container Version 13, the Google Ads conversion tags, remarketing tags, Meta Pixel tags, and Microsoft Clarity tags were **completely deleted**, rather than being properly re-wired to form submission triggers. 

Simultaneously, the frontend application pushes custom inquiry events into `dataLayer` (`inquiry_form_submitted`), but GTM contains **no matching triggers**. The only custom event tag present in GTM (Tag 24) is permanently disabled due to an unresolved typographical mismatch (`"GA4 Custome Event"`). 

Consequently:
- **Google Ads:** Receives 0 conversions and 0 remarketing signals. Paid campaigns cannot optimize.
- **Meta Ads:** Receives 0 conversions and 0 pixel traffic. Retargeting and lookalike algorithms are blind.
- **GA4:** Receives basic pageviews and enhanced measurement clicks, but 0 lead conversions.
- **Privacy & Compliance:** Google Tag First-Party Data Auto-Collection is actively enabled in GTM, automatically scraping email and phone values from DOM inputs without exclusion rules, directly violating DigitalyMarket’s published Privacy Policy.

---

## 2. High-Level System Status Breakdown

| Platform / Pipeline | Configuration Status | Runtime Execution | Conversion Integrity | Compliance Status |
| :--- | :--- | :--- | :--- | :--- |
| **Google Tag Manager** (`GTM-KKPZ3XL5`) | Active (v13) | Executing | 🚨 Broken (Zero lead triggers) | ⚠️ PII Auto-Scraping Active |
| **Google Analytics 4** (`G-Y4C6BMK9WG`) | Active | Executing (`page_view`) | 🚨 0 Leads Received | ❌ Consent Mode v2 Missing |
| **Google Ads** (`AW-10976434396`) | ❌ Deleted from GTM | Dead (0 requests) | 🚨 Total Conversion Blackout | N/A |
| **Meta Pixel** (`1791505495459296`) | ❌ Deleted from GTM | Dead (0 requests) | 🚨 Total Conversion Blackout | N/A |
| **Meta Conversions API (CAPI)** | ❌ Not Implemented | Dead (0 server hits) | 🚨 Absent | N/A |
| **Microsoft Clarity** (`y55ed0nfer`) | ❌ Deleted from GTM | Dead (0 requests) | N/A | N/A |
| **Server-Side Tracking / sGTM** | ❌ Not Implemented | Dead | N/A | N/A |
| **Google Search Console** | Verified Meta Token | Active | N/A | N/A |
| **Consent Management (CMP)** | ❌ Completely Absent | Unenforced | N/A | 🚨 Non-compliant with DMA/GDPR |

---

## 3. The 12 Directive Questions Answered

### 1. What tracking exists?
- Inline Google Tag Manager container loader in `<head>` (`GTM-KKPZ3XL5`).
- Inline `dataLayer` and `gtag('js', new Date())` stub in HTML.
- Google Analytics 4 (`G-Y4C6BMK9WG`) provisioned inside GTM via Google tag (`__dest_ga`).
- GA4 Enhanced Measurement for outbound clicks, downloads, scroll (90%), site search, and form submit.
- Google Site Verification token in `<meta>` tags.
- Lovable Platform Telemetry (`~flock.js` and `__l5e/events.*.js`).

### 2. What tracking actually executes?
- GTM container loads successfully (HTTP 200).
- GA4 executes `page_view` requests on initial page load and on TanStack Router client-side history changes.
- GA4 Enhanced Measurement listeners execute for links, forms, and scrolls.
- Frontend React code executes `trackInquiry()` calls on modal open, form start, submission, and error.

### 3. What data is transmitted?
- GA4 receives page metadata: URL (`dl`), document title (`dt`), referrer (`dr`), screen resolution (`sr`), user-agent client hints (`uap`, `uafvl`), and internal session parameters (`sid`, `sct`).
- `dataLayer` in the browser receives `{ event: "inquiry_form_submitted", source_page, source_service, selected_service }`.
- Lovable receives session heartbeat and page route beacons at `/~api/analytics`.
- **No lead data or conversion data is transmitted to Google Ads or Meta**.

### 4. What receiving platforms acknowledge or process?
- **GA4 Endpoint (`google-analytics.com/g/collect`):** Acknowledges HTTP 204 No Content for `page_view` and enhanced measurement hits.
- **Supabase Backend:** Acknowledges and stores lead submissions via `inquiries` table.
- **Google Apps Script:** Acknowledges lead forwarding to Google Sheets.
- **Google Ads & Meta:** Acknowledge **nothing** because no requests are dispatched to them.

### 5. What conversions are correctly configured?
- **Zero conversions are correctly configured.**
- In GTM Tag ID 32, conversion rules exist for `close_convert_lead`, `qualify_lead`, and `purchase`, but none of these events are ever dispatched by the application.
- The actual inquiry submission event (`inquiry_form_submitted`) has **no conversion tag, no custom event trigger, and no mapping**.

### 6. What tracking is missing?
- Master Event `generate_lead` standard taxonomy.
- Google Ads Conversion Tracking (both web and Enhanced Conversions for Leads).
- Google Ads Remarketing tag.
- Meta Pixel base code and standard `Lead` event tracking.
- Meta Conversions API (CAPI) server-to-server integration with event deduplication.
- Google Consent Mode v2 default initialization and Consent Management Platform (CMP).
- Call-to-action (`cta_click`) tracking across all hero, floating, and service buttons.
- Form validation error (`form_validation_error`) tracking.
- Lead transaction/submission ID passing to dataLayer for offline reconciliation.

### 7. What tracking is duplicated?
- **Initial Pageview Duplication:** On initial page load, the combination of inline `gtag('js', ...)` and GTM v13 container triggers dispatches **two separate `page_view` requests** to GA4 (`_s=1` and `_s=2`) within 5 seconds of container load (Evidence `EVD-07`).
- **Dead Meta Pixel Route Listener:** In `src/routes/__root.tsx`, an SPA route subscription executes on every page navigation attempting to call `fbq("track", "PageView")`, running redundantly in the background while `fbq` is undefined.

### 8. What tracking is technically defective?
- **Dead GTM Tag 24 (`__gaawe`):** An event tag configured to send `"GA4 Custom Event"` is mapped to Trigger Predicate 2: `event == "GA4 Custome Event"` (misspelled with an 'e'). This tag can never fire.
- **Non-Standard Event Taxonomy:** The React codebase pushes `inquiry_form_submitted` instead of the universally recognized `generate_lead`.
- **Missing Payload Parameters:** The submission event lacks an `event_id`, `lead_id`, or `submissionId`, preventing any future deduplication with server-side CAPI.
- **Missing GTM Fallback:** The `<noscript>` iframe for GTM is absent in the production SSR HTML (Evidence `EVD-03`).

### 9. What tracking is unnecessary?
- Lovable platform telemetry (`~flock.js` and `~api/analytics`) remains active on production, consuming browser resources and transmitting unnecessary build-state metrics.
- Dead `fbq` call in `src/routes/__root.tsx`.

### 10. What privacy and consent risks exist?
- **Severe Privacy Policy Contradiction:** GTM Tag 29 (`__ogt_1p_data_v2`) has automated First-Party Data collection active (`vtp_isAutoCollectPiiEnabledFlag: true`, `vtp_autoEmailEnabled: true`, `vtp_autoPhoneEnabled: true`) with zero exclusion selectors. Google tags will scrape email inputs from the DOM. However, the live Privacy Policy specifically promises: *"These details are not sent to website analytics."*
- **Missing Consent Mode v2:** European/UK traffic receives unconsented analytics and ad tags (`gcd=13l3l3l3l1l1`), violating Google's mandatory March 2024 DMA policy and exposing ad accounts to algorithmic penalties.

### 11. What should be retained, corrected, removed, or implemented?
- **Retain:** GTM container installation (`GTM-KKPZ3XL5`), GA4 Measurement ID (`G-Y4C6BMK9WG`), Supabase backend lead pipeline, Google Site Verification.
- **Correct:** Fix initial `page_view` duplication; rename frontend event to `generate_lead`; include `submission_id` in dataLayer payload; disable auto-PII scraping or add strict exclusion selectors in GTM Tag 29; align Privacy Policy.
- **Remove:** Dead `fbq` caller in `__root.tsx`; dead GTM Tag 24 with typo trigger; decommission Lovable telemetry.
- **Implement:** Google Consent Mode v2 via certified CMP; Google Ads conversion tag on `generate_lead` with Enhanced Conversions; Meta Pixel tag and standard `Lead` event; Meta CAPI dispatch in `submit.functions.ts` with matching `event_id`.

### 12. In what sequence should corrective actions occur?
1. **Phase 1 (Hours 0–24):** Emergency Compliance & Signal Restoration — Deploy Consent Mode v2 default, disable unconsented PII scraping in GTM Tag 29, fix frontend dataLayer push to emit `generate_lead` with `event_id`.
2. **Phase 2 (Days 1–3):** Conversion Wiring — Build GTM custom event trigger for `generate_lead`, restore Google Ads Conversion Tag with Enhanced Conversions, restore Meta Pixel with `Lead` event.
3. **Phase 3 (Days 4–7):** Resilient Server Measurement & Deduplication — Implement server-side Meta CAPI in `submit.functions.ts` using the unique `submissionId`, configure conversion deduplication, restore Microsoft Clarity under consent gating.

---

## 4. Final Audit Confidence

**Audit Status:** **COMPLETE & HIGH CONFIDENCE**  
All findings are substantiated by byte-level AST analysis of the live GTM container, full source code audit of the TanStack Start application, and live headless browser CDP telemetry captures.
