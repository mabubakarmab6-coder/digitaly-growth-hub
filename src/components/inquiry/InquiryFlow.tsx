import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/components/site/constants";
import {
  BUDGET_ALLOCATED_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  BUSINESS_CATEGORY_OPTIONS,
  CHALLENGE_OPTIONS,
  EMPTY_DRAFT,
  OUTCOME_OPTIONS,
  STEPS,
  TIMELINE_OPTIONS,
  type InquiryDraft,
} from "@/lib/inquiry/config";
import { clearDraft, loadDraft, saveDraft, trackInquiry } from "@/lib/inquiry/state";
import { Field, MultiSelect, SingleSelect, TextArea, TextInput } from "./fields";

type Errors = Partial<Record<keyof InquiryDraft, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateStep(step: number, d: InquiryDraft): Errors {
  const e: Errors = {};
  if (step === 1) {
    if (d.challenges.length === 0) e.challenges = "Select at least one challenge.";
    if (d.outcomes.length === 0) e.outcomes = "Select at least one desired outcome.";
  }
  if (step === 2) {
    if (!d.companyName.trim()) e.companyName = "Please tell us your business name.";
    else if (d.companyName.trim().length > 200) e.companyName = "Please keep this under 200 characters.";
  }
  if (step === 3) {
    if (!d.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!d.workEmail.trim()) e.workEmail = "Please enter your work email.";
    else if (!emailPattern.test(d.workEmail.trim())) e.workEmail = "Please enter a valid email address.";
    if (!d.country.trim()) e.country = "Please enter your country.";
  }
  if (step === 5) {
    if (!d.consent) e.consent = "Please confirm we can contact you about your enquiry.";
  }
  return e;
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-hairline/70 py-3 first:border-0 first:pt-0 sm:flex-row sm:gap-6">
      <dt className="w-48 shrink-0 text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm leading-relaxed whitespace-pre-line text-foreground">
        {value || "—"}
      </dd>
    </div>
  );
}

function SummaryBlock({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-hairline bg-card p-6 shadow-soft sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
          {title}
        </h3>
        <button
          type="button"
          onClick={onEdit}
          className="min-h-11 text-sm font-semibold text-primary transition-all hover:underline"
        >
          Edit
        </button>
      </div>
      <dl className="mt-4">{children}</dl>
    </section>
  );
}

export function InquiryFlow() {
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<InquiryDraft>(EMPTY_DRAFT);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDraft(loadDraft());
    trackInquiry("inquiry_started");
    startedRef.current = true;
  }, []);

  useEffect(() => {
    if (startedRef.current && !done) saveDraft(draft);
  }, [draft, done]);

  const set = <K extends keyof InquiryDraft>(key: K, value: InquiryDraft[K]) => {
    setDraft((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const goto = (next: number) => {
    setStep(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stepEvents: Record<number, string> = {
    1: "inquiry_challenge_selected",
    2: "inquiry_business_completed",
    3: "inquiry_contact_completed",
    4: "inquiry_project_completed",
  };

  const next = () => {
    const e = validateStep(step, draft);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    trackInquiry("inquiry_step_completed", { step });
    if (stepEvents[step]) trackInquiry(stepEvents[step]);
    if (step === 4) trackInquiry("inquiry_reviewed");
    goto(step + 1);
  };

  const submit = async () => {
    const all: Errors = { ...validateStep(1, draft), ...validateStep(2, draft), ...validateStep(3, draft), ...validateStep(5, draft) };
    setErrors(all);
    if (Object.keys(all).length > 0) {
      setSubmitError("Some required details are missing. Please review the highlighted steps.");
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    const { error } = await supabase.from("inquiries").insert({
      challenges: draft.challenges,
      outcomes: draft.outcomes,
      company_name: draft.companyName.trim(),
      business_categories: draft.categories,
      online_links: draft.links.map((l) => l.trim()).filter(Boolean),
      business_description: draft.businessDescription.trim() || null,
      pain_points: draft.painPoints.trim() || null,
      full_name: draft.fullName.trim(),
      work_email: draft.workEmail.trim(),
      country: draft.country.trim(),
      timeline: draft.timeline || null,
      budget_allocated: draft.budgetAllocated || null,
      budget_range: draft.budgetAllocated === "Yes" ? draft.budgetRange || null : null,
      additional_context: draft.additionalContext.trim() || null,
      consent: draft.consent,
    });
    setSubmitting(false);
    if (error) {
      setSubmitError("We couldn't send your enquiry just now. Please try again in a moment.");
      return;
    }
    trackInquiry("inquiry_submitted", {
      challenge_count: draft.challenges.length,
      outcome_count: draft.outcomes.length,
      timeline: draft.timeline || "not_provided",
      budget_allocated: draft.budgetAllocated || "not_provided",
    });
    clearDraft();
    setDone(true);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const progress = useMemo(() => Math.round(((step - 1) / (STEPS.length - 1)) * 100), [step]);

  if (done) {
    return (
      <div ref={topRef} className="mx-auto max-w-2xl">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-3xl leading-[1.12] font-semibold text-foreground sm:text-4xl">
          We've got it.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Thanks for taking the time to tell us about your business and what you're trying to
          achieve. We'll review your enquiry and get back to you by email.
        </p>

        <h2 className="mt-12 text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
          What happens next
        </h2>
        <ol className="mt-5 grid gap-3">
          {[
            ["01 — We review", "We look through your business context and challenges."],
            ["02 — We assess", "We identify where we may be able to help."],
            ["03 — We get back to you", "We'll contact you by email with the next appropriate step."],
          ].map(([title, desc]) => (
            <li key={title} className="rounded-2xl border border-hairline bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold tracking-tight text-foreground">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-muted-foreground">
          Need to add something?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div ref={topRef} className="mx-auto max-w-2xl">
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary/80 uppercase">
            Step {String(step).padStart(2, "0")} — {STEPS[step - 1].label}
          </p>
          <p className="text-xs text-muted-foreground">
            {step} of {STEPS.length}
          </p>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${Math.max(progress, 6)}%` }}
          />
        </div>
      </div>

      <div className="mt-9">
        {step === 1 && (
          <>
            <h1 className="text-3xl leading-[1.12] font-semibold text-foreground sm:text-[2.35rem]">
              What's happening in your business right now?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Choose any that apply.
            </p>
            <Field label="Your current challenges" error={errors.challenges}>
              <MultiSelect
                ariaLabel="Your current challenges"
                options={CHALLENGE_OPTIONS}
                value={draft.challenges}
                onChange={(v) => set("challenges", v)}
              />
            </Field>
            <Field
              label="Where do you want to go?"
              hint="What would a successful outcome look like?"
              error={errors.outcomes}
            >
              <MultiSelect
                ariaLabel="Desired outcomes"
                options={OUTCOME_OPTIONS}
                value={draft.outcomes}
                onChange={(v) => set("outcomes", v)}
              />
            </Field>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-3xl leading-[1.12] font-semibold text-foreground sm:text-[2.35rem]">
              Tell us a little about your business.
            </h1>
            <Field label="Company / business name" htmlFor="companyName" error={errors.companyName}>
              <TextInput
                id="companyName"
                name="companyName"
                autoComplete="organization"
                value={draft.companyName}
                invalid={Boolean(errors.companyName)}
                onChange={(e) => set("companyName", e.target.value)}
                placeholder="Your business name"
              />
            </Field>
            <Field
              label="What best describes your business?"
              hint="Select all that apply — many businesses fit more than one."
            >
              <MultiSelect
                ariaLabel="Business categories"
                options={BUSINESS_CATEGORY_OPTIONS}
                value={draft.categories}
                onChange={(v) => set("categories", v)}
              />
            </Field>
            <Field
              label="Where can we find your business online?"
              hint="Website, store, marketplace, Google Business Profile, Instagram, LinkedIn — anything relevant. Optional."
            >
              <div className="grid gap-2.5">
                {draft.links.map((link, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <TextInput
                      value={link}
                      inputMode="url"
                      aria-label={`Online presence link ${i + 1}`}
                      placeholder="yourbusiness.com or a profile link"
                      onChange={(e) =>
                        set(
                          "links",
                          draft.links.map((l, idx) => (idx === i ? e.target.value : l)),
                        )
                      }
                    />
                    {draft.links.length > 1 && (
                      <button
                        type="button"
                        aria-label={`Remove link ${i + 1}`}
                        onClick={() => set("links", draft.links.filter((_, idx) => idx !== i))}
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-hairline bg-card text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => set("links", [...draft.links, ""])}
                  className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" /> Add another link
                </button>
              </div>
            </Field>
            <Field
              label="Tell us about your business"
              hint="What does your business do, who do you serve, and anything else you'd like us to know."
              htmlFor="businessDescription"
            >
              <TextArea
                id="businessDescription"
                value={draft.businessDescription}
                onChange={(e) => set("businessDescription", e.target.value)}
              />
            </Field>
            <Field
              label="Tell us about your challenges"
              hint="What's not working, where are you stuck, or where do you need our help? Explain it in your own words."
              htmlFor="painPoints"
            >
              <TextArea
                id="painPoints"
                value={draft.painPoints}
                onChange={(e) => set("painPoints", e.target.value)}
              />
            </Field>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-3xl leading-[1.12] font-semibold text-foreground sm:text-[2.35rem]">
              Who should we get back to?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We'll follow up by email — nothing else.
            </p>
            <Field label="Full name" htmlFor="fullName" error={errors.fullName}>
              <TextInput
                id="fullName"
                autoComplete="name"
                value={draft.fullName}
                invalid={Boolean(errors.fullName)}
                onChange={(e) => set("fullName", e.target.value)}
              />
            </Field>
            <Field label="Work email" htmlFor="workEmail" error={errors.workEmail}>
              <TextInput
                id="workEmail"
                type="email"
                autoComplete="email"
                value={draft.workEmail}
                invalid={Boolean(errors.workEmail)}
                onChange={(e) => set("workEmail", e.target.value)}
              />
            </Field>
            <Field label="Country" htmlFor="country" error={errors.country}>
              <TextInput
                id="country"
                autoComplete="country-name"
                value={draft.country}
                invalid={Boolean(errors.country)}
                onChange={(e) => set("country", e.target.value)}
              />
            </Field>
          </>
        )}

        {step === 4 && (
          <>
            <h1 className="text-3xl leading-[1.12] font-semibold text-foreground sm:text-[2.35rem]">
              A little about timing and investment.
            </h1>
            <Field label="When are you looking to get started?">
              <SingleSelect
                ariaLabel="Timeline"
                options={TIMELINE_OPTIONS}
                value={draft.timeline}
                onChange={(v) => set("timeline", v)}
              />
            </Field>
            <Field label="Have you already allocated a budget for this?">
              <SingleSelect
                ariaLabel="Budget allocated"
                options={BUDGET_ALLOCATED_OPTIONS}
                value={draft.budgetAllocated}
                onChange={(v) => {
                  set("budgetAllocated", v);
                  if (v !== "Yes") set("budgetRange", "");
                }}
              />
            </Field>
            {draft.budgetAllocated === "Yes" && (
              <Field label="What's your approximate budget range?">
                <SingleSelect
                  ariaLabel="Budget range"
                  options={BUDGET_RANGE_OPTIONS}
                  value={draft.budgetRange}
                  onChange={(v) => set("budgetRange", v)}
                />
              </Field>
            )}
            <Field label="Anything else you'd like us to know?" htmlFor="additionalContext">
              <TextArea
                id="additionalContext"
                value={draft.additionalContext}
                onChange={(e) => set("additionalContext", e.target.value)}
              />
            </Field>
          </>
        )}

        {step === 5 && (
          <>
            <h1 className="text-3xl leading-[1.12] font-semibold text-foreground sm:text-[2.35rem]">
              Does this look right?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Review your answers and edit anything you'd like to change.
            </p>
            <div className="mt-8 grid gap-4">
              <SummaryBlock title="Your challenge" onEdit={() => goto(1)}>
                <SummaryRow label="Challenges" value={draft.challenges.join(", ")} />
                <SummaryRow label="Desired outcomes" value={draft.outcomes.join(", ")} />
              </SummaryBlock>
              <SummaryBlock title="Your business" onEdit={() => goto(2)}>
                <SummaryRow label="Company" value={draft.companyName} />
                <SummaryRow label="Business type" value={draft.categories.join(", ")} />
                <SummaryRow
                  label="Online presence"
                  value={draft.links.map((l) => l.trim()).filter(Boolean).join("\n")}
                />
                <SummaryRow label="About the business" value={draft.businessDescription} />
                <SummaryRow label="Challenges in their words" value={draft.painPoints} />
              </SummaryBlock>
              <SummaryBlock title="About you" onEdit={() => goto(3)}>
                <SummaryRow label="Full name" value={draft.fullName} />
                <SummaryRow label="Work email" value={draft.workEmail} />
                <SummaryRow label="Country" value={draft.country} />
              </SummaryBlock>
              <SummaryBlock title="Your project" onEdit={() => goto(4)}>
                <SummaryRow label="Timeline" value={draft.timeline} />
                <SummaryRow label="Budget allocated" value={draft.budgetAllocated} />
                {draft.budgetAllocated === "Yes" && (
                  <SummaryRow label="Budget range" value={draft.budgetRange} />
                )}
                <SummaryRow label="Additional context" value={draft.additionalContext} />
              </SummaryBlock>
            </div>

            <div className="mt-8 rounded-2xl border border-hairline bg-surface/60 p-6">
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-foreground">
                <input
                  type="checkbox"
                  checked={draft.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-hairline text-primary accent-primary"
                />
                <span>
                  I agree to DigitalyMarket contacting me regarding my enquiry. See our{" "}
                  <a
                    href="/privacy"
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              {errors.consent && (
                <p role="alert" className="mt-2 text-sm font-medium text-destructive">
                  {errors.consent}
                </p>
              )}
            </div>

            {submitError && (
              <p role="alert" className="mt-4 text-sm font-medium text-destructive">
                {submitError}
              </p>
            )}
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => goto(step - 1)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-hairline bg-card px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}

        {step < 5 ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92"
          >
            Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!draft.consent || submitting}
            className={cn(
              "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300",
              !draft.consent || submitting
                ? "cursor-not-allowed opacity-55"
                : "hover:-translate-y-0.5 hover:bg-primary/92",
            )}
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending
              </>
            ) : (
              <>
                Start My Growth Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
