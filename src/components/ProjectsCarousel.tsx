import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Проекти с изображения
const projects = [
  {
    id: 1,
    image: "/images/projects/amadent.png",
    title: "Дентална клиника",
    category: "Медицина"
  },
  {
    id: 2,
    image: "/images/projects/ameliadiva.png",
    title: "Модна къща",
    category: "Мода"
  },
  {
    id: 3,
    image: "/images/projects/athleticiq.png",
    title: "Спортен център",
    category: "Спорт & Фитнес"
  },
  {
    id: 4,
    image: "/images/projects/bitcoinempires.png",
    title: "Crypto платформа",
    category: "Финтех"
  },
  {
    id: 5,
    image: "/images/projects/boas.png",
    title: "Tech стартъп",
    category: "Технологии"
  },
  {
    id: 6,
    image: "/images/projects/bodyaesthetics.png",
    title: "Beauty студио",
    category: "Красота & Здраве"
  },
  {
    id: 7,
    image: "/images/projects/booom.png",
    title: "Маркетинг агенция",
    category: "Digital маркетинг"
  },
  {
    id: 8,
    image: "/images/projects/breezypointvillas.png",
    title: "Луксозни вили",
    category: "Недвижими имоти"
  },
  {
    id: 9,
    image: "/images/projects/bulbiochem.png",
    title: "Biotech компания",
    category: "Биотехнологии"
  },
  {
    id: 10,
    image: "/images/projects/fml-bd.png",
    title: "Софтуерна платформа",
    category: "SaaS"
  },
  {
    id: 11,
    image: "/images/projects/globalstreetart.png",
    title: "Арт галерия",
    category: "Изкуство & Култура"
  },
  {
    id: 12,
    image: "/images/projects/inniti.png",
    title: "IT консултантска фирма",
    category: "Enterprise"
  },
  {
    id: 13,
    image: "/images/projects/kappabay.png",
    title: "Бутиков хотел",
    category: "Хотелиерство"
  },
  {
    id: 14,
    image: "/images/projects/koleff-house.png",
    title: "Архитектурно студио",
    category: "Архитектура"
  },
  {
    id: 15,
    image: "/images/projects/koni.png",
    title: "Cloud решения",
    category: "Технологии"
  },
  {
    id: 16,
    image: "/images/projects/legends.png",
    title: "Gaming платформа",
    category: "eSports & Gaming"
  },
  {
    id: 17,
    image: "/images/projects/mehana.png",
    title: "Ресторантска верига",
    category: "Ресторантьорство"
  },
  {
    id: 18,
    image: "/images/projects/nfclogo.png",
    title: "IoT решения",
    category: "Smart технологии"
  },
  {
    id: 19,
    image: "/images/projects/oraqor.png",
    title: "E-commerce магазин",
    category: "Онлайн търговия"
  },
  {
    id: 20,
    image: "/images/projects/riact.png",
    title: "Web приложение",
    category: "Web развитие"
  },
  {
    id: 21,
    image: "/images/projects/supercredit.png",
    title: "Финансова платформа",
    category: "Финанси"
  },
  {
    id: 22,
    image: "/images/projects/tajmahal.png",
    title: "Етнически ресторант",
    category: "Гастрономия"
  },
  {
    id: 23,
    image: "/images/projects/webxotic.png",
    title: "Дигитална агенция",
    category: "Creative Studio"
  }
];

const ProjectsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-16 bg-[#0A0A0A] overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Портфолио с <span className="text-gradient">реални резултати</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Всеки проект е създаден с внимание към детайла, фокус върху потребителското изживяване и цел да донесе измерими резултати за бизнеса.
          </p>
        </motion.div>

        {/* First Row - Scrolling Left to Right */}
        <div 
          className="relative mb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-4"
            animate={{
              x: isPaused ? undefined : [0, -(520 + 16) * projects.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear"
              }
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`row1-${project.id}-${index}`}
                className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[480px] lg:w-[520px]"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative rounded-xl overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scrolling Right to Left */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-4"
            animate={{
              x: isPaused ? undefined : [-(520 + 16) * projects.length, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear"
              }
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`row2-${project.id}-${index}`}
                className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[480px] lg:w-[520px]"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative rounded-xl overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
