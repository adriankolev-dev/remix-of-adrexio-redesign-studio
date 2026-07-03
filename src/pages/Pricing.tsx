import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import SectionHeader from "@/components/editorial/SectionHeader";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import { getFAQSchema } from "@/lib/structuredData";
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
      "Времето за разработка зависи от сложността на проекта. За презентационни сайтове — 1-2 седмици, за онлайн магазини — 2-4 седмици, а за custom решения — по договаряне.",
  },
  {
    question: "Какво включва безплатната поддръжка?",
    answer:
      "Безплатната поддръжка включва технически консултации, малки корекции по съдържанието, мониторинг на сайта и помощ при възникнали проблеми.",
  },
  {
    question: "Мога ли да добавя функционалности след стартиране?",
    answer:
      "Да, всички наши решения са мащабируеми. Можете да добавяте нови функционалности по всяко време срещу допълнително заплащане.",
  },
  {
    question: "Какви методи на плащане приемате?",
    answer:
      "Приемаме банков превод, картово плащане и възможност за разсрочено плащане при по-големи проекти. Работим с 50/50 модел — 50% в началото, останалите 50% след като видите резултата и преди официалното издаване.",
  },
  {
    question: "Включена ли е хостинг услугата в цената?",
    answer:
      "Хостингът не е включен в еднократната цена, но можем да ви предложим надеждни хостинг решения на конкурентни цени.",
  },
  {
    question: "Получавам ли собственост върху сайта?",
    answer:
      "Да, след финалното плащане получавате пълна собственост върху кода и дизайна на вашия уебсайт.",
  },
  {
    question: "Как работи 50/50 плащането?",
    answer:
      "Плащате 50% в началото на проекта, което покрива първоначалната работа по дизайн и разработка. Останалите 50% плащате след като видите резултата и сте доволни, но преди официалното издаване. Това гарантира, че и двете страни са защитени.",
  },
];

const Pricing = () => {
  const faqSchema = getFAQSchema(faqs);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Цени - Adrexio | Прозрачни цени за уеб разработка и дигитални услуги"
        description="Прозрачни цени за уеб разработка, мобилни приложения, SEO и GEO оптимизация и дигитален маркетинг. 50/50 плащане. Безплатна консултация."
        keywords="цени уебсайт, цена уеб разработка, цена мобилно приложение, цена SEO и GEO, цена дигитален маркетинг, цени уеб студио София, цени в евро, уебсайт цена София"
        structuredData={faqSchema}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Цени"
        title={
          <>
            Инвестиция, която <span className="accent-mark">се изплаща</span>.
          </>
        }
        description="Прозрачни цени без скрити такси. Плащате половината в началото и останалото — след като видите резултата. Повечето клиенти виждат възвращаемост за 2-3 месеца."
        meta={[
          { value: "2-3x", label: "Ръст на конверсиите" },
          { value: "2-3 мес.", label: "Средно време за ROI" },
          { value: "50/50", label: "Плащане след одобрение" },
          { value: "0", label: "Скрити такси" },
        ]}
      />

      {/* Editorial plan rows with the scroll-scrubbed spotlight (shared with home) */}
      <PricingSection />

      {/* FAQ — hairline accordion, no cards */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader index="11" label="FAQ" title="Често задавани въпроси." />

          <div className="mx-auto max-w-3xl border-t border-border">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:text-primary hover:no-underline md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="ink" size="lg" asChild>
              <Link to="/contact">
                Заяви консултация
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="line" size="lg" asChild>
              <Link to="/case-studies">Виж резултати</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Pricing;
