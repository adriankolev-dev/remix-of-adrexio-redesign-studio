import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

const reasons = [
  {
    title: "Индивидуален подход",
    description: "Анализираме нуждите ви и тогава проектираме. Не започваме от шаблон.",
  },
  {
    title: "AI First разработка",
    description: "Пишем на React и Next.js с помощта на AI, а екипът проверява всеки ред. Получавате сайта по-бързо, със същото качество.",
  },
  {
    title: "Прозрачност",
    description: "Виждате всеки етап. Редовни актуализации, ясна комуникация, без изненади.",
  },
  {
    title: "UX, който води до действие",
    description: "Всяка страница е подредена около едно ясно действие за посетителя.",
  },
  {
    title: "Поддръжка след старта",
    description: "След пускането оставаме: актуализации, оптимизация, дългосрочна работа.",
  },
  {
    title: "Отдаденост към успеха ви",
    description: "Целта е резултатът ви, а не само да предадем сайта.",
  },
];

const WhyUsSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Защо Adrexio."
        description="Работим с бизнеси, които искат сайт с характер, а не копие на конкурента. Ето какво получавате."
      />

      <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => (
          <Reveal
            as="li"
            key={reason.title}
            delay={(i % 3) * 0.06}
            className="border-t border-border pb-12 pt-6"
          >
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
              {reason.title}
            </h3>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyUsSection;
