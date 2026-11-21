import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

// How Adrexio thinks, one stage of the work per column: a short kicker, a
// statement, then what it means in practice.
const reasons = [
  {
    kicker: "Преди дизайна",
    title: "Не започваме от цветовете.",
    description:
      "Започваме от това какво търси клиентът ви, какво трябва да разбере и кое ще го накара да избере вас.",
  },
  {
    kicker: "След всяко кликване",
    title: "Всеки елемент има работа.",
    description:
      "От първия екран до последния бутон всяка секция има причина да е там. Нищо не стои само за украса.",
  },
  {
    kicker: "Зад кадър",
    title: "Красивото е само началото.",
    description:
      "Мислим за скорост, SEO, мобилна версия, структура и интеграции още докато изграждаме сайта.",
  },
  {
    kicker: "След пускането",
    title: "Сайтът не е проект с крайна дата.",
    description:
      "Развиваме го с нови функции, автоматизации и AI, когато ви носят повече клиенти или спестено време.",
  },
];

const WhyUsSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Защо Adrexio."
        description="Как мислим и работим, от първия разговор до месеците след пускането."
      />

      <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <Reveal
            as="li"
            key={reason.title}
            delay={(i % 4) * 0.06}
            className="border-t border-border pb-12 pt-6"
          >
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
              <span className="mx-2 opacity-50">/</span>
              {reason.kicker}
            </p>
            <h3 className="mt-5 text-balance text-2xl font-semibold leading-[1.15] text-foreground md:text-[1.75rem]">
              {reason.title}
            </h3>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyUsSection;
