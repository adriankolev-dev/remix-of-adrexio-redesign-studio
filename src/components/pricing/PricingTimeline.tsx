import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { PRICING_SCOPE, PRICING_TIMELINE } from "@/data/pricing";

const PricingTimeline = () => (
  <section className="relative overflow-hidden bg-background py-24 md:py-32">
    <div className="container mx-auto px-6">
      <Reveal>
        <SectionEyebrow label="Срокове" index="04" />
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          За колко време се прави?
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Диапазони, не обещания за конкретна дата. Най-честата причина за забавяне не е
          разработката, а чакането на съдържание.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-border">
        {PRICING_TIMELINE.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.05}>
            <div className="grid gap-2 border-b border-border py-7 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8 md:py-8">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {item.name}
                </h3>
                <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.detail}
                </p>
              </div>
              <span className="font-mono-meta whitespace-nowrap text-sm text-primary md:text-base">
                {item.duration}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Какво влиза в цената
            </h3>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {PRICING_SCOPE.included.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <span aria-hidden className="pt-0.5 text-primary">
                    +
                  </span>
                  <span className="text-pretty">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Какво не влиза
            </h3>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {PRICING_SCOPE.excluded.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <span aria-hidden className="pt-0.5 text-muted-foreground">
                    −
                  </span>
                  <span className="text-pretty">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTimeline;
