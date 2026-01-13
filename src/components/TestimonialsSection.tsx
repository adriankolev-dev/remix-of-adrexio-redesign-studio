import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Adrexio надминаха очакванията ми. Успяха да разберат визията ми още от първия разговор и я реализираха в изключително функционален и добре структуриран сайт. Харесва ми, че мислят не само за дизайна, но и за потребителското изживяване и бързината. Истински професионалисти!",
    author: "Борислав Гоцев",
    role: "Директор, SuperCredit",
    initials: "БГ"
  },
  {
    quote: "Търсех надежден партньор за уеб сайт и го намерих в лицето на Adrexio. Процесът беше ясен, комуникацията — отлична, а крайният резултат — напълно отговарящ на бизнес целите ми. Сайтът изглежда сериозно и вдъхва доверие на клиентите ми.",
    author: "Николай Кирилов",
    role: "HR, FML-BD",
    initials: "НК"
  },
  {
    quote: "Супер доволна съм от съвместната работа с Adrexio. Сайтът за AthleticiqApp е модерен, интуитивен и много добре оптимизиран. Екипът даде ценни идеи и подобрения, за които дори не бях се сетила. Препоръчвам ги на всеки, който иска качествено онлайн присъствие!",
    author: "Гергана Драгиева",
    role: "PO, Athleticiqapp",
    initials: "ГД"
  },
  {
    quote: "Работата с Adrexio беше истинско удоволствие. От самото начало разбрах, че съм попаднала на професионалисти, които знаят как да превърнат една идея в работещ и красив уеб сайт. Дизайнът е елегантен, сайтът е бърз и клиентите ми го харесват.",
    author: "Камелия Петрова",
    role: "Собственик, Body Aesthetics",
    initials: "КП"
  },
  {
    quote: "Изключително коректен и креативен екип! Adrexio ми създадоха модерен уеб сайт, който отговаря напълно на нуждите на бизнеса ми. Комуникацията беше лесна, всичко се случи навреме и с внимание към детайла.",
    author: "Ивана Иванова",
    role: "Собственик, Amelia Diva",
    initials: "ИИ"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
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
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Какво споделят <span className="text-gradient">клиентите</span> ни
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <Quote className="absolute -top-8 left-0 w-16 h-16 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="border-gradient p-8 md:p-12 rounded-2xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
