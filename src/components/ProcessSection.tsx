import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Консултация",
    description: "Разговаряме за целите, аудиторията и какво трябва да постигне сайтът.",
  },
  {
    number: "02",
    title: "Проектиране",
    description: "Wireframe, UI/UX и прототип. Виждате структурата преди първия ред код.",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Изграждаме дизайна, frontend, backend и интеграциите.",
  },
  {
    number: "04",
    title: "Тестване",
    description: "Проверяваме скорост, сигурност и поведение на мобилни устройства.",
  },
  {
    number: "05",
    title: "Старт",
    description: "Пускаме сайта и оставаме до вас за поддръжка и растеж.",
  },
];

const ProcessSection = () => {
  return (
    <section className="layer-dark relative py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          bare
          title="Процес."
          description="Пет фази от първия разговор до пускането. Всяка завършва с нещо, което виждате и одобрявате."
          action={
            <Button variant="line" size="default" asChild>
              <Link to="/project-inquiry">
                Попълни бриф
                <ArrowUpRight />
              </Link>
            </Button>
          }
        />

        <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.06} className="border-t border-border pb-10 pt-6">
              <span className="block text-6xl font-black leading-none tracking-[-0.05em] text-foreground/20 md:text-7xl">
                {step.number}
              </span>
              <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
