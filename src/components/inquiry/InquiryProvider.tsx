import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { inquiryInputSchema, SERVICE_OPTIONS, type InquiryDraft } from "@/lib/inquiry/config";
import { clearDraft, loadDraft, saveDraft, trackInquiry } from "@/lib/inquiry/state";
import { submitInquiry } from "@/lib/inquiry/submit.functions";
import { Field, TextArea, TextInput } from "./fields";

type OpenInquiry = (sourceService?: string) => void;
type Errors = Partial<Record<"fullName" | "workEmail" | "companyName" | "selectedService" | "businessAndChallenge", string>>;

const InquiryContext = createContext<OpenInquiry | null>(null);

function normalizeService(value?: string) {
  if (!value) return "";
  const normalized = value.toLowerCase();
  if (normalized.includes("geo") || normalized.includes("generative")) return "GEO";
  if (normalized.includes("paid") || normalized.includes("performance")) return "Paid Marketing";
  if (normalized === "seo" || normalized.includes("search engine optimization")) return "SEO";
  if (normalized.includes("website") || normalized.includes("web creation")) return "Website";
  if (normalized.includes("e-commerce") || normalized.includes("ecommerce") || normalized.includes("marketplace")) {
    return "E-commerce / Marketplace";
  }
  return "";
}

export function useInquiry() {
  const openInquiry = useContext(InquiryContext);
  if (!openInquiry) throw new Error("useInquiry must be used within InquiryProvider");
  return openInquiry;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<InquiryDraft>(() => ({ ...loadDraft() }));
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);
  const submit = useServerFn(submitInquiry);

  const openInquiry = useCallback((sourceService?: string) => {
    const sourcePage = `${window.location.pathname}${window.location.search}`.slice(0, 500);
    const service = normalizeService(sourceService);
    setDone(false);
    setSubmitError("");
    setDraft((current) => ({
      ...current,
      sourcePage,
      sourceService: service,
      selectedService: current.selectedService || (service || undefined),
    }));
    setOpen(true);
    trackInquiry("inquiry_popup_open", {
      source_page: sourcePage,
      source_service: service || "general",
    });
  }, []);

  useEffect(() => {
    const interceptInquiryLinks = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href="/start"], a[href$="/start"]');
      if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      event.stopPropagation();
      openInquiry(link.dataset.inquiryService);
    };
    document.addEventListener("click", interceptInquiryLinks, true);
    return () => document.removeEventListener("click", interceptInquiryLinks, true);
  }, [openInquiry]);

  useEffect(() => {
    if (!done) saveDraft(draft);
  }, [draft, done]);

  const contextValue = useMemo(() => openInquiry, [openInquiry]);

  const update = <K extends keyof InquiryDraft>(key: K, value: InquiryDraft[K]) => {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const parsed = inquiryInputSchema.safeParse(draft);
    if (!parsed.success) {
      const nextErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in nextErrors)) {
          nextErrors[key as keyof Errors] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const result = await submit({ data: parsed.data });
      if (!result.ok) throw new Error("Submission was not accepted");
      trackInquiry("inquiry_form_submitted", {
        source_page: parsed.data.sourcePage || "unknown",
        source_service: parsed.data.sourceService || "general",
        selected_service: parsed.data.selectedService,
      });
      clearDraft();
      setDone(true);
    } catch {
      setSubmitError("Something went wrong while sending your enquiry. Please try again.");
      trackInquiry("inquiry_form_error", {
        source_page: parsed.data.sourcePage || "unknown",
        source_service: parsed.data.sourceService || "general",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const closeSuccess = () => {
    setOpen(false);
    setDone(false);
    setDraft({
      fullName: "",
      workEmail: "",
      companyName: "",
      selectedService: undefined,
      businessAndChallenge: "",
      sourceService: "",
      sourcePage: "",
      website: "",
    });
    setErrors({});
  };

  return (
    <InquiryContext.Provider value={contextValue}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="inquiry-dialog top-0 left-0 flex h-dvh w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden border-0 p-0 sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:max-w-2xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border">
          {done ? (
            <div className="flex min-h-[28rem] flex-col items-center justify-center px-6 py-14 text-center sm:px-12">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <DialogTitle className="mt-6 text-3xl leading-tight text-foreground">
                Thanks — we've got it.
              </DialogTitle>
              <DialogDescription className="mt-4 max-w-lg text-base leading-relaxed">
                We've received your enquiry and will review the information you've shared. We'll get
                back to you by email with the appropriate next step.
              </DialogDescription>
              <Button type="button" onClick={closeSuccess} className="action-primary mt-8 min-h-12 rounded-full px-7">
                Back to DigitalyMarket
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
              <header className="shrink-0 border-b border-hairline px-5 pt-6 pb-5 sm:px-8 sm:pt-8">
                <p className="eyebrow pr-10">Start a conversation</p>
                <DialogTitle className="mt-3 pr-10 text-2xl leading-tight text-foreground sm:text-3xl">
                  Let's understand what you need
                </DialogTitle>
                <DialogDescription className="mt-3 max-w-xl text-sm leading-relaxed sm:text-base">
                  Tell us a little about your business and what you're looking to improve.
                </DialogDescription>
              </header>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name *" htmlFor="inquiry-full-name" error={errors.fullName}>
                    <TextInput id="inquiry-full-name" name="fullName" autoComplete="name" maxLength={100} autoFocus value={draft.fullName} invalid={Boolean(errors.fullName)} onChange={(event) => update("fullName", event.target.value)} />
                  </Field>
                  <Field label="Work Email *" htmlFor="inquiry-work-email" error={errors.workEmail}>
                    <TextInput id="inquiry-work-email" name="workEmail" type="email" inputMode="email" autoComplete="email" maxLength={255} value={draft.workEmail} invalid={Boolean(errors.workEmail)} onChange={(event) => update("workEmail", event.target.value)} />
                  </Field>
                </div>

                <Field label="Company / Business Name *" htmlFor="inquiry-company" error={errors.companyName}>
                  <TextInput id="inquiry-company" name="companyName" autoComplete="organization" maxLength={200} value={draft.companyName} invalid={Boolean(errors.companyName)} onChange={(event) => update("companyName", event.target.value)} />
                </Field>

                <Field label="What best describes what you need help with? *" htmlFor="inquiry-service" error={errors.selectedService}>
                  <select
                    id="inquiry-service"
                    name="selectedService"
                    required
                    aria-invalid={Boolean(errors.selectedService) || undefined}
                    value={draft.selectedService ?? ""}
                    onChange={(event) => update("selectedService", event.target.value as InquiryDraft["selectedService"])}
                    className={cn("min-h-12 w-full rounded-xl border border-hairline bg-card px-4 py-3 text-base text-foreground shadow-soft/50 outline-none focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20", errors.selectedService && "border-destructive/60")}
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </Field>

                <Field label="Tell us about your business and what you'd like help with." htmlFor="inquiry-context" error={errors.businessAndChallenge}>
                  <TextArea id="inquiry-context" name="businessAndChallenge" maxLength={4000} rows={6} value={draft.businessAndChallenge} onChange={(event) => update("businessAndChallenge", event.target.value)} placeholder="Tell us what your business does, what you're trying to achieve, or where you're facing a challenge. Explain it in your own words." className="min-h-36" />
                </Field>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="inquiry-website">Website</label>
                  <input id="inquiry-website" name="website" tabIndex={-1} autoComplete="off" value={draft.website} onChange={(event) => update("website", event.target.value)} />
                </div>

                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  By sending this enquiry, you agree that DigitalyMarket may contact you about it. See our <a href="/privacy" className="font-semibold text-primary underline-offset-4 hover:underline">Privacy Policy</a>.
                </p>

                {submitError ? <p role="alert" className="mt-4 rounded-lg border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">{submitError}</p> : null}
              </div>

              <footer className="shrink-0 border-t border-hairline bg-background px-5 py-4 sm:px-8">
                <Button type="submit" disabled={submitting} className="action-primary min-h-12 w-full rounded-full px-7 text-sm font-semibold">
                  {submitting ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending</> : <>Send Enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" /></>}
                </Button>
              </footer>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </InquiryContext.Provider>
  );
}