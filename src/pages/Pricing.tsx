import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import Reveal from "@/components/editorial/Reveal";
import HandNote from "@/components/editorial/HandNote";
import PricingOverview from "@/components/pricing/PricingOverview";
import PricingFactors from "@/components/pricing/PricingFactors";
import { getFAQSchema } from "@/lib/structuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PAYMENT_COPY } from "@/data/pricing";

const faqs = [
  {
    question: "Колко време отнема изграждането на уебсайт?",
    answer:
      "Времето зависи от обхвата. Презентационните сайтове са готови за 2–3 седмици, онлайн магазините — за 4–6 седмици, а по-сложните персонализирани решения — по договаряне.",
  },
  {
    question: "Какво включва безплатната поддръжка?",
    answer:
      "Технически консултации, малки корекции по съдържанието, мониторинг и помощ при проблеми. След гаранционния период предлагаме месечен абонамент за поддръжка.",
  },
  {
    question: "Мога ли да добавя функционалности след стартиране?",
    answer:
      "Да. Решенията са мащабируеми — оценяваме новия обхват и ви даваме конкретна оферта.",
  },
  {
    question: "Какви методи на плащане приемате?",
    answer:
      "Банков превод, картово плащане и разсрочено плащане при по-големи проекти. Работим с 50/50 модел.",
  },
  {
    question: "Включена ли е хостинг услугата в цената?",
    answer:
      "Не е част от еднократната цена на проекта. Организираме го вместо вас и можем да го включим в месечната поддръжка.",
  },
  {
    question: "Получавам ли собственост върху сайта?",
    answer:
      "Да — след финалното плащане получавате пълна собственост върху кода и дизайна.",
  },
  {
    question: "Как работи 50/50 плащането?",
    answer: PAYMENT_COPY,
  },
  {
    question: "Как определяте крайната цена?",
    answer:
      "Изхождаме от ориентировъчната начална цена и добавяме обхват съобразно нуждите. След консултация ви изпращаме точна оферта.",
  },
];

const Pricing = () => {
  const faqSchema = getFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Цени за уеб проекти - Adrexio | Уеб сайтове, онлайн магазини и поддръжка"
        description="Ориентировъчни цени за уеб сайтове, онлайн магазини и месечна поддръжка. За SEO, маркетинг и AI — оферта след консултация. 50/50 плащане."
        keywords="цени уебсайт, цена уеб разработка, цена онлайн магазин, цена поддръжка сайт, цени уеб студио София, уебсайт цена България"
        structuredData={faqSchema}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Цени за уеб проекти"
        title={
          <>
            Ясни цени за уеб проекти. <span className="accent-mark">Без изненади.</span>
          </>
        }
        description="Ориентировъчни суми за уеб сайтове, онлайн магазини и поддръжка. За SEO, дигитален маркетинг, AI и мобилни приложения — оферта след консултация."
        meta={[
          { value: "50/50", label: "при старт и преди публикуване" },
          { value: "3", label: "Уеб категории" },
          { value: "1", label: "Конкретна оферта" },
        ]}
      />

      <PricingOverview />

      <PricingFactors />

      {/* FAQ — open editorial list on desktop, accordion on mobile for scanability */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <SectionEyebrow label="Въпроси" index="04" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  Често задавани въпроси.
                </h2>
              </Reveal>
              <HandNote className="mt-6 hidden lg:block" rotate={-2}>
                ако нещо липсва — пишете ни
              </HandNote>
            </div>

            {/* Desktop: always-visible Q&A rows */}
            <div className="hidden border-t border-border lg:block">
              {faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.04}>
                  <div className="grid grid-cols-1 gap-3 border-b border-border py-8 md:grid-cols-[1fr_1.2fr] md:gap-12">
                    <h3 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Mobile: accordion to avoid a wall of text */}
            <div className="border-t border-border lg:hidden">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold hover:text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — one dramatic dark layer, not another grey box */}
      <section className="layer-dark relative overflow-hidden py-28 md:py-36">
        <div className="canvas-grid absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow label="Запитване" index="05" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Имате конкретен проект?
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Разкажете ни какво искате да изградим. Ще съставим обхват и ще ви изпратим
                конкретна оферта.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Свържи се с нас
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Link
                  to="/project-inquiry"
                  className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
                >
                  Попълни бриф
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
