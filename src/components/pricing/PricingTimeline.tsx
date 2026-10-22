import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { PRICING_SCOPE, PRICING_TIMELINE } from "@/data/pricing";

const PricingTimeline = () => (
  <>
    {/* Durations on the ink band, like the homepage process */}
    <section className="layer-dark py-20 md:py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          bare
          title="Срокове."
          description="Диапазони, не обещания за конкретна дата. Най-честата причина за забавяне не е разработката, а чакането на съдържание."
        />
        <ul className="grid gap-x-8 md:grid-cols-3">
          {PRICING_TIMELINE.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 0.06} className="border-t border-border pb-10 pt-6">
              <p className="text-4xl font-black leading-none tracking-[-0.045em] text-foreground md:text-5xl">
                {item.duration}
              </p>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-foreground">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Какво влиза в цената." />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "Влиза", items: PRICING_SCOPE.included, mark: "+" },
            { title: "Не влиза", items: PRICING_SCOPE.excluded, mark: "−" },
          ].map((col, c) => (
            <Reveal key={col.title} delay={c * 0.06} className="h-full">
              <div className="h-full rounded-md bg-secondary p-7 md:p-9">
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.06em] text-foreground">{col.title}</p>
                <ul className="mt-5 border-t border-border">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-border py-3.5 text-[0.95rem] leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className={c === 0 ? "font-bold text-foreground" : ""}>
                        {col.mark}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PricingTimeline;
