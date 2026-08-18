import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { PRICING } from "@/data/pricing";

const PricingWebDevLink = () => (
  <section className="relative bg-secondary/30 py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="mx-auto grid max-w-5xl gap-8 border-t border-border pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <Reveal>
            <SectionEyebrow label="Цени" index="08" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ориентировъчни цени за уеб проекти
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Уеб сайтове {PRICING.website.fromLabel}, онлайн магазини{" "}
              {PRICING.ecommerce.fromLabel}, поддръжка {PRICING.maintenance.fromLabel}.
              Крайната сума зависи от обхвата на проекта.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 font-display text-base font-semibold text-foreground transition-colors duration-200 hover:text-primary"
          >
            Виж пълните цени
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

export default PricingWebDevLink;
