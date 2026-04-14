import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with poster and abstract cyberpunk vibe */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-[url('/poster.jpg')] bg-cover bg-center"
          animate={{ scale: [1.02, 1.08, 1.02] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[var(--color-dark-bg)] bg-opacity-70 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/50 via-[#0a0f1c]/80 to-[#0a0f1c]" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-cyan)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-neon-pink)]/20 rounded-full blur-[120px]" />
        
        {/* Animated Particles Overlay (CSS simulated) */}
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz4KPC9zdmc+')] opacity-50"
          animate={{ y: [0, -100] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-glow tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          BYTEOPIA
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl text-gray-300 font-light tracking-wide mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Code. Create. Compete. <span className="text-[var(--color-neon-pink)] font-semibold text-glow-pink">Celebrate.</span>
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a 
            href="#events" 
            className="px-8 py-4 bg-transparent border-2 border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] font-bold text-lg uppercase tracking-wider box-glow hover:bg-[var(--color-neon-cyan)] hover:text-[var(--color-dark-bg)] transition-all duration-300"
          >
            Register Now
          </a>
          <a 
            href="#events" 
            className="px-8 py-4 bg-transparent border-2 border-[var(--color-neon-pink)] text-[var(--color-neon-pink)] font-bold text-lg uppercase tracking-wider box-glow-pink hover:bg-[var(--color-neon-pink)] hover:text-[var(--color-dark-bg)] transition-all duration-300"
          >
            Explore Events
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-[var(--color-neon-cyan)] text-sm uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-[var(--color-neon-cyan)] rounded-full flex justify-center p-1 relative box-glow">
          <div className="w-1.5 h-1.5 bg-[var(--color-neon-cyan)] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
