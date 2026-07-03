import { useState } from "react";
import { Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { EASE_OUT } from "@/components/editorial/motion";

import supercreditLogo from "@/assets/clients/supercredit.svg";
import fmlLogo from "@/assets/clients/fml.png";
import athleticiqLogo from "@/assets/clients/athleticiq.png";
import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.png";
import ameliadivaLogo from "@/assets/clients/ameliadiva.png";

const testimonials = [
  {
    quote: "Adrexio надминаха очакванията ми. Успяха да разберат визията ми още от първия разговор.",
    highlight: "Мислят не само за дизайна, но и за UX и бързината.",
    author: "Борислав Гоцев",
    role: "Директор",
    company: "SuperCredit",
    logo: supercreditLogo,
  },
  {
    quote: "Търсех надежден партньор за уеб сайт и го намерих в лицето на Adrexio.",
    highlight: "Процесът беше ясен, комуникацията — отлична.",
    author: "Николай Кирилов",
    role: "HR",
    company: "FML-BD",
    logo: fmlLogo,
  },
  {
    quote: "Супер доволна съм от съвместната работа с Adrexio.",
    highlight: "Сайтът за AthleticiqApp е модерен, интуитивен и много добре оптимизиран.",
    author: "Гергана Драгиева",
    role: "PO",
    company: "Athleticiqapp",
    logo: athleticiqLogo,
  },
  {
    quote: "Работата с Adrexio беше истинско удоволствие.",
    highlight: "Дизайнът е елегантен, сайтът е бърз и клиентите ми го харесват.",
    author: "Камелия Петрова",
    role: "Собственик",
    company: "Body Aesthetics",
    logo: bodyaestheticsLogo,
  },
  {
    quote: "Изключително коректен и креативен екип!",
    highlight: "Създадоха модерен сайт, който отговаря напълно на нуждите на бизнеса ми.",
    author: "Ивана Иванова",
    role: "Собственик",
    company: "Amelia Diva",
    logo: ameliadivaLogo,
  },
];

const TestimonialsSection = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionEyebrow label="Отзиви" index="08" />
        </Reveal>

        {/* Featured pull-quote — magazine scale, no card */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <Reveal delay={0.06}>
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
            </Reveal>

            <div className="min-h-[220px] md:min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE_OUT }}
                  className="font-display text-2xl font-bold leading-snug tracking-tight text-foreground md:text-4xl"
                >
                  „{t.quote}{" "}
                  <span className="bg-[linear-gradient(transparent_68%,hsl(var(--primary)/0.3)_68%)]">
                    {t.highlight}
                  </span>
                  "
                  <footer className="mt-8 flex items-center gap-4">
                    <img
                      src={t.logo}
                      alt={t.company}
                      className="h-8 w-auto max-w-[96px] object-contain"
                    />
                    <span className="text-sm font-normal text-muted-foreground">
                      <span className="font-semibold text-foreground">{t.author}</span>
                      {" — "}
                      {t.role}, {t.company}
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          {/* Author selector — hairline list, cyan active marker */}
          <div className="border-t border-border lg:w-64 lg:border-l lg:border-t-0 lg:pl-8">
            {testimonials.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.author}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group flex w-full items-center gap-3 border-b border-border py-3.5 text-left lg:border-b-0 lg:py-2.5"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive ? "w-6 bg-primary" : "w-3 bg-border group-hover:w-5 group-hover:bg-foreground/40"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.company}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
