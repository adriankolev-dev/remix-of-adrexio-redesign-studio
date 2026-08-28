import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";

import supercreditLogo from "@/assets/clients/supercredit.svg";
import fmlLogo from "@/assets/clients/fml.webp";
import athleticiqLogo from "@/assets/clients/athleticiq.webp";
import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.webp";
import ameliadivaLogo from "@/assets/clients/ameliadiva.webp";

const testimonials = [
  {
    quote: "Adrexio надминаха очакванията ми. Успяха да разберат визията ми още от първия разговор. Мислят не само за дизайна, но и за UX и бързината.",
    author: "Борислав Гоцев",
    role: "Директор",
    company: "SuperCredit",
    logo: supercreditLogo,
  },
  {
    quote: "Търсех надежден партньор за уеб сайт и го намерих в лицето на Adrexio. Процесът беше ясен, комуникацията — отлична.",
    author: "Николай Кирилов",
    role: "HR",
    company: "FML-BD",
    logo: fmlLogo,
  },
  {
    quote: "Супер доволна съм от съвместната работа с Adrexio. Сайтът за AthleticiqApp е модерен, интуитивен и много добре оптимизиран.",
    author: "Гергана Драгиева",
    role: "PO",
    company: "Athleticiqapp",
    logo: athleticiqLogo,
  },
  {
    quote: "Работата с Adrexio беше истинско удоволствие. Дизайнът е елегантен, сайтът е бърз и клиентите ми го харесват.",
    author: "Камелия Петрова",
    role: "Собственик",
    company: "Body Aesthetics",
    logo: bodyaestheticsLogo,
  },
  {
    quote: "Изключително коректен и креативен екип! Създадоха модерен сайт, който отговаря напълно на нуждите на бизнеса ми.",
    author: "Ивана Иванова",
    role: "Собственик",
    company: "Amelia Diva",
    logo: ameliadivaLogo,
  },
];

const BladeName = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom leading-tight">
          <span
            className="blade-word inline-block pr-[0.28em]"
            style={{ animationDelay: `${80 + i * 50}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </h3>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative bg-background py-16 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionEyebrow label="Отзиви" index="08" />
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 max-w-md text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Какво казват клиентите.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Не сме им плащали за тези думи. Свършихме работата — те написаха останалото.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-[5.5rem] lg:gap-[10.5rem]">
            {testimonials.map((item, index) => (
              <article
                key={item.author}
                className="layer-shadow sticky top-[25vh] rounded-[1.25rem] border border-border bg-card p-7 md:p-11 lg:top-28"
                style={{ zIndex: index + 1 }}
              >
                <BladeName text={item.author} />
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.role}, {item.company}
                </p>

                <p className="mt-8 text-base leading-relaxed text-foreground/85 md:text-lg">
                  {item.quote}
                </p>

                <img
                  src={item.logo}
                  alt={item.company}
                  width={160}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="mt-10 h-8 w-auto max-w-[160px] object-contain object-left opacity-90"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
