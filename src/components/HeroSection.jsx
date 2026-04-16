import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [heroMessageIndex, setHeroMessageIndex] = useState(0);

  const heroMessages = [
    "Code. Create. Compete. Celebrate.",
    "2 Days. 8 Events. Unlimited Chaos.",
    "Your keyboard is sweating already.",
    "Bugs? We call them unexpected features.",
    "Powered by caffeine and bad posture."
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setHeroMessageIndex((prev) => (prev + 1) % heroMessages.length);
    }, 3500);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {

    const text1 = "> initializing BYTEOPIA...";
    const text2 = "\n> access granted_";
    let currentHtml = "";
    
    let i = 0;
    const typeLine1 = setInterval(() => {
      currentHtml = text1.slice(0, i);
      setTerminalText(currentHtml);
      i++;
      if (i > text1.length) {
        clearInterval(typeLine1);
        setTimeout(() => {
          let j = 0;
          const typeLine2 = setInterval(() => {
            setTerminalText(currentHtml + text2.slice(0, j));
            j++;
            if (j > text2.length) {
              clearInterval(typeLine2);
              setTimeout(() => setIntroFinished(true), 150);
            }
          }, 15);
        }, 100);
      }
    }, 15);

    return () => clearInterval(typeLine1);
  }, []);

  if (!introFinished) {
    return (
      <section className="relative min-h-screen flex items-center justify-center font-mono text-[var(--color-neon-cyan)] p-6 z-50 bg-[var(--color-dark-bg)]">
        <div className="w-full max-w-2xl bg-black/70 border border-[var(--color-neon-cyan)]/30 rounded p-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <pre className="whitespace-pre-wrap text-sm md:text-lg text-glow font-bold">
                {terminalText}
            </pre>
        </div>
      </section>
    );
  }

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

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          className="flex flex-col items-center mb-6 md:mb-8 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[var(--color-neon-cyan)] text-lg md:text-2xl lg:text-4xl tracking-[0.2em] md:tracking-[0.3em] font-black opacity-100 font-[Orbitron] mb-2 uppercase text-center w-full"
            animate={{ textShadow: ["0 0 10px rgba(0, 240, 255, 0.6)", "0 0 25px rgba(0, 240, 255, 1)", "0 0 10px rgba(0, 240, 255, 0.6)"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            School of Technology
          </motion.h2>
          <p className="text-[var(--color-neon-pink)] text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold font-mono opacity-90 text-glow-pink">
            P R E S E N T S
          </p>
          <motion.div 
            className="w-[180%] max-w-[500px] h-[2px] mt-6 bg-gradient-to-r from-transparent via-[var(--color-neon-cyan)] to-transparent"
            style={{ boxShadow: "0 0 15px var(--color-neon-cyan)" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-glow tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          BYTEOPIA
        </motion.h1>
        
        <div className="h-10 md:h-12 flex items-center justify-center mb-10 overflow-hidden relative w-full pt-2">
          <motion.p 
            key={heroMessageIndex}
            className="absolute text-xl md:text-3xl text-gray-300 font-light tracking-wide w-full"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 0.6 }}
          >
            {heroMessages[heroMessageIndex]}
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <a 
            href="#events" 
            className="glitch-btn relative overflow-hidden px-8 py-4 bg-transparent border-2 border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] font-bold text-lg uppercase tracking-wider box-glow transition-all duration-300 hover:bg-[var(--color-neon-cyan)] hover:text-[var(--color-dark-bg)] hover:border-transparent"
          >
            <span className="relative z-10">Register Now</span>
          </a>
          <a 
            href="#events" 
            className="px-8 py-4 bg-transparent border-2 border-[var(--color-neon-pink)] text-[var(--color-neon-pink)] font-bold text-lg uppercase tracking-wider box-glow-pink hover:bg-[var(--color-neon-pink)] hover:text-[var(--color-dark-bg)] transition-all duration-300"
          >
            Explore Events
          </a>
        </motion.div>
      </div>
      
      {/* Chaos Button */}
      <motion.div 
        className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-50 mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <button
          onClick={() => {
            // Initiate Chaos
            const root = document.querySelector('#root');
            if (root) root.classList.add('glitch-chaos');
            setTimeout(() => {
              if (root) root.classList.remove('glitch-chaos');
              document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
          }}
          className="text-[10px] md:text-xs text-red-500 opacity-30 hover:opacity-100 hover:text-white hover:bg-red-600/80 transition-all font-mono border border-red-500/20 px-2 py-1 rounded"
        >
          Do Not Click 🚫
        </button>
      </motion.div>
      
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
