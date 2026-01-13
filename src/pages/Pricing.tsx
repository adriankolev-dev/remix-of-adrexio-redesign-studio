import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, Zap, Crown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "ESSENTIAL",
    originalPrice: "349",
    price: "299",
    period: "еднократно",
    description: "Подходящ за презентационни сайтове",
    highlight: "Безплатна поддръжка 30 дни след пускане",
    features: [
      "Бързо зареждане и сигурност",
      "Съобразен с бизнеса дизайн",
      "Обучение за работа с платформата",
      "SEO оптимизация (базова)",
      "SSL сертификат"
    ],
    icon: Zap,
    popular: false
  },
  {
    name: "PROFESSIONAL",
    originalPrice: "1.999",
    price: "649",
    period: "еднократно",
    description: "Подходящ за бизнеси, които продават онлайн",
    highlight: "Спестявате €1.350 днес",
    features: [
      "Всичко от план ESSENTIAL",
      "Онлайн магазин",
      "Неограничени продукти",
      "Онлайн плащания",
      "Интеграция с маркетинг инструменти",
      "Готовност за реклама (Facebook/Google)",
      "2 месеца безплатна техническа поддръжка"
    ],
    icon: Sparkles,
    popular: true
  },
  {
    name: "ENTERPRISE",
    price: "∞",
    period: "ГОЛЕМИ БИЗНЕСИ",
    description: "Персонално решение за вашия бизнес",
    highlight: "цена след проведена консултация",
    features: [
      "100% custom функционалност",
      "Индивидуален дизайн",
      "Неограничени продукти / модули",
      "ERP / CRM интеграции",
      "Мултиезичност и мултивалута",
      "Висока производителност",
      "Приоритетна поддръжка",
      "Консултация и стратегия",
      "Изграждане на бранд идентичност"
    ],
    icon: Crown,
    popular: false
  }
];

const faqs = [
  {
    question: "Колко време отнема изграждането на уебсайт?",
    answer: "Времето за разработка зависи от сложността на проекта. За презентационни сайтове - 1-2 седмици, за онлайн магазини - 2-4 седмици, а за custom решения - по договаряне."
  },
  {
    question: "Какво включва безплатната поддръжка?",
    answer: "Безплатната поддръжка включва технически консултации, малки корекции по съдържанието, мониторинг на сайта и помощ при възникнали проблеми."
  },
  {
    question: "Мога ли да добавя функционалности след стартиране?",
    answer: "Да, всички наши решения са мащабируеми. Можете да добавяте нови функционалности по всяко време срещу допълнително заплащане."
  },
  {
    question: "Какви методи на плащане приемате?",
    answer: "Приемаме банков превод, картово плащане и възможност за разсрочено плащане при по-големи проекти."
  },
  {
    question: "Включена ли е хостинг услугата в цената?",
    answer: "Хостингът не е включен в еднократната цена, но можем да ви предложим надеждни хостинг решения на конкурентни цени."
  },
  {
    question: "Получавам ли собственост върху сайта?",
    answer: "Да, след финалното плащане получавате пълна собственост върху кода и дизайна на вашия уебсайт."
  }
];

const Pricing = () => {
  return (
    <main className="min-h-screen bg-background">
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
              Цени
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Изберете решение, което <span className="text-gradient">отговаря на вашите цели</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Прозрачни условия и индивидуални планове, проектирани да подкрепят вашия дигитален растеж.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.popular
                    ? "border-2 border-primary bg-gradient-to-b from-primary/10 to-card"
                    : "border border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    НАЙ-ПРОДАВАН
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <plan.icon className={`w-8 h-8 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="font-display font-bold text-xl">{plan.name}</h3>
                </div>

                {plan.originalPrice && (
                  <div className="text-sm text-muted-foreground line-through mb-1">
                    стандартна цена €{plan.originalPrice}
                  </div>
                )}

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-muted-foreground">€</span>
                  <span className="text-5xl font-display font-bold text-gradient">{plan.price}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">{plan.period}</div>

                <div className="text-sm text-primary font-medium mb-4">
                  {plan.highlight}
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <Link to="/contact">
                    {plan.name === "ENTERPRISE" ? "Заявете консултация" : "Започнете проект"}
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="border-gradient p-6 rounded-xl text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Внимание!
              </span>
              <p className="text-foreground mt-2">
                <strong>Първо резултати, после плащане:</strong> Без риск и без скрити такси. Започваме с безплатно демо, изграждаме проекта ви и плащате само след финално одобрение.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Всички планове са с възможност за допълнителна техническа поддръжка.
              </p>
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
              Имате още въпроси?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас за безплатна консултация и нека обсъдим вашия проект в детайли.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Свържете се с нас
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
