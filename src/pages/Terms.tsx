import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Общи условия - Adrexio | Условия за използване"
        description="Общи условия за използване на услугите на Adrexio. Прочетете нашите условия за поръчки, плащания, интелектуална собственост и гаранции."
        keywords="общи условия, условия използване, условия Adrexio, договорни условия"
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
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Общи условия
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Условия за <span className="text-gradient">използване</span>
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
                  Добре дошли в общите условия на Adrexio. Моля, прочетете внимателно тези условия преди да използвате нашия уебсайт и услуги.
                </p>
                <p className="text-foreground leading-relaxed">
                  С използването на нашия уебсайт и услуги, Вие се съгласявате да се придържате към тези общи условия. Ако не сте съгласни с някоя част от тези условия, моля не използвайте нашия уебсайт и услуги.
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
                    <h2 className="text-2xl font-display font-bold text-foreground">1. Определения</h2>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-foreground">„Ние", „Нас", „Наш"</strong> се отнася до Adrexio</li>
                      <li><strong className="text-foreground">„Вие", „Ваш"</strong> се отнася до потребителя или посетителя на нашия уебсайт</li>
                      <li><strong className="text-foreground">„Услуги"</strong> се отнася до всички услуги, предоставяни от Adrexio, включително уеб разработка, дизайн, SEO и други свързани услуги</li>
                      <li><strong className="text-foreground">„Уебсайт"</strong> се отнася до нашия уебсайт, достъпен на адреса на Adrexio</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Приемане на условията</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>С достъп до и използване на нашия уебсайт и услуги, Вие потвърждавате, че:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Имате право да сключите договор според приложимото законодателство</li>
                      <li>Приемате и се съгласявате да бъдете обвързани с тези общи условия</li>
                      <li>Ще спазвате всички приложими закони и разпоредби</li>
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
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Услуги</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Adrexio предоставя следните услуги:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Уеб разработка и дизайн</li>
                      <li>Мобилни приложения</li>
                      <li>UI/UX дизайн</li>
                      <li>SEO оптимизация</li>
                      <li>Дигитален маркетинг</li>
                      <li>Техническа поддръжка</li>
                    </ul>
                    <p className="mt-4">Всички услуги се предоставят в съответствие с договорените спецификации и срокове. Ние запазваме правото да променяме, приостановяваме или прекратяваме всяка услуга по всяко време с предварително уведомяване.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Поръчки и плащания</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Всички поръчки се приемат при наличие на писмено потвърждение от двете страни</li>
                      <li>Цените са посочени в евро (EUR), освен ако не е посочено друго</li>
                      <li>Плащанията се извършват според договорените условия в договора</li>
                      <li>Всички цени включват ДДС, където е приложимо</li>
                      <li>При забавяне на плащането, запазваме правото да приостановим или прекратим услугите</li>
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
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Интелектуална собственост</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Всички права върху интелектуалната собственост, включително, но не ограничавайки се до:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Авторски права върху дизайна, кода и съдържанието</li>
                      <li>Търговски марки и логотипи</li>
                      <li>Патентни права</li>
                    </ul>
                    <p className="mt-4">След финално плащане и одобрение на проекта, клиентът получава права за използване на доставения продукт според договорените условия. Всички права върху изходния код и дизайн остават собственост на Adrexio, освен ако не е договорено друго.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Отговорности и гаранции</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong className="text-foreground">Гаранции:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Гарантираме качеството на предоставените услуги в съответствие с договорените спецификации</li>
                      <li>Предоставяме техническа поддръжка в рамките на гаранционния период, според договорените условия</li>
                    </ul>
                    <p className="mt-4"><strong className="text-foreground">Ограничение на отговорността:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Не носим отговорност за косвени, случайни или последващи щети</li>
                      <li>Не носим отговорност за загуби, произтичащи от използване или невъзможност за използване на услугите</li>
                      <li>Нашата обща отговорност е ограничена до сумата, платена от клиента за конкретната услуга</li>
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
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Отказ и възстановяване</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>В случай на отказ от услуга:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Клиентът може да откаже услугата в рамките на 14 дни от сключването на договора, при условие че работата не е започнала</li>
                      <li>Ако работата е започнала, клиентът е длъжен да заплати за извършената работа до момента на отказа</li>
                      <li>Всички платени суми за недовършена работа не подлежат на възстановяване</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Поверителност</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Ние се ангажираме да защитаваме поверителността на информацията на нашите клиенти. За подробна информация относно обработката на лични данни, моля вижте нашата <a href="/privacy" className="text-primary hover:underline">Политика за поверителност</a>.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Забрана за използване</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Забранено е да използвате нашия уебсайт и услуги за:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Незаконни дейности или дейности, които нарушават правата на трети страни</li>
                      <li>Разпространение на вируси, злонамерен софтуер или друг вреден код</li>
                      <li>Опити за неоторизиран достъп до системите ни</li>
                      <li>Копиране, модифициране или разпространение на съдържанието без разрешение</li>
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
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Промени в условията</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Ние запазваме правото да променяме тези общи условия по всяко време. Промените влизат в сила веднага след публикуването им на уебсайта. Препоръчваме редовно да преглеждате тези условия.</p>
                    <p>Продължаването на използването на нашия уебсайт и услуги след промените означава приемане на новите условия.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. Разрешаване на спорове</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Всички спорове, произтичащи от или свързани с тези общи условия, ще бъдат разрешавани чрез преговори между страните.</p>
                    <p>Ако преговорите не постигнат резултат в рамките на 30 дни, споровете ще бъдат разрешавани от компетентните съдилища в София, България, в съответствие с българското законодателство.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 }}
                  className="border-gradient p-6 rounded-xl"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. Приложимо право</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Тези общи условия се управляват и тълкуват в съответствие с законодателството на Република България.</p>
                    <p>Всички спорове ще бъдат разрешавани от компетентните съдилища в България.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="border-gradient p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">13. Контакти</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Ако имате въпроси относно тези общи условия, моля свържете се с нас:</p>
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

export default Terms;
