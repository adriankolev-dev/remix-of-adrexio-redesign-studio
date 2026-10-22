import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

// Each row reframes a familiar pain as the shift we deliver — a "from → to".
const shifts = [
  {
    problem: "Скъпа реклама без ROI",
    psub: "Плащате за трафик, който не се превръща в клиенти.",
    solution: "Сайт, който носи резултат",
    ssub: "Бърз, оптимизиран и измерим. Виждате какво връща инвестицията.",
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
    ssub: "Структура и визия, които са само ваши.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Цената на шаблона."
          description="Шаблонът е евтин в началото. После плащате с реклама, която не носи клиенти, и със сайт, който никой не помни."
        />

        {/* Column labels */}
        <Reveal>
          <div className="grid grid-cols-1 gap-4 border-b border-border pb-4 md:grid-cols-[1fr_auto_1fr] md:gap-8">
            <span className="eyebrow">
              От шаблона
            </span>
            <span className="hidden w-8 md:block" aria-hidden />
            <span className="eyebrow text-foreground">
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
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground/45 line-through decoration-1 md:text-[1.7rem]">
                    {shift.problem}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{shift.psub}</p>
                </div>

                {/* Connector */}
                <div className="flex items-center gap-2 text-primary md:justify-center">
                  <span className="font-mono-meta text-[0.6rem] uppercase tracking-[0.16em] md:hidden">
                    води до
                  </span>
                  <ArrowRight size={22} className="rotate-90 text-primary md:rotate-0" />
                </div>

                {/* Solution side — foreground, cyan accent */}
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-[1.7rem]">
                    {shift.solution}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {shift.ssub}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <Button variant="ink" size="lg" asChild>
            <Link to="/contact">
              Обсъди проект
              <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
