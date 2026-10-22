import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { PRICING_FACTORS } from "@/data/pricing";

const PricingFactors = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Какво определя цената?"
        description="Всеки проект е различен. Ето кои фактори влияят на крайната сума и защо две оферти рядко изглеждат еднакво."
      />
      <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {PRICING_FACTORS.map((factor, i) => (
          <Reveal as="li" key={factor.label} delay={(i % 4) * 0.05} className="border-t border-border pb-10 pt-6">
            <span className="text-xs font-semibold tabular-nums text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground">{factor.label}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{factor.detail}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default PricingFactors;
