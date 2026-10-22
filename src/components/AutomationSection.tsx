import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { Button } from "@/components/ui/button";

const SOURCE = { title: "Ново запитване", sub: "Сайт, имейл, Messenger" };
const HUB = { title: "AI агент", sub: "Разпознава и сортира" };
const OUTPUTS = [
  { title: "CRM", sub: "Контакт и следваща стъпка" },
  { title: "Отговор до клиента", sub: "По ваш шаблон" },
  { title: "Известие до екипа", sub: "Viber или имейл" },
  { title: "Седмичен отчет", sub: "Запитвания и продажби" },
];

const AUTOMATIONS = [
  {
    title: "Запитвания и CRM",
    text: "Всяко запитване от сайта, имейла или социалните мрежи влиза в CRM с име, тема и следваща стъпка.",
  },
  {
    title: "Чатбот на сайта",
    text: "Отговаря на честите въпроси по всяко време и предава разговора на човек, когато трябва.",
  },
  {
    title: "Автоматични имейли",
    text: "Потвърждения, напомняния и последващи писма тръгват сами след всяко действие на клиента.",
  },
  {
    title: "Отчети",
    text: "Запитвания, продажби и трафик в едно обобщение, което получавате всяка седмица.",
  },
  {
    title: "Фактури",
    text: "Фактурата се издава и изпраща след плащането, без преписване на данни.",
  },
  {
    title: "Социални мрежи",
    text: "Публикации по график, а коментарите и съобщенията събрани на едно място.",
  },
];

// Diagram geometry in a 1000 × 440 viewBox; HTML nodes sit on top at the same percentages.
const W = 1000;
const H = 440;
const SRC_X = 230;
const HUB_X = 500;
const HUB_R = 74;
const OUT_X = 740;
const MID_Y = H / 2;
const OUT_Y = [64, 172, 280, 388];

const outPath = (y: number) =>
  `M ${HUB_X + HUB_R} ${MID_Y} C ${HUB_X + HUB_R + 90} ${MID_Y}, ${OUT_X - 90} ${y}, ${OUT_X} ${y}`;

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

const Node = ({ title, sub, active }: { title: string; sub: string; active?: boolean }) => (
  <div className="relative rounded-md border border-border bg-background px-4 py-3">
    {active && (
      <span className="absolute right-3 top-3 h-2 w-2 animate-pulse-glow rounded-full bg-primary" aria-hidden />
    )}
    <p className="text-[0.95rem] font-semibold tracking-[-0.02em] text-foreground">{title}</p>
    <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
  </div>
);

/** Desktop: source → AI hub → four outputs, with accent dots travelling along the wires. */
const FlowDiagram = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative hidden md:block" style={{ aspectRatio: `${W} / ${H}` }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden>
        <path id="flow-in" d={`M ${SRC_X} ${MID_Y} L ${HUB_X - HUB_R} ${MID_Y}`} stroke="hsl(var(--border))" strokeWidth="1.5" fill="none" />
        {OUT_Y.map((y, i) => (
          <path key={y} id={`flow-out-${i}`} d={outPath(y)} stroke="hsl(var(--border))" strokeWidth="1.5" fill="none" />
        ))}

        {!reduceMotion && (
          <g fill="hsl(var(--primary))">
            {[0, 0.9].map((begin) => (
              <circle key={`in-${begin}`} r="4.5">
                <animateMotion dur="1.8s" begin={`${begin}s`} repeatCount="indefinite">
                  <mpath href="#flow-in" />
                </animateMotion>
              </circle>
            ))}
            {OUT_Y.map((_, i) => (
              <circle key={`out-${i}`} r="4.5">
                <animateMotion dur="1.8s" begin={`${0.9 + i * 0.35}s`} repeatCount="indefinite">
                  <mpath href={`#flow-out-${i}`} />
                </animateMotion>
              </circle>
            ))}
          </g>
        )}

        {/* Hub: ink disc with a slow accent ring */}
        <circle cx={HUB_X} cy={MID_Y} r={HUB_R} fill="hsl(var(--foreground))" />
        {!reduceMotion && (
          <circle cx={HUB_X} cy={MID_Y} r={HUB_R} fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
            <animate attributeName="r" values={`${HUB_R};${HUB_R + 22}`} dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0" dur="2.4s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>

      <div className="absolute w-[21%] -translate-y-1/2" style={{ left: 0, top: pct(MID_Y, H) }}>
        <Node {...SOURCE} active />
      </div>

      <div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center text-background"
        style={{ left: pct(HUB_X, W), top: pct(MID_Y, H) }}
      >
        <span className="text-lg font-black uppercase tracking-[-0.03em]">{HUB.title}</span>
        <span className="mt-0.5 text-[0.7rem] opacity-70">{HUB.sub}</span>
      </div>

      {OUTPUTS.map((out, i) => (
        <div
          key={out.title}
          className="absolute right-0 w-[24%] -translate-y-1/2"
          style={{ top: pct(OUT_Y[i], H) }}
        >
          <Node {...out} />
        </div>
      ))}
    </div>
  );
};

/** Phone: the same flow as a column, one dot running down the wire. */
const FlowColumn = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative md:hidden">
      <span className="absolute bottom-6 left-6 top-6 w-px bg-border" aria-hidden />
      {!reduceMotion && (
        <span className="absolute left-6 top-6 h-2.5 w-2.5 -translate-x-1/2 animate-flow-down rounded-full bg-primary" aria-hidden />
      )}
      <ol className="relative space-y-3 pl-12">
        <li>
          <Node {...SOURCE} active />
        </li>
        <li className="rounded-md bg-foreground px-4 py-3 text-background">
          <p className="text-[0.95rem] font-black uppercase tracking-[-0.02em]">{HUB.title}</p>
          <p className="mt-0.5 text-xs opacity-70">{HUB.sub}</p>
        </li>
        {OUTPUTS.map((out) => (
          <li key={out.title}>
            <Node {...out} />
          </li>
        ))}
      </ol>
    </div>
  );
};

const AutomationSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="AI за вашите процеси."
        description="Настройваме автоматизации, които поемат повтарящата се работа. Вие не учите нови инструменти: ние ги свързваме, следим и поддържаме."
        action={
          <div className="flex flex-wrap gap-3">
            <Button variant="ink" size="default" asChild>
              <Link to="/contact">
                Обсъди автоматизация
                <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="line" size="default" asChild>
              <Link to="/services/ai-implementation">
                AI интеграции
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        }
      />

      <Reveal>
        <div className="rounded-md bg-secondary p-5 md:p-10 lg:p-14">
          <p className="eyebrow mb-6 md:mb-10">Пример: едно запитване, без ръчна работа</p>
          <FlowDiagram />
          <FlowColumn />
        </div>
      </Reveal>

      <ul className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {AUTOMATIONS.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 0.05} className="border-t border-border pb-10 pt-6">
            <span className="text-xs font-semibold tabular-nums text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="mt-2 max-w-2xl text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground md:text-xl">
          Започваме с процеса, който ви отнема най-много време, и добавяме следващия, когато
          първият работи.
        </p>
      </Reveal>
    </div>
  </section>
);

export default AutomationSection;
