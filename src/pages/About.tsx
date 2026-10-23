import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeetTheTeam from "@/components/MeetTheTeam";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import CTASection from "@/components/CTASection";
import Sculpture from "@/components/editorial/Sculpture";
import { PORTFOLIO_PROJECT_COUNT } from "@/data/caseStudies";
import { GOOGLE_RATING } from "@/data/googleReviews";
import { getOrganizationSchema } from "@/lib/structuredData";

const values = [
  {
    title: "Първо въпросът, после дизайнът",
    description:
      "Всеки проект започва с това какво трябва да направи посетителят и какво му пречи днес. Цветовете и шрифтовете идват, когато структурата е ясна.",
  },
  {
    title: "Само числа, които можем да покажем",
    description:
      "Не пишем проценти ръст, които не сме измерили. В казусите отделяме това, което направихме, от данните на клиента.",
  },
  {
    title: "AI за рутината, хора за решенията",
    description:
      "AI поема проучването, черновите и повтарящия се код. Структурата, дизайнът и прегледът на всеки ред остават при екипа.",
  },
  {
    title: "Код, който друг може да поеме",
    description:
      "Пишем така, че друг разработчик да разбере проекта след нас. След финалното плащане кодът и дизайнът са ваши.",
  },
];

const offer = [
  {
    title: "Сайтове и онлайн магазини",
    description:
      "WordPress, WooCommerce, Next.js или Symfony, според това какво трябва да прави проектът и кой ще го поддържа след нас.",
  },
  {
    title: "Поддръжка след старта",
    description:
      "Актуализации, резервни копия и промени по съдържанието, от €99 на месец и без дългосрочен договор.",
  },
  {
    title: "SEO и AI автоматизации",
    description:
      "SEO по данни от Search Console и автоматизации за повтарящата се работа: запитвания, отчети, данни от документи.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="За нас - Adrexio | Уеб студио в София"
        description="Уеб студио в София: сайтове и онлайн магазини от нулата, поддръжка, SEO и AI автоматизации. Екип с над 10 години опит."
        keywords="за нас Adrexio, уеб студио София, екип уеб разработка, история Adrexio, опит уеб дизайн"
        structuredData={getOrganizationSchema()}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="За нас"
        title={<>Ние сме Adrexio. Простото не е просто.</>}
        description="Уеб студио в София. Правим сайтове и онлайн магазини и оставаме след старта с поддръжка, SEO и AI автоматизации. Мобилни приложения и реклама добавяме, когато бизнесът има нужда от тях."
        actions={
          <>
            <Button variant="ink" size="lg" asChild>
              <Link to="/contact">
                Разкажете ни за проекта
                <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="line" size="lg" asChild>
              <Link to="/case-studies">Разгледайте проектите</Link>
            </Button>
          </>
        }
        meta={[
          { value: "10+", label: "Години опит в екипа" },
          {
            value: String(PORTFOLIO_PROJECT_COUNT),
            label: "Проекта в портфолиото",
          },
          { value: GOOGLE_RATING.toFixed(1), label: "Рейтинг в Google" },
        ]}
      />

      {/* Philosophy: the statement beside the raw-to-polished stone */}
      <section className="overflow-hidden bg-background pb-16 pt-4 md:pb-24 md:pt-8">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 border-t border-border pt-12 md:pt-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow">Как мислим</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-8 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.035em] text-foreground md:text-[2.6rem] md:leading-[1.08]">
                  Една страница изглежда ясна, когато някой е решил какво да
                  махне от нея.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                  <p>
                    Кой текст отива най-горе, кое поле във формата е излишно,
                    защо снимката се бави на телефон. Посетителят не вижда тези
                    решения. Вижда само, че намира каквото търси.
                  </p>
                  <p>
                    Харесваме чистия дизайн, ясните решения и кода, който
                    продължава да работи добре дълго след пускането на сайта.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.14} direction="right">
              <Sculpture
                stone="raw-polished"
                sizes="(min-width: 1024px) 34rem, 80vw"
                className="mx-auto w-[78%] max-w-[22rem] lg:w-full lg:max-w-[30rem]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Как работим."
            description="Четири правила, които важат за всеки проект, малък или голям."
          />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal
                as="li"
                key={value.title}
                delay={i * 0.05}
                className="border-t border-border pb-10 pt-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Какво правим." />
          <ul className="grid gap-x-8 md:grid-cols-3">
            {offer.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.05}
                className="border-t border-border pb-10 pt-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <MeetTheTeam />

      <CTASection />
      <Footer />
    </main>
  );
};

export default About;
