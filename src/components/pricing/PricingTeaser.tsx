import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import HandNote from "@/components/editorial/HandNote";
import { PRICING } from "@/data/pricing";

const PricingTeaser = () => (
  <section className="relative overflow-hidden bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div className="max-w-2xl">
          <Reveal>
            <SectionEyebrow label="Цени" index="09" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Уеб проекти <span className="tabular-nums">{PRICING.website.fromLabel}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Ориентировъчни цени за уеб сайтове и онлайн магазини. Крайната сума зависи от
              обхвата на проекта.
            </p>
          </Reveal>
          <HandNote className="mt-6" rotate={2} size="sm">
            без готови пакети
          </HandNote>
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 font-display text-base font-semibold text-foreground transition-colors duration-200 hover:text-primary"
          >
            Виж цените за уеб проекти
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

export default PricingTeaser;
