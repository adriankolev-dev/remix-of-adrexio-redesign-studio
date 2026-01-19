import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

// Import client logos for social proof
import supercreditLogo from "@/assets/clients/supercredit.svg";
import athleticiqLogo from "@/assets/clients/athleticiq.png";
import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.png";
import fmlLogo from "@/assets/clients/fml.png";
import ameliadivaLogo from "@/assets/clients/ameliadiva.png";

const clientLogos = [
  { name: "SuperCredit", logo: supercreditLogo },
  { name: "AthleticIQ", logo: athleticiqLogo },
  { name: "Body Aesthetics", logo: bodyaestheticsLogo },
  { name: "FML-BD", logo: fmlLogo },
  { name: "Amelia Diva", logo: ameliadivaLogo },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-primary font-medium">
              Бърз старт за бизнеса
            </span>
            <ArrowRight size={14} className="text-primary" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Вашите идеи заслужават{" "}
            <span className="text-gradient glow-text">модерен уебсайт</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Създаваме бързи и оптимизирани сайтове, които помагат на бизнеса да расте в дигиталната ера.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Направи запитване
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">Нашите услуги</Link>
            </Button>
          </motion.div>

          {/* Social Proof with real logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Client logos */}
            <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
              {clientLogos.map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="h-8 md:h-10 opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto max-w-[100px] object-contain"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">5/5</strong> от нашите клиенти
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
