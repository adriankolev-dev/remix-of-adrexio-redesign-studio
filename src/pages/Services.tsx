import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";
import CTASection from "@/components/CTASection";
import { getServiceSchema } from "@/lib/structuredData";
import { PRICING } from "@/data/pricing";

const PHASE_LABEL = "по проект — следващ етап";

const services = [
  {
    title: "Уеб разработка",
    subtitle: "Web Development",
    description:
      "Модерни сайтове за вашия бизнес и неговия растеж — бързи, адаптивни и SEO-оптимизирани, изградени от нулата.",
    href: "/services/web-development",
    features: ["Корпоративни сайтове", "Лендинг страници", "E-commerce", "Уеб приложения"],
  },
  {
    title: "Онлайн магазини",
    subtitle: "E-commerce",
    description:
      "Магазин, построен за българския пазар — Еконт и Спиди, наложен платеж и склад, заложени в основата, не добавени накрая.",
    href: "/services/onlajn-magazin",
    features: ["Еконт и Спиди", "Наложен платеж", "Склад и наличности", "Общи условия"],
  },
  {
    title: "UI/UX дизайн",
    subtitle: "Design & Strategy",
    description:
      "Интуитивен дизайн за отлично потребителско изживяване, базиран на задълбочен анализ и изследване.",
    href: "/services/ui-ux-design",
    features: ["Проучване", "Wireframing", "Визуален дизайн", "Design Systems"],
  },
  {
    title: "Техническа поддръжка",
    subtitle: `Абонамент · ${PRICING.maintenance.fromLabel}`,
    description:
      "Поддръжка след старта — работно време и спешни корекции. Хостинг, сигурност, актуализации и дребни промени.",
    href: "/services/technical-support",
    features: ["Работно време + спешни корекции", "Актуализации", "Резервни копия", "Производителност"],
    pricingHref: "/pricing",
  },
  {
    title: "SEO оптимизация",
    subtitle: "Search Optimization",
    description:
      "Подобряване на видимостта в Google за повече органичен трафик и по-добри позиции по заявките, които носят клиенти.",
    href: "/services/seo",
    features: ["Технически одит", "On-page", "Линк билдинг", "Местно SEO"],
  },
  {
    title: "GEO оптимизация",
    subtitle: "AI Search Optimization",
    description:
      "Видимост в ChatGPT, Perplexity, Gemini и Google AI Overviews — за да ви цитират, когато клиентът пита AI вместо Google.",
    href: "/services/geo-optimizaciya",
    features: ["GEO одит", "Достъп за AI ботове", "Структурирани данни", "Измерване на цитирания"],
  },
  {
    title: "AI интеграции",
    subtitle: "AI автоматизации",
    description:
      "Автоматизация и AI решения за оптимизация на бизнес процесите — чатботове, машинно обучение и интелигентни системи.",
    href: "/services/ai-implementation",
    features: ["Чатботове", "Автоматизация", "Машинно обучение", "AI аналитика"],
  },
  {
    title: "Мобилни приложения",
    subtitle: PHASE_LABEL,
    description:
      "Иновативни приложения за iOS и Android с отлично потребителско изживяване и висока производителност.",
    href: "/services/mobile-apps",
    features: ["Native iOS", "Native Android", "Cross-platform", "PWA"],
  },
  {
    title: "Дигитален маркетинг",
    subtitle: PHASE_LABEL,
    description:
      "Стратегии за растеж и увеличаване на онлайн присъствието чрез ефективни маркетинг кампании.",
    href: "/services/digital-marketing",
    features: ["Google Ads", "Meta реклами", "Email маркетинг", "Социални мрежи"],
  },
];

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": services.map((service) => {
      const { "@context": _context, ...rest } = getServiceSchema(
        service.title,
        service.description,
        `https://www.adrexio.com${service.href}`,
      );
      return rest;
    }),
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Услуги - Adrexio | Изработка на уебсайтове, мобилни приложения, SEO и GEO, дигитален маркетинг"
        description="Изработка на уебсайтове, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг и техническа поддръжка в София."
        keywords="изработка на уебсайтове, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, техническа поддръжка, уеб студио услуги София"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Услуги"
        title={
          <>
            Всичко, от което имате нужда — изградено от нулата.
          </>
        }
        description="От първия wireframe до пускането. Не предлагаме готови шаблони с ново лого — проектираме всяко решение спрямо вашия бизнес."
        meta={[
          { value: String(services.length), label: "Направления" },
          { value: "0", label: "Готови шаблони" },
          { value: "100%", label: "Собственост върху кода" },
          { value: "от €99", label: "Поддръжка / месец" },
        ]}
      />

      {/* Service grid: nine services, three across, on hairlines */}
      <section className="bg-background pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.href} delay={(i % 3) * 0.05} className="border-b border-r border-border">
                <Link
                  to={service.href}
                  className="group flex h-full min-h-[19rem] flex-col justify-between gap-10 p-7 transition-colors hover:bg-secondary/60 md:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  <div>
                    <p className="eyebrow">{service.subtitle}</p>
                    <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight tracking-[-0.035em] text-foreground md:text-[2rem]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <p className="mt-6 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-foreground">
                      {service.features.map((feature, f) => (
                        <span key={feature}>
                          {f > 0 && <span className="mx-2 text-muted-foreground">/</span>}
                          {feature}
                        </span>
                      ))}
                    </p>
                    {"pricingHref" in service && service.pricingHref ? (
                      <p className="mt-4 text-sm font-semibold text-foreground">
                        Поддръжка {PRICING.maintenance.fromLabel}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-10">
            <div className="flex flex-wrap gap-3">
              <Button variant="ink" size="lg" asChild>
                <Link to="/contact">
                  Обсъди проект
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button variant="line" size="lg" asChild>
                <Link to="/pricing">Цени за уеб проекти</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
