import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle, Loader2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getLocalBusinessSchema } from "@/lib/structuredData";
import emailjs from "@emailjs/browser";
import { 
  HONEYPOT_FIELD_NAME, 
  checkRateLimit, 
  checkFormFillTime, 
  checkHoneypot, 
  checkSpamPatterns,
  isValidEmail 
} from "@/lib/spamProtection";

interface FormData {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  message: string;
  [HONEYPOT_FIELD_NAME]: string; // Honeypot field
}

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

  // Initialize form start time when component mounts
  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  // Check if coming from affiliate page
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const isAffiliate = urlParams.get('affiliate') === 'true' || 
                       document.referrer.includes('/affiliate') ||
                       sessionStorage.getItem('fromAffiliate') === 'true';
    
    if (isAffiliate) {
      setFormData(prev => ({
        ...prev,
        subject: prev.subject || "Партньорска програма / Affiliate програма"
      }));
    }
    
    // Clear the flag after use
    sessionStorage.removeItem('fromAffiliate');
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
      // Spam protection checks
      // 1. Check honeypot
      const honeypotCheck = checkHoneypot(formData[HONEYPOT_FIELD_NAME]);
      if (!honeypotCheck.allowed) {
        setError(honeypotCheck.message || "Спам детектиран.");
        setIsLoading(false);
        return;
      }

      // 2. Check rate limit
      const rateLimitCheck = checkRateLimit();
      if (!rateLimitCheck.allowed) {
        setError(rateLimitCheck.message || "Твърде много изпращания. Моля, изчакайте.");
        setIsLoading(false);
        return;
      }

      // 3. Check form fill time
      const fillTimeCheck = checkFormFillTime(formStartTime.current);
      if (!fillTimeCheck.allowed) {
        setError(fillTimeCheck.message || "Формата е попълнена твърде бързо.");
        setIsLoading(false);
        return;
      }

      // 4. Validate email
      if (!isValidEmail(formData.from_email)) {
        setError("Моля, въведете валиден email адрес.");
        setIsLoading(false);
        return;
      }

      // 5. Check spam patterns
      const spamCheck = checkSpamPatterns(formData.message, formData.subject);
      if (!spamCheck.allowed) {
        setError(spamCheck.message || "Съобщението изглежда като спам.");
        setIsLoading(false);
        return;
      }

      // Replace these with your EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const timestamp = new Date().toLocaleString('bg-BG', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone || "Не е посочен",
          subject: formData.subject,
          message: formData.message,
          time: timestamp,
          to_email: "adrkolev@gmail.com", // Your receiving email
        },
        publicKey
      );

      setIsSubmitted(true);
      formStartTime.current = Date.now(); // Reset timer
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
      setError("Възникна грешка при изпращането на съобщението. Моля, опитайте отново или се свържете директно на hello@adrexio.com");
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

      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Контакти
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Нека <span className="text-gradient">започнем</span> заедно
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Свържете се с нас за безплатна консултация. Ще ви помогнем да превърнете идеите си в реалност.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 max-w-6xl mx-auto w-full">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 w-full"
            >
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">
                  Информация за контакт
                </h2>
                <p className="text-muted-foreground">
                  Ние сме готови да отговорим на вашите въпроси и да обсъдим вашия проект.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@adrexio.com" className="text-muted-foreground hover:text-primary transition-colors break-words">
                      hello@adrexio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+359896173743" className="text-muted-foreground hover:text-primary transition-colors break-words">
                      +359 896 173 743
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold mb-1">Локация</h3>
                    <p className="text-muted-foreground">София, България</p>
                  </div>
                </div>
              </div>

              {/* Quick info */}
              <div className="border-gradient p-4 sm:p-6 rounded-xl w-full overflow-hidden">
                <h3 className="font-display font-semibold mb-4 text-base sm:text-lg">Защо да ни изберете?</h3>
                <ul className="space-y-3">
                  {[
                    "Безплатна първоначална консултация",
                    "Плащате след финално одобрение",
                    "Гарантирано качество на работа",
                    "Постоянна техническа поддръжка"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border-gradient p-4 sm:p-6 rounded-xl w-full overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5"
              >
                <h3 className="font-display font-semibold mb-4 text-base sm:text-lg">Последвайте ни</h3>
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61587315031705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none sm:w-16 sm:h-16 w-14 h-14 rounded-xl bg-card border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                    aria-label="Последвайте ни във Facebook"
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/adrexio_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none sm:w-16 sm:h-16 w-14 h-14 rounded-xl bg-card border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                    aria-label="Последвайте ни в Instagram"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/adrexio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none sm:w-16 sm:h-16 w-14 h-14 rounded-xl bg-card border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                    aria-label="Последвайте ни в LinkedIn"
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                  Следете ни за последни новини, проекти и съвети за дигитален маркетинг
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              {isSubmitted ? (
                <div className="border-gradient p-12 rounded-2xl text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Благодарим ви!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Вашето съобщение беше изпратено успешно. Ще се свържем с вас възможно най-скоро.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Изпратете ново съобщение
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 w-full">
                  {/* Project Inquiry Link */}
                  <div className="border-gradient p-4 sm:p-6 rounded-xl bg-primary/5 border-primary/20 w-full overflow-hidden">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-foreground mb-3 font-semibold break-words">
                          Ако имате ясна визия за проекта, може да попълните нашата подробна форма. Много ще ни улесните и ще ни помогнете да разберем по-добре вашите нужди.
                        </p>
                        <Button variant="outline" size="sm" asChild className="w-full sm:w-auto text-xs sm:text-sm">
                          <Link to="/project-inquiry" className="flex items-center justify-center gap-2">
                            Попълнете подробната форма
                            <ArrowRight size={14} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="border-gradient p-4 sm:p-6 lg:p-8 rounded-2xl space-y-6 w-full overflow-hidden">
                    {error && (
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                        {error}
                      </div>
                    )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Име</label>
                      <Input
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Вашето име"
                        required
                        className="bg-secondary/50 border-border"
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
                        className="bg-secondary/50 border-border"
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
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Тема</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Относно какво е вашето запитване?"
                      required
                      className="bg-secondary/50 border-border"
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
                      className="bg-secondary/50 border-border resize-none"
                    />
                  </div>

                  {/* Honeypot field - hidden from users but visible to bots */}
                  <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
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
                    variant="hero" 
                    size="lg" 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Изпращане...
                      </>
                    ) : (
                      <>
                        Изпратете съобщение
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
