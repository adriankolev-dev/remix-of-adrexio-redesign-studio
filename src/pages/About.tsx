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
import balance from "@/assets/about-balance.webp";
import { getOrganizationSchema } from "@/lib/structuredData";

const values = [
  {
    title: "Прецизност",
    description:
      "Всеки детайл има значение. Изграждаме решения с безкомпромисно внимание към качеството.",
  },
  {
    title: "Иновация",
    description:
      "Използваме най-новите технологии и подходи за създаване на модерни дигитални продукти.",
  },
  {
    title: "Партньорство",
    description: "Вярваме в дългосрочните отношения. Вашият успех е нашата мисия.",
  },
  {
    title: "Отдаденост",
    description: "Влагаме страст във всеки проект и се ангажираме с вашите бизнес цели.",
  },
];

const offer = [
  {
    title: "Дизайн, ориентиран към потребителя",
    description:
      "Създаваме интерфейси, толкова лесни за ползване, че клиентите ви се влюбват в тях от първия клик.",
  },
  {
    title: "Безкомпромисна скорост и сигурност",
    description: "Разработваме стабилен код, който зарежда мигновено и защитава вашите данни.",
  },
  {
    title: "Технологии, които растат с вас",
    description:
      "Модерен набор от технологии, за да може вашият сайт или приложение да растат заедно с бизнеса ви.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="За нас - Adrexio | Професионално уеб студио в София"
        description="Уеб студио в София: сайтове и онлайн магазини от нулата, поддръжка, SEO и AI автоматизации. Екип с над 10 години опит."
        keywords="за нас Adrexio, уеб студио София, екип уеб разработка, история Adrexio, опит уеб дизайн"
        structuredData={getOrganizationSchema()}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="За нас"
        title={
          <>
            Ние сме Adrexio — пълна дигитална агенция. Започваме със сайт или онлайн магазин.
          </>
        }
        description="Започваме със сайт или онлайн магазин и оставаме след старта: поддръжка, SEO и AI автоматизации, които поемат повтарящата се работа на екипа ви. Мобилни приложения и реклама добавяме, когато бизнесът има нужда от тях."
        actions={
          <>
            <Button variant="ink" size="lg" asChild>
              <Link to="/contact">
                Обсъди проект
                <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="line" size="lg" asChild>
              <Link to="/case-studies">Виж проектите</Link>
            </Button>
          </>
        }
        meta={[
          { value: "50/50", label: "при старт и преди публикуване" },
          { value: "10+", label: "Години опит в екипа" },
          { value: "100%", label: "Гаранция за качество" },
        ]}
      />

      {/* Mission: the statement beside the balance sculpture, on the ink band */}
      <section className="layer-dark overflow-hidden py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Мисия</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.035em] text-foreground md:text-[2.75rem] md:leading-[1.08]">
                Помагаме на бизнеса да расте онлайн с бързи сайтове и магазини, изградени от нулата.
                После поемаме и процесите зад тях: поддръжка, SEO и AI автоматизации, които спестяват
                време на екипа.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14} direction="right">
            <img
              src={balance}
              alt="Синя каменна скулптура: диск, сфера и греда в равновесие върху куб"
              width={800}
              height={581}
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[34rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Принципите ни."
            description="Едни и същи във всеки проект и всяко взаимоотношение с клиент."
          />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 0.05} className="border-t border-border pb-10 pt-6">
                <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{value.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Изграждаме, за да работи." />
          <ul className="grid gap-x-8 md:grid-cols-3">
            {offer.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="border-t border-border pb-10 pt-6">
                <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.description}</p>
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
