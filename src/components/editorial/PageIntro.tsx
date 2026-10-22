import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Dotted, { textOf } from "./Dotted";

interface PageIntroMeta {
  value: string;
  label: string;
}

interface PageIntroProps {
  /** Kept for callers; the studio opener shows no index. */
  index?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional buttons rendered beside the lede. */
  actions?: ReactNode;
  /** Optional stat row on a hairline grid under the intro. */
  meta?: PageIntroMeta[];
  /** Legacy side illustration; the studio opener has none. */
  aside?: ReactNode;
}

// Past this many characters the h1 steps down from .title-page to .title-page-long.
const LONG_TITLE = 22;

/**
 * PageIntro: the shared interior-page opener. A small label, a black uppercase
 * title with the accent period, then the lede and actions on a hairline, and an
 * optional stat grid. Same voice as the homepage sections.
 */
const PageIntro = ({ label, title, description, actions, meta }: PageIntroProps) => {
  const size = textOf(title).length > LONG_TITLE ? "title-page-long" : "title-page";

  return (
    <section className="bg-background pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="container mx-auto px-6">
        <Reveal immediate>
          <p className="eyebrow">{label}</p>
        </Reveal>

        <Reveal immediate delay={0.06}>
          <h1 className={`${size} mt-6 max-w-[15em] text-balance text-foreground`}>
            <Dotted>{title}</Dotted>
          </h1>
        </Reveal>

        {(description || actions) && (
          <Reveal immediate delay={0.14}>
            <div className="mt-10 grid gap-8 border-t border-border pt-8 md:mt-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
              <div className="order-2 lg:order-1">
                {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
              </div>
              {description && (
                <p className="order-1 max-w-xl text-base leading-relaxed text-muted-foreground md:text-[1.1rem] lg:order-2">
                  {description}
                </p>
              )}
            </div>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <Reveal immediate delay={0.22}>
            <dl
              className={`mt-12 grid border-l border-t border-border ${
                meta.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
              }`}
            >
              {meta.map((m) => (
                <div key={m.label} className="border-b border-r border-border p-5 md:p-7">
                  <dt className="text-[2rem] font-black leading-none tracking-[-0.045em] text-foreground md:text-5xl">
                    {m.value}
                  </dt>
                  <dd className="mt-3 text-sm text-muted-foreground">{m.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default PageIntro;
