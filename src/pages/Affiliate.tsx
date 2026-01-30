import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Users, TrendingUp, DollarSign, Shield, Zap, HelpCircle, Gift, Target, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
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
    description: "Получавайте 20% от стойността на всеки успешно завършен проект"
  },
  {
    icon: Clock,
    title: "Бързо плащане",
    description: "Плащане веднага след като клиентът е платил и проектът е завършен"
  },
  {
    icon: TrendingUp,
    title: "Неограничен потенциал",
    description: "Няма ограничение за броя проекти, които можете да привлечете"
  },
  {
    icon: Shield,
    title: "Без риск",
    description: "Плащаме само след като клиентът е доволен и е платил"
  },
  {
    icon: Zap,
    title: "Лесно и просто",
    description: "Няма сложни процеси - просто споделете и печелете"
  },
  {
    icon: Award,
    title: "Бонус програми",
    description: "Специални бонуси за топ партньори и редовни реферали"
  }
];

const steps = [
  {
    number: "01",
    title: "Свържете се с нас",
    description: "Свържете се с нас чрез контактната форма или имейл. В темата на запитването напишете 'Партньорска програма' или 'Affiliate програма'. Процесът е бърз и безплатен."
  },
  {
    number: "02",
    title: "Споделете и препоръчайте",
    description: "Споделете нашите услуги с хора, които имат нужда от уеб разработка или дигитални решения. Клиентът трябва да спомене вашето име при контакт или да напише 'Партньорска програма' / 'Affiliate програма' в темата на запитването."
  },
  {
    number: "03",
    title: "Ние проследяваме",
    description: "Когато клиентът се свърже и спомене вашето име, ние автоматично го свързваме с вас и започваме да проследяваме проекта."
  },
  {
    number: "04",
    title: "Получавайте комисионна",
    description: "Когато клиентът плати и проектът е завършен, получавате вашата 20% комисионна."
  }
];

const faqs = [
  {
    question: "Как работи комисионната от 20%?",
    answer: "Когато някой, когото сте препоръчали, стане клиент и спомене вашето име при контакт с нас или напише 'Партньорска програма' / 'Affiliate програма' в темата на запитването, вие получавате 20% от финалната сума на проекта. Плащането се извършва след като клиентът е платил всички такси и проектът е успешно завършен."
  },
  {
    question: "Кога получавам комисионната?",
    answer: "Получавате комисионната след като клиентът е направил финалното плащане и проектът е официално завършен и предаден. Обикновено това е в рамките на 7-14 дни след завършване на проекта."
  },
  {
    question: "Има ли минимална сума за плащане?",
    answer: "Не, няма минимална сума. Получавате комисионната независимо от размера на проекта, веднага след като клиентът е платил."
  },
  {
    question: "Мога ли да препоръчам няколко проекта?",
    answer: "Абсолютно! Няма ограничение за броя проекти, които можете да препоръчате. Колкото повече успешни реферали, толкова повече комисионни получавате."
  },
  {
    question: "Как проследявам моите реферали?",
    answer: "Можете да се свържете с нас по всяко време, за да разберете статуса на вашите препоръчани клиенти. Ние ще ви информираме за всеки нов проект, свързан с ваше име, и ще ви уведомим кога комисионната е готова за плащане."
  },
  {
    question: "Какви са изискванията за участие?",
    answer: "Няма специални изисквания! Всеки може да се присъедини към програмата - независимо дали сте блогър, бизнес консултант, маркетолог или просто някой, който познава хора с нужда от дигитални услуги."
  },
  {
    question: "Как се извършва плащането?",
    answer: "Плащането се извършва чрез банков превод или друг удобен за вас метод. Всички детайли ще бъдат обсъдени при регистрацията."
  }
];

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
        description="Присъединете се към нашата affiliate програма и печелете 20% комисионна за всеки успешно завършен проект. Безплатна регистрация, бързо плащане след завършване на проекта. Партньорска програма за уеб разработка и дигитални услуги."
        keywords="affiliate програма, партньорска програма, реферална програма, комисионна 20%, партньорство, Adrexio affiliate, печели с препоръки, партньорска програма уеб разработка, реферална програма България, affiliate маркетинг, партньорска комисионна"
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Affiliate програма
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Печелете <span className="text-gradient">20% комисионна</span> за всяка препоръка
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Препоръчайте нашите услуги и получавайте справедлива комисионна за всеки успешно завършен проект. 
              Клиентът трябва да спомене вашето име при контакт или да напише <strong className="text-foreground">"Партньорска програма"</strong> / <strong className="text-foreground">"Affiliate програма"</strong> в темата на запитването. Плащаме след като клиентът е платил и проектът е завършен.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">20% комисионна</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Безплатна регистрация</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Бързо плащане</span>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="xl" asChild>
                <Link 
                  to="/contact?affiliate=true"
                  onClick={() => sessionStorage.setItem('fromAffiliate', 'true')}
                >
                  Присъединете се сега
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="border-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">20%</div>
                <div className="text-sm text-muted-foreground">Комисионна от всеки проект</div>
              </div>
              <div className="border-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Такси за регистрация</div>
              </div>
              <div className="border-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Неограничени препоръки</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Защо да се присъедините?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Предимства на <span className="text-gradient">програмата</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-gradient p-6 rounded-xl"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Как работи?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Четири <span className="text-gradient">прости стъпки</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="border-gradient p-6 rounded-2xl bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    Важно за вашите клиенти
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Когато препоръчвате наши услуги, моля инструктирайте клиента да:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Спомене вашето име при контакт с нас, или</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Напише <strong className="text-foreground">"Партньорска програма"</strong> или <strong className="text-foreground">"Affiliate програма"</strong> в темата на запитването</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3">
                    Това ни помага да проследяваме вашите препоръки и да ви изплатим комисионната правилно.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="border-gradient p-8 rounded-2xl">
              <div className="text-center mb-8">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold mb-4">
                  Пример за изчисление
                </h3>
                <p className="text-muted-foreground">
                  Вижте колко можете да спечелите с нашата програма
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-2">Среден проект</div>
                  <div className="text-3xl font-display font-bold text-primary">€649</div>
                  <div className="text-xs text-muted-foreground mt-2">BUSINESS план</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-2">Вашата комисионна</div>
                  <div className="text-3xl font-display font-bold text-primary">20%</div>
                  <div className="text-xs text-muted-foreground mt-2">от стойността</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-2">Вашето плащане</div>
                  <div className="text-3xl font-display font-bold text-primary">€129.80</div>
                  <div className="text-xs text-muted-foreground mt-2">за един проект</div>
                </div>
              </div>

              <div className="text-center p-6 bg-accent/10 rounded-xl">
                <p className="text-sm text-muted-foreground mb-2">
                  Ако препоръчате <strong className="text-foreground">5 проекта</strong> на месец:
                </p>
                <p className="text-2xl font-display font-bold text-primary">
                  €649 месечно пасивен доход
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Често задавани <span className="text-gradient">въпроси</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-gradient px-6 rounded-xl"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Готови ли сте да започнете да печелите?
            </h2>
            <p className="text-muted-foreground mb-8">
              Присъединете се към нашата affiliate програма днес и започнете да печелите комисионни 
              за всяка успешна препоръка. Регистрацията е безплатна и отнема само минути.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link 
                  to="/contact?affiliate=true"
                  onClick={() => sessionStorage.setItem('fromAffiliate', 'true')}
                >
                  Присъединете се сега
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/case-studies">
                  Вижте нашите проекти
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Affiliate;
