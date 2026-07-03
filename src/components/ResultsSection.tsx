import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

const metrics = [
  { value: "+320%", label: "Ръст приходи от клиент", source: "Koni Jewellery" },
  { value: "+185%", label: "Онлайн резервации", source: "Body Aesthetics" },
  { value: "12+", label: "Индустрии, в които работим", source: "Adrexio портфолио" },
  { value: "24+", label: "Реализирани проекта", source: "Adrexio портфолио" },
];

const ResultsSection = () => {
  return (
    <section className="layer-dark relative overflow-hidden py-24 md:py-32">
      <div className="canvas-grid absolute inset-0 opacity-[0.06]" aria-hidden />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          index="03"
          label="Резултати"
          title={
            <>
              Цифри от <span className="text-primary">реални проекти</span>, не от шаблон.
            </>
          }
          description='Не обещаваме „+150% за всеки". Показваме какво постигнаха конкретни клиенти след като изградихме сайта им от нулата.'
          note="измерено, не измислено"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="layer-shadow rounded-xl border border-border/80 bg-card/50 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground/90">{m.label}</div>
                <div className="font-mono-meta mt-4 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {m.source}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/case-studies">
              Виж всички case studies
              <ArrowRight size={18} />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ResultsSection;
