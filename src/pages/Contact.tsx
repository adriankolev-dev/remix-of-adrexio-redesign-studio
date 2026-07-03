import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle, Loader2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";
import PlaneMascot from "@/components/mascots/PlaneMascot";
import { getLocalBusinessSchema } from "@/lib/structuredData";
import emailjs from "@emailjs/browser";
import {
  HONEYPOT_FIELD_NAME,
  checkRateLimit,
  checkFormFillTime,
  checkHoneypot,
  checkSpamPatterns,
  isValidEmail,
} from "@/lib/spamProtection";

interface FormData {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  message: string;
  [HONEYPOT_FIELD_NAME]: string; // Honeypot field
}

const contactChannels = [
  { icon: Mail, label: "Email", value: "hello@adrexio.com", href: "mailto:hello@adrexio.com" },
  { icon: Phone, label: "Телефон", value: "+359 896 173 743", href: "tel:+359896173743" },
  { icon: MapPin, label: "Локация", value: "София, България" },
];

const reasons = [
  "Безплатна първоначална консултация",
  "Плащате след финално одобрение",
  "Гарантирано качество на работа",
  "Постоянна техническа поддръжка",
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587315031705",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adrexio_/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/adrexio/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

const Contact = () => {
  const location = useLocation();
  const formStartTime = useRef<number>(Date.now());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
    [HONEYPOT_FIELD_NAME]: "", // Honeypot field
  });

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const isAffiliate =
      urlParams.get("affiliate") === "true" ||
      document.referrer.includes("/affiliate") ||
      sessionStorage.getItem("fromAffiliate") === "true";

    if (isAffiliate) {
      setFormData((prev) => ({
        ...prev,
        subject: prev.subject || "Партньорска програма / Affiliate програма",
      }));
    }

    sessionStorage.removeItem("fromAffiliate");
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const honeypotCheck = checkHoneypot(formData[HONEYPOT_FIELD_NAME]);
      if (!honeypotCheck.allowed) {
        setError(honeypotCheck.message || "Спам детектиран.");
        setIsLoading(false);
        return;
      }

      const rateLimitCheck = checkRateLimit();
      if (!rateLimitCheck.allowed) {
        setError(rateLimitCheck.message || "Твърде много изпращания. Моля, изчакайте.");
        setIsLoading(false);
        return;
      }

      const fillTimeCheck = checkFormFillTime(formStartTime.current);
      if (!fillTimeCheck.allowed) {
        setError(fillTimeCheck.message || "Формата е попълнена твърде бързо.");
        setIsLoading(false);
        return;
      }

      if (!isValidEmail(formData.from_email)) {
        setError("Моля, въведете валиден email адрес.");
        setIsLoading(false);
        return;
      }

      const spamCheck = checkSpamPatterns(formData.message, formData.subject);
      if (!spamCheck.allowed) {
        setError(spamCheck.message || "Съобщението изглежда като спам.");
        setIsLoading(false);
        return;
      }

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const timestamp = new Date().toLocaleString("bg-BG", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone || "Не е посочен",
          subject: formData.subject || "Ново запитване от сайта",
          message: formData.message,
          time: timestamp,
          to_email: "adrkolev@gmail.com",
        },
        publicKey,
      );

      setIsSubmitted(true);
      formStartTime.current = Date.now();
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        subject: "",
        message: "",
        [HONEYPOT_FIELD_NAME]: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Възникна грешка при изпращането на съобщението. Моля, опитайте отново или се свържете директно на hello@adrexio.com",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Контакти - Adrexio | Свържете се с нас за безплатна консултация"
        description="Свържете се с Adrexio за безплатна консултация по вашия проект. Телефон: +359 896 173 743, Email: hello@adrexio.com. София, България."
        keywords="контакт Adrexio, уеб студио София, консултация уебсайт, разработка сайт България, свържете се с нас"
        structuredData={getLocalBusinessSchema()}
      />
      <Navbar />

      <PageIntro
        label="Контакти"
        title={
          <>
            Нека <span className="accent-mark">започнем</span> заедно
          </>
        }
        description="Свържете се с нас за безплатна консултация. Ще ви помогнем да превърнете идеите си в реалност."
        aside={<PlaneMascot />}
      />

      <section className="relative bg-background pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Contact info */}
            <div>
              <Reveal>
                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                  Готови сме да отговорим на вашите въпроси и да обсъдим проекта ви. Изберете каналът,
                  който ви е удобен.
                </p>
              </Reveal>

              <div className="mt-10 border-t border-border">
                {contactChannels.map((channel, i) => {
                  const Row = (
                    <div className="flex items-center gap-5 py-5">
                      <channel.icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                      <div className="min-w-0">
                        <div className="font-mono-meta text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                          {channel.label}
                        </div>
                        <div className="mt-1 break-words text-lg font-medium text-foreground">
                          {channel.value}
                        </div>
                      </div>
                    </div>
                  );
                  return (
                    <Reveal key={channel.label} delay={i * 0.05}>
                      <div className="border-b border-border">
                        {channel.href ? (
                          <a
                            href={channel.href}
                            className="block transition-colors hover:text-primary"
                          >
                            {Row}
                          </a>
                        ) : (
                          Row
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Why us */}
              <Reveal delay={0.1} className="mt-12">
                <h3 className="font-mono-meta text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                  Защо да ни изберете
                </h3>
                <ul className="mt-5 space-y-3">
                  {reasons.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Socials */}
              <Reveal delay={0.16} className="mt-12">
                <h3 className="font-mono-meta text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                  Последвайте ни
                </h3>
                <div className="mt-5 flex items-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Последвайте ни в ${social.label}`}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      <svg
                        className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.12} direction="right">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border p-12 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Благодарим ви!</h3>
                  <p className="mt-4 text-muted-foreground">
                    Вашето съобщение беше изпратено успешно. Ще се свържем с вас възможно най-скоро.
                  </p>
                  <Button variant="line" className="mt-6" onClick={() => setIsSubmitted(false)}>
                    Изпратете ново съобщение
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Project inquiry link */}
                  <div className="flex items-start gap-4 border-l-2 border-primary bg-secondary/40 p-5">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Имате ясна визия за проекта? Попълнете подробния бриф — така ще разберем
                        нуждите ви най-точно.
                      </p>
                      <Button variant="line" size="sm" asChild className="mt-3">
                        <Link to="/project-inquiry">
                          Попълнете подробната форма
                          <ArrowRight size={14} />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 rounded-2xl border border-border p-6 lg:p-8"
                  >
                    {error && (
                      <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Име</label>
                        <Input
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleChange}
                          placeholder="Вашето име"
                          required
                          className="border-border bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          name="from_email"
                          type="email"
                          value={formData.from_email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          required
                          className="border-border bg-secondary/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+359 896 173 743"
                        className="border-border bg-secondary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Тема <span className="text-muted-foreground">(по избор)</span>
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Относно какво е вашето запитване?"
                        className="border-border bg-secondary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Съобщение</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Разкажете ни повече за вашия проект..."
                        rows={5}
                        required
                        className="resize-none border-border bg-secondary/50"
                      />
                    </div>

                    {/* Honeypot field */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        opacity: 0,
                        pointerEvents: "none",
                      }}
                    >
                      <label htmlFor={HONEYPOT_FIELD_NAME}>Не попълвайте това поле</label>
                      <Input
                        id={HONEYPOT_FIELD_NAME}
                        name={HONEYPOT_FIELD_NAME}
                        type="text"
                        value={formData[HONEYPOT_FIELD_NAME]}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <Button
                      variant="ink"
                      size="lg"
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Изпращане...
                        </>
                      ) : (
                        <>
                          Изпратете съобщение
                          <Send size={18} />
                        </>
                      )}
                    </Button>

                    <p className="font-mono-meta text-center text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Отговаряме до 24 часа · Без обвързващи договори
                    </p>
                  </form>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
