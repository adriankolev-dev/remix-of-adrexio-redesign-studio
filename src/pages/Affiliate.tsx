import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Shield,
  Zap,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { PRICING } from "@/data/pricing";
import PageIntro from "@/components/editorial/PageIntro";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/structuredData";

const benefits = [
  {
    icon: DollarSign,
    title: "20% комисионна",
    description: "Получавайте 20% от стойността на всеки успешно завършен проект.",
  },
  {
    icon: Clock,
    title: "Бързо плащане",
    description: "Плащане веднага след като клиентът е платил и проектът е завършен.",
  },
  {
    icon: TrendingUp,
    title: "Неограничен потенциал",
    description: "Няма ограничение за броя проекти, които можете да привлечете.",
  },
  {
    icon: Shield,
    title: "Без риск",
    description: "Плащаме само след като клиентът е доволен и е платил.",
  },
  {
    icon: Zap,
    title: "Лесно и просто",
    description: "Няма сложни процеси — просто споделете и печелете.",
  },
  {
    icon: Award,
    title: "Бонус програми",
    description: "Специални бонуси за топ партньори и редовни препоръки.",
  },
];

const steps = [
  {
    number: "01",
    title: "Свържете се с нас",
    description:
      "Свържете се с нас чрез контактната форма или имейл. В темата на запитването напишете «Партньорска програма» или «Affiliate програма». Процесът е бърз и безплатен.",
  },
  {
    number: "02",
    title: "Споделете и препоръчайте",
    description:
      "Споделете нашите услуги с хора, които имат нужда от уеб разработка или дигитални решения. Клиентът трябва да спомене вашето име при контакт или да напише «Партньорска програма» / «Affiliate програма» в темата на запитването.",
  },
  {
    number: "03",
    title: "Ние проследяваме",
    description:
      "Когато клиентът се свърже и спомене вашето име, ние автоматично го свързваме с вас и започваме да проследяваме проекта.",
  },
  {
    number: "04",
    title: "Получавайте комисионна",
    description:
      "Когато клиентът плати и проектът е завършен, получавате вашата 20% комисионна.",
  },
];

const faqs = [
  {
    question: "Как работи комисионната от 20%?",
    answer:
      "Когато някой, когото сте препоръчали, стане клиент и спомене вашето име при контакт с нас или напише «Партньорска програма» / «Affiliate програма» в темата на запитването, вие получавате 20% от финалната сума на проекта. Плащането се извършва след като клиентът е платил всички такси и проектът е успешно завършен.",
  },
  {
    question: "Кога получавам комисионната?",
    answer:
      "Получавате комисионната след като клиентът е направил финалното плащане и проектът е официално завършен и предаден. Обикновено това е в рамките на 7-14 дни след завършване на проекта.",
  },
  {
    question: "Има ли минимална сума за плащане?",
    answer:
      "Не, няма минимална сума. Получавате комисионната независимо от размера на проекта, веднага след като клиентът е платил.",
  },
  {
    question: "Мога ли да препоръчам няколко проекта?",
    answer:
      "Абсолютно! Няма ограничение за броя проекти, които можете да препоръчате. Колкото повече успешни препоръки, толкова повече комисионни получавате.",
  },
  {
    question: "Как проследявам препоръчаните клиенти?",
    answer:
      "Можете да се свържете с нас по всяко време, за да разберете статуса на вашите препоръчани клиенти. Ние ще ви информираме за всеки нов проект, свързан с ваше име, и ще ви уведомим кога комисионната е готова за плащане.",
  },
  {
    question: "Какви са изискванията за участие?",
    answer:
      "Няма специални изисквания! Всеки може да се присъедини към програмата — независимо дали сте блогър, бизнес консултант, маркетолог или просто някой, който познава хора с нужда от дигитални услуги.",
  },
  {
    question: "Как се извършва плащането?",
    answer:
      "Плащането се извършва чрез банков превод или друг удобен за вас метод. Всички детайли ще бъдат обсъдени при регистрацията.",
  },
];

const goToContact = () => sessionStorage.setItem("fromAffiliate", "true");

const Affiliate = () => {
  const faqSchema = getFAQSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Начало", url: "https://www.adrexio.com/" },
    { name: "Affiliate програма", url: "https://www.adrexio.com/affiliate" },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [faqSchema, breadcrumbSchema],
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Affiliate програма - Adrexio | Печелете 20% комисионна за всяка препоръка"
        description="Affiliate програма с 20% комисионна за всеки успешен проект. Безплатна регистрация и бързо плащане. Партньорство за уеб разработка и дигитални услуги."
        keywords="affiliate програма, партньорска програма, реферална програма, комисионна 20%, партньорство, Adrexio affiliate, печели с препоръки"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        label="Партньорска програма"
        title={
          <>
            Печелете 20% комисионна за всяка препоръка
          </>
        }
        description="Препоръчайте нашите услуги и получавайте справедлива комисионна за всеки успешно завършен проект. Плащаме след като клиентът е платил и проектът е завършен."
        actions={
          <Button variant="ink" size="lg" asChild>
            <Link to="/contact?affiliate=true" onClick={goToContact}>
              Станете партньор
              <ArrowRight size={18} />
            </Link>
          </Button>
        }
        meta={[
          { value: "20%", label: "Комисионна от всеки проект" },
          { value: "0", label: "Такси за регистрация" },
          { value: "∞", label: "Неограничени препоръки" },
        ]}
      />

      {/* Benefits */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Предимства на програмата." />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit.title} delay={(i % 3) * 0.05} className="border-t border-border pb-10 pt-6">
                <benefit.icon className="h-6 w-6 text-foreground" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{benefit.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works: the ink band, like the homepage process */}
      <section className="layer-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeader bare title="Четири стъпки." />
          <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 0.05} className="border-t border-border pb-10 pt-6">
                <span className="block text-6xl font-black leading-none tracking-[-0.05em] text-foreground/20">
                  {step.number}
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Tracking notice + example calculation, as two grey panels */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid gap-4 px-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-md bg-secondary p-7 md:p-10">
              <p className="eyebrow">Важно за клиентите</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-3xl">
                Как да проследим вашата препоръка
              </h3>
              <p className="mt-5 text-muted-foreground">
                Когато препоръчвате наши услуги, инструктирайте клиента да:
              </p>
              <ul className="mt-4 border-t border-border">
                <li className="flex items-start gap-3 border-b border-border py-3.5 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span>Спомене вашето име при контакт с нас, или</span>
                </li>
                <li className="flex items-start gap-3 border-b border-border py-3.5 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span>
                    Напише <strong className="text-foreground">«Партньорска програма»</strong> или{" "}
                    <strong className="text-foreground">«Affiliate програма»</strong> в темата на
                    запитването
                  </span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Това ни помага да проследяваме вашите препоръки и да ви изплатим комисионната
                правилно.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-md bg-secondary p-7 md:p-10">
              <p className="eyebrow">Пример за изчисление</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-3xl">
                Колко можете да спечелите
              </h3>
              <dl className="mt-6 border-t border-border">
                {[
                  { label: "Среден уеб проект", value: `€${PRICING.affiliate.exampleProject.toLocaleString("de-DE")}` },
                  { label: "Вашата комисионна", value: `${PRICING.affiliate.commissionPct}%` },
                  {
                    label: "Вашето плащане за проект",
                    value: `€${(PRICING.affiliate.exampleProject * PRICING.affiliate.commissionPct) / 100}`,
                  },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between border-b border-border py-4">
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="text-2xl font-semibold tracking-[-0.03em] text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-muted-foreground">
                При <strong className="text-foreground">5 проекта</strong> на месец:
              </p>
              <p className="mt-1 text-3xl font-black tracking-[-0.045em] text-foreground md:text-4xl">
                €
                {(
                  (5 * PRICING.affiliate.exampleProject * PRICING.affiliate.commissionPct) /
                  100
                ).toLocaleString("de-DE")}{" "}
                <span className="text-lg font-semibold tracking-[-0.02em]">пасивен доход на месец</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Въпроси." />
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
        lead="Готови ли сте да започнете да печелите?"
        text="Присъединете се към партньорската програма. Регистрацията е безплатна и отнема само минути."
        primary={{ label: "Станете партньор", href: "/contact?affiliate=true", onClick: goToContact }}
        secondary={{ label: "Виж проектите", href: "/case-studies" }}
      />

      <Footer />
    </main>
  );
};

export default Affiliate;
