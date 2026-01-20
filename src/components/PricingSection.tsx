import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
    name: "BUSINESS",
    originalPrice: "1.999",
    price: "649",
    period: "еднократно",
    description: "Идеален за бизнеси, които искат да продават онлайн и да растат",
    highlight: "Спестявате €1.350 днес | Възвращаемост за 2-3 месеца",
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

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Изберете решение, което <span className="text-gradient">отговаря на вашите цели</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачни условия и индивидуални планове, проектирани да подкрепят вашия дигитален растеж.
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
                  {plan.name === "ENTERPRISE" ? "Заявете безплатна консултация" : "Започнете своя проект"}
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="border-gradient p-6 rounded-xl text-center">
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
};

export default PricingSection;
