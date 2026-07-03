import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

const steps = [
  {
    number: "01",
    phase: "chat",
    title: "Консултация",
    description: "Разговаряме за целите, аудиторията и какво трябва да постигне сайтът.",
  },
  {
    number: "02",
    phase: "sketch",
    title: "Проектиране",
    description: "Wireframe, UI/UX и прототип — виждате структурата преди един ред код.",
  },
  {
    number: "03",
    phase: "build",
    title: "Разработка",
    description: "Изграждаме слой по слой — дизайн, frontend, backend, интеграции.",
  },
  {
    number: "04",
    phase: "tweak",
    title: "Тестване",
    description: "Скорост, сигурност, мобилни устройства — без компромис с качеството.",
  },
  {
    number: "05",
    phase: "launch",
    title: "Старт",
    description: "Пускаме сайта и оставаме до вас за поддръжка и растеж.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-50" aria-hidden />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          index="05"
          label="Процес"
          title="Сглобяваме сайта ви слой по слой."
          description="Пет ясни фази — от първия разговор до пускането. Всяка стъпка е видима, не е черна кутия."
          note="виждаш всяка стъпка"
        />

        {/* Layered steps — oversized ghost numerals stacked along a single rule */}
        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute bottom-0 left-0 top-0 hidden w-px bg-border md:block"
            aria-hidden
          />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <div className="group relative grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-border py-8 md:gap-12 md:py-10 md:pl-10">
                {/* Ghost numeral — the "layer" marker */}
                <span className="font-display select-none text-5xl font-bold leading-none tracking-tight text-foreground/10 transition-colors duration-500 group-hover:text-primary/25 md:text-7xl">
                  {step.number}
                </span>

                <div>
                  <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.22em] text-primary">
                    {step.phase}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12">
          <Button variant="line" size="lg" asChild>
            <Link to="/project-inquiry">
              Попълнете бриф за проект
              <ArrowRight size={18} />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProcessSection;
