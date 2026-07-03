import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

interface PageIntroMeta {
  value: string;
  label: string;
}

interface PageIntroProps {
  /** Two-digit construction marker, e.g. "01". */
  index?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional buttons rendered under the lede. */
  actions?: ReactNode;
  /** Optional stat row rendered on a hairline under the intro. */
  meta?: PageIntroMeta[];
  /** Optional visual accent shown beside the copy on large screens. */
  aside?: ReactNode;
}

/**
 * PageIntro — the shared interior-page opener. Same editorial voice as the
 * homepage: blueprint grid, mono eyebrow, an oversized Unbounded headline, a
 * short lede, and an optional hairline stat row. Keeps every page in the same
 * world instead of the old gradient/card hero.
 */
const PageIntro = ({ index, label, title, description, actions, meta, aside }: PageIntroProps) => (
  <section className="relative overflow-hidden bg-background pt-36 pb-16 md:pt-44 md:pb-20">
    <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-60" aria-hidden />

    <div className="container relative z-10 mx-auto px-6">
      <div
        className={
          aside ? "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : undefined
        }
      >
        <div>
          <Reveal immediate>
            <SectionEyebrow label={label} index={index} />
          </Reveal>

          <Reveal immediate delay={0.08}>
            <h1 className="font-display text-display-sm mt-6 max-w-4xl font-bold text-foreground">
              {title}
            </h1>
          </Reveal>

          {description && (
            <Reveal immediate delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
          )}

          {actions && (
            <Reveal immediate delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">{actions}</div>
            </Reveal>
          )}
        </div>

        {aside && (
          <Reveal immediate delay={0.2}>
            {aside}
          </Reveal>
        )}
      </div>

      {meta && meta.length > 0 && (
        <Reveal immediate delay={0.3}>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {m.value}
                </dt>
                <dd className="font-mono-meta mt-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </div>
  </section>
);

export default PageIntro;
