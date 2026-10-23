import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

// Each row is a place where a visitor gives up, and what we change there.
const shifts = [
  {
    problem: "Цената е три клика навътре",
    psub: "Посетителят идва от реклама, търси колко струва и затваря страницата.",
    solution: "Отговорът е там, където го търсят",
    ssub: "Подреждаме страниците по въпросите, които клиентите ви задават по телефона: цена, срок, доставка, гаранция.",
  },
  {
    problem: "Формата иска всичко наведнъж",
    psub: "Осем задължителни полета, за да зададете един въпрос.",
    solution: "Само полетата, без които не можете",
    ssub: "Име, контакт и едно изречение. Останалото се изяснява в разговора.",
  },
  {
    problem: "На телефон сайтът се бави",
    psub: "Тежки снимки и скриптове, които никой не е проверил от мобилна мрежа.",
    solution: "Измерваме, преди да пуснем",
    ssub: "Всеки сайт минава през PageSpeed на телефон. Сайтът на ресторант CURly е с 98 от 100.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Къде сайтовете губят хора."
          description="Рядко е дизайнът. Обикновено са няколко дребни неща, които никой не е проверил от гледната точка на клиента."
        />

        {/* Column labels */}
        <Reveal>
          <div className="grid grid-cols-1 gap-4 border-b border-border pb-4 md:grid-cols-[1fr_auto_1fr] md:gap-8">
            <span className="eyebrow">
              Проблемът
            </span>
            <span className="hidden w-8 md:block" aria-hidden />
            <span className="eyebrow text-foreground">
              Какво правим
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
                    решение
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
              Разкажете ни за сайта си
              <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
