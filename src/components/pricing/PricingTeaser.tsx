import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/data/pricing";

const rows = [
  { label: "Уеб сайт", price: PRICING.website.fromLabel },
  { label: "Онлайн магазин", price: PRICING.ecommerce.fromLabel },
  { label: "Поддръжка", price: PRICING.maintenance.fromLabel },
];

const PricingTeaser = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Цени."
        description="Ориентировъчни начални цени. Крайната сума зависи от обхвата: след консултация ви изпращаме точна оферта."
        action={
          <Button variant="line" size="default" asChild>
            <Link to="/pricing">
              Виж цените
              <ArrowUpRight />
            </Link>
          </Button>
        }
      />

      <ul className="border-t border-border">
        {rows.map((row, i) => (
          <Reveal as="li" key={row.label} delay={i * 0.05}>
            <Link
              to="/pricing"
              className="group flex items-baseline justify-between gap-6 border-b border-border py-6 md:py-8"
            >
              <span className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-[1.7rem]">
                {row.label}
              </span>
              <span className="text-2xl font-black tabular-nums tracking-[-0.04em] text-foreground md:text-[2.6rem]">
                {row.price}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default PricingTeaser;
