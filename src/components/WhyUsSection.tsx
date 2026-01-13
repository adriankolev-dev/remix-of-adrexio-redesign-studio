import { motion } from "framer-motion";
import { 
  Target, 
  Cpu, 
  Eye, 
  Users, 
  Headphones, 
  Heart 
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Индивидуален подход към всеки детайл",
    description: "Всеки проект е уникален. Ние анализираме вашите специфични нужди, за да предложим решение, което пасва идеално на вашия бизнес модел."
  },
  {
    icon: Cpu,
    title: "Технологии от следващо поколение",
    description: "Използваме най-новите софтуерни рамки и архитектури, за да гарантираме, че вашият продукт е бърз, сигурен и лесен за мащабиране."
  },
  {
    icon: Eye,
    title: "Прозрачност и постоянен контакт",
    description: "Вие сте част от процеса. Чрез Agile методология ви осигуряваме пълна видимост върху всеки етап от разработката."
  },
  {
    icon: Users,
    title: "Фокус върху потребителското преживяване",
    description: "Дизайнът и функционалността вървят ръка за ръка. Създаваме интерфейси, които потребителите обичат да използват."
  },
  {
    icon: Headphones,
    title: "Дългосрочна техническа поддръжка",
    description: "Нашето партньорство не приключва със старта. Ние сме до вас за бъдещи подобрения, актуализации и техническа оптимизация."
  },
  {
    icon: Heart,
    title: "Отдаденост на вашия успех",
    description: "Пълна ангажираност към вашите цели. Вашият успех е нашата мисия."
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Защо нас?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Защо <span className="text-gradient">Adrexio</span> е вашият правилен технологичен партньор?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-display font-bold text-primary opacity-50">
                      {index + 1}
                    </span>
                  </div>
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
