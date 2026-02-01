import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  CheckCircle, 
  Loader2, 
  Briefcase, 
  Calendar, 
  DollarSign,
  Target,
  Users,
  Globe,
  Smartphone,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import emailjs from "@emailjs/browser";
import { 
  HONEYPOT_FIELD_NAME, 
  checkRateLimit, 
  checkFormFillTime, 
  checkHoneypot, 
  checkSpamPatterns,
  isValidEmail 
} from "@/lib/spamProtection";

interface ProjectFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  project_type: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  goals: string;
  target_audience: string;
  existing_website: string;
  additional_info: string;
  [HONEYPOT_FIELD_NAME]: string; // Honeypot field
}

const ProjectInquiry = () => {
  const formStartTime = useRef<number>(Date.now());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProjectFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    project_type: "",
    services: [],
    budget: "",
    timeline: "",
    description: "",
    goals: "",
    target_audience: "",
    existing_website: "",
    additional_info: "",
    [HONEYPOT_FIELD_NAME]: "", // Honeypot field
  });

  // Initialize form start time when component mounts
  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((s) => s !== service),
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
      if (!isValidEmail(formData.email)) {
        setError("Моля, въведете валиден email адрес.");
        setIsLoading(false);
        return;
      }

      // 5. Check spam patterns
      const spamCheck = checkSpamPatterns(formData.description, formData.additional_info);
      if (!spamCheck.allowed) {
        setError(spamCheck.message || "Съобщението изглежда като спам.");
        setIsLoading(false);
        return;
      }

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_PROJECT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Не е посочен",
          company: formData.company || "Не е посочена",
          project_type: formData.project_type || "Не е посочен",
          services: formData.services.join(", ") || "Не са посочени",
          budget: formData.budget || "Не е посочен",
          timeline: formData.timeline || "Не е посочен",
          description: formData.description,
          goals: formData.goals || "Не са посочени",
          target_audience: formData.target_audience || "Не е посочена",
          existing_website: formData.existing_website || "Не",
          additional_info: formData.additional_info || "Няма допълнителна информация",
          time: timestamp,
          to_email: "hello@adrexio.com",
        },
        publicKey
      );

      setIsSubmitted(true);
      formStartTime.current = Date.now(); // Reset timer
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        project_type: "",
        services: [],
        budget: "",
        timeline: "",
        description: "",
        goals: "",
        target_audience: "",
        existing_website: "",
        additional_info: "",
        [HONEYPOT_FIELD_NAME]: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Възникна грешка при изпращането на запитването. Моля, опитайте отново или се свържете директно на hello@adrexio.com");
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    { id: "web-development", label: "Уеб разработка", icon: Globe },
    { id: "mobile-apps", label: "Мобилни приложения", icon: Smartphone },
    { id: "ui-ux-design", label: "UI/UX Дизайн", icon: Palette },
    { id: "seo", label: "SEO и GEO оптимизация", icon: Target },
    { id: "digital-marketing", label: "Дигитален маркетинг", icon: Users },
    { id: "technical-support", label: "Техническа поддръжка", icon: Briefcase },
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Запитване за проект - Adrexio | Попълнете формата за ваш проект"
        description="Попълнете формата за ваш проект. Ще се свържем с вас скоро, за да обсъдим уеб разработка, мобилни приложения и дигитални решения."
        keywords="запитване проект, форма за проект, консултация проект, запитване уебсайт"
        noindex={true}
      />
      <Navbar />

      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Запитване за проект
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Разкажете ни за <span className="text-gradient">вашия проект</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Попълнете формата по-долу с детайли за вашия проект. Ще се свържем с вас възможно най-скоро, за да обсъдим как можем да ви помогнем.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-gradient p-12 rounded-2xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Благодарим ви!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Вашето запитване беше изпратено успешно. Ще прегледаме информацията и ще се свържем с вас в рамките на 24 часа.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Изпратете ново запитване
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="border-gradient p-8 rounded-2xl space-y-8"
              >
                {error && (
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}

                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-xl font-display font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Лична информация
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Име *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Вашето име"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+359 896 173 743"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Име на компанията"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-4">
                  <h2 className="text-xl font-display font-semibold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Тип проект *
                  </h2>
                  <RadioGroup
                    value={formData.project_type}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, project_type: value }))}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new-project" id="new-project" />
                      <Label htmlFor="new-project" className="cursor-pointer">Нов проект</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="redesign" id="redesign" />
                      <Label htmlFor="redesign" className="cursor-pointer">Редизайн на съществуващ проект</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enhancement" id="enhancement" />
                      <Label htmlFor="enhancement" className="cursor-pointer">Подобряване/разширяване</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other-type" />
                      <Label htmlFor="other-type" className="cursor-pointer">Друго</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Services */}
                <div className="space-y-4">
                  <h2 className="text-xl font-display font-semibold flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Нужни услуги *
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div key={service.id} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-card/50 transition-colors">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="flex items-center gap-2 cursor-pointer flex-1">
                            <Icon className="w-4 h-4 text-primary" />
                            {service.label}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-display font-semibold flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      Бюджет *
                    </h2>
                    <RadioGroup
                      value={formData.budget}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-5000" id="under-5000" />
                        <Label htmlFor="under-5000" className="cursor-pointer">Под 5,000 €</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5000-10000" id="5000-10000" />
                        <Label htmlFor="5000-10000" className="cursor-pointer">5,000 - 10,000 €</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10000-25000" id="10000-25000" />
                        <Label htmlFor="10000-25000" className="cursor-pointer">10,000 - 25,000 €</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="25000-50000" id="25000-50000" />
                        <Label htmlFor="25000-50000" className="cursor-pointer">25,000 - 50,000 €</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="over-50000" id="over-50000" />
                        <Label htmlFor="over-50000" className="cursor-pointer">Над 50,000 €</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="discuss" id="discuss-budget" />
                        <Label htmlFor="discuss-budget" className="cursor-pointer">Предпочитам да обсъдим</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-display font-semibold flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Срок за завършване *
                    </h2>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asap" id="asap" />
                        <Label htmlFor="asap" className="cursor-pointer">Възможно най-скоро</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-3-months" id="1-3-months" />
                        <Label htmlFor="1-3-months" className="cursor-pointer">1-3 месеца</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-6-months" id="3-6-months" />
                        <Label htmlFor="3-6-months" className="cursor-pointer">3-6 месеца</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6-12-months" id="6-12-months" />
                        <Label htmlFor="6-12-months" className="cursor-pointer">6-12 месеца</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible" className="cursor-pointer">Гъвкав срок</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-4">
                  <h2 className="text-xl font-display font-semibold">Описание на проекта *</h2>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Разкажете ни подробно за вашия проект. Какво искате да постигнете? Какви са основните функционалности?"
                    rows={6}
                    required
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                {/* Goals */}
                <div className="space-y-4">
                  <Label htmlFor="goals">Основни цели на проекта</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="Какви са основните цели, които искате да постигнете с този проект?"
                    rows={4}
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                {/* Target Audience */}
                <div className="space-y-4">
                  <Label htmlFor="target_audience">Целева аудитория</Label>
                  <Textarea
                    id="target_audience"
                    name="target_audience"
                    value={formData.target_audience}
                    onChange={handleChange}
                    placeholder="Опишете вашата целева аудитория. Кой е вашият идеален клиент?"
                    rows={3}
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                {/* Existing Website */}
                <div className="space-y-4">
                  <Label htmlFor="existing_website">Имате ли съществуващ уебсайт/приложение?</Label>
                  <Input
                    id="existing_website"
                    name="existing_website"
                    value={formData.existing_website}
                    onChange={handleChange}
                    placeholder="Ако имате, моля споделете линк"
                    className="bg-secondary/50 border-border"
                  />
                </div>

                {/* Additional Info */}
                <div className="space-y-4">
                  <Label htmlFor="additional_info">Допълнителна информация</Label>
                  <Textarea
                    id="additional_info"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleChange}
                    placeholder="Всичко друго, което искате да споделите с нас..."
                    rows={4}
                    className="bg-secondary/50 border-border resize-none"
                  />
                </div>

                {/* Honeypot field - hidden from users but visible to bots */}
                <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
                  <Label htmlFor={HONEYPOT_FIELD_NAME}>Не попълвайте това поле</Label>
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
                      Изпратете запитване
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectInquiry;
