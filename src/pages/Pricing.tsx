import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, Zap, Crown, HelpCircle, DollarSign, Rocket, TrendingUp, Shield, Clock, Award } from "lucide-react";
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

          {/* Value Comparison - 3D Floating Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Защо избират <span className="text-gradient">Adrexio?</span>
            </h3>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Комбинация от качество, прозрачност и доказани резултати
            </p>
            
            {/* Staggered 3D Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16" style={{ perspective: "1000px" }}>
              {[
                {
                  icon: DollarSign,
                  title: "Прозрачни цени",
                  description: "Без скрити такси или неочаkvани разходи",
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  icon: Shield,
                  title: "50/50 плащане",
                  description: "50% в началото, 50% след като видите резултата",
                  color: "from-blue-400 to-purple-500",
                },
                {
                  icon: TrendingUp,
                  title: "Гарантиран ROI",
                  description: "Вашият сайт се изплаща за 2-3 месеца",
                  color: "from-purple-400 to-pink-500",
                  tooltip: "ROI (Return on Investment) - възвращаемост на инвестицията"
                },
                {
                  icon: Sparkles,
                  title: "Безплатна поддръжка",
                  description: "30-60 дни поддръжка включена",
                  color: "from-pink-400 to-red-500",
                },
                {
                  icon: Rocket,
                  title: "Бързо завършване",
                  description: "1-4 седмици в зависимост от плана",
                  color: "from-red-400 to-orange-500",
                },
                {
                  icon: Award,
                  title: "100% собственост",
                  description: "Собственост върху кода и дизайна",
                  color: "from-orange-400 to-yellow-500",
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0,
                    rotateX: -90,
                    y: 100,
                  }}
                  whileInView={{ 
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -20,
                    rotateX: 10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group flex flex-col items-center text-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glow Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                    style={{ transform: "translateZ(-50px)" }}
                  />
                  
                  {/* 3D Icon */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ 
                      rotateY: 180,
                      transition: { duration: 0.6 }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Icon Circle */}
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${item.color} p-5 shadow-2xl relative`}
                         style={{ 
                           transform: "translateZ(30px)",
                         }}>
                      <item.icon className="w-full h-full text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Shadow */}
                    <div className="absolute inset-0 rounded-full bg-black/30 blur-2xl scale-90 -z-10" 
                         style={{ transform: "translateZ(-20px) translateY(10px)" }} />
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    style={{ transform: "translateZ(20px)" }}
                    className="space-y-3"
                  >
                    <h4 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                      {item.title}
                      {item.tooltip && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-primary cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{item.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Decorative line */}
                  <motion.div
                    className={`mt-6 h-1 w-16 bg-gradient-to-r ${item.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    style={{ transform: "translateZ(10px)" }}
                  />
                </motion.div>
              ))}
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
