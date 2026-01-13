import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Консултация и Анализ",
    description: "Започваме с детайлен разговор, за да разберем вашите бизнес цели, нуждите на потребителите и техническите изисквания на проекта."
  },
  {
    number: "02",
    icon: PenTool,
    title: "Проектиране и Прототипиране",
    description: "Създаваме интерактивни прототипи и модерен UI/UX дизайн, за да визуализираме продукта още преди да е написан първият ред код."
  },
  {
    number: "03",
    icon: Code,
    title: "Гъвкава разработка",
    description: "Използваме съвременни технологии и Agile методология, като ви предоставяме редовни актуализации и възможност за обратна връзка."
  },
  {
    number: "04",
    icon: TestTube,
    title: "Тестване и Контрол",
    description: "Подлагаме софтуера на строги тестове за скорост, сигурност и съвместимост, за да гарантираме безпрецедентно качество."
  },
  {
    number: "05",
    icon: Rocket,
    title: "Стартиране и Поддръжка",
    description: "Ние сме до вас по време на официалния старт и осигуряваме последваща техническа поддръжка за дългосрочен успех."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Как <span className="text-gradient">работим</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            В Adrexio вярваме, че успешните дигитални продукти се раждат от тясно сътрудничество и прецизно планиране.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`border-gradient p-6 rounded-xl inline-block ${
                    index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                  }`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl font-display font-bold text-gradient opacity-50">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-display font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg glow-primary z-10">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
