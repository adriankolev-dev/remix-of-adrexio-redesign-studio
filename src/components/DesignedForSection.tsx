import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";

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
    description: "Магазини и платформи, готови да продават и да мащабират.",
  },
  {
    label: "Брандове",
    description: "Дигитално присъствие, което отговаря на нивото на марката.",
  },
] as const;

export default function DesignedForSection() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionEyebrow label="За кого" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                За кого е подходящо?
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                И за всеки, който иска да превърне хаоса в работеща система.
              </p>
            </Reveal>
          </div>

          <div className="border-t border-border">
            {AUDIENCES.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-7 md:gap-8 md:py-8">
                  <span className="font-mono-meta pt-1.5 text-[0.7rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {item.label}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
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
}
