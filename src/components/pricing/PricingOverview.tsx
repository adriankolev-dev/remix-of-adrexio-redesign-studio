import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import HandNote from "@/components/editorial/HandNote";
import { PAYMENT_COPY, PRICING_SERVICES } from "@/data/pricing";

interface PricingOverviewProps {
  showHeader?: boolean;
  eyebrowIndex?: string;
}

const PricingOverview = ({ showHeader = true, eyebrowIndex = "02" }: PricingOverviewProps) => (
  <section className="relative overflow-hidden bg-background py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Sticky manifesto — same voice as WhyUs */}
        {showHeader && (
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionEyebrow label="Начални цени" index={eyebrowIndex} />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Ориентировъчни инвестиции.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Посочените суми са отправна точка. След разговор за целите и обхвата ви
                изпращаме конкретна оферта — без задължения.
              </p>
            </Reveal>
            <HandNote className="mt-8" rotate={-3} arrow="down-right">
              не са фиксирани пакети
            </HandNote>
          </div>
        )}

        {/* Price rows — hairlines, typographic numbers */}
        <div className="border-t border-border">
          {PRICING_SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.07}>
              <article
                className={`relative grid grid-cols-1 gap-6 border-b border-border py-9 md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:py-11 ${
                  i === 1 ? "md:pl-6" : ""
                }`}
              >
                {i === 1 && (
                  <span
                    className="absolute inset-y-0 left-0 hidden w-px bg-primary md:block"
                    aria-hidden
                  />
                )}

                <div>
                  <span className="font-mono-meta text-[0.7rem] text-primary">
                    {service.index}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                    {service.description}
                  </p>
                  <p className="font-mono-meta mt-3 text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {service.note}
                  </p>
                </div>

                <div className="md:min-w-[9rem] md:text-right">
                  <p className="font-mono-meta text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    от
                  </p>
                  <p className="font-display mt-1 text-4xl font-bold tabular-nums tracking-tight text-foreground md:text-[2.75rem]">
                    {service.fromLabel.replace(/^от\s*/, "")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.12}>
        <p className="mt-14 max-w-2xl border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">{PAYMENT_COPY}</span>
        </p>
      </Reveal>
    </div>
  </section>
);

export default PricingOverview;
