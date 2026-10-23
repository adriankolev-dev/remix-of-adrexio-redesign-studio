import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import Sculpture from "@/components/editorial/Sculpture";

const steps = [
  {
    number: "01",
    title: "Разговор",
    description: "Какво трябва да направи посетителят, кой е той и какво не работи в сегашния сайт. След разговора получавате писмен обхват, срок и цена.",
  },
  {
    number: "02",
    title: "Структура",
    description: "Карта на страниците и скици на основните екрани. Тук решаваме какво къде стои, преди да има цветове.",
  },
  {
    number: "03",
    title: "Дизайн",
    description: "Финалният вид на основните страници за телефон и компютър, с до два кръга корекции.",
  },
  {
    number: "04",
    title: "Разработка",
    description: "Код, съдържание, форми и интеграции. Виждате работещия сайт, преди да е публичен.",
  },
  {
    number: "05",
    title: "Старт",
    description: "Проверяваме скоростта, формите и старите адреси, пускаме сайта и оставаме на линия за поправки.",
  },
];

/** Five phases beside the five-slab stone: one layer per phase, assembled into one result. */
const ProcessSection = () => {
  return (
    <section className="layer-dark relative overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          bare
          title="Процес."
          description="Пет етапа от първия разговор до пускането. Всеки завършва с нещо, което виждате и одобрявате."
          action={
            <Button variant="line" size="default" asChild>
              <Link to="/project-inquiry">
                Попълнете бриф
                <ArrowUpRight />
              </Link>
            </Button>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-16">
          <div className="lg:relative">
            <Sculpture
              stone="layered"
              sizes="(min-width: 1024px) 30vw, 14rem"
              drift
              className="mx-auto w-56 sm:w-64 lg:sticky lg:top-28 lg:w-full lg:max-w-[26rem]"
            />
          </div>

          <ol className="border-t border-border">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.number}
                delay={i * 0.05}
                className="grid gap-3 border-b border-border py-7 sm:grid-cols-[5.5rem_minmax(0,1fr)] md:py-9 xl:grid-cols-[5.5rem_minmax(0,0.8fr)_minmax(0,1.4fr)] xl:gap-8"
              >
                <span className="text-4xl font-black leading-none tracking-[-0.05em] text-foreground/25 md:text-5xl">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-start-2 xl:col-start-auto md:text-[0.95rem]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
