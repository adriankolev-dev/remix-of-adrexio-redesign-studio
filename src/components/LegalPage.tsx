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
 * LegalPage — shared editorial layout for legal/policy pages (Privacy, Terms).
 * Same voice as the rest of the site: blueprint-grid intro, mono construction
 * markers, hairline-separated numbered clauses instead of stacked cards.
 */
const LegalPage = ({ seo, label, title, updated, intro, sections }: LegalPageProps) => (
  <main className="min-h-screen bg-background">
    {seo}
    <Navbar />

    <PageIntro label={label} title={title} description={`Последна актуализация: ${updated}`} />

    <section className="relative bg-background pb-24 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          {intro && (
            <Reveal>
              <div className="border-l-2 border-primary pl-6 text-lg leading-relaxed text-foreground/90 [&>p+p]:mt-4">
                {intro}
              </div>
            </Reveal>
          )}

          <div className="mt-16 border-t border-border">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={(i % 4) * 0.04}>
                <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-border py-9 md:gap-8 md:py-10">
                  <span className="font-mono-meta pt-1.5 text-[0.7rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground [&_a:hover]:underline [&_a]:text-primary [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                      {section.body}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default LegalPage;
