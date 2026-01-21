import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, DollarSign, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "+150%", label: "Среден ръст на продажбите", icon: DollarSign },
  { value: "+85%", label: "Увеличение на конверсиите", icon: TrendingUp },
];

const ResultsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Резултати, които говорят{" "}
              <span className="text-gradient">сами за себе си</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Създаваме устойчиви софтуерни решения, които оптимизират вашите процеси и ви дават конкурентно предимство. Вярваме в прецизността на изпълнението и безкомпромисното качество на всеки ред код.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="border-gradient p-6 rounded-xl text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/case-studies">
                Вижте нашите проекти
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border border-border/30 rounded-full" />
                <div className="absolute w-3/4 h-3/4 border border-border/50 rounded-full" />
                <div className="absolute w-1/2 h-1/2 border border-primary/30 rounded-full" />
                <div className="absolute w-1/4 h-1/4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 glass p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">Сайтът е онлайн</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 left-0 glass p-4 rounded-xl shadow-xl"
              >
                <div className="text-2xl font-display font-bold text-gradient">+250%</div>
                <div className="text-xs text-muted-foreground">Ръст на трафика</div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/3 left-1/4 glass p-3 rounded-xl shadow-xl"
              >
                <Zap className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
