import { 
  Zap, 
  Shield, 
  Search, 
  Smartphone, 
  Palette, 
  Settings,
  Award,
  Users,
  Clock,
  TrendingUp,
  Code,
  HeartHandshake,
  Sparkles,
  Crown,
  Check,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceLandingTemplate from "@/components/ServiceLandingTemplate";
import ProjectsCarousel from "@/components/ProjectsCarousel";

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

const WebDevelopment = () => {
  const projectsSection = (
    <>
      <ProjectsCarousel />
    </>
  );

  const pricingSection = (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Цени
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Прозрачни цени <span className="text-gradient">без скрити такси</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Плащате 50% в началото, останалите 50% след като видите резултата. Всички наши клиенти виждат ROI в рамките на 2-3 месеца.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
  );

  return (
    <ServiceLandingTemplate
      seoTitle="Уеб сайт разработка - Adrexio | Професионални уебсайтове в София, България"
      seoDescription="Уеб сайт разработка в София. Модерни, бързи и SEO-оптимизирани уебсайтове, корпоративни сайтове, лендинг страници и e-commerce магазини."
      seoKeywords="уеб сайт разработка, уебсайт София, разработка сайт, корпоративен уебсайт, лендинг страница, e-commerce, уеб студио България, React, Next.js"
      serviceName="Уеб сайт разработка"
      heroTitle="Фокусирайте се върху резултата,"
      heroHighlight="а не върху процеса."
      heroSubtitle="Превръщаме вашите посетители в лоялни клиенти с високопроизводителни уебсайтове, които работят за вашия бизнес 24/7."
      heroCTAText="ЗАПОЧНИ СВОЯ ПРОЕКТ"
      
      stats={[
        { value: "+120%", label: "Средно увеличение на конверсиите" },
        { value: "< 2сек", label: "Време за зареждане" },
        { value: "24/7", label: "Работи без прекъсване" }
      ]}
      
      introTitle="Защо вашият бизнес се нуждае от модерен уебсайт?"
      introDescription="Ние не просто пишем код. Ние анализираме вашия бизнес модел и създаваме дигитален инструмент, който работи за вашите цели денонощно. Вашият уебсайт е първото впечатление за потенциалните клиенти – нека го направим незабравимо."
      
      featuresTitle="Какво включва нашата уеб сайт разработка?"
      featuresSubtitle="Пълен пакет услуги"
      features={[
        {
          title: "Модерен UI/UX дизайн",
          description: "За да изглеждате професионално и да впечатлите клиентите си от първия момент."
        },
        {
          title: "Светкавична скорост",
          description: "Оптимизирани сайтове, които зареждат за под 3 секунди, за да не губите клиенти."
        },
        {
          title: "SEO оптимизация",
          description: "Техническа SEO основа, за да ви намират лесно в Google и другите търсачки."
        },
        {
          title: "Мобилна адаптивност",
          description: "Перфектна визия на всеки телефон, таблет и десктоп устройство."
        },
        {
          title: "Сигурност и защита",
          description: "SSL сертификати и защита от атаки за спокойствие на вас и вашите клиенти."
        },
        {
          title: "Лесна поддръжка",
          description: "CMS система, за да управлявате съдържанието си лесно без технически познания."
        },
        {
          title: "Управление на склад",
          description: "Лесно следене на наличности и автоматични известия при изчерпване на стоки."
        },
        {
          title: "CRM функционалност",
          description: "Управление на клиенти и история на поръчките за по-добро обслужване."
        },
        {
          title: "Интегрирани плащания",
          description: "Свързваме вашия магазин с всички популярни платежни методи - карти, PayPal, банков превод."
        },
        {
          title: "Интеграция с куриери",
          description: "Автоматична връзка със Спиди, Еконт и други куриерски услуги за бързо изпращане."
        }
      ]}
      
      benefitsTitle="Какви резултати ще постигнете?"
      benefitsSubtitle="Реални ползи за вашия бизнес"
      benefits={[
        {
          icon: TrendingUp,
          title: "Повече продажби",
          description: "Конверсионно-ориентиран дизайн, който превръща посетителите в клиенти."
        },
        {
          icon: Search,
          title: "По-добро SEO",
          description: "Високи позиции в търсачките и повече органичен трафик."
        },
        {
          icon: Users,
          title: "Доверие на клиентите",
          description: "Професионален имидж, който изгражда доверие от първия момент."
        },
        {
          icon: Clock,
          title: "Спестено време",
          description: "Автоматизирани процеси и лесно управление на съдържанието."
        }
      ]}
      
      processTitle="Как работим?"
      processSubtitle="Нашият доказан процес"
      steps={[
        {
          number: "1",
          title: "Консултация и Анализ",
          description: "Започваме с детайлен разговор, за да разберем вашите бизнес цели, нуждите на потребителите и техническите изисквания на проекта."
        },
        {
          number: "2",
          title: "Проектиране и Прототипиране",
          description: "Създаваме интерактивни прототипи и модерен UI/UX дизайн, за да визуализираме продукта още преди да е написан първият ред код."
        },
        {
          number: "3",
          title: "Гъвкава разработка (Agile)",
          description: "Използваме съвременни технологии и Agile методология, като ви предоставяме редовни актуализации и възможност за обратна връзка."
        },
        {
          number: "4",
          title: "Тестване и Качествен контрол",
          description: "Подлагаме софтуера на строги тестове за скорост, сигурност и съвместимост, за да гарантираме безпрецедентно качество."
        },
        {
          number: "5",
          title: "Стартиране и Поддръжка",
          description: "Ние сме до вас по време на официалния старт и осигуряваме последваща техническа поддръжка и подобрения."
        }
      ]}
      
      technologiesTitle="Технологии, които използваме"
      technologies={[
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "WordPress" },
        { name: "Shopify" },
        { name: "WooCommerce" },
        { name: "Tailwind CSS" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "AWS" },
        { name: "Vercel" }
      ]}
      
      useCasesTitle="За кого е подходящо?"
      useCasesSubtitle="Индустрии и приложения"
      useCases={[
        {
          title: "Корпоративни уебсайтове",
          description: "Професионално онлайн присъствие за бизнеси от всякакъв мащаб."
        },
        {
          title: "E-commerce магазини",
          description: "Онлайн магазини с интегрирани плащания и управление на поръчки."
        },
        {
          title: "Лендинг страници",
          description: "Конверсионно-ориентирани страници за маркетинг кампании."
        },
        {
          title: "Web приложения",
          description: "Персонализирани софтуерни решения за специфични бизнес нужди."
        },
        {
          title: "Стартъпи",
          description: "MVP разработка и скалируеми решения за бързорастящи компании."
        },
        {
          title: "Блогове и медии",
          description: "Платформи за съдържание с оптимизирано SEO и бърза скорост."
        }
      ]}
      
      whyChooseUsTitle="Защо да изберете нас?"
      whyChooseUsSubtitle="Нашите предимства"
      whyChooseUs={[
        {
          icon: Award,
          title: "Доказан опит",
          description: "7+ години опит в индустрията с фокус върху качество и резултати."
        },
        {
          icon: Code,
          title: "Модерни технологии",
          description: "Използваме най-новите технологии за оптимална производителност."
        },
        {
          icon: HeartHandshake,
          title: "Дългосрочно партньорство",
          description: "Не просто изпълняваме проекти – изграждаме партньорства."
        },
        {
          icon: Shield,
          title: "Сигурност и качество",
          description: "Строги стандарти за сигурност и качество на всеки етап."
        },
        {
          icon: Clock,
          title: "Бърза реализация",
          description: "Ефективни процеси за бързо излизане на пазара."
        },
        {
          icon: Users,
          title: "Dedicated екип",
          description: "Персонален мениджър и екип, посветен на вашия проект."
        }
      ]}
      
      faqTitle="Често задавани въпроси"
      faqs={[
        {
          question: "Колко време отнема изработката на един уебсайт?",
          answer: "Стандартен бизнес сайт или лендинг страница обикновено отнемат между 2 и 4 седмици. За по-сложни проекти, като онлайн магазини или персонализирани системи, срокът се уточнява след детайлен анализ на изискванията."
        },
        {
          question: "Ще мога ли сам да редактирам съдържанието на сайта си?",
          answer: "Категорично да. Изграждаме сайтовете с интуитивни системи за управление (CMS), които ви позволяват лесно да променяте текстове, снимки и продукти без никакви технически познания."
        },
        {
          question: "Сайтът ми ще се класира ли добре в Google?",
          answer: "Всеки наш проект включва базова SEO оптимизация – правилна структура на кода, бърза скорост на зареждане и мобилна адаптивност. Това дава на сайта ви отлична основа за високо класиране в търсачките."
        },
        {
          question: "Предлагате ли поддръжка след завършване на проекта?",
          answer: "Да, осигуряваме техническа поддръжка, редовни актуализации и защита на сигурността. Нашата цел е дългосрочно партньорство, за да може вашият сайт да работи безотказно."
        },
        {
          question: "Колко ще ми струва изработката на уебсайт?",
          answer: "Предлагаме индивидуални решения, съобразени с нуждите на вашия бизнес. След безплатна консултация ще изготвим конкретна оферта, базирана на обема и функционалностите на сайта. Гарантираме ясни условия и без скрити такси."
        },
        {
          question: "Могат ли услугите ви да бъдат персонализирани за моята индустрия?",
          answer: "Напълно. Вашият път с нас започва с детайлен анализ, за да разберем специфичните предизвикателства на вашия сектор и да предложим решение по мярка."
        }
      ]}
      
      ctaTitle="Готови ли сте да трансформирате вашия бизнес онлайн?"
      ctaSubtitle="Свържете се с нас днес за безплатна консултация и нека обсъдим вашата идея."
      customSectionBeforeCTA={
        <>
          {projectsSection}
          {pricingSection}
        </>
      }
    />
  );
};

export default WebDevelopment;
