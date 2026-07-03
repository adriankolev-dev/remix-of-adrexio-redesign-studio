import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Уеб разработка",
    subtitle: "Web Development",
    description: "Модерни сайтове, изградени от нулата за вашия бизнес.",
    href: "/services/web-development",
  },
  {
    title: "AI Implementation",
    subtitle: "Изкуствен интелект",
    description: "Автоматизация и AI решения за оптимизация на процесите.",
    href: "/services/ai-implementation",
  },
  {
    title: "Мобилни приложения",
    subtitle: "Mobile Apps",
    description: "iOS и Android приложения с фокус върху UX и производителност.",
    href: "/services/mobile-apps",
  },
  {
    title: "UI/UX дизайн",
    subtitle: "Design & Strategy",
    description: "Интуитивен дизайн, който клиентите помнят и използват.",
    href: "/services/ui-ux-design",
  },
  {
    title: "SEO и GEO",
    subtitle: "Search Optimization",
    description: "Видимост в Google и AI търсачките — органичен трафик, който расте.",
    href: "/services/seo",
  },
  {
    title: "Дигитален маркетинг",
    subtitle: "Digital Marketing",
    description: "Стратегии за растеж и увеличаване на онлайн присъствието.",
    href: "/services/digital-marketing",
  },
  {
    title: "Техническа поддръжка",
    subtitle: "Support",
    description: "Актуализации, сигурност и спокойствие след пускането.",
    href: "/services/technical-support",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          index="06"
          label="Услуги"
          title="Какво правим за вашия бизнес."
          description="От първия wireframe до пускането — цялостни решения без готови шаблони."
          note="всичко на едно място"
        />

        {/* Full-width index — big type, hairlines, hover reveals the detail */}
        <div className="border-t border-border">
          {services.map((service, i) => (
            <Reveal key={service.href} delay={i * 0.04}>
              <Link
                to={service.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border py-6 md:gap-8 md:py-8"
              >
                <span className="font-mono-meta text-[0.62rem] text-muted-foreground md:text-[0.66rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary md:text-4xl">
                    {service.title}
                  </h3>
                  {/* Detail slides open on hover (desktop), always shown on mobile */}
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground transition-all duration-300 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:mt-2 md:group-hover:max-h-16 md:group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                  <span className="font-mono-meta hidden text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground lg:block">
                    {service.subtitle}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <Button variant="line" size="lg" asChild>
            <Link to="/services">Всички услуги</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
