import { EMPTY_DRAFT, type InquiryDraft } from "./config";

const KEY = "dm_inquiry_popup_draft_v2";

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
