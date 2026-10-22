import { Link } from "react-router-dom";
import { ArrowUpRight, CodeXml, SearchCheck, ShieldCheck, Workflow } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { Button } from "@/components/ui/button";

const core = [
  {
    icon: CodeXml,
    title: "Уеб разработка",
    description: "Сайтове, изградени от нулата за вашия бизнес: бързи, адаптивни и лесни за поддръжка.",
    tags: ["Сайтове", "Онлайн магазини"],
    href: "/services/web-development",
  },
  {
    icon: Workflow,
    title: "AI автоматизации",
    description: "Запитвания, имейли, отчети и фактури, които минават без ръчна работа. Настройваме ги и ги поддържаме.",
    tags: ["Чатбот", "CRM", "Отчети"],
    href: "/services/ai-implementation",
  },
  {
    icon: SearchCheck,
    title: "SEO и GEO",
    description: "Видимост в Google и в AI търсачките, с органичен трафик, който се натрупва.",
    tags: ["Технически SEO", "Google", "AI търсачки"],
    href: "/services/seo",
  },
  {
    icon: ShieldCheck,
    title: "Техническа поддръжка",
    description: "Поддръжка след старта: актуализации, резервни копия и отстраняване на грешки, от €99 на месец.",
    tags: ["Актуализации", "Резервни копия", "Мониторинг"],
    href: "/services/technical-support",
  },
];

const more = [
  { title: "UI/UX дизайн", href: "/services/ui-ux-design" },
  { title: "Мобилни приложения", href: "/services/mobile-apps" },
  { title: "Дигитален маркетинг", href: "/services/digital-marketing" },
];

const ServicesSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Услуги."
        description="Четири основни услуги и още три, които добавяме според проекта. Всяка започва от празен лист."
        action={
          <Button variant="line" size="default" asChild>
            <Link to="/services">
              Всички услуги
              <ArrowUpRight />
            </Link>
          </Button>
        }
      />

      <div className="grid border-l border-t border-border md:grid-cols-2">
        {core.map((service, i) => (
          <Reveal key={service.href} delay={(i % 2) * 0.06} className="border-b border-r border-border">
            <Link
              to={service.href}
              className="group flex h-full min-h-[17rem] flex-col justify-between gap-10 p-7 transition-colors hover:bg-secondary/60 md:min-h-[20rem] md:p-10"
            >
              <div className="flex items-start justify-between">
                <service.icon
                  className="h-7 w-7 text-foreground transition-colors group-hover:text-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <ArrowUpRight
                  size={20}
                  className="text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>

              <div>
                <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] text-foreground md:text-[2.1rem]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-6 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-foreground">
                  {service.tags.map((tag, t) => (
                    <span key={tag}>
                      {t > 0 && <span className="mx-2.5 text-muted-foreground">/</span>}
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-center md:gap-10">
          <p className="eyebrow shrink-0">Още услуги</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {more.map((service) => (
              <li key={service.href}>
                <Link
                  to={service.href}
                  className="group inline-flex items-center gap-1.5 text-base font-semibold text-foreground"
                >
                  {service.title}
                  <ArrowUpRight
                    size={15}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ServicesSection;
