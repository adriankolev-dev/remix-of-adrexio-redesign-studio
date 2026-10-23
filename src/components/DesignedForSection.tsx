import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

// The four groups that recur most in the portfolio, each with the question its site must answer.
const AUDIENCES = [
  {
    label: "Клиники и кабинети",
    description: "Пациентът иска да разбере боли ли, колко струва и как да запише час. Римската стена, АМА Дент, д-р Райкова.",
  },
  {
    label: "Ресторанти и настаняване",
    description: "Меню, свободни дати и поръчка от телефона, без посредник с комисиона. CURly, Taj Mahal, Koleff House.",
  },
  {
    label: "Производители и B2B",
    description: "Купувачът търси технически данни, преди да поиска оферта. Wexel Coatings, Bulmat, Firescape Partners.",
  },
  {
    label: "Технологични продукти",
    description: "Сложен продукт, обяснен така, че демото да е следващата логична стъпка. Oraqor, RiACT.",
  },
] as const;

export default function DesignedForSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="За кого правим сайтове."
          description="Тези четири групи са най-честите в портфолиото ни. Всяка идва с различен въпрос, на който сайтът трябва да отговори."
        />
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 0.05} className="border-t border-border pb-10 pt-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                {item.label}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
