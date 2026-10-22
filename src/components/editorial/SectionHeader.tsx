import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Dotted, { textOf } from "./Dotted";

// Past this many characters a title steps down from .title-xl to .title-lg.
const LONG_TITLE = 26;

interface SectionHeaderProps {
  index?: string;
  /** Kept for callers; the studio header shows the title alone. */
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional link or buttons under the description. */
  action?: ReactNode;
  /** Legacy handwritten aside; no longer rendered. */
  note?: ReactNode;
  align?: "left" | "center";
  /** Drop the hairline above the header (e.g. at the top of a tinted band). */
  bare?: boolean;
  className?: string;
}

/**
 * SectionHeader: hairline on top, a black uppercase title with an accent period on
 * the left, the short description on the right.
 */
const SectionHeader = ({
  title,
  description,
  action,
  align = "left",
  bare = false,
  className = "",
}: SectionHeaderProps) => {
  const size = textOf(title).length > LONG_TITLE ? "title-lg" : "title-xl";

  if (align === "center") {
    return (
      <div className={`mx-auto mb-14 max-w-3xl text-center ${className}`}>
        <Reveal>
          <h2 className={`${size} text-foreground`}>
            <Dotted>{title}</Dotted>
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              {description}
            </p>
          </Reveal>
        )}
        {action && (
          <Reveal delay={0.12}>
            <div className="mt-6 flex justify-center">{action}</div>
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div
      className={`mb-12 grid gap-6 md:mb-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16 ${
        bare ? "" : "border-t border-border pt-10 md:pt-14"
      } ${className}`}
    >
      <Reveal>
        <h2 className={`${size} text-balance text-foreground`}>
          <Dotted>{title}</Dotted>
        </h2>
      </Reveal>
      {(description || action) && (
        <Reveal delay={0.08} className="lg:pt-2">
          {description && (
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              {description}
            </p>
          )}
          {action && <div className="mt-6">{action}</div>}
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeader;
