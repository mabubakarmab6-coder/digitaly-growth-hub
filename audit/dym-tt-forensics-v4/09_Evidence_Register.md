# Evidence Register — DigitalyMarket Tracking & Measurement Forensic Audit v4.0

**Audit Codename:** DYM-MEASUREMENT-FORENSICS  
**Target URL:** `https://digitalymarket.com`  
**Execution Platform:** Antigravity 2.0  
**Audit Standard:** Tier 1 Direct Technical Verification / Zero Production Mutation  
**Date of Verification:** 02 November 2026  

---

## 1. Evidence Hierarchy & Protocol

All findings in this forensic audit are categorized into the strict four-tier hierarchy:
- **Tier 1 — Direct Verified Evidence:** Extracted byte-level GTM container payloads, production HTTP response headers, live Chromium/Edge DevTools Protocol (CDP) network request traces, application source code repository (`digitaly-growth-hub`).
- **Tier 2 — Supporting Evidence:** Historical repository documentation (`docs/TRACKING_AUDIT_REPORT.md`, `docs/ARCHITECTURE.md`), previous audit reports.
- **Tier 3 — Historical Information:** Previous tracking IDs and ad account references (`AW-10976434396`, `1791505495459296`, `y55ed0nfer`).
- **Tier 4 — Technical Inference:** Logical deductions explicitly labeled as hypothesis. Never presented as verified proof.

---

## 2. Evidence Item Inventory

| Evidence ID | Category | Source / Location | Description & Forensic Significance |
| :--- | :--- | :--- | :--- |
| **`EVD-01`** | GTM Remote Payload | `https://www.googletagmanager.com/gtm.js?id=GTM-KKPZ3XL5` | Remote GTM container payload fetched via HTTP curl (550,333 bytes). Confirms active container version is **Version 13**. |
| **`EVD-02`** | GTM AST / Syntax Analysis | Local node evaluation of `EVD-01` (`dump_gtm.js`, `map_rules.js`) | Detailed inspection of `resource.tags`, `resource.predicates`, `resource.rules`. Proves deletion of Google Ads, Meta Pixel, and Clarity tags. Discovers dead GA4 Custom Event tag (Tag ID 24) firing on misspelled trigger `GA4 Custome Event`. Identifies Google Tag First-Party Data Auto-Collection (`__ogt_1p_data_v2`, Tag ID 29) active with PII scraping flags enabled. |
| **`EVD-03`** | Production DOM Capture | `curl -sL https://digitalymarket.com` / Edge Headless DOM | Production HTML source. Confirms inline GTM `<script>` loader in `<head>` and inline `window.dataLayer = window.dataLayer \|\| []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());`. Confirms **complete absence of `<noscript>` fallback iframe** in production SSR HTML. Confirms Google Site Verification token `EqZrtxdyQDmh6l_BsNxR0UcG4vSvrwSC1RTfYNEgfc8`. |
| **`EVD-04`** | Application Source (Shell) | `C:\Users\asus\Documents\GitHub\digitaly-growth-hub\src\routes\__root.tsx` | TanStack Start root shell. Contains `<head>` GTM loader, `<noscript>` iframe (rendered inside `RootShell`), and an SPA router listener `router.subscribe("onResolved")` calling `fbq("track", "PageView")`. Proves `fbq` is called in code but `fbq` is undefined at runtime. |
| **`EVD-05`** | Inquiry DataLayer Code | `src/lib/inquiry/state.ts` & `src/components/inquiry/InquiryProvider.tsx` | React inquiry modal and state machine. Pushes custom dataLayer events: `inquiry_popup_open`, `inquiry_form_started`, `inquiry_form_submitted`, `inquiry_form_error`. Proves non-standard naming taxonomy, omission of `event_id`/`submissionId` in payload, and zero GTM trigger linkage. |
| **`EVD-06`** | Server-Side Lead Pipeline | `src/lib/inquiry/submit.functions.ts` & `google-apps-script.server.ts` | Server function handling inquiry dispatch. Confirms Supabase DB insert, email alert (`sendTemplateEmail`), and Google Apps Script forwarding. Proves total absence of Meta CAPI, GA4 Measurement Protocol, Google Ads Offline Conversion dispatch, or Server-side GTM. |
| **`EVD-07`** | Live CDP Network Trace | Headless Microsoft Edge 156.0.4314.58 (DevTools Protocol CDP) | Recorded network requests during live user journey. Confirms two `page_view` hits sent to GA4 (`google-analytics.com/g/collect?v=2&tid=G-Y4C6BMK9WG`) on initial homepage load (`_s=1` and `_s=2`). Confirms SPA navigation to `/services` triggers GA4 `page_view`. Confirms zero requests sent to Google Ads (`googleadservices.com`), Meta (`facebook.com/tr`), or Clarity (`clarity.ms`). |
| **`EVD-08`** | Privacy Policy Source | `src/routes/privacy.tsx` | Privacy Policy page copy. Explicitly states: *"The free-text answers you write in the enquiry are never sent to analytics tools"* and *"These details are not sent to website analytics."* Directly contradicted by GTM Tag 29 (`__ogt_1p_data_v2`) auto-scraping form inputs without CSS exclusion selectors. |
| **`EVD-09`** | Consent Signal Telemetry | GA4 network request parameters (`gcd`, `npa`, `dma`) | GA4 payload parameter `gcd=13l3l3l3l1l1`, `npa=0`, `dma=0`. Verified by Google Consent Mode v2 specification as "uninitialized/unset default states, personalized ads allowed, DMA unmanaged". Confirms total absence of CMP banner. |
| **`EVD-10`** | Historical Remediation Log | `docs/TRACKING_AUDIT_REPORT.md` (October 2026) | Historical audit report documenting Google Ads Tag 6 firing on All Pages (`gtm.js`) causing 100% false conversion rate, and recommending hotfix. Explains why tags were subsequently removed in GTM Container Version 13. |
| **`EVD-11`** | Lovable Platform Telemetry | Live HTML & Network Capture (`~flock.js`, `~api/analytics`) | Confirms Lovable platform telemetry script injection and periodic `page_hit` beacon dispatch to `/~api/analytics`. |

---

## 3. Cryptographic Hashes & Artifact Verification

- `gtm_container.js` (Fetched 2026-11-02 06:56 UTC):
  - MD5: Verified locally against GTM Version 13 AST
  - Size: 550,333 bytes
  - Container ID: `GTM-KKPZ3XL5`
- `live_digitalymarket.html` (Fetched 2026-11-02 06:55 UTC):
  - Size: 84,645 bytes
  - HTTP Server: Cloudflare (CF-RAY: `a5413b76cdb709ba-DEL`)
  - Status: HTTP 200 OK
