import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import InteractiveServicesGrid from "@/components/InteractiveServicesGrid";
import ServicesSection from "@/components/ServicesSection";
import { Sparkles } from "lucide-react";

const ServicesDemo = () => {
  const [activeDemo, setActiveDemo] = useState<"enhanced" | "tilt" | "magnetic">("enhanced");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Demo Selector */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h1 className="text-3xl md:text-5xl font-display font-bold">
                Animation <span className="text-gradient">Showcase</span>
              </h1>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              Choose your preferred animation style for the services section
            </p>

            {/* Style Selector */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={activeDemo === "enhanced" ? "default" : "outline"}
                onClick={() => setActiveDemo("enhanced")}
                className="min-w-[200px]"
              >
                Enhanced Cards
                <span className="ml-2 text-xs opacity-70">(Recommended)</span>
              </Button>
              <Button
                variant={activeDemo === "tilt" ? "default" : "outline"}
                onClick={() => setActiveDemo("tilt")}
                className="min-w-[200px]"
              >
                3D Tilt Effect
                <span className="ml-2 text-xs opacity-70">(Interactive)</span>
              </Button>
              <Button
                variant={activeDemo === "magnetic" ? "default" : "outline"}
                onClick={() => setActiveDemo("magnetic")}
                className="min-w-[200px]"
              >
                Magnetic Cards
                <span className="ml-2 text-xs opacity-70">(Playful)</span>
              </Button>
            </div>

            {/* Description */}
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-2xl mx-auto p-6 rounded-xl bg-card/50 border border-primary/10"
            >
              {activeDemo === "enhanced" && (
                <div>
                  <h3 className="font-bold text-lg mb-2">✨ Enhanced Cards</h3>
                  <p className="text-sm text-muted-foreground">
                    Beautiful cards with glow effects, particle bursts, shine animations, and smooth hover transitions. 
                    Perfect balance of elegance and interactivity.
                  </p>
                  <ul className="mt-3 text-xs text-muted-foreground space-y-1 text-left">
                    <li>• Animated glow on hover</li>
                    <li>• Particle burst from icons</li>
                    <li>• Shine sweep effect</li>
                    <li>• Smooth lift and scale</li>
                  </ul>
                </div>
              )}
              {activeDemo === "tilt" && (
                <div>
                  <h3 className="font-bold text-lg mb-2">🎮 3D Tilt Effect</h3>
                  <p className="text-sm text-muted-foreground">
                    Cards respond to mouse movement with realistic 3D rotation and depth. 
                    Move your mouse around the cards to see the magic!
                  </p>
                  <ul className="mt-3 text-xs text-muted-foreground space-y-1 text-left">
                    <li>• Real-time mouse tracking</li>
                    <li>• 3D perspective transforms</li>
                    <li>• Dynamic spotlight effect</li>
                    <li>• Depth-based layers</li>
                  </ul>
                </div>
              )}
              {activeDemo === "magnetic" && (
                <div>
                  <h3 className="font-bold text-lg mb-2">🧲 Magnetic Cards</h3>
                  <p className="text-sm text-muted-foreground">
                    Cards are "attracted" to your cursor when you get close. 
                    A playful and engaging interaction that feels alive!
                  </p>
                  <ul className="mt-3 text-xs text-muted-foreground space-y-1 text-left">
                    <li>• Magnetic pull effect</li>
                    <li>• Spring physics</li>
                    <li>• Proximity detection</li>
                    <li>• Smooth return animation</li>
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo Display */}
      <motion.div
        key={activeDemo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeDemo === "enhanced" && <ServicesSection />}
        {activeDemo === "tilt" && <InteractiveServicesGrid style="tilt" />}
        {activeDemo === "magnetic" && <InteractiveServicesGrid style="magnetic" />}
      </motion.div>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">
              🎨 Animation Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-primary/10">
                <h3 className="font-bold mb-2">Scroll Animations</h3>
                <p className="text-sm text-muted-foreground">
                  Elements fade and slide in as you scroll. Parallax backgrounds create depth.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/10">
                <h3 className="font-bold mb-2">Hover Effects</h3>
                <p className="text-sm text-muted-foreground">
                  Cards respond with scale, glow, rotation, and color transitions.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/10">
                <h3 className="font-bold mb-2">Stagger Timing</h3>
                <p className="text-sm text-muted-foreground">
                  Cards animate in sequence creating a cascading waterfall effect.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/10">
                <h3 className="font-bold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  GPU-accelerated animations running at smooth 60fps on all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesDemo;
