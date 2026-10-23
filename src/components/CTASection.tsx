import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import Dotted from "@/components/editorial/Dotted";
import { PAYMENT_COPY } from "@/data/pricing";

interface CTASectionProps {
  /** Bold line on the right; defaults to the general question. */
  lead?: string;
  /** Paragraph under the lead; defaults to what happens after the first message. */
  text?: string;
  /** Main button; defaults to the contact page. */
  primary?: { label: string; href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void };
  /** Second button; defaults to the brief form. */
  secondary?: { label: string; href: string };
}

const CTASection = ({
  lead = "Разкажете ни за проекта.",
  text = "Две изречения за бизнеса ви са достатъчни за начало. Отговаряме до 24 часа в работни дни, а след кратък разговор изпращаме обхват, срок и цена.",
  primary = { label: "Пишете ни", href: "/contact" },
  secondary = { label: "Попълнете бриф", href: "/project-inquiry" },
}: CTASectionProps) => (
  <section className="bg-background py-12 md:py-20">
    <div className="container mx-auto px-6">
      <Reveal>
        <div className="grid gap-10 rounded-md bg-secondary px-7 py-12 md:px-14 md:py-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <h2 className="title-xl text-foreground">
            <Dotted>Да поговорим.</Dotted>
          </h2>

          <div className="max-w-md">
            <p className="text-lg font-semibold tracking-[-0.02em] text-foreground">{lead}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {PAYMENT_COPY} · Без обвързващи договори
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="ink" size="lg" asChild>
                <Link to={primary.href} onClick={primary.onClick}>
                  {primary.label}
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button variant="line" size="lg" asChild>
                {secondary.href.startsWith("/") ? (
                  <Link to={secondary.href}>{secondary.label}</Link>
                ) : (
                  <a href={secondary.href}>{secondary.label}</a>
                )}
              </Button>
            </div>

            <a
              href="mailto:hello@adrexio.com"
              className="mt-6 inline-block text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              hello@adrexio.com
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
