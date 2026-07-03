import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

// Each row reframes a familiar pain as the shift we deliver — a "from → to".
const shifts = [
  {
    problem: "Скъпа реклама без ROI",
    psub: "Плащате за трафик, който не се превръща в клиенти.",
    solution: "Сайт, който носи резултат",
    ssub: "Бърз, оптимизиран и измерим — инвестицията се вижда.",
  },
  {
    problem: "Клиенти, които не се връщат",
    psub: "Идват веднъж и изчезват без следа.",
    solution: "UX, който води до действие",
    ssub: "Всяка секция е режисирана към едно ясно действие.",
  },
  {
    problem: "Шаблон като всеки втори",
    psub: "Няма доверие, няма запомняне, няма заявки.",
    solution: "Дизайн от нулата",
    ssub: "Структура и визуал, които са само ваши.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          index="04"
          label="Проблем → Решение"
          title="Шаблонът ви струва повече, отколкото мислите."
          description='Повечето бизнеси не се нуждаят от „още един красив сайт". Имат нужда от преход — от шаблон към нещо, което носи запитвания.'
          note="звучи ли ви познато?"
        />

        {/* Column labels */}
        <Reveal>
          <div className="grid grid-cols-1 gap-4 border-b border-border pb-4 md:grid-cols-[1fr_auto_1fr] md:gap-8">
            <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
              От шаблона
            </span>
            <span className="hidden w-8 md:block" aria-hidden />
            <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.2em] text-primary">
              Към Adrexio
            </span>
          </div>
        </Reveal>

        {/* Transformation rows */}
        <div>
          {shifts.map((shift, i) => (
            <Reveal key={shift.problem} delay={i * 0.08}>
              <div className="grid grid-cols-1 items-center gap-4 border-b border-border py-8 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:py-10">
                {/* Problem side — muted, receding */}
                <div className="text-muted-foreground">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground/55 md:text-2xl">
                    {shift.problem}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{shift.psub}</p>
                </div>

                {/* Connector */}
                <div className="flex items-center gap-2 text-primary md:justify-center">
                  <span className="font-mono-meta text-[0.6rem] uppercase tracking-[0.16em] md:hidden">
                    води до
                  </span>
                  <ArrowRight size={22} className="rotate-90 md:rotate-0" />
                </div>

                {/* Solution side — foreground, cyan accent */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    <span className="bg-[linear-gradient(transparent_65%,hsl(var(--primary)/0.28)_65%)]">
                      {shift.solution}
                    </span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {shift.ssub}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <Button variant="ink" size="lg" asChild>
            <Link to="/contact">
              Разкажете ни за проекта си
              <ArrowRight size={18} />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
