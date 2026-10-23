import founderImage from "@/assets/founder.jpg";
import plamenImage from "@/assets/plamen.png";
import nikolayImage from "@/assets/nikolay.jpg";
import stefanImage from "@/assets/stefan.png";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";

const teamMembers = [
  { name: "Николай Ненов", role: "Head of Marketing", image: nikolayImage },
  { name: "Пламен Петков", role: "CTO", image: plamenImage },
  { name: "Стефан Колев", role: "Lead Developer", image: stefanImage },
];

const MemberCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <figure className="group h-full rounded-md bg-secondary p-3 md:p-4">
    <div className="overflow-hidden rounded-[0.25rem] bg-muted">
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="aspect-[4/5] w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
    <figcaption className="px-1 pb-1 pt-4">
      <p className="text-[0.8rem] font-bold uppercase tracking-[0.06em] text-foreground">{name}</p>
      <p className="mt-1 text-sm text-muted-foreground">{role}</p>
    </figcaption>
  </figure>
);

const MeetTheTeam = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Екипът."
        description="Дизайн, разработка и маркетинг на една маса."
      />

      {/* Founder: photo and the line they stand behind */}
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <Reveal>
          <MemberCard name="Адриан Колев" role="Основател & CEO" image={founderImage} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-between gap-10 rounded-md bg-secondary p-7 md:p-12">
            <span className="text-6xl font-black leading-none text-primary" aria-hidden>
              “
            </span>
            <blockquote className="text-2xl font-semibold leading-snug tracking-[-0.03em] text-foreground md:text-[2.25rem] md:leading-[1.15]">
              Когато клиентът не се замисля къде да кликне, значи някой друг се е замислил вместо
              него. Това е нашата работа.
            </blockquote>
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Адриан Колев · Основател &amp; CEO
            </p>
          </div>
        </Reveal>
      </div>

      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {teamMembers.map((member, i) => (
          <Reveal as="li" key={member.name} delay={i * 0.06}>
            <MemberCard {...member} />
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default MeetTheTeam;
