import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundEffects = () => {
  const [init, setInit] = useState(false);
  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 3000], [0, 400]);
  const parallaxY2 = useTransform(scrollY, [0, 3000], [0, -400]);

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
