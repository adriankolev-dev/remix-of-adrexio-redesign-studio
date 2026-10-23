import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import { scrollToTop } from "@/lib/lenis";
import { prefetchRoute } from "@/lib/prefetchRoute";

const navLinks = [
  { name: "Услуги", href: "/services" },
  { name: "Проекти", href: "/case-studies" },
  { name: "За нас", href: "/about" },
  { name: "Цени", href: "/pricing" },
  { name: "Блог", href: "/blog" },
  { name: "Контакти", href: "/contact" },
];

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Background is a separate layer so scroll never changes header height. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 border-b transition-opacity duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "border-border bg-background/90 opacity-100 backdrop-blur-md"
            : "border-transparent opacity-0"
        }`}
      />
      <nav className="relative flex h-[4.5rem] items-center justify-between px-5 sm:px-8 lg:h-[5.5rem] lg:px-12">
        <Link
          to="/"
          aria-label="Adrexio — начало"
          className="flex items-center"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              scrollToTop();
            }
          }}
        >
          <img src={logoDark} alt="adrexio" className="h-7 w-auto dark:hidden lg:h-9" />
          <img src={logo} alt="" aria-hidden className="hidden h-7 w-auto dark:block lg:h-9" />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-12">
          {navLinks.map((link) => {
            const active = isActive(location.pathname, link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                onMouseEnter={() => prefetchRoute(link.href)}
                onFocus={() => prefetchRoute(link.href)}
                aria-current={active ? "page" : undefined}
                className="relative whitespace-nowrap text-[0.8rem] font-medium uppercase tracking-[0.1em] text-foreground transition-opacity hover:opacity-60"
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            onMouseEnter={() => prefetchRoute("/contact")}
            onFocus={() => prefetchRoute("/contact")}
            className="inline-flex h-[2.9rem] items-center gap-3 whitespace-nowrap rounded-full border-[1.5px] border-foreground px-5 text-[0.78rem] xl:px-7 font-bold uppercase tracking-[0.06em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Обсъдете проект
            <ArrowUpRight size={17} strokeWidth={2.2} />
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 text-foreground"
            aria-label={isMobileMenuOpen ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="relative h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col px-5 pb-10 pt-4 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={() => prefetchRoute(link.href)}
                  onFocus={() => prefetchRoute(link.href)}
                  className="flex items-center justify-between border-b border-border py-4 text-[2rem] font-black uppercase leading-none tracking-[-0.05em] text-foreground"
                >
                  {link.name}
                  {isActive(location.pathname, link.href) && (
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-foreground text-[0.8rem] font-bold uppercase tracking-[0.06em] text-background"
              >
                Обсъдете проект
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
