import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

// Each reason has to be checkable before the contract: the pricing data, the
// portfolio or the way we use AI. No adjectives about ourselves.
const reasons = [
  {
    title: "Обхватът е на хартия",
    description:
      "Преди старта получавате списък какво влиза и какво не. Ако по пътя поискате нещо ново, първо го оценяваме и чак тогава го правим.",
  },
  {
    title: "Сайтът остава ваш",
    description:
      "След финалното плащане кодът и дизайнът са ваша собственост. Можете да смените изпълнителя, без да започвате отначало.",
  },
  {
    title: "Работата може да се провери",
    description:
      "В портфолиото има адрес към всеки публичен сайт. Отворете го от телефона си и проверете скоростта, преди да ни се обадите.",
  },
  {
    title: "AI за рутината, хора за решенията",
    description:
      "AI поема проучването, черновите и повтарящия се код. Структурата, дизайнът и прегледът на всеки ред остават при екипа.",
  },
];

const WhyUsSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Защо Adrexio."
        description="Четири неща, които можете да проверите, преди да подпишете."
      />

      <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <Reveal
            as="li"
            key={reason.title}
            delay={(i % 4) * 0.06}
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
