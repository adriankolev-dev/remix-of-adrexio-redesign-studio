import { motion } from "framer-motion";
import founderImage from "@/assets/founder.jpg";
import plamenImage from "@/assets/plamen.png";
import nikolayImage from "@/assets/nikolay.jpg";
import stefanImage from "@/assets/stefan.png";

const teamMembers = [
  {
    name: "Николай Ненов",
    role: "Head of Marketing",
    color: "from-purple-500 to-pink-500",
    image: nikolayImage
  },
  {
    name: "Пламен Петков",
    role: "CTO",
    color: "from-blue-500 to-cyan-500",
    image: plamenImage
  },
  {
    name: "Стефан Колев",
    role: "Lead Developer",
    color: "from-green-500 to-emerald-500",
    image: stefanImage
  }
];

const MeetTheTeam = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0d1829]">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-accent/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-blob-reverse" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Нашият екип
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Запознайте се с <span className="text-gradient">екипа</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Визията, която стои зад всеки проект в Adrexio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left side - Enhanced image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              {/* Decorative corner accents */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-primary/50 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-primary/50 rounded-br-3xl" />
              
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="absolute w-full h-full border-2 border-primary/20 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-[90%] h-[90%] border-2 border-cyan-500/20 rounded-full"
                  animate={{ rotate: -360, scale: [1, 1.08, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-[80%] h-[80%] border-2 border-blue-500/20 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.06, 1] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Glowing dots around the image */}
              <motion.div
                className="absolute top-1/4 right-0 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/3 left-0 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />

              {/* Main image container - much larger */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={founderImage}
                  alt="Адриан Колев - Founder & CEO"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
                {/* Dynamic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-cyan-500/20 mix-blend-overlay" />
                
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{ transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' }}
                  whileHover={{ transform: 'translateX(100%) translateY(100%) rotate(45deg)' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Enhanced content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-10"
          >
            {/* Quote card with enhanced design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative bg-gradient-to-br from-primary/90 via-blue-600/90 to-blue-700/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/30 overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                {/* Quote icon */}
                <div className="text-7xl md:text-8xl text-white/10 font-serif absolute top-6 left-6 select-none">"</div>
                
                <p className="text-white text-xl md:text-2xl leading-relaxed relative z-10 italic font-medium">
                  Вярваме, че истинският дигитален успех идва от смелите идеи, правилната стратегия и безупречното изпълнение.
                </p>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            </motion.div>

            {/* Signature with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative pl-6"
            >
              {/* Decorative line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-primary via-cyan-400 to-transparent" />
              
              <p className="text-6xl md:text-7xl text-white font-signature italic mb-3 hover:text-primary transition-colors duration-300">
                Адриан Колев
              </p>
              <p className="text-gray-300 text-lg md:text-xl font-display tracking-wide">
                CEO Adrexio
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-16 border-t border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Останалите от <span className="text-gradient">екипа</span>
            </h3>
            <p className="text-gray-400">Експертите, които правят визията реалност</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="group relative"
              >
                {/* Enhanced card glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500`} />
                
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Large image container */}
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#0d1829]">
                    {member.image ? (
                      <>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          style={{ objectPosition: 'center 20%' }}
                        />
                        {/* Gradient overlay on image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1829] via-transparent to-transparent opacity-60" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500`} />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center relative">
                        {/* Same background overlay for consistency */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10`} />
                        <span className="text-8xl font-display font-bold text-white opacity-40 relative z-10">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    
                    {/* Decorative corner accent */}
                    <div className={`absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-2xl`} />
                    <div className={`absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-2xl`} />
                    
                    {/* Floating particles */}
                    <motion.div
                      className={`absolute top-8 right-8 w-3 h-3 bg-gradient-to-r ${member.color} rounded-full shadow-lg`}
                      animate={{ 
                        y: [-10, 10, -10],
                        opacity: [1, 0.3, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                    />
                    <motion.div
                      className={`absolute bottom-8 right-12 w-2 h-2 bg-gradient-to-r ${member.color} rounded-full shadow-lg`}
                      animate={{ 
                        y: [10, -10, 10],
                        opacity: [1, 0.3, 1]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 + 0.5 }}
                    />
                  </div>

                  {/* Content section */}
                  <div className="p-8">
                    {/* Name */}
                    <h4 className="text-2xl font-display font-bold text-white text-center mb-3 group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    
                    {/* Role with enhanced styling */}
                    <div className="relative">
                      <p className={`text-base font-semibold text-center bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                        {member.role}
                      </p>
                      
                      {/* Decorative bottom line */}
                      <div className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r ${member.color} opacity-50 group-hover:opacity-100 group-hover:w-32 transition-all duration-300`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
