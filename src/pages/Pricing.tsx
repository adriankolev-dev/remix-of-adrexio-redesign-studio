import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, Zap, Crown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getFAQSchema } from "@/lib/structuredData";
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
      "До 6 основни страници",
      "Бързо зареждане и сигурност",
      "Съобразен с бизнеса дизайн",
      "Обучение за работа с платформата",
      "SEO и GEO оптимизация (базова)",
      "SSL сертификат"
    ],
    icon: Zap,
    popular: false
  },
  {
    name: "BUSINESS",
    originalPrice: "1.999",
    price: "649",
    period: "еднократно",
    description: "Идеален за бизнеси, които искат да продават онлайн и да растат",
    highlight: "Спестявате €1.350 днес | Възвращаемост за 2-3 месеца",
    features: [
      "До 10 основни страници",
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
    answer: "Приемаме банков превод, картово плащане и възможност за разсрочено плащане при по-големи проекти. Работим с 50/50 модел - 50% от сумата в началото на проекта, останалите 50% след като видите резултата и преди официалното издаване."
  },
  {
    question: "Включена ли е хостинг услугата в цената?",
    answer: "Хостингът не е включен в еднократната цена, но можем да ви предложим надеждни хостинг решения на конкурентни цени."
  },
  {
    question: "Получавам ли собственост върху сайта?",
    answer: "Да, след финалното плащане получавате пълна собственост върху кода и дизайна на вашия уебсайт."
  },
  {
    question: "Как работи 50/50 плащането?",
    answer: "Плащате 50% от сумата в началото на проекта, което покрива първоначалната работа по дизайн и разработка. Останалите 50% плащате след като видите резултата и сте доволни, но преди официалното издаване на проекта. Това гарантира, че и двете страни са защитени."
  }
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
              Инвестиция, която <span className="text-gradient">се изплаща</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Прозрачни цени без скрити такси. Плащате само след като видите резултата. Всички наши клиенти виждат{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-primary font-semibold underline decoration-dotted cursor-help">
                    ROI
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    ROI (Return on Investment) означава възвращаемост на инвестицията - когато печалбите от сайта надхвърлят инвестираната сума.
                  </p>
                </TooltipContent>
              </Tooltip>{" "}
              в рамките на 2-3 месеца.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Безплатна консултация</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Плащате след одобрение</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">Гарантиран </span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-foreground underline decoration-dotted cursor-help">ROI</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      ROI (Return on Investment) - възвращаемост на инвестицията. Когато печалбите от сайта надхвърлят инвестираната сума.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="border-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">2-3x</div>
                <div className="text-sm text-muted-foreground">Увеличение на конверсиите</div>
              </div>
              <div className="border-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">2-3 месеца</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  Средно време за{" "}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="underline decoration-dotted cursor-help">ROI</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        ROI (Return on Investment) - възвращаемост на инвестицията. Времето, за което печалбите от сайта надхвърлят инвестираната сума.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div className="border-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Доверие и качество</div>
              </div>
            </div>
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
                  <span className="text-sm text-muted-foreground">от</span>
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

                {plan.name === "ESSENTIAL" && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-xs font-semibold text-primary mb-1">СТОЙНОСТ:</div>
                    <div className="text-xs text-muted-foreground">
                      За €299 получавате професионален уебсайт, който би струвал €1,500+ в други агенции. Включва дизайн, разработка, SEO и GEO оптимизация и обучение.
                    </div>
                  </div>
                )}

                {plan.name === "BUSINESS" && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-xs font-semibold text-primary mb-1">СТОЙНОСТ:</div>
                    <div className="text-xs text-muted-foreground">
                      За €649 получавате пълен e-commerce магазин с онлайн плащания. Средният клиент генерира €2,000+ продажби в първия месец.
                    </div>
                  </div>
                )}

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
                  <Link to="/contact" className="flex items-center justify-center gap-2 text-sm sm:text-base whitespace-normal sm:whitespace-nowrap text-center">
                    <span>
                      {plan.name === "ENTERPRISE" ? "Заявете консултация" : plan.name === "BUSINESS" ? "Започнете сега" : "Започнете проект"}
                    </span>
                    <ArrowRight size={18} className="shrink-0" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Value Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="border-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-center mb-6">
                Защо избират Adrexio?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Прозрачни цени</div>
                      <div className="text-sm text-muted-foreground">Без скрити такси или неочаквани разходи</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">50/50 плащане</div>
                      <div className="text-sm text-muted-foreground">50% в началото, 50% след като видите резултата</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground flex items-center gap-1">
                        Гарантиран{" "}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="underline decoration-dotted cursor-help">ROI</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              ROI (Return on Investment) - възвращаемост на инвестицията. Когато печалбите от сайта надхвърлят инвестираната сума.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="text-sm text-muted-foreground">Вашият сайт се изплаща за 2-3 месеца</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Безплатна поддръжка</div>
                      <div className="text-sm text-muted-foreground">30-60 дни поддръжка включена</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">Бързо завършване</div>
                      <div className="text-sm text-muted-foreground">1-4 седмици в зависимост от плана</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">100% собственост</div>
                      <div className="text-sm text-muted-foreground">Собственост върху кода и дизайна</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="border-gradient p-6 rounded-xl text-center bg-primary/5">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Условия за плащане
              </span>
              <p className="text-foreground mt-2">
                <strong>50/50 плащане:</strong> Плащате 50% от сумата в началото на проекта. Останалите 50% плащате след като видите резултата и преди официалното издаване на проекта. Без скрити такси и без риск.
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
