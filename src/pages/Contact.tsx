import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
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

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
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
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@adrexio.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@adrexio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+359888888888" className="text-muted-foreground hover:text-primary transition-colors">
                      +359 888 888 888
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Локация</h3>
                    <p className="text-muted-foreground">София, България</p>
                  </div>
                </div>
              </div>

              {/* Quick info */}
              <div className="border-gradient p-6 rounded-xl">
                <h3 className="font-display font-semibold mb-4">Защо да ни изберете?</h3>
                <ul className="space-y-3">
                  {[
                    "Безплатна първоначална консултация",
                    "Плащате след финално одобрение",
                    "Гарантирано качество на работа",
                    "Постоянна техническа поддръжка"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
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
                <form onSubmit={handleSubmit} className="border-gradient p-8 rounded-2xl space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Име</label>
                      <Input
                        placeholder="Вашето име"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+359 888 888 888"
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Тема</label>
                    <Input
                      placeholder="Относно какво е вашето запитване?"
                      required
                      className="bg-secondary/50 border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Съобщение</label>
                    <Textarea
                      placeholder="Разкажете ни повече за вашия проект..."
                      rows={5}
                      required
                      className="bg-secondary/50 border-border resize-none"
                    />
                  </div>

                  <Button variant="hero" size="lg" type="submit" className="w-full">
                    Изпратете съобщение
                    <Send size={18} />
                  </Button>
                </form>
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
