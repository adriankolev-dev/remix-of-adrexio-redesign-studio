import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";

const CTASection = () => {
  return (
    <section className="layer-dark relative overflow-hidden py-28 md:py-36">
      <div className="canvas-grid absolute inset-0 opacity-[0.07]" aria-hidden />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <Reveal>
          <SectionEyebrow label="Следваща стъпка" index="10" />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-display-sm mx-auto mt-8 max-w-3xl font-bold text-foreground">
            Готови ли сте за сайт, който{" "}
            <span className="text-primary">не прилича на всеки втори</span>?
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Разкажете ни за проекта си — ще отговорим с ясен план, срок и оферта. Без
            задължения.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Направи запитване
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="line"
              size="xl"
              asChild
              className="border-foreground/25 text-foreground hover:border-foreground/50"
            >
              <Link to="/project-inquiry">Попълни бриф</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-mono-meta mx-auto mt-8 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
            Отговор до 24ч · Плащаш след като видиш резултата · Без обвързващи договори
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <p className="font-hand mt-8 text-2xl text-primary/90">
            или просто пишете на hello@adrexio.com
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
