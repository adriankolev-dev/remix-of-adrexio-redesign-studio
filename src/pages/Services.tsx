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
import Sculpture from "@/components/editorial/Sculpture";

const PHASE_LABEL = "Добавяме след сайта";
const QUOTE_LABEL = "Оферта след разговор";

const services = [
  {
    title: "Уеб разработка",
    subtitle: `Сайт ${PRICING.website.fromLabel}`,
    description:
      "Фирмени и корпоративни сайтове с дизайн за вашата марка. WordPress, когато екипът ще пише често, Next.js, когато скоростта и собствената логика тежат повече.",
    href: "/services/web-development",
    features: ["Фирмени сайтове", "Корпоративни сайтове", "Лендинг страници", "Уеб приложения"],
  },
  {
    title: "Онлайн магазини",
    subtitle: `Магазин ${PRICING.ecommerce.fromLabel}`,
    description:
      "Магазин за българския пазар: Еконт и Спиди, наложен платеж и склад са заложени в основата, а не добавени накрая.",
    href: "/services/onlajn-magazin",
    features: ["Еконт и Спиди", "Наложен платеж", "Склад и наличности", "Общи условия"],
  },
  {
    title: "UI/UX дизайн",
    subtitle: QUOTE_LABEL,
    description:
      "Структура, потребителски пътища и интерфейс, проверени на прототип, преди да се пише код. За сайтове, магазини и вътрешни системи.",
    href: "/services/ui-ux-design",
    features: ["Информационна архитектура", "Wireframes", "Прототипи", "Дизайн системи"],
  },
  {
    title: "Техническа поддръжка",
    subtitle: `По желание · ${PRICING.maintenance.fromLabel}`,
    description:
      "Хостинг, актуализации, резервни копия и дребни промени след старта. Отговаряме на заявка до 24 часа в работни дни.",
    href: "/services/technical-support",
    features: ["Мониторинг", "Актуализации", "Резервни копия", "Промени по съдържанието"],
  },
  {
    title: "SEO оптимизация",
    subtitle: QUOTE_LABEL,
    description:
      "Технически одит, съдържание по реалните търсения и редовна проверка в Search Console. Не обещаваме позиции, а показваме какво се е променило.",
    href: "/services/seo",
    features: ["Технически одит", "On-page", "Линк билдинг", "Местно SEO"],
  },
  {
    title: "GEO оптимизация",
    subtitle: "Безплатен първоначален одит",
    description:
      "Достъп за AI ботовете, текстове, които могат да бъдат цитирани, и проверка дали ChatGPT, Perplexity и Google AI ви споменават. Цитиране не може да се гарантира, готовността за него може.",
    href: "/services/geo-optimizaciya",
    features: ["GEO одит", "Достъп за AI ботове", "Структурирани данни", "Измерване на цитирания"],
  },
  {
    title: "AI интеграции",
    subtitle: QUOTE_LABEL,
    description:
      "Автоматизации за повтарящата се работа: запитвания към CRM, отговори на чести въпроси, данни от документи. Където обикновен скрипт върши работа, не слагаме AI.",
    href: "/services/ai-implementation",
    features: ["Чатботове", "Автоматизации", "Обработка на документи", "Интеграции"],
  },
  {
    title: "Мобилни приложения",
    subtitle: PHASE_LABEL,
    description:
      "Приложения за iOS и Android, когато мобилният сайт не стига: работа без интернет, известия, камера или GPS.",
    href: "/services/mobile-apps",
    features: ["iOS", "Android", "React Native", "PWA"],
  },
  {
    title: "Дигитален маркетинг",
    subtitle: PHASE_LABEL,
    description:
      "Google Ads и Meta кампании за сайтове, които сме направили или поели, с проследяване от клика до изпратената форма.",
    href: "/services/digital-marketing",
    features: ["Google Ads", "Meta реклами", "Проследяване на конверсии", "Целеви страници"],
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
        title={<>Отделни услуги. Един работещ сайт.</>}
        description="Дизайнът решава какво вижда клиентът. Кодът решава колко бързо го вижда, а SEO дали изобщо стига до сайта. Правим ги в един екип, за да не се налага вие да ги съгласувате. Започнете от това, което ви трябва сега."
        aside={
          <Sculpture
            stone="fragmented"
            sizes="(min-width: 1024px) 22rem, 0px"
            className="hidden w-[18rem] xl:w-[22rem] lg:block"
          />
        }
        meta={[
          { value: String(services.length), label: "Услуги в един екип" },
          { value: PRICING.website.fromLabel, label: "Фирмен сайт" },
          { value: PRICING.ecommerce.fromLabel, label: "Онлайн магазин" },
          { value: PRICING.maintenance.fromLabel.replace(" / месец", ""), label: "Поддръжка на месец" },
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
                  <div className="flex justify-end">
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
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-10">
            <div className="flex flex-wrap gap-3">
              <Button variant="ink" size="lg" asChild>
                <Link to="/contact">
                  Разкажете ни за проекта
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
