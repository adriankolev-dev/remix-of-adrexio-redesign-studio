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
import PageIntro from "@/components/editorial/PageIntro";
import RewardMascot from "@/components/mascots/RewardMascot";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
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
    description: "Специални бонуси за топ партньори и редовни реферали.",
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
      "Абсолютно! Няма ограничение за броя проекти, които можете да препоръчате. Колкото повече успешни реферали, толкова повече комисионни получавате.",
  },
  {
    question: "Как проследявам моите реферали?",
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
        label="Affiliate програма"
        title={
          <>
            Печелете <span className="accent-mark">20% комисионна</span> за всяка препоръка
          </>
        }
        description="Препоръчайте нашите услуги и получавайте справедлива комисионна за всеки успешно завършен проект. Плащаме след като клиентът е платил и проектът е завършен."
        actions={
          <Button variant="ink" size="lg" asChild>
            <Link to="/contact?affiliate=true" onClick={goToContact}>
              Присъединете се сега
              <ArrowRight size={18} />
            </Link>
          </Button>
        }
        meta={[
          { value: "20%", label: "Комисионна от всеки проект" },
          { value: "0", label: "Такси за регистрация" },
          { value: "∞", label: "Неограничени препоръки" },
        ]}
        aside={<RewardMascot />}
      />

      {/* Benefits */}
      <section className="relative bg-secondary/30 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader index="02" label="Защо да се присъедините" title="Предимства на програмата" />
          <div className="grid gap-x-10 border-t border-border sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={(i % 2) * 0.06}>
                <div className="flex gap-5 border-b border-border py-8">
                  <benefit.icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader index="03" label="Как работи?" title="Четири прости стъпки" />
          <div className="border-t border-border">
            {steps.map((step) => (
              <Reveal key={step.number}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border py-8 md:gap-10 md:py-10">
                  <span className="font-display text-4xl font-bold leading-none text-foreground/10 md:text-6xl">
                    {step.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Important notice + example calculation */}
      <section className="relative bg-secondary/30 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionEyebrow label="Важно за клиентите" index="04" />
              <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Как да проследим вашата препоръка
              </h3>
              <p className="mt-5 text-muted-foreground">
                Когато препоръчвате наши услуги, инструктирайте клиента да:
              </p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Спомене вашето име при контакт с нас, или</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    Напише{" "}
                    <strong className="text-foreground">«Партньорска програма»</strong> или{" "}
                    <strong className="text-foreground">«Affiliate програма»</strong> в темата на
                    запитването
                  </span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Това ни помага да проследяваме вашите препоръки и да ви изплатим комисионната
                правилно.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionEyebrow label="Пример за изчисление" index="05" />
              <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Колко можете да спечелите
              </h3>
              <dl className="mt-8 border-t border-border">
                {[
                  { label: "Среден проект (BUSINESS план)", value: "€649" },
                  { label: "Вашата комисионна", value: "20%" },
                  { label: "Вашето плащане за проект", value: "€129.80" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between border-b border-border py-4"
                  >
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="font-display text-2xl font-bold text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-l-2 border-primary pl-5">
                <p className="text-sm text-muted-foreground">
                  При <strong className="text-foreground">5 проекта</strong> на месец:
                </p>
                <p className="font-display mt-1 text-2xl font-bold text-primary">
                  €649 месечно пасивен доход
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader index="06" label="FAQ" title="Често задавани въпроси" />
          <div className="mx-auto max-w-3xl border-t border-border">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
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
        </div>
      </section>

      {/* CTA */}
      <section className="layer-dark relative overflow-hidden py-28 md:py-36">
        <div className="canvas-grid absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <Reveal>
            <SectionEyebrow label="Следваща стъпка" index="07" className="justify-center" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-display-sm mx-auto mt-8 max-w-3xl font-bold text-foreground">
              Готови ли сте да започнете да печелите?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Присъединете се към нашата affiliate програма днес. Регистрацията е безплатна и отнема
              само минути.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact?affiliate=true" onClick={goToContact}>
                  Присъединете се сега
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                variant="line"
                size="xl"
                asChild
                className="border-foreground/25 text-foreground hover:border-foreground/50"
              >
                <Link to="/case-studies">Вижте нашите проекти</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Affiliate;
