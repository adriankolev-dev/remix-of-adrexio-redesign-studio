import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

const AUDIENCES = [
  {
    label: "Стартъпи",
    description: "Бърз старт с продукт, който изглежда сериозно от ден първи.",
  },
  {
    label: "Фрийлансъри",
    description: "Личен бранд и портфолио, които печелят доверие и клиенти.",
  },
  {
    label: "Онлайн бизнеси",
    description: "Магазини и платформи, готови да продават и да растат.",
  },
  {
    label: "Брандове",
    description: "Дигитално присъствие, което отговаря на нивото на марката.",
  },
] as const;

export default function DesignedForSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="За кого е."
          description="И за всеки, който иска да превърне хаоса в работеща система."
        />
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 0.05} className="border-t border-border pb-10 pt-6">
              <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
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
