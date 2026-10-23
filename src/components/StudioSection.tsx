import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import Dotted from "@/components/editorial/Dotted";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/data/googleReviews";

import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.webp";
import fmlLogo from "@/assets/clients/fml.webp";
import ameliadivaLogo from "@/assets/clients/ameliadiva.webp";
import athleticiqLogo from "@/assets/clients/athleticiq.webp";
import amaLogo from "@/assets/clients/ama.webp";
import bulbioLogo from "@/assets/clients/bulbio.webp";
import boasLogo from "@/assets/clients/boas.webp";
import globalstreetartLogo from "@/assets/clients/globalstreetart.webp";
import webxoticLogo from "@/assets/clients/webxotic.webp";
import tokenizeLogo from "@/assets/clients/tokenize.webp";
import tajmahalLogo from "@/assets/clients/tajmahal.webp";
import supercreditLogo from "@/assets/clients/supercredit.svg";

// Only claims we can stand behind: no client-attributed growth figures.
const metrics = [
  { value: "AI First", label: "Опит, ускорен с AI", source: "Екипът решава, AI скъсява срока" },
  { value: "10+", label: "Години опит в екипа", source: "Уеб дизайн и разработка" },
  { value: "24ч", label: "Отговор на запитване", source: "С план, срок и оферта" },
  {
    value: GOOGLE_RATING.toFixed(1),
    label: "Рейтинг в Google",
    source: `от ${GOOGLE_REVIEW_COUNT} ревюта`,
  },
];

// `light`: a white logo that needs darkening to show on paper.
const clients: { name: string; logo: string; tone?: "light" }[] = [
  { name: "Body Aesthetics", logo: bodyaestheticsLogo },
  { name: "FML-BD", logo: fmlLogo },
  { name: "Amelia Diva", logo: ameliadivaLogo },
  { name: "AthleticIQ", logo: athleticiqLogo },
  { name: "AMA Dental", logo: amaLogo },
  { name: "Global Street Art", logo: globalstreetartLogo },
  { name: "Taj Mahal", logo: tajmahalLogo },
  { name: "SuperCredit", logo: supercreditLogo },
  { name: "BOAS", logo: boasLogo },
  { name: "Bulbiochem", logo: bulbioLogo, tone: "light" },
  { name: "WebXotic", logo: webxoticLogo, tone: "light" },
  { name: "Tokenize The World", logo: tokenizeLogo, tone: "light" },
];

const toneClass = { light: "brightness-0" } as const;

/** Who we are: the studio in a few sentences, the numbers, and the clients behind them. */
const StudioSection = () => (
  <section className="relative bg-background pt-16 md:pt-24">
    <div className="container mx-auto px-6">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
        {/* Left: the title and the one-line thesis in large type, so the column carries weight */}
        <div>
          <Reveal>
            <h2 className="title-xl text-foreground">
              <Dotted>Студиото.</Dotted>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-xl text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.035em] text-foreground md:mt-10 md:text-[2.25rem]">
              Adrexio е уеб студио в София. Проектираме и изграждаме сайтове и онлайн магазини от
              нулата, без готови шаблони.
            </p>
          </Reveal>
        </div>

        <div className="lg:pt-2">
          <Reveal delay={0.1}>
            <div className="max-w-md space-y-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              <p>
                Работим с бизнеси, които искат сайт с характер. Всеки проект започва
                с въпроса какво трябва да постигне сайтът, и чак след това с дизайна.
              </p>
              <p>
                Екипът ни събира дизайн, разработка и маркетинг. Работим AI First, но решенията
                взимат хора с над 10 години опит. AI поема проучването, черновите и рутинния код, а
                ние проверяваме всеки ред. Така сайтът стига до вас по-бързо, без да губи качество.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="ink" size="default" asChild>
                <Link to="/case-studies">
                  Виж проектите
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button variant="line" size="default" asChild>
                <Link to="/about">
                  За нас
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* The four figures on one full-width row */}
      <Reveal delay={0.1}>
        <dl className="mt-14 grid grid-cols-2 border-l border-t border-border md:mt-20 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="border-b border-r border-border p-5 md:p-7">
              <dt className="whitespace-nowrap text-[2rem] font-black leading-none tracking-[-0.035em] [word-spacing:0.08em] text-foreground md:text-[3.25rem]">
                {m.value}
              </dt>
              <dd className="mt-4 text-sm font-medium text-foreground">{m.label}</dd>
              <dd className="mt-1 text-xs text-muted-foreground">{m.source}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Clients: one slow, borderless strip; colour returns on hover, pauses on hover */}
      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col gap-3 md:mt-16 md:flex-row md:items-center md:gap-8">
          <p className="eyebrow shrink-0">Избрани клиенти</p>
          <div className="group/strip relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <ul className="animate-marquee flex w-max [animation-duration:45s] items-center group-hover/strip:[animation-play-state:paused]">
              {[...clients, ...clients].map((client, i) => (
                <li
                  key={`${client.name}-${i}`}
                  aria-hidden={i >= clients.length}
                  className="group flex h-20 shrink-0 items-center px-8 md:px-12"
                >
                  <img
                    src={client.logo}
                    alt={i < clients.length ? client.name : ""}
                    loading="lazy"
                    decoding="async"
                    className={`max-h-10 w-auto max-w-[150px] object-contain opacity-60 mix-blend-multiply grayscale transition duration-300 group-hover:opacity-100 dark:mix-blend-screen dark:invert ${
                      client.tone
                        ? toneClass[client.tone]
                        : "group-hover:grayscale-0 dark:group-hover:invert-0 dark:group-hover:mix-blend-normal"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default StudioSection;
