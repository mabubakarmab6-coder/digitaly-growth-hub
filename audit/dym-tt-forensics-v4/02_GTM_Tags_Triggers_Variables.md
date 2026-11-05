# GTM Container Audit — Tags, Triggers & Variables

**Audit Codename:** DYM-MEASUREMENT-FORENSICS  
**Document:** `02_GTM_Tags_Triggers_Variables.md`  
**Audited Container:** `GTM-KKPZ3XL5`  
**Active Container Version:** Version 13 (Published)  
**Evidence Links:** `EVD-01`, `EVD-02`, `EVD-03`, `EVD-10`  

---

## 1. Container Integrity & Version History

- **Container Identifier:** `GTM-KKPZ3XL5`
- **Active Live Version:** **Version 13**
- **Container File Size:** 550,333 bytes
- **Host Domain:** `https://www.googletagmanager.com/gtm.js?id=GTM-KKPZ3XL5`
- **Installation Path:** Standard asynchronous `<script>` loader located in `<head>` of `digitalymarket.com`.
- **SSR Noscript Delivery Defect:** Although `src/routes/__root.tsx` contains an iframe fallback `<noscript>` block, byte-level examination of the production SSR HTML response (`EVD-03`) demonstrates that the `<noscript>` tag is omitted in production responses.
- **Historic Version Context:**
  - *Versions 1–12 (Historical):* Contained Google Ads Remarketing (`AW-10976434396`, Tag 5), Google Ads Conversion (`qNK4CNzkxOMcENyx_PEo`, Tag 6), Meta Pixel (`1791505495459296`, Tag 10), and Microsoft Clarity (`y55ed0nfer`, Tag 12). Tag 6 fired on `gtm.js` (All Pages), corrupting Google Ads bidding algorithms.
  - *Version 13 (Current):* Following an emergency hotfix to stop the 100% false conversion rate, an uncoordinated deletion was published. Tags 5, 6, 10, and 12 were deleted entirely rather than re-triggered, leaving the container in an incomplete state with zero active advertising or third-party tags.

---

## 2. Tag Inventory (Version 13 AST Extraction)

Below is the verified, complete inventory of all 20 tags extracted directly from GTM Container Version 13.

| Tag ID | Internal Function | Tag Type / Purpose | Priority | Execution Condition (Rule) | Parameters & Diagnostic Observations |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **`27`** | `__ogt_auto_events` | Google Tag Enhanced Measurement Orchestration | 23 | Rule 3 (`gtm.init`) | Outbound click: `true`<br>Scroll: `true`<br>Download: `true`<br>History: `true`<br>Form: `true`<br>Video: `true` |
| **`29`** | `__ogt_1p_data_v2` | Google Tag 1st Party User Data Auto-Collection | 13 | Rule 3 (`gtm.init`) | 🚨 **PRIVACY RISK:**<br>`vtp_isAutoCollectPiiEnabledFlag: true`<br>`vtp_autoEmailEnabled: true`<br>`vtp_autoPhoneEnabled: true`<br>`vtp_autoCollectExclusionSelectors: [""]` (Scrapes DOM inputs automatically) |
| **`42`** | `__ccd_ga_first` | GA4 Initialization Setup (First) | 12 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Reads DOM elements & URL structure. |
| **`41`** | `__set_product_settings` | GA4 Regional / Product Settings | 11 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>References Macro 2 (`google.co.in`) & Macro 3 (`0`). |
| **`40`** | `__ccd_ga_regscope` | GA4 Regulatory / Scope Redaction | 10 | Rule 3 (`gtm.init`) | Google Signals: Disallowed across all regions.<br>Device & Geo: Allowed across all regions. |
| **`39`** | `__ccd_em_download` | GA4 Enhanced Measurement: File Downloads | 9 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Listens to `gtm.linkClick`. |
| **`38`** | `__ccd_em_form` | GA4 Enhanced Measurement: Form Interactions | 8 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Listens to DOM `gtm.formSubmit` & `gtm.formInteract`. |
| **`37`** | `__ccd_em_outbound_click`| GA4 Enhanced Measurement: Outbound Clicks | 7 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Captures external links (`gtm.linkClick`). |
| **`36`** | `__ccd_em_page_view` | GA4 Enhanced Measurement: Pageviews | 6 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>`vtp_historyEvents: true` (Auto-tracks SPA history transitions). |
| **`35`** | `__ccd_em_scroll` | GA4 Enhanced Measurement: Scroll Depth | 5 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Fires standard 90% scroll milestone. |
| **`34`** | `__ccd_em_site_search` | GA4 Enhanced Measurement: Site Search | 4 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Queries: `q,s,search,query,keyword` (Unused; site has no search). |
| **`33`** | `__ccd_em_video` | GA4 Enhanced Measurement: Video Telemetry | 3 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Listens for YouTube iframe API (Unused; site has no video). |
| **`32`** | `__ccd_conversion_marking` | GA4 Auto-Conversion Event Marking | 2 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>Marks events matching: `close_convert_lead`, `qualify_lead`, `purchase`. (None emitted by website). |
| **`31`** | `__ccd_auto_redact` | GA4 Automatic Email Redaction | 1 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG`<br>`vtp_redactEmail: true` (Redacts email patterns from URLs). |
| **`13`** | `__dest_ga` | Google Tag Core Dispatcher | Unset | Rule 0 (`gtm.js`) | Destination: `G-Y4C6BMK9WG`<br>`vtp_ignoreDupeGtagConfigCalls: true` |
| **`18`** | `__dest_ga` | Google Tag Dispatcher Instance | Unset | Rule 0 (`gtm.js`) | Destination: Macro 1 (`G-Y4C6BMK9WG`) |
| **`22`** | `__dest_ga` | Google Tag Consent Initialization Handler | Unset | Rule 1 (`gtm.init_consent`) | Destination: `G-Y4C6BMK9WG` |
| **`24`** | `__gaawe` | GA4 Custom Event Tag | Unset | Rule 2 (`GA4 Custome Event`) | 🚨 **DEFECTIVE / DEAD:**<br>`vtp_eventName: "GA4 Custom Event"`<br>Measurement ID: `G-Y4C6BMK9WG`<br>Fires ONLY on misspelled trigger. |
| **`25`** | `__gct` | Google Tag Call Tracking Configuration | Unset | Rule 0 (`gtm.js`) | Tracking ID: `G-Y4C6BMK9WG`<br>Session Duration: `0` |
| **`30`** | `__ccd_ga_last` | GA4 Initialization Teardown (Last) | 0 | Rule 3 (`gtm.init`) | Destination: `G-Y4C6BMK9WG` |

### Decommissioned / Deleted Tags (Present in v1–v12, Removed in v13)
- **Tag 5 (`__sp`):** Google Ads Remarketing (`AW-10976434396`) — DELETED.
- **Tag 6 (`__awct`):** Google Ads Conversion (`qNK4CNzkxOMcENyx_PEo`) — DELETED.
- **Tag 10 (`Custom HTML`):** Meta Pixel base code (`1791505495459296`) — DELETED.
- **Tag 12 (`Clarity Template`):** Microsoft Clarity (`y55ed0nfer`) — DELETED.

---

## 3. Trigger Inventory & Firing Rules

Container Version 13 defines exactly 4 predicates and 4 execution rules:

### 3.1 Predicates (Evaluation Logic)
- **Predicate 0:** `{{Event}}` (`Macro 0`) == `"gtm.js"` (Container Loaded / Window Loaded)
- **Predicate 1:** `{{Event}}` (`Macro 0`) == `"gtm.init_consent"` (Consent Initialization)
- **Predicate 2:** `{{Event}}` (`Macro 0`) == `"GA4 Custome Event"` (Custom Event trigger with spelling error)
- **Predicate 3:** `{{Event}}` (`Macro 0`) == `"gtm.init"` (Initialization)

### 3.2 Rules (Firing Matrix)
- **Rule 0:** IF Predicate 0 (`gtm.js`) -> FIRES Tag 13 (`__dest_ga`), Tag 18 (`__dest_ga`), Tag 25 (`__gct`).
- **Rule 1:** IF Predicate 1 (`gtm.init_consent`) -> FIRES Tag 22 (`__dest_ga`).
- **Rule 2:** IF Predicate 2 (`GA4 Custome Event`) -> FIRES Tag 24 (`__gaawe` GA4 Custom Event).
- **Rule 3:** IF Predicate 3 (`gtm.init`) -> FIRES Tags 27, 29, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30.

### 3.3 Trigger Gap Analysis
- **Missing Custom Event Triggers:** Zero triggers exist for `inquiry_form_submitted`, `generate_lead`, `form_start`, `form_open`, `form_error`, or `cta_click`.
- **Spelling Defect in Trigger 2:** The single custom event trigger is configured as `"GA4 Custome Event"` (with an 'e'). Because the website pushes `inquiry_form_submitted`, this trigger is never activated. Even if the website pushed `"GA4 Custom Event"`, it would fail to trigger due to the typo.

---

## 4. Variable & Macro Inventory

Container Version 13 contains zero custom Data Layer Variables and zero custom JavaScript variables. Only 4 low-level runtime macros are declared:

| Macro Index | Macro Type | Value / Behavior | Assessment |
| :---: | :--- | :--- | :--- |
| **`0`** | `__e` | Returns runtime `event` name (`{{Event}}`) | System default; functioning properly. |
| **`1`** | `__c` (Constant) | `"G-Y4C6BMK9WG"` | Clean GA4 Measurement ID constant. |
| **`2`** | `__c` (Constant) | `"google.co.in"` | Internal Google product setting constant. |
| **`3`** | `__c` (Constant) | `0` | Internal boolean/integer configuration flag. |

### 4.1 Missing Variables Required for Master Register v2.0
The following critical variables are completely absent from GTM:
1. `dlv - event_id` / `dlv - submission_id` (Required for Meta Pixel / CAPI deduplication).
2. `dlv - source_page` (Required for lead attribution).
3. `dlv - source_service` (Required for service line attribution).
4. `dlv - selected_service` (Required for campaign conversion value / segmentation).
5. User-Provided Data Variable (`user_data`) mapping email/phone for Google Ads Enhanced Conversions.
