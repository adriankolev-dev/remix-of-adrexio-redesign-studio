import { useState, useEffect, useRef } from "react";
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
  Palette,
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
import PageIntro from "@/components/editorial/PageIntro";
import ClipboardMascot from "@/components/mascots/ClipboardMascot";
import emailjs from "@emailjs/browser";
import {
  HONEYPOT_FIELD_NAME,
  checkRateLimit,
  checkFormFillTime,
  checkHoneypot,
  checkSpamPatterns,
  isValidEmail,
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

const FieldGroup = ({
  index,
  title,
  icon: Icon,
  children,
}: {
  index: string;
  title: string;
  icon?: typeof Users;
  children: React.ReactNode;
}) => (
  <div className="space-y-5 border-t border-border pt-8">
    <div className="flex items-center gap-3">
      <span className="font-mono-meta text-[0.7rem] text-primary">{index}</span>
      {Icon && <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />}
      <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">{title}</h2>
    </div>
    {children}
  </div>
);

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

      if (!isValidEmail(formData.email)) {
        setError("Моля, въведете валиден email адрес.");
        setIsLoading(false);
        return;
      }

      const spamCheck = checkSpamPatterns(formData.description, formData.additional_info);
      if (!spamCheck.allowed) {
        setError(spamCheck.message || "Съобщението изглежда като спам.");
        setIsLoading(false);
        return;
      }

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        import.meta.env.VITE_EMAILJS_PROJECT_TEMPLATE_ID ||
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        "YOUR_TEMPLATE_ID";
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
        publicKey,
      );

      setIsSubmitted(true);
      formStartTime.current = Date.now();
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
      setError(
        "Възникна грешка при изпращането на запитването. Моля, опитайте отново или се свържете директно на hello@adrexio.com",
      );
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

      <PageIntro
        label="Запитване за проект"
        title={
          <>
            Разкажете ни за <span className="accent-mark">вашия проект</span>
          </>
        }
        description="Попълнете формата по-долу с детайли за вашия проект. Ще се свържем с вас възможно най-скоро, за да обсъдим как можем да ви помогнем."
        aside={<ClipboardMascot />}
      />

      <section className="relative bg-background pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center rounded-2xl border border-border p-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold">Благодарим ви!</h3>
                <p className="mt-4 text-muted-foreground">
                  Вашето запитване беше изпратено успешно. Ще прегледаме информацията и ще се свържем
                  с вас в рамките на 24 часа.
                </p>
                <Button variant="line" className="mt-6" onClick={() => setIsSubmitted(false)}>
                  Изпратете ново запитване
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-10 rounded-2xl border border-border p-6 md:p-10"
              >
                {error && (
                  <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <FieldGroup index="01" title="Лична информация" icon={Users}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Име *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Вашето име"
                        required
                        className="border-border bg-secondary/50"
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
                        className="border-border bg-secondary/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+359 896 173 743"
                        className="border-border bg-secondary/50"
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
                        className="border-border bg-secondary/50"
                      />
                    </div>
                  </div>
                </FieldGroup>

                <FieldGroup index="02" title="Тип проект *" icon={Briefcase}>
                  <RadioGroup
                    value={formData.project_type}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, project_type: value }))
                    }
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new-project" id="new-project" />
                      <Label htmlFor="new-project" className="cursor-pointer">
                        Нов проект
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="redesign" id="redesign" />
                      <Label htmlFor="redesign" className="cursor-pointer">
                        Редизайн на съществуващ проект
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enhancement" id="enhancement" />
                      <Label htmlFor="enhancement" className="cursor-pointer">
                        Подобряване/разширяване
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other-type" />
                      <Label htmlFor="other-type" className="cursor-pointer">
                        Друго
                      </Label>
                    </div>
                  </RadioGroup>
                </FieldGroup>

                <FieldGroup index="03" title="Нужни услуги *" icon={Target}>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.id}
                          className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:border-primary/40"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) =>
                              handleServiceChange(service.id, checked as boolean)
                            }
                          />
                          <Label
                            htmlFor={service.id}
                            className="flex flex-1 cursor-pointer items-center gap-2"
                          >
                            <Icon className="h-4 w-4 text-primary" />
                            {service.label}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </FieldGroup>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <FieldGroup index="04" title="Бюджет *" icon={DollarSign}>
                    <RadioGroup
                      value={formData.budget}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under-5000" id="under-5000" />
                        <Label htmlFor="under-5000" className="cursor-pointer">
                          Под 5,000 €
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5000-10000" id="5000-10000" />
                        <Label htmlFor="5000-10000" className="cursor-pointer">
                          5,000 - 10,000 €
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10000-25000" id="10000-25000" />
                        <Label htmlFor="10000-25000" className="cursor-pointer">
                          10,000 - 25,000 €
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="25000-50000" id="25000-50000" />
                        <Label htmlFor="25000-50000" className="cursor-pointer">
                          25,000 - 50,000 €
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="over-50000" id="over-50000" />
                        <Label htmlFor="over-50000" className="cursor-pointer">
                          Над 50,000 €
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="discuss" id="discuss-budget" />
                        <Label htmlFor="discuss-budget" className="cursor-pointer">
                          Предпочитам да обсъдим
                        </Label>
                      </div>
                    </RadioGroup>
                  </FieldGroup>

                  <FieldGroup index="05" title="Срок за завършване *" icon={Calendar}>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, timeline: value }))
                      }
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="asap" id="asap" />
                        <Label htmlFor="asap" className="cursor-pointer">
                          Възможно най-скоро
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-3-months" id="1-3-months" />
                        <Label htmlFor="1-3-months" className="cursor-pointer">
                          1-3 месеца
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-6-months" id="3-6-months" />
                        <Label htmlFor="3-6-months" className="cursor-pointer">
                          3-6 месеца
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6-12-months" id="6-12-months" />
                        <Label htmlFor="6-12-months" className="cursor-pointer">
                          6-12 месеца
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible" className="cursor-pointer">
                          Гъвкав срок
                        </Label>
                      </div>
                    </RadioGroup>
                  </FieldGroup>
                </div>

                <FieldGroup index="06" title="Описание на проекта *">
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Разкажете ни подробно за вашия проект. Какво искате да постигнете? Какви са основните функционалности?"
                    rows={6}
                    required
                    className="resize-none border-border bg-secondary/50"
                  />
                </FieldGroup>

                <FieldGroup index="07" title="Детайли">
                  <div className="space-y-2">
                    <Label htmlFor="goals">Основни цели на проекта</Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="Какви са основните цели, които искате да постигнете с този проект?"
                      rows={4}
                      className="resize-none border-border bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target_audience">Целева аудитория</Label>
                    <Textarea
                      id="target_audience"
                      name="target_audience"
                      value={formData.target_audience}
                      onChange={handleChange}
                      placeholder="Опишете вашата целева аудитория. Кой е вашият идеален клиент?"
                      rows={3}
                      className="resize-none border-border bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="existing_website">
                      Имате ли съществуващ уебсайт/приложение?
                    </Label>
                    <Input
                      id="existing_website"
                      name="existing_website"
                      value={formData.existing_website}
                      onChange={handleChange}
                      placeholder="Ако имате, моля споделете линк"
                      className="border-border bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional_info">Допълнителна информация</Label>
                    <Textarea
                      id="additional_info"
                      name="additional_info"
                      value={formData.additional_info}
                      onChange={handleChange}
                      placeholder="Всичко друго, което искате да споделите с нас..."
                      rows={4}
                      className="resize-none border-border bg-secondary/50"
                    />
                  </div>
                </FieldGroup>

                {/* Honeypot field */}
                <div
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                >
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
                      Изпратете запитване
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectInquiry;
