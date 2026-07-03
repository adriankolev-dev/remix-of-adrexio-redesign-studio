import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import HandshakeMascot from "@/components/mascots/HandshakeMascot";

const reasons = [
  {
    title: "Индивидуален подход",
    description: "Всеки проект е уникален — анализираме нуждите ви, не налагаме шаблон.",
  },
  {
    title: "Модерни технологии",
    description: "React, Next.js, оптимизиран код — бърз, сигурен и мащабируем продукт.",
  },
  {
    title: "Прозрачност",
    description: "Виждате всеки етап. Редовни актуализации, ясна комуникация, без изненади.",
  },
  {
    title: "UX, който конвертира",
    description: "Дизайн и функционалност, които водят посетителя към действие.",
  },
  {
    title: "Поддръжка след старта",
    description: "Не изчезваме след пускането — актуализации, оптимизация, дългосрочно партньорство.",
  },
  {
    title: "Отдаденост към успеха ви",
    description: "Вашият резултат е нашата мисия — не просто да изпратим сайта.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Sticky manifesto heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionEyebrow label="Защо Adrexio" index="07" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Партньор, не просто изпълнител.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Работим с локални бизнеси, които искат сайт с характер — не копие на
                конкурента. Ето какво носим на масата.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <HandshakeMascot className="mt-10 max-w-[300px] lg:mx-0" />
            </Reveal>
          </div>

          {/* Running numbered manifest — hairlines, no cards */}
          <div className="border-t border-border">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-7 md:gap-8 md:py-8">
                  <span className="font-mono-meta pt-1 text-[0.7rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
