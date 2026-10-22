import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { PAYMENT_COPY, PRICING_SERVICES } from "@/data/pricing";

interface PricingOverviewProps {
  showHeader?: boolean;
  /** Kept for callers; the studio header shows no index. */
  eyebrowIndex?: string;
}

/** The three starting prices as grey panels, price set large at the foot of each. */
const PricingOverview = ({ showHeader = true }: PricingOverviewProps) => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      {showHeader && (
        <SectionHeader
          title="Начални цени."
          description="Посочените суми са отправна точка. След разговор за целите и обхвата ви изпращаме конкретна оферта, без задължения."
        />
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {PRICING_SERVICES.map((service, i) => (
          <Reveal key={service.name} delay={i * 0.06} className="h-full">
            <article className="flex h-full flex-col justify-between gap-12 rounded-md bg-secondary p-7 md:p-9">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-[1.75rem]">
                  {service.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="eyebrow">от</p>
                <p className="mt-2 text-5xl font-black tabular-nums leading-none tracking-[-0.045em] text-foreground">
                  {service.fromLabel.replace(/^от\s*/, "")}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{service.note}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <p className="mt-8 text-sm font-semibold text-foreground">{PAYMENT_COPY}</p>
      </Reveal>
    </div>
  </section>
);

export default PricingOverview;
