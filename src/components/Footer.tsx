import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-display font-bold text-gradient">
              adrexio
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Създаваме бързи и оптимизирани сайтове, които помагат на бизнеса да расте в дигиталната ера.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Оценка 5/5 от нашите клиенти
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Бързи връзки</h4>
            <ul className="space-y-3">
              {[
                { label: "Услуги", path: "/services" },
                { label: "Цени", path: "/pricing" },
                { label: "За нас", path: "/about" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Контакти", path: "/contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Услуги</h4>
            <ul className="space-y-3">
              {[
                { label: "Уеб разработка", path: "/services/web-development" },
                { label: "Мобилни приложения", path: "/services/mobile-apps" },
                { label: "UI/UX Дизайн", path: "/services/ui-ux-design" },
                { label: "SEO оптимизация", path: "/services/seo" },
                { label: "Дигитален маркетинг", path: "/services/digital-marketing" },
                { label: "Техническа поддръжка", path: "/services/technical-support" }
              ].map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {service.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Контакти</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@adrexio.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <Mail size={16} className="text-primary" />
                  hello@adrexio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+359888888888"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <Phone size={16} className="text-primary" />
                  +359 888 888 888
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                София, България
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Adrexio. Всички права запазени.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Политика за поверителност
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Общи условия
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
