import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Import client logos
import supercreditLogo from "@/assets/clients/supercredit.svg";
import fmlLogo from "@/assets/clients/fml.png";
import athleticiqLogo from "@/assets/clients/athleticiq.png";
import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.png";
import ameliadivaLogo from "@/assets/clients/ameliadiva.png";

const testimonials = [
  {
    quote: "Adrexio надминаха очакванията ми. Успяха да разберат визията ми още от първия разговор и я реализираха в изключително функционален и добре структуриран сайт.",
    highlight: "Харесва ми, че мислят не само за дизайна, но и за потребителското изживяване и бързината.",
    author: "Борислав Гоцев",
    role: "Директор",
    company: "SuperCredit",
    logo: supercreditLogo
  },
  {
    quote: "Търсех надежден партньор за уеб сайт и го намерих в лицето на Adrexio.",
    highlight: "Процесът беше ясен, комуникацията — отлична, а крайният резултат — напълно отговарящ на бизнес целите ми.",
    author: "Николай Кирилов",
    role: "HR",
    company: "FML-BD",
    logo: fmlLogo
  },
  {
    quote: "Супер доволна съм от съвместната работа с Adrexio.",
    highlight: "Сайтът за AthleticiqApp е модерен, интуитивен и много добре оптимизиран.",
    author: "Гергана Драгиева",
    role: "PO",
    company: "Athleticiqapp",
    logo: athleticiqLogo
  },
  {
    quote: "Работата с Adrexio беше истинско удоволствие.",
    highlight: "Дизайнът е елегантен, сайтът е бърз и клиентите ми го харесват.",
    author: "Камелия Петрова",
    role: "Собственик",
    company: "Body Aesthetics",
    logo: bodyaestheticsLogo
  },
  {
    quote: "Изключително коректен и креативен екип!",
    highlight: "Adrexio ми създадоха модерен уеб сайт, който отговаря напълно на нуждите на бизнеса ми.",
    author: "Ивана Иванова",
    role: "Собственик",
    company: "Amelia Diva",
    logo: ameliadivaLogo
  }
];

// Duplicate testimonials for infinite scroll effect
const testimonialsRow1 = [...testimonials, ...testimonials];
const testimonialsRow2 = [...testimonials.slice(2), ...testimonials.slice(0, 2), ...testimonials.slice(2), ...testimonials.slice(0, 2)];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
          Adrexio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Какво споделят <span className="text-gradient">клиентите</span> ни
          </h2>
        </motion.div>

        {/* Vertical scrolling testimonials - 3 columns */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1 - scroll down */}
            <div className="overflow-hidden h-[600px]">
              <motion.div
                className="flex flex-col gap-6"
                animate={{
                  y: [0, -1200],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {testimonialsRow1.map((testimonial, index) => (
                  <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>

            {/* Column 2 - scroll up (reverse) */}
            <div className="overflow-hidden h-[600px] hidden md:block">
              <motion.div
                className="flex flex-col gap-6"
                animate={{
                  y: [-1200, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {testimonialsRow2.map((testimonial, index) => (
                  <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>

            {/* Column 3 - scroll down (slightly different speed) */}
            <div className="overflow-hidden h-[600px] hidden lg:block">
              <motion.div
                className="flex flex-col gap-6"
                animate={{
                  y: [0, -1200],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear",
                  },
                }}
              >
                {testimonialsRow1.map((testimonial, index) => (
                  <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex-shrink-0 group">
      <div className="h-full p-6 rounded-2xl bg-card/80 dark:bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={14} className="fill-primary text-primary" />
          ))}
        </div>

        <blockquote className="text-sm text-foreground/90 leading-relaxed mb-4">
          {testimonial.quote} <span className="font-semibold text-foreground">{testimonial.highlight}</span>
        </blockquote>

        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-white/95 flex items-center justify-center overflow-hidden border border-border shadow-sm flex-shrink-0">
            <img
              src={testimonial.logo}
              alt={`${testimonial.author} company logo`}
              className="w-full h-full object-contain p-1.5"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-foreground text-sm">
              {testimonial.author}
            </div>
            <div className="text-xs text-muted-foreground">
              {testimonial.role} / <span className="text-primary font-medium">{testimonial.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
