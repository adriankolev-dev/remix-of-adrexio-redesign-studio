import { motion } from "framer-motion";

const clients = [
  { name: "SuperCredit", initial: "SC" },
  { name: "Athleticiq", initial: "AT" },
  { name: "Body Aesthetics", initial: "BA" },
  { name: "Amelia Diva", initial: "AD" },
  { name: "FML-BD", initial: "FM" },
  { name: "BOOM.BG", initial: "BM" },
];

const ClientLogos = () => {
  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Тези, които избраха сигурен партньор, а не просто услуга
        </p>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex gap-12 items-center animate-marquee"
            style={{ width: "200%" }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary/50 border border-border/50 shrink-0"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-display font-bold text-primary">
                  {client.initial}
                </div>
                <span className="text-foreground font-medium whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
