import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeetTheTeam from "@/components/MeetTheTeam";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import HandNote from "@/components/editorial/HandNote";
import CTASection from "@/components/CTASection";
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
    title: "Мащабируеми технологии",
    description:
      "Модерен стек, за да може вашият сайт или приложение да растат заедно с бизнеса ви.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="За нас - Adrexio | Професионално уеб студио в София"
        description="Уеб студио в София за модерни уебсайтове, мобилни приложения и дигитални решения. Фокус върху качество, скорост и резултати."
        keywords="за нас Adrexio, уеб студио София, екип уеб разработка, история Adrexio, опит уеб дизайн"
        structuredData={getOrganizationSchema()}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="За нас"
        title={
          <>
            Ние сме Adrexio — студио за сайтове <span className="accent-mark">от нулата</span>.
          </>
        }
        description="Не просто създаваме софтуер — изграждаме основите за вашия дългосрочен дигитален успех чрез иновации и прецизност. Успешните продукти се раждат от тясно сътрудничество и прецизно планиране."
        actions={
          <>
            <Button variant="ink" size="lg" asChild>
              <Link to="/contact">
                Свържи се с нас
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="line" size="lg" asChild>
              <Link to="/case-studies">Виж проектите ни</Link>
            </Button>
          </>
        }
        meta={[
          { value: "50/50", label: "Плащане след одобрение" },
          { value: "24/7", label: "Техническа поддръжка" },
          { value: "100%", label: "Гаранция за качество" },
          { value: "7+", label: "Години опит" },
        ]}
      />

      {/* Mission — a single oversized statement on the dark layer */}
      <section className="layer-dark relative overflow-hidden py-24 md:py-32">
        <div className="canvas-grid absolute inset-0 opacity-[0.06]" aria-hidden />
        <div className="container relative z-10 mx-auto px-6">
          <Reveal>
            <SectionEyebrow label="Мисия" index="02" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display mt-8 max-w-4xl text-2xl font-bold leading-[1.25] text-foreground md:text-4xl md:leading-[1.2]">
              Помагаме на бизнеса да расте в дигиталната ера — чрез бързи, оптимизирани и{" "}
              <span className="text-primary">незабравими</span> сайтове и приложения, които
              превръщат посетителите в лоялни клиенти.
            </p>
          </Reveal>
          <HandNote className="mt-8" rotate={-3}>
            това ни движи всеки ден
          </HandNote>
        </div>
      </section>

      {/* Values — numbered manifesto, sticky heading, hairlines (no cards) */}
      <section className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <SectionEyebrow label="Ценности" index="03" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  Принципите, които ни водят.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Едни и същи във всеки проект и всяко взаимоотношение с клиент.
                </p>
              </Reveal>
            </div>

            <div className="border-t border-border">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.05}>
                  <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-7 md:gap-8 md:py-8">
                    <span className="font-mono-meta pt-1 text-[0.7rem] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {value.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we offer — editorial two-column list */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <SectionEyebrow label="Какво предлагаме" index="04" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  Изграждаме, за да работи.
                </h2>
              </Reveal>
            </div>

            <div className="border-t border-border">
              {offer.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-7 md:gap-8 md:py-8">
                    <span className="font-mono-meta pt-1 text-[0.7rem] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
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

      <MeetTheTeam />

      <CTASection />
      <Footer />
    </main>
  );
};

export default About;
