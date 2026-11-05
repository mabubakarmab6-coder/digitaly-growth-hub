# Platform-Specific Audit — GA4, Google Ads, Meta, Clarity & GSC

**Audit Codename:** DYM-MEASUREMENT-FORENSICS  
**Document:** `03_Platform_Audit.md`  
**Audited Platforms:** GA4, Google Ads, Meta (Pixel & CAPI), Microsoft Clarity, Google Search Console  
**Evidence Links:** `EVD-01`, `EVD-02`, `EVD-03`, `EVD-04`, `EVD-05`, `EVD-06`, `EVD-07`, `EVD-08`, `EVD-09`  

---

## 1. Platform Architecture Matrix & Six-Stage Status

To ensure engineering rigor, each platform's lifecycle is evaluated across the six mandatory forensic states:
1. **Event Generated:** Application logic creates the tracking object.
2. **Tag Executed:** GTM container evaluates rules and invokes tag.
3. **Request Dispatched:** Browser/server issues network request.
4. **Endpoint Responded:** Destination server acknowledges HTTP 2xx.
5. **Diagnostics Observed:** Event visible in DebugView / Test Events / Tag Assistant.
6. **Reporting Available:** Aggregate platform reporting processed.

```
[Stages]  (1) Gen  ->  (2) Tag  ->  (3) Req  ->  (4) Res  ->  (5) Diag  ->  (6) Rep
GA4 Page:   [YES]  ->    [YES]  ->   [YES]   ->   [YES]   ->    [YES]   ->    [YES]
GA4 Lead:   [YES]  ->    [NO]   ->   [NO]    ->   [NO]    ->    [NO]    ->    [NO]
GAds Lead:  [NO]   ->    [NO]   ->   [NO]    ->   [NO]    ->    [NO]    ->    [NO]
Meta Lead:  [NO]   ->    [NO]   ->   [NO]    ->   [NO]    ->    [NO]    ->    [NO]
Meta CAPI:  [NO]   ->    [NO]   ->   [NO]    ->   [NO]    ->    [NO]    ->    [NO]
Clarity:    [NO]   ->    [NO]   ->   [NO]    ->   [NO]    ->    [NO]    ->    [NO]
```

---

## 2. Platform 7A: Google Analytics 4 (GA4)

- **Target Measurement ID:** `G-Y4C6BMK9WG`
- **Deployment Method:** Google Tag (`__dest_ga`, Tag IDs 13, 18, 22) deployed via GTM Container `GTM-KKPZ3XL5` (Version 13).
- **Core Signal Delivery:** Active. HTTP POST requests successfully reach `https://www.google-analytics.com/g/collect?v=2&tid=G-Y4C6BMK9WG` returning HTTP 204 No Content.
- **Enhanced Measurement Audit:**
  - `page_view`: Active (`__ccd_em_page_view`). History change listener enabled (`vtp_historyEvents: true`), enabling SPA route transitions to dispatch pageviews.
  - `scroll`: Active (`__ccd_em_scroll`). Captures standard 90% scroll milestone.
  - `click` (Outbound): Active (`__ccd_em_outbound_click`). Listens to external anchor clicks (e.g. LinkedIn, Instagram).
  - `file_download`: Active (`__ccd_em_download`). Unused (no downloadable PDF assets on site).
  - `form_submit`: Active (`__ccd_em_form`). Intercepts DOM `<form>` submit events. **Defect:** Captures submission attempts before client validation confirms success; does not replace structured lead attribution.
  - `view_search_results`: Active (`__ccd_em_site_search`). Unused (site contains no search bar).
  - `video_*`: Active (`__ccd_em_video`). Unused (site contains no embedded YouTube videos).
- **Auto-Conversion Marking Configuration:**
  - GTM Tag ID 32 (`__ccd_conversion_marking`) contains automated conversion marking rules for `close_convert_lead`, `qualify_lead`, and `purchase`. 
  - **Forensic Defect:** The application never generates these events. The actual lead event pushed by the site is `inquiry_form_submitted`, which is neither marked as a conversion nor connected to any GA4 tag.
- **Data Redaction & Governance:**
  - Email auto-redaction is active (`__ccd_auto_redact`, Tag 31), stripping regex email patterns from URL query strings.
  - Google Signals is explicitly disallowed across all regions (`__ccd_ga_regscope`, Tag 40).
- **DebugView & Tag Assistant Verification:**
  - Tag Assistant confirms container load. GA4 hits carry `gtm=45He6as1v9261435879...` and update session counters (`sid`, `sct`).

---

## 3. Platform 7B: Google Ads

- **Target Conversion ID:** `AW-10976434396` (Historical / Proposed)
- **Historical Conversion Action:** Conversion Label `qNK4CNzkxOMcENyx_PEo`
- **Current Operational Status:** **100% DEAD / ABSENT IN CONTAINER v13**
- **Forensic Diagnosis:**
  - In GTM Container v1–v12, Tag ID 6 (`__awct`) was attached to Rule 1 (`gtm.js` / Container Loaded). This caused every single page visit across the domain to report a paid conversion to Google Ads.
  - In response, the operator deleted Tag 5 (Remarketing) and Tag 6 (Conversion) in Container Version 13.
  - **Consequence:** Google Ads is currently receiving zero web conversion signals and zero remarketing audiences.
  - **Attribution Risk:** No Conversion Linker tag (`__gcl`) exists in GTM v13. If ads are run with `gclid`, `gbraid`, or `wbraid`, first-party conversion linker cookies (`_gcl_aw`) cannot be set or maintained across subdomains or cross-session journeys.
  - **Enhanced Conversions for Web / Leads:** Completely unconfigured. User-provided data variables are absent.

---

## 4. Platform 7C: Meta (Facebook) Pixel

- **Authorized Pixel ID:** `1791505495459296`
- **Decommissioned Pixel ID:** `1615445166763879` (Previously hardcoded in `index.html`; verified removed from source)
- **Current Operational Status:** **100% DEAD / ABSENT IN RUNTIME**
- **Forensic Diagnosis:**
  - Pixel `1791505495459296` was formerly deployed via GTM Tag ID 10 (Custom HTML). In Container Version 13, Tag 10 was deleted.
  - Direct HTML inspection (`EVD-03`) confirms no inline Meta Pixel loader exists in the document.
  - Live browser inspection (`EVD-07`) confirms `window.fbq` is `undefined`. Zero network requests are sent to `facebook.com/tr`.
  - In `src/routes/__root.tsx`, the SPA route change listener attempting to call `fbq("track", "PageView")` fails silently on every navigation.

---

## 5. Platform 7D: Meta Conversions API (CAPI)

- **Target Dataset:** `1791505495459296`
- **Current Operational Status:** **VERIFIED ABSENT**
- **Backend Inspection (`EVD-06`):**
  - Application server function `submitInquiry` in `src/lib/inquiry/submit.functions.ts` handles form submissions.
  - The function interacts with:
    1. Supabase PostgreSQL database (`inquiries` table).
    2. Resend / Transactional email template (`new-inquiry-notification`).
    3. Google Apps Script endpoint (`script.google.com/macros/s/...`).
  - **No Meta Graph API or CAPI endpoints are called**.
  - No environment variables exist for Meta Access Tokens (`FACEBOOK_ACCESS_TOKEN`, `META_CAPI_KEY`).
  - No event deduplication architecture (`event_id`) exists linking browser and server events.

---

## 6. Platform 7E: Server-Side Measurement Infrastructure

- **sGTM (Server-Side Google Tag Manager):** **VERIFIED ABSENT**. There is no custom tagging server (e.g. `sgtm.digitalymarket.com` or Cloud Run instance). GTM is loaded directly from Google's public CDN (`googletagmanager.com`).
- **GA4 Measurement Protocol:** **VERIFIED ABSENT**. The backend server does not issue POST requests to `https://www.google-analytics.com/mp/collect`.
- **Google Ads Offline Conversion Imports:** **VERIFIED ABSENT**. The system does not capture `gclid` or upload conversion schedules via Google Ads API.
- **CRM Integration:** Basic lead ingestion into Google Sheets via Google Apps Script; no attribution enrichment or downstream conversion feedback loop.

---

## 7. Platform 7F: Microsoft Clarity

- **Target Project ID:** `y55ed0nfer`
- **Current Operational Status:** **100% DEAD / ABSENT IN CONTAINER v13**
- **Forensic Diagnosis:**
  - Formerly integrated via GTM Community Template Tag ID 12.
  - Tag 12 was deleted in GTM Version 13.
  - Source code and client JavaScript bundles (`EVD-03`, `client_bundle.js`) contain no references to Clarity.
  - Live runtime inspection (`EVD-07`) confirms `window.clarity` is `undefined`. Zero session recording or heatmap telemetry is collected.

---

## 8. Platform 7G: Google Search Console (GSC)

- **Verification Method:** Head Meta Tag
- **Token:** `EqZrtxdyQDmh6l_BsNxR0UcG4vSvrwSC1RTfYNEgfc8`
- **Status:** **VERIFIED ACTIVE & HEALTHY** (`EVD-03`).
- **Sitemap Submission:** Sitemap is programmatically generated at `/sitemap.xml` via TanStack Start route `src/routes/sitemap[.]xml.ts`, exposing all 25 canonical pages with appropriate change frequency and priority headers.
- **GA4 Linkage:** Account-level linkage between GSC and GA4 cannot be verified without GA4 Admin access, but the technical prerequisite (verified site ownership token) is properly satisfied in production code.
