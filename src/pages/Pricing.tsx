import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import SectionHeader from "@/components/editorial/SectionHeader";
import CTASection from "@/components/CTASection";
import PricingOverview from "@/components/pricing/PricingOverview";
import PricingFactors from "@/components/pricing/PricingFactors";
import PricingTimeline from "@/components/pricing/PricingTimeline";
import { getFAQSchema } from "@/lib/structuredData";
import { PAYMENT_COPY } from "@/data/pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        title="Изработка на сайт — цена, срокове и какво влиза | Adrexio"
        description="Колко струва изработката на сайт и онлайн магазин: начални цени, срокове по тип проект, какво влиза и какво не, и как се формира крайната оферта."
        keywords="изработка на сайт цена, колко струва сайт, цена на уебсайт, цена онлайн магазин, изработка на онлайн магазин цена, цена поддръжка сайт, уеб студио София цени"
        structuredData={faqSchema}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Цени за уеб проекти"
        title={
          <>
            Изработка на сайт — цена без изненади.
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

      <PricingTimeline />

      {/* FAQ */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Въпроси."
            description="Кратки отговори на това, което ни питат най-често. Ако нещо липсва, пишете ни."
          />
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left text-lg font-semibold tracking-[-0.02em] hover:no-underline md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-6 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        lead="Имате конкретен проект?"
        text="Разкажете ни какво искате да изградим. Ще съставим обхват и ще ви изпратим конкретна оферта."
      />
      <Footer />
    </main>
  );
};

export default Pricing;
