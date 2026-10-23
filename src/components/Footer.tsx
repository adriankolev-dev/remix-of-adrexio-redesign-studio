import { Link } from "react-router-dom";
import { Cookie, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import stone from "@/assets/hero-stone-800.webp";
import { PAYMENT_COPY } from "@/data/pricing";

const navigation = [
  { label: "Услуги", path: "/services" },
  { label: "Проекти", path: "/case-studies" },
  { label: "За нас", path: "/about" },
  { label: "Цени", path: "/pricing" },
  { label: "Блог", path: "/blog" },
  { label: "Партньорска програма", path: "/affiliate" },
  { label: "Контакти", path: "/contact" },
  { label: "Попълнете бриф", path: "/project-inquiry" },
];

const services = [
  { label: "Уеб разработка", path: "/services/web-development" },
  { label: "Онлайн магазин", path: "/services/onlajn-magazin" },
  { label: "UI/UX дизайн", path: "/services/ui-ux-design" },
  { label: "SEO и GEO", path: "/services/seo" },
  { label: "Техническа поддръжка", path: "/services/technical-support" },
  { label: "AI интеграции", path: "/services/ai-implementation" },
  { label: "Мобилни приложения", path: "/services/mobile-apps" },
  { label: "Дигитален маркетинг", path: "/services/digital-marketing" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/adrexio/", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/adrexio_/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61587315031705", Icon: Facebook },
];

const openCookieSettings = () => {
  const w = window as Window & { openCookieSettings?: () => void };
  if (typeof w.openCookieSettings === "function") {
    w.openCookieSettings();
    return;
  }
  // Fallback: clear consent and reload to show the banner again.
  localStorage.removeItem("adrexio_cookie_consent");
  localStorage.removeItem("adrexio_cookie_preferences");
  window.location.reload();
};

const ColumnTitle = ({ children }: { children: string }) => (
  <p className="eyebrow mb-5">{children}</p>
);

const linkClass = "text-sm text-foreground transition-opacity hover:opacity-60";

const Footer = () => (
  <footer className="overflow-hidden border-t border-border bg-background">
    <div className="container mx-auto px-6 pt-16 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
        <div className="flex flex-col justify-between gap-10">
          <img
            src={stone}
            alt=""
            aria-hidden
            width={800}
            height={418}
            loading="lazy"
            decoding="async"
            className="w-56 md:w-64"
          />
          <div className="max-w-xs">
            <p className="text-base leading-relaxed text-foreground">
              Уеб студио в София. Сайтове и онлайн магазини, изградени от нулата.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{PAYMENT_COPY}</p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Adrexio в ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <ColumnTitle>Навигация</ColumnTitle>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ColumnTitle>Услуги</ColumnTitle>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <ColumnTitle>Контакти</ColumnTitle>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@adrexio.com" className={linkClass}>
                  hello@adrexio.com
                </a>
              </li>
              <li>
                <a href="tel:+359896173743" className={linkClass}>
                  +359 896 173 743
                </a>
              </li>
              <li className="text-sm text-muted-foreground">София, България</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-border py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Adrexio. Всички права запазени.</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link to="/privacy" className="transition-colors hover:text-foreground">
            Политика за поверителност
          </Link>
          <Link to="/terms" className="transition-colors hover:text-foreground">
            Общи условия
          </Link>
          <button
            type="button"
            onClick={openCookieSettings}
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Cookie size={13} />
            Бисквитки
          </button>
        </div>
      </div>
    </div>

    {/* The wordmark, edge to edge and cropped at the bottom like a signature. */}
    <div className="-mb-[2.2vw] px-3 md:px-6" aria-hidden>
      <img src={logoDark} alt="" className="w-full dark:hidden" />
      <img src={logo} alt="" className="hidden w-full dark:block" />
    </div>
  </footer>
);

export default Footer;
