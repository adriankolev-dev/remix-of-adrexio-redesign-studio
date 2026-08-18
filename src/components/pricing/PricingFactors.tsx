import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { PRICING_FACTORS } from "@/data/pricing";

const PricingFactors = () => (
  <section className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionEyebrow label="Ценообразуване" index="03" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Какво определя цената?
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Всеки проект е различен. Ето кои фактори влияят на крайната сума — и защо две
              оферти рядко изглеждат еднакво.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {PRICING_FACTORS.map((factor, i) => (
            <Reveal key={factor.label} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-7 md:gap-8 md:py-8">
                <span className="font-mono-meta pt-1 text-[0.7rem] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {factor.label}
                  </h3>
                  <p className="mt-2 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                    {factor.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PricingFactors;
