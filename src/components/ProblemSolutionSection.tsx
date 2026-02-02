import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  AlertCircle, 
  DollarSign, 
  Users, 
  Clock, 
  Zap, 
  TrendingUp, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    icon: DollarSign,
    title: "Скъпа реклама, която не се изплаща?",
    description: "Харчите хиляди за реклама, но резултатите не оправдават инвестицията. Парите изчезват без ясен ROI."
  },
  {
    icon: Users,
    title: "Клиенти, които купуват веднъж и изчезват?",
    description: "Привличате нови клиенти, но те не се връщат. Всеки нов клиент струва повече от предишния."
  },
  {
    icon: Clock,
    title: "Ръчна работа, която убива растежа?",
    description: "Вашият екип е зает с повторящи се задачи вместо да фокусира върху стратегия и растеж."
  }
];

const adrexioSolutions = [
  {
    icon: Zap,
    title: "Retention Machine",
    subtitle: "Автоматизирани кампании, базирани на поведение",
    description: "Системи, които автоматично идентифицират и ангажират клиенти в критични моменти. Спестете време и пари, като автоматизирате маркетинга си.",
    benefit: "Спестете до 40% от маркетинговия бюджет"
  },
  {
    icon: TrendingUp,
    title: "Predictive LTV",
    subtitle: "Знаете кога и какво ще купи клиентът ви отново",
    description: "AI-модели предсказват следващата покупка на всеки клиент. Фокусирайте усилията си там, където има най-голям потенциал за печалба.",
    benefit: "Увеличете повторните продажби с до 200%"
  },
  {
    icon: Sparkles,
    title: "Seamless Experience",
    subtitle: "Интуитивен UX, който кара хората да се връщат",
    description: "Дизайн, който не само изглежда добре, но и води до действия. Всеки клик е оптимизиран за конверсия и връщане.",
    benefit: "Намалете bounce rate с до 60%"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Проблемът и решението
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Престанете да <span className="text-red-500">губите пари</span>.
            <br />
            Започнете да <span className="text-gradient">печелите</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Повечето бизнеси харчат пари за реклама и губят клиенти. Ние създаваме системи, които автоматизират растежа и увеличават печалбата.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-red-500">
                  Проблемите, които убиват растежа
                </h3>
              </div>
              <p className="text-muted-foreground">
                Ако разпознавате тези проблеми, не сте сами. Повечето бизнеси се сблъскват с тях всеки ден.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
                      <point.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-lg mb-2 text-foreground">
                        {point.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* The Adrexio Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient">
                  Начинът на Adrexio
                </h3>
              </div>
              <p className="text-muted-foreground">
                Ние не просто създаваме уебсайтове. Създаваме системи за растеж, които автоматизират печалбата ви.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {adrexioSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-6 rounded-xl border-gradient bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-lg mb-1 text-foreground">
                        {solution.title}
                      </h4>
                      <p className="text-sm font-medium text-primary mb-2">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {solution.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">
                      {solution.benefit}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl border-gradient bg-gradient-to-br from-primary/10 to-accent/5">
            <p className="text-lg font-semibold mb-2">
              Готови ли сте да трансформирате бизнеса си?
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Нека поговорим как можем да автоматизираме растежа ви и да увеличим печалбата.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Увеличете печалбите си сега
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
