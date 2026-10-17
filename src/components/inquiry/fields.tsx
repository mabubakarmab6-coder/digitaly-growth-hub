import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  className,
}: {
  label: string;
  hint?: string | undefined;
  error?: string | undefined;
  htmlFor?: string | undefined;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold tracking-tight text-foreground"
      >
        {label}
      </label>
      {hint && <p className="text-sm leading-relaxed text-muted-foreground">{hint}</p>}
      <div className="w-full">{children}</div>
      {error && (
        <p role="alert" className="text-sm font-medium text-destructive">
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
