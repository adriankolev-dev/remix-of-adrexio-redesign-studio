import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Form primitives in the studio look: fields are a single hairline that turns ink on
 * focus, labels are small uppercase meta text, and choices are outlined pills.
 */

const fieldBase =
  "w-full border-0 border-b-[1.5px] border-border bg-transparent px-0 py-3 text-lg font-medium tracking-[-0.01em] text-foreground transition-colors placeholder:font-normal placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus-visible:ring-0 disabled:opacity-50";

export const StudioInput = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn(fieldBase, "h-14", className)} {...props} />
);

export const StudioTextarea = ({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className={cn(fieldBase, "min-h-[8rem] resize-none leading-relaxed", className)} {...props} />
);

/** Label + control. `hint` sits after the label in muted text, e.g. „по избор“. */
export const StudioField = ({
  id,
  label,
  hint,
  required,
  children,
  className,
}: {
  id?: string;
  label: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <label htmlFor={id} className="eyebrow block text-foreground">
      {label}
      {required && <span aria-hidden> *</span>}
      {hint && <span className="ml-2 normal-case tracking-normal text-muted-foreground">{hint}</span>}
    </label>
    {children}
  </div>
);

interface Option {
  value: string;
  label: string;
}

/** Outlined pills; one value (radio) or several (checkbox). */
export const ChoicePills = ({
  label,
  options,
  value,
  onChange,
  multiple = false,
}: {
  label: string;
  options: Option[];
  value: string | string[];
  onChange: (value: string) => void;
  multiple?: boolean;
}) => {
  const isOn = (v: string) => (Array.isArray(value) ? value.includes(v) : value === v);

  return (
    <div role={multiple ? "group" : "radiogroup"} aria-label={label} className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const on = isOn(option.value);
        return (
          <button
            key={option.value}
            type="button"
            role={multiple ? "checkbox" : "radio"}
            aria-checked={on}
            onClick={() => onChange(option.value)}
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full border-[1.5px] px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              on
                ? "border-foreground bg-foreground text-background"
                : "border-border text-foreground hover:border-foreground",
            )}
          >
            {multiple && on && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

/** Square ink checkbox with a label, for consent lines. */
export const StudioCheckbox = ({
  id,
  checked,
  onChange,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
}) => (
  <div className="flex items-start gap-3">
    <button
      id={id}
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[0.2rem] border-[1.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        checked ? "border-foreground bg-foreground text-background" : "border-foreground/40",
      )}
    >
      {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
    </button>
    <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-muted-foreground">
      {children}
    </label>
  </div>
);

/** A numbered block of the form: title on the left, fields on the right. */
export const FormStep = ({ n, title, note, children }: { n: string; title: string; note?: string; children: ReactNode }) => (
  // A div, not a fieldset: a legend can't take part in the grid.
  <div
    role="group"
    aria-labelledby={`step-${n}`}
    className="grid gap-6 border-t border-border py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16"
  >
    <div>
      <span className="text-xs font-semibold tabular-nums text-muted-foreground">{n}</span>
      <h2 id={`step-${n}`} className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
        {title}
      </h2>
      {note && <p className="mt-2 text-sm text-muted-foreground">{note}</p>}
    </div>
    <div className="space-y-8">{children}</div>
  </div>
);

export const FormError = ({ children }: { children: ReactNode }) => (
  <div role="alert" className="rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
    {children}
  </div>
);

/** Shown in place of the form once it is sent. */
export const FormSuccess = ({ text, onReset, resetLabel }: { text: string; onReset: () => void; resetLabel: string }) => (
  <div className="rounded-md bg-secondary p-8 md:p-12">
    <span className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-background">
      <Check className="h-6 w-6" strokeWidth={2.5} />
    </span>
    <p className="title-xl mt-8 text-foreground">
      Благодарим<span className="text-primary">.</span>
    </p>
    <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{text}</p>
    <button
      type="button"
      onClick={onReset}
      className="mt-8 inline-flex h-12 items-center rounded-full border-[1.5px] border-foreground px-7 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-foreground transition-colors hover:bg-foreground hover:text-background"
    >
      {resetLabel}
    </button>
  </div>
);
