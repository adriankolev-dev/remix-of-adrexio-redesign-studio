import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";
import CTASection from "@/components/CTASection";
import { getServiceSchema } from "@/lib/structuredData";

const services = [
  {
    title: "Уеб сайт разработка",
    subtitle: "Web Development",
    description:
      "Модерни сайтове за вашия бизнес и неговия растеж — бързи, отзивчиви и SEO-оптимизирани, изградени от нулата.",
    href: "/services/web-development",
    features: ["Корпоративни сайтове", "Лендинг страници", "E-commerce", "Web приложения"],
  },
  {
    title: "AI Implementation",
    subtitle: "Изкуствен интелект",
    description:
      "Автоматизация и AI решения за оптимизация на бизнес процесите — чатботове, машинно обучение и интелигентни системи.",
    href: "/services/ai-implementation",
    features: ["Чатботове", "Автоматизация", "Машинно обучение", "AI аналитика"],
  },
  {
    title: "Мобилни приложения",
    subtitle: "Mobile Apps",
    description:
      "Иновативни приложения за iOS и Android с отлично потребителско изживяване и висока производителност.",
    href: "/services/mobile-apps",
    features: ["Native iOS", "Native Android", "Cross-platform", "PWA"],
  },
  {
    title: "UI/UX Дизайн",
    subtitle: "Design & Strategy",
    description:
      "Интуитивен дизайн за отлично потребителско изживяване, базиран на задълбочен анализ и изследване.",
    href: "/services/ui-ux-design",
    features: ["Проучване", "Wireframing", "Визуален дизайн", "Design Systems"],
  },
  {
    title: "SEO и GEO оптимизация",
    subtitle: "Search & AI Optimization",
    description:
      "Подобряване на видимостта в Google и AI търсачките за повече органичен трафик и по-добри позиции.",
    href: "/services/seo",
    features: ["Технически одит", "On-page", "Линк билдинг", "Местно SEO"],
  },
  {
    title: "Дигитален маркетинг",
    subtitle: "Digital Marketing",
    description:
      "Стратегии за растеж и увеличаване на онлайн присъствието чрез ефективни маркетинг кампании.",
    href: "/services/digital-marketing",
    features: ["Google Ads", "Meta реклами", "Email маркетинг", "Социални мрежи"],
  },
  {
    title: "Техническа поддръжка",
    subtitle: "Support & Maintenance",
    description:
      "Постоянна техническа поддръжка и актуализации за безпроблемна работа на вашия сайт.",
    href: "/services/technical-support",
    features: ["24/7 мониторинг", "Актуализации", "Бекъпи", "Производителност"],
  },
];

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": services.map((service) => getServiceSchema(service.title, service.description)),
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Услуги - Adrexio | Уеб сайт разработка, Мобилни приложения, SEO и GEO, Дигитален маркетинг"
        description="Уеб сайт разработка, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг и техническа поддръжка в София."
        keywords="уеб сайт разработка услуги, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, техническа поддръжка, уеб студио услуги София"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Услуги"
        title={
          <>
            Всичко, от което имате нужда — <span className="accent-mark">изградено от нулата</span>.
          </>
        }
        description="От първия wireframe до пускането. Не предлагаме готови шаблони с ново лого — проектираме всяко решение спрямо вашия бизнес."
        meta={[
          { value: "7", label: "Направления" },
          { value: "0", label: "Готови шаблони" },
          { value: "100%", label: "Собственост върху кода" },
          { value: "24/7", label: "Поддръжка след старта" },
        ]}
      />

      {/* Full-width service index — big type, hairlines, hover reveals detail */}
      <section className="relative bg-background pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="border-t border-border">
            {services.map((service, i) => (
              <Reveal key={service.href} delay={i * 0.04}>
                <Link
                  to={service.href}
                  className="group block border-b border-border py-8 md:py-10"
                >
                  <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 md:gap-8">
                    <span className="font-mono-meta pt-2 text-[0.62rem] text-primary md:text-[0.66rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary md:text-4xl">
                          {service.title}
                        </h2>
                        <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                          {service.subtitle}
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        {service.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="font-mono-meta text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground/80"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={24}
                      className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="ink" size="lg" asChild>
                <Link to="/contact">
                  Започни проект
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="line" size="lg" asChild>
                <Link to="/pricing">Виж цените</Link>
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
