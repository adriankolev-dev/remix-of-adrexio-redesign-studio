import { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { MessageCircle, Phone, Send, X, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Channel = {
  label: string;
  sub: string;
  href: string;
  color: string;
  icon: LucideIcon;
  external?: boolean;
};

// NOTE: Потвърди, че Viber/WhatsApp са активни на този номер — иначе махни реда.
const channels: Channel[] = [
  {
    label: "Viber",
    sub: "Най-бърз отговор",
    href: "viber://chat?number=%2B359896173743",
    color: "#7360F2",
    icon: MessageCircle,
  },
  {
    label: "WhatsApp",
    sub: "Пиши по всяко време",
    href: "https://wa.me/359896173743",
    color: "#25D366",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Messenger",
    sub: "Facebook чат",
    href: "https://m.me/61587315031705",
    color: "#0084FF",
    icon: Send,
    external: true,
  },
  {
    label: "Обади се",
    sub: "+359 896 173 743",
    href: "tel:+359896173743",
    color: "hsl(var(--primary))",
    icon: Phone,
  },
];

const ChannelRow = ({ channel }: { channel: Channel }) => {
  const Icon = channel.icon;
  return (
    <a
      href={channel.href}
      {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group/row flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-secondary"
    >
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
        style={{ background: channel.color }}
      >
        <Icon className="h-[18px] w-[18px] text-white" strokeWidth={2} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground">{channel.label}</span>
        <span className="block truncate text-xs text-muted-foreground">{channel.sub}</span>
      </span>
    </a>
  );
};

/** Desktop: a floating chat launcher (bottom-left) that expands a channel card. */
const DesktopWidget = () => {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="layer-shadow absolute bottom-16 left-0 w-72 origin-bottom-left overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur"
          >
            <div className="border-b border-border px-4 py-3">
              <p className="font-mono-meta text-[0.6rem] uppercase tracking-[0.18em] text-primary">
                Пиши ни
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Обикновено отговаряме до 24ч
              </p>
            </div>
            <div className="p-2">
              {channels.map((c) => (
                <ChannelRow key={c.label} channel={c} />
              ))}
            </div>
            <Link
              to="/contact"
              className="flex items-center justify-between border-t border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Изпрати запитване
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Затвори" : "Пиши ни"}
        aria-expanded={open}
        className="group layer-shadow relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
      >
        {!reduceMotion && !open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" aria-hidden />
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.18 }}
            className="relative"
          >
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
};

/** Mobile / tablet: a sticky bottom action bar with instant contact + inquiry. */
const MobileBar = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 500));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-border bg-background/95 backdrop-blur lg:hidden"
        >
          <a
            href="viber://chat?number=%2B359896173743"
            className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-foreground"
          >
            <MessageCircle className="h-4 w-4" style={{ color: "#7360F2" }} strokeWidth={2.25} />
            Viber
          </a>
          <a
            href="tel:+359896173743"
            className="flex flex-1 items-center justify-center gap-2 border-x border-border py-3.5 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" strokeWidth={2.25} />
            Обади се
          </a>
          <Link
            to="/contact"
            className="flex flex-[1.3] items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Запитване
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FloatingContact = () => (
  <>
    <DesktopWidget />
    <MobileBar />
  </>
);

export default FloatingContact;
