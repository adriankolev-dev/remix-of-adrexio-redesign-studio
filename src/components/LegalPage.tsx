import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";

export interface LegalSection {
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  /** The <SEO /> element for this page. */
  seo: ReactNode;
  label: string;
  title: ReactNode;
  updated: string;
  intro?: ReactNode;
  sections: LegalSection[];
}

/**
 * LegalPage: shared layout for Privacy and Terms. Same voice as the case studies:
 * numbered clause titles on the left, the text on the right, on hairlines.
 */
const LegalPage = ({ seo, label, title, updated, intro, sections }: LegalPageProps) => (
  <main className="min-h-screen bg-background">
    {seo}
    <Navbar />

    <PageIntro label={label} title={title} description={`Последна актуализация: ${updated}`} />

    <section className="bg-background pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        {intro && (
          <Reveal>
            <div className="rounded-md bg-secondary p-7 text-lg leading-relaxed text-foreground md:p-10 [&>p+p]:mt-4">
              {intro}
            </div>
          </Reveal>
        )}

        <div className="mt-12">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={(i % 4) * 0.04}>
              <div className="grid gap-4 border-t border-border py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                  <span className="mr-3 text-xs font-semibold tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="max-w-2xl space-y-3 leading-relaxed text-muted-foreground [&_a:hover]:underline [&_a]:text-foreground [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {section.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default LegalPage;
