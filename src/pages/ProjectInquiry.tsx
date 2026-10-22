import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import {
  ChoicePills,
  FormError,
  FormStep,
  FormSuccess,
  StudioCheckbox,
  StudioField,
  StudioInput,
  StudioTextarea,
} from "@/components/forms/Studio";
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
  gdpr: boolean;
  [HONEYPOT_FIELD_NAME]: string; // Honeypot field
}

const PROJECT_TYPES = [
  { value: "new-project", label: "Нов проект" },
  { value: "redesign", label: "Редизайн" },
  { value: "enhancement", label: "Подобряване / разширяване" },
  { value: "other", label: "Друго" },
];

const SERVICES = [
  { value: "web-development", label: "Уеб разработка" },
  { value: "ui-ux-design", label: "UI/UX дизайн" },
  { value: "seo", label: "SEO и GEO" },
  { value: "technical-support", label: "Техническа поддръжка" },
  { value: "mobile-apps", label: "Мобилни приложения" },
  { value: "digital-marketing", label: "Дигитален маркетинг" },
];

const BUDGETS = [
  { value: "under-1000", label: "Под €1.000" },
  { value: "1000-3000", label: "€1.000 – 3.000" },
  { value: "3000-5000", label: "€3.000 – 5.000" },
  { value: "5000-10000", label: "€5.000 – 10.000" },
  { value: "10000-25000", label: "€10.000 – 25.000" },
  { value: "25000-50000", label: "€25.000 – 50.000" },
  { value: "over-50000", label: "Над €50.000" },
  { value: "discuss", label: "Предпочитам да обсъдим" },
];

const TIMELINES = [
  { value: "asap", label: "Възможно най-скоро" },
  { value: "1-3-months", label: "1–3 месеца" },
  { value: "3-6-months", label: "3–6 месеца" },
  { value: "6-12-months", label: "6–12 месеца" },
  { value: "flexible", label: "Гъвкав срок" },
];

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
    gdpr: false,
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
        setError(honeypotCheck.message || "Съобщението изглежда като спам.");
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

      if (!formData.gdpr) {
        setError("Моля, потвърдете съгласието с политиката за поверителност.");
        setIsLoading(false);
        return;
      }

      if (!formData.project_type) {
        setError("Моля, изберете тип проект.");
        setIsLoading(false);
        return;
      }

      if (!formData.budget) {
        setError("Моля, изберете бюджет.");
        setIsLoading(false);
        return;
      }

      if (!formData.timeline) {
        setError("Моля, изберете срок.");
        setIsLoading(false);
        return;
      }

      if (!isValidEmail(formData.email)) {
        setError("Моля, въведете валиден имейл адрес.");
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
        gdpr: false,
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
        title="Разкажете ни за проекта."
        description="Попълнете формата по-долу с детайли за вашия проект. Ще се свържем с вас възможно най-скоро, за да обсъдим как можем да ви помогнем."
      />

      <section className="bg-background pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          {isSubmitted ? (
            <FormSuccess
              text="Запитването е изпратено. Ще прегледаме информацията и ще ви отговорим до 24 часа."
              onReset={() => setIsSubmitted(false)}
              resetLabel="Ново запитване"
            />
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <p className="mb-2 text-sm text-muted-foreground">
                Полетата със * са задължителни. Останалото е по избор.
              </p>

              <FormStep n="01" title="За вас">
                <div className="grid gap-8 md:grid-cols-2">
                  <StudioField id="name" label="Име" required>
                    <StudioInput id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Вашето име" autoComplete="name" required />
                  </StudioField>
                  <StudioField id="email" label="Имейл" required>
                    <StudioInput id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" autoComplete="email" required />
                  </StudioField>
                  <StudioField id="phone" label="Телефон">
                    <StudioInput id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+359 …" autoComplete="tel" />
                  </StudioField>
                  <StudioField id="company" label="Компания">
                    <StudioInput id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Име на компанията" autoComplete="organization" />
                  </StudioField>
                </div>
              </FormStep>

              <FormStep n="02" title="Проектът">
                <StudioField label="Тип проект" required>
                  <div className="mt-4">
                    <ChoicePills
                      label="Тип проект"
                      options={PROJECT_TYPES}
                      value={formData.project_type}
                      onChange={(v) => setFormData((prev) => ({ ...prev, project_type: v }))}
                    />
                  </div>
                </StudioField>
                <StudioField label="Нужни услуги" hint="по избор">
                  <div className="mt-4">
                    <ChoicePills
                      multiple
                      label="Нужни услуги"
                      options={SERVICES}
                      value={formData.services}
                      onChange={(v) => handleServiceChange(v, !formData.services.includes(v))}
                    />
                  </div>
                </StudioField>
              </FormStep>

              <FormStep n="03" title="Бюджет и срок">
                <StudioField label="Бюджет" required>
                  <div className="mt-4">
                    <ChoicePills
                      label="Бюджет"
                      options={BUDGETS}
                      value={formData.budget}
                      onChange={(v) => setFormData((prev) => ({ ...prev, budget: v }))}
                    />
                  </div>
                </StudioField>
                <StudioField label="Срок за завършване" required>
                  <div className="mt-4">
                    <ChoicePills
                      label="Срок за завършване"
                      options={TIMELINES}
                      value={formData.timeline}
                      onChange={(v) => setFormData((prev) => ({ ...prev, timeline: v }))}
                    />
                  </div>
                </StudioField>
              </FormStep>

              <FormStep n="04" title="Описание">
                <StudioField id="description" label="Какво искате да постигнете?" required>
                  <StudioTextarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Разкажете ни за проекта: какво трябва да прави и какви са основните функционалности."
                    rows={5}
                    required
                  />
                </StudioField>
              </FormStep>

              <FormStep n="05" title="Детайли" note="По избор, но ни помагат да дадем по-точна оферта.">
                <StudioField id="goals" label="Основни цели">
                  <StudioTextarea id="goals" name="goals" value={formData.goals} onChange={handleChange} placeholder="Какво трябва да се промени за бизнеса след новия сайт?" rows={3} />
                </StudioField>
                <StudioField id="target_audience" label="Целева аудитория">
                  <StudioTextarea id="target_audience" name="target_audience" value={formData.target_audience} onChange={handleChange} placeholder="Кой е вашият идеален клиент?" rows={3} />
                </StudioField>
                <StudioField id="existing_website" label="Сегашен сайт или приложение">
                  <StudioInput id="existing_website" name="existing_website" value={formData.existing_website} onChange={handleChange} placeholder="Линк, ако имате" />
                </StudioField>
                <StudioField id="additional_info" label="Допълнителна информация">
                  <StudioTextarea id="additional_info" name="additional_info" value={formData.additional_info} onChange={handleChange} placeholder="Всичко друго, което искате да споделите с нас" rows={3} />
                </StudioField>
              </FormStep>

              {/* Honeypot field */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
                <label htmlFor={HONEYPOT_FIELD_NAME}>Не попълвайте това поле</label>
                <input
                  id={HONEYPOT_FIELD_NAME}
                  name={HONEYPOT_FIELD_NAME}
                  type="text"
                  value={formData[HONEYPOT_FIELD_NAME]}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-6 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
                <div className="hidden lg:block" />
                <div className="space-y-6">
                  {error && <FormError>{error}</FormError>}
                  <StudioCheckbox
                    id="gdpr"
                    checked={formData.gdpr}
                    onChange={(checked) => setFormData((prev) => ({ ...prev, gdpr: checked }))}
                  >
                    Съгласен съм личните ми данни да бъдат обработени съгласно{" "}
                    <Link to="/privacy" className="text-foreground underline underline-offset-4">
                      политиката за поверителност
                    </Link>
                    .
                  </StudioCheckbox>
                  <div className="flex flex-wrap items-center gap-5">
                    <Button variant="ink" size="xl" type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin" />
                          Изпращане…
                        </>
                      ) : (
                        <>
                          Изпрати запитването
                          <ArrowUpRight />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground">Отговор до 24 часа, без обвързване.</p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectInquiry;
