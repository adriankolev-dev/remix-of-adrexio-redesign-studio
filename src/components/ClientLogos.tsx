import { motion } from "framer-motion";

// Import client logos
import supercreditLogo from "@/assets/clients/supercredit.svg";
import athleticiqLogo from "@/assets/clients/athleticiq.png";
import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.png";
import ameliadivaLogo from "@/assets/clients/ameliadiva.png";
import fmlLogo from "@/assets/clients/fml.png";
import amaLogo from "@/assets/clients/ama.png";
import boasLogo from "@/assets/clients/boas.png";
import globalstreetartLogo from "@/assets/clients/globalstreetart.png";
import webxoticLogo from "@/assets/clients/webxotic.png";
import tokenizeLogo from "@/assets/clients/tokenize.png";
import tajmahalLogo from "@/assets/clients/tajmahal.png";
import booomLogo from "@/assets/clients/booom.webp";

const clients = [
  { name: "SuperCredit", logo: supercreditLogo },
  { name: "AthleticIQ", logo: athleticiqLogo },
  { name: "Body Aesthetics", logo: bodyaestheticsLogo },
  { name: "Amelia Diva", logo: ameliadivaLogo },
  { name: "FML-BD", logo: fmlLogo },
  { name: "AMA Dental", logo: amaLogo },
  { name: "BOAS", logo: boasLogo },
  { name: "Global Street Art", logo: globalstreetartLogo },
  { name: "WebXotic", logo: webxoticLogo },
  { name: "Tokenize The World", logo: tokenizeLogo },
  { name: "Taj Mahal", logo: tajmahalLogo },
  { name: "BOOOM", logo: booomLogo },
];

const ClientLogos = () => {
  return (
    <section className="py-16 border-y border-border bg-card/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-10">
          Тези, които избраха сигурен партньор, а не просто услуга
        </p>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card/80 via-card/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card/80 via-card/50 to-transparent z-10" />
          
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "fit-content" }}
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="shrink-0 h-12 md:h-14 flex items-center justify-center transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto max-w-[160px] object-contain brightness-0 invert opacity-50 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
