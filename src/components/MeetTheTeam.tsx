import founderImage from "@/assets/founder.jpg";
import plamenImage from "@/assets/plamen.png";
import nikolayImage from "@/assets/nikolay.jpg";
import stefanImage from "@/assets/stefan.png";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";

const teamMembers = [
  { name: "Николай Ненов", role: "Head of Marketing", image: nikolayImage },
  { name: "Пламен Петков", role: "CTO", image: plamenImage },
  { name: "Стефан Колев", role: "Lead Developer", image: stefanImage },
];

const MeetTheTeam = () => {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
      <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-50" aria-hidden />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <Reveal>
          <SectionEyebrow label="Екип" index="05" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Хората зад <span className="accent-mark">Adrexio</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Визията, която стои зад всеки проект — и екипът, който я превръща в реалност.
          </p>
        </Reveal>

        {/* Founder feature */}
        <div className="mt-16 grid items-center gap-14 md:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal direction="left">
            <div className="relative mx-auto max-w-sm lg:mx-0">
              {/* Offset accent block — the "sticker/print" pop of colour */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-primary md:translate-x-4 md:translate-y-4"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border-2 border-foreground">
                <img
                  src={founderImage}
                  alt="Адриан Колев — Основател & CEO"
                  className="aspect-[4/5] w-full object-cover object-[center_20%]"
                />
              </div>
              {/* Tilted label, echoing gurbov's sticker tags */}
              <span className="font-mono-meta absolute -right-3 top-6 -rotate-3 rounded-full border-2 border-foreground bg-background px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-foreground shadow-sm">
                Основател
              </span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div>
              {/* Speech bubble */}
              <div className="relative rounded-3xl border-2 border-foreground bg-background p-7 md:p-9">
                {/* Tail: points up on mobile (photo above), left on desktop (photo beside) */}
                <span
                  className="absolute -top-[9px] left-10 h-4 w-4 rotate-45 border-l-2 border-t-2 border-foreground bg-background lg:hidden"
                  aria-hidden
                />
                <span
                  className="absolute -left-[9px] top-12 hidden h-4 w-4 rotate-45 border-b-2 border-l-2 border-foreground bg-background lg:block"
                  aria-hidden
                />

                <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-foreground md:text-2xl md:leading-[1.35]">
                  Вярваме, че истинският дигитален успех идва от смелите идеи, правилната стратегия и{" "}
                  <span className="text-primary">безупречното изпълнение</span>.
                </blockquote>
              </div>

              <div className="mt-7 flex items-end justify-between gap-4">
                <div>
                  <p className="font-hand text-4xl text-primary md:text-5xl">Адриан Колев</p>
                  <p className="font-mono-meta mt-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Основател &amp; CEO · Adrexio
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Rest of the team */}
        <div className="mt-20 border-t border-border pt-14 md:mt-24">
          <Reveal>
            <h3 className="font-mono-meta text-[0.7rem] uppercase tracking-[0.2em] text-primary">
              Останалите от екипа
            </h3>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <figure className="group">
                  <div className="overflow-hidden rounded-2xl border-2 border-foreground">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-[3/4] w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <div className="font-display text-lg font-semibold tracking-tight text-foreground">
                      {member.name}
                    </div>
                    <div className="font-mono-meta mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {member.role}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
