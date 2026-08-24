import { EMPTY_DRAFT, type InquiryDraft } from "./config";

const KEY = "dm_inquiry_draft_v1";

export function loadDraft(): InquiryDraft {
  if (typeof window === "undefined") return EMPTY_DRAFT;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return EMPTY_DRAFT;
    return { ...EMPTY_DRAFT, ...(JSON.parse(raw) as Partial<InquiryDraft>) };
  } catch {
    return EMPTY_DRAFT;
  }
}

export function saveDraft(draft: InquiryDraft) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(draft));
  } catch {
    /* storage unavailable — the flow still works in-memory */
  }
}

export function clearDraft() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    /* no-op */
  }
}

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/**
 * Pushes inquiry funnel events into the existing GTM dataLayer.
 * Free-text answers are never sent — only counts and non-sensitive selections.
 */
export function trackInquiry(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
