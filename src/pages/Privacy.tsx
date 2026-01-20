import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Политика за поверителност - Adrexio | GDPR съобразна политика"
        description="Политика за поверителност на Adrexio. Научете как събираме, използваме и защитаваме вашите лични данни в съответствие с GDPR и българското законодателство."
        keywords="политика поверителност, GDPR, защита данни, лични данни, поверителност Adrexio"
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Политика за поверителност
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Защита на <span className="text-gradient">личните данни</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Последна актуализация: {new Date().toLocaleDateString('bg-BG', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-muted-foreground"
            >
              <div className="border-gradient p-8 rounded-2xl">
                <p className="text-foreground leading-relaxed mb-6">
                  Настоящата Политика за поверителност описва как Adrexio (наричан по-нататък „Ние", „Нас", „Наш") събира, използва, съхранява, защитава, споделя и управлява личните данни на потребителите (наричани „Вие" или „Потребител/Субект на данни"), когато използвате нашия уебсайт и свързаните с него услуги.
                </p>
                <p className="text-foreground leading-relaxed">
                  Ние се ангажираме да защитаваме личните Ви данни и да спазваме приложимите закони за защита на личните данни, включително Регламент (ЕС) 2016/679 (GDPR), Закон за защита на личните данни и съответните подзаконови нормативни актове в България.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">1. Администратор на личните данни</h2>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong className="text-foreground">Име:</strong> Adrexio</p>
                    <p><strong className="text-foreground">Адрес:</strong> София, България</p>
                    <p><strong className="text-foreground">Имейл за връзка относно лични данни:</strong> hello@adrexio.com</p>
                    <p><strong className="text-foreground">Телефон:</strong> +359 896 173 743</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">2. Какви лични данни събираме</h2>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Може да събираме следните категории лични данни:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Име, фамилия</li>
                      <li>Контактна информация: имейл адрес, телефон</li>
                      <li>IP адрес, техническа информация за устройството и браузъра</li>
                      <li>Данни за местоположение (ако е приложимо)</li>
                      <li>Данни от „бисквитки" / cookies</li>
                      <li>Данни, които Вие доброволно предоставяте (например чрез формуляри, регистрация, абонамент, коментари)</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">3. За какви цели използваме личните данни</h2>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Обработването на данни се извършва за:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Предоставяне на услуги и изпълнение на договорни задължения</li>
                      <li>Поддръжка и обслужване на потребители</li>
                      <li>Подобряване на сайта, анализ и статистика</li>
                      <li>Маркетингови кампании и изпращане на електронни съобщения (само с Вашето изрично съгласие)</li>
                      <li>Спазване на законови и регулаторни изисквания</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Правно основание за обработване</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Някои от правните основания могат да включват:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Ваше съгласие</li>
                      <li>Изпълнение на договор</li>
                      <li>Законно задължение по законодателството на ЕС или България</li>
                      <li>Защитен интерес на администратора (при спазване правата и свободите на субекта на данни)</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Споделяне на лични данни с трети страни</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Вашите лични данни могат да се споделят с:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Доставчици на услуги, които обработват данни от наше име (например хостинг, поща, плащания)</li>
                      <li>Законодателни и контролни органи, когато това е изискано от закона</li>
                      <li>Маркетингови партньори и трети страни, само при наличие на съответно съгласие или договорно основание</li>
                    </ul>
                    <p className="mt-4">При прехвърляне на данни извън Европейския съюз / Европейското икономическо пространство, ще гарантираме, че има подходящи мерки за защита (напр. стандартни договорни клаузи, одобрени механизми).</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Съхранение на данните</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Съхраняваме личните Ви данни само за необходимия период:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Толкова дълго, колкото е необходимо за целите, за които са събрани</li>
                      <li>Или докато юридическите задължения или срокове за съхранение по закон не изискват друго</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Права на субектите на данни</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Съгласно GDPR имате право:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Да получите достъп до Вашите лични данни и копие</li>
                      <li>Да поискате корекция или допълнение на неточни или непълни данни</li>
                      <li>Да поискате изтриване („право да бъдеш забравен") при определени условия</li>
                      <li>Да ограничите обработването</li>
                      <li>Да се противопоставите на обработване, което се основава на законния интерес или маркетинг</li>
                      <li>Да поискате преносимост на данни, когато това е приложимо</li>
                      <li>Да оттеглите съгласието си по всяко време, ако обработването е извършвано въз основа на съгласие</li>
                    </ul>
                    <p className="mt-4">За упражняване на правата си, моля свържете се с нас на: hello@adrexio.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Бисквитки (cookies)</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Използваме бисквитки за:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Осигуряване на функционирането на сайта</li>
                      <li>Подобряване на потребителското изживяване</li>
                      <li>Анализ на използването</li>
                    </ul>
                    <p className="mt-4">Вие можете да контролирате и/или изтриете бисквитките според предпочитанията си чрез настройките на браузъра.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Сигурност на данните</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Полагаме разумни организационни и технически мерки, за да защитим личните данни от неоторизиран достъп, изменение, разкриване или унищожение, включително:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Криптиране на данни</li>
                      <li>Регулярни резервни копия</li>
                      <li>Ограничен достъп до лични данни</li>
                      <li>Регулярни проверки за сигурност</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Промени в Политиката за поверителност</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Периодично преглеждаме и актуализираме политиката, за да отразяваме промени в обработката на данни или приложимото законодателство. При значими промени ще публикуваме уведомление на сайта и ще актуализираме датата на последна промяна.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. Как да подадете жалба</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Ако смятате, че правата Ви са нарушени, можете да подадете жалба до:</p>
                    <div className="bg-card/50 p-4 rounded-lg mt-4">
                      <p className="font-semibold text-foreground mb-2">Комисия за защита на личните данни (CPDP)</p>
                      <p>София 1592, бул. „Проф. Цветан Лазаров" № 2</p>
                      <p>Тел.: 02/915-35-18</p>
                      <p>Имейл: kzld@cpdp.bg</p>
                      <p>Уебсайт: <a href="https://www.cpdp.bg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cpdp.bg</a></p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 }}
                  className="border-gradient p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. Контакти</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Ако имате въпроси, искания или оплаквания относно обработването на личните Ви данни, моля свържете се с нас:</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:hello@adrexio.com" className="text-primary hover:underline">hello@adrexio.com</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href="tel:+359896173743" className="text-primary hover:underline">+359 896 173 743</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>София, България</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
