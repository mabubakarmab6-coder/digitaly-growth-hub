import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string | undefined;
  error?: string | undefined;
  htmlFor?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="mt-8 first:mt-0">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold tracking-tight text-foreground"
      >
        {label}
      </label>
      {hint && <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{hint}</p>}
      <div className="mt-3">{children}</div>
      {error && (
        <p role="alert" className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border border-hairline bg-card px-4 py-3 text-base text-foreground shadow-soft/50 outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20";

export function TextInput({
  invalid,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      className={cn(inputBase, "min-h-12", invalid && "border-destructive/60", className)}
    />
  );
}

export function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={5} className={cn(inputBase, "resize-y", className)} />;
}

function OptionCard({
  selected,
  multi,
  onClick,
  label,
}: {
  selected: boolean;
  multi: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        "flex w-full min-h-12 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200",
        selected
          ? "border-primary/50 bg-primary/6 text-foreground shadow-soft"
          : "border-hairline bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center border transition-colors",
          multi ? "rounded-md" : "rounded-full",
          selected ? "border-primary bg-primary text-primary-foreground" : "border-hairline",
        )}
      >
        {selected && <Check className="h-3.5 w-3.5" />}
      </span>
      <span>{label}</span>
    </button>
  );
}

export function MultiSelect({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: readonly string[];
  value: string[];
  onChange: (next: string[]) => void;
  ariaLabel: string;
}) {
  return (
    <div role="group" aria-label={ariaLabel} className="grid gap-2.5 sm:grid-cols-2">
      {options.map((option) => (
        <OptionCard
          key={option}
          multi
          label={option}
          selected={value.includes(option)}
          onClick={() =>
            onChange(
              value.includes(option) ? value.filter((v) => v !== option) : [...value, option],
            )
          }
        />
      ))}
    </div>
  );
}

export function SingleSelect({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: readonly string[];
  value: string;
  onChange: (next: string) => void;
  ariaLabel: string;
}) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className="grid gap-2.5 sm:grid-cols-2">
      {options.map((option) => (
        <OptionCard
          key={option}
          multi={false}
          label={option}
          selected={value === option}
          onClick={() => onChange(option)}
        />
      ))}
    </div>
  );
}
