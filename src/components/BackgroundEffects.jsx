import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundEffects = () => {
  const [init, setInit] = useState(false);
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 3000], [0, 400]);
  const parallaxY2 = useTransform(scrollY, [0, 3000], [0, -400]);

  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleCanvasClick = (e) => {
      // Check if click was on an interactive element (button, link, input)
      const isInteractive = e.target.closest('a, button, input, textarea, select, [role="button"]');
      const isPopup = e.target.closest('.pointer-events-auto');
      
      // If it wasn't an interactive element and popup isn't showing, count it as a background "particle" click
      if (!isInteractive && !isPopup) {
        setScore((prev) => {
          if (prev < 5) return prev + 1;
          return prev;
        });
      }
    };
    window.addEventListener('click', handleCanvasClick);
    return () => window.removeEventListener('click', handleCanvasClick);
  }, []);

  useEffect(() => {
    if (score >= 5 && !showPopup) {
      setShowPopup(true);
    }
  }, [score]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 },
      },
      color: {
        value: ["#00f0ff", "#ff00ff"],
      },
      links: {
        color: "#00f0ff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        direction: "none",
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[var(--color-dark-bg)]">
      
      {/* 3. Animated Gradient Lights with Parallax */}
      <motion.div style={{ y: parallaxY1 }} className="absolute inset-0">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[var(--color-neon-pink)] opacity-[0.2] rounded-full blur-[150px]"
          animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={{ y: parallaxY2 }} className="absolute inset-0">
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--color-neon-cyan)] opacity-[0.2] rounded-full blur-[150px]"
          animate={{ x: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Score Counter */}
      {score > 0 && score < 5 && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 text-[var(--color-neon-cyan)] font-mono text-sm border border-[var(--color-neon-cyan)]/30 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(0,240,255,0.2)] pointer-events-none">
          SYSTEM COMPROMISED: {Math.round((score / 5) * 100)}% 
        </div>
      )}

      {/* Mini-game Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[var(--color-dark-bg)] border border-[var(--color-neon-pink)] p-8 max-w-md text-center shadow-[0_0_30px_rgba(255,0,255,0.3)] rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')] opacity-30" />
            <h3 className="text-2xl font-bold text-[var(--color-neon-pink)] mb-4 text-glow-pink relative z-10 font-[Orbitron]">System Overload!</h3>
            <p className="text-white mb-6 relative z-10 text-lg">Ready for real competition? Your reflexes are sharp enough for BYTEOPIA.</p>
            <div className="flex gap-4 justify-center relative z-10">
                <button 
                  onClick={() => setShowPopup(false)}
                  className="px-6 py-2 border border-gray-500 text-gray-300 hover:bg-gray-800 transition-colors uppercase tracking-wider text-sm font-bold"
                >
                  Close
                </button>
                <a 
                  href="#events" 
                  onClick={() => setShowPopup(false)}
                  className="px-6 py-2 bg-[var(--color-neon-pink)] text-white font-bold hover:bg-pink-600 transition-colors box-glow-pink uppercase tracking-wider text-sm flex items-center gap-2"
                >
                  Register Now 🚀
                </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* 1. Floating Particles */}
      {init && (
        <div className="absolute inset-0 z-[1] w-full h-full">
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="w-full h-full pointer-events-auto"
          />
        </div>
      )}

      {/* 2. Neon Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] z-[2] flex-col justify-end flex perspective-1000">
        <div 
          className="w-full h-full neon-grid-floor relative" 
          style={{ transform: 'rotateX(80deg) scale(2)', transformOrigin: 'bottom' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[var(--color-dark-bg)] to-[var(--color-dark-bg)] z-10" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundEffects;
