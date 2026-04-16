import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roasts = [
  "Still thinking? Seats are filling fast 😭",
  "Even your WiFi is faster than this decision ⚡",
  "Error 404: Registration motivation not found.",
  "Are you naturally this slow, or is it the latency? 👀",
  "Procrastinate now, regret at the prize ceremony 🏆"
];

const HumorController = () => {
  const [activeRoast, setActiveRoast] = useState(null);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    // Random roasts every 30 seconds
    const interval = setInterval(() => {
      const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
      setActiveRoast(randomRoast);
      setTimeout(() => setActiveRoast(null), 5000); // 5s duration
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Exit intent detection
    const handleMouseLeave = (e) => {
      // Trigger if leaving top of window and hasn't seen it recently
      if (e.clientY <= 0 && !sessionStorage.getItem('byteopia-exit-seen')) {
        setShowExitPopup(true);
        sessionStorage.setItem('byteopia-exit-seen', 'true');
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <>
      {/* Floating Roast Toast */}
      <AnimatePresence>
        {activeRoast && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 glass-panel border-[var(--color-neon-pink)] p-4 rounded-lg shadow-[0_0_15px_rgba(255,0,255,0.3)] max-w-sm pointer-events-none"
          >
            <p className="text-sm font-medium text-white">{activeRoast}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Popup Overlay */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md pointer-events-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[var(--color-dark-bg)] border-2 border-[var(--color-neon-cyan)] p-8 max-w-md w-full text-center shadow-[0_0_40px_rgba(0,240,255,0.4)] rounded-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />
              <h2 className="text-3xl font-black text-[var(--color-neon-cyan)] mb-4 text-glow relative z-10 uppercase font-[Orbitron]">Wait...</h2>
              <p className="text-white mb-8 text-lg font-medium relative z-10">Leaving already? BYTEOPIA just started 😭</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <button 
                  onClick={() => setShowExitPopup(false)}
                  className="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 uppercase tracking-widest text-sm font-bold transition-all"
                >
                  My Bad
                </button>
                <a 
                  href="#events" 
                  onClick={() => setShowExitPopup(false)}
                  className="px-6 py-3 bg-transparent border-2 border-[var(--color-neon-pink)] text-[var(--color-neon-pink)] hover:bg-[var(--color-neon-pink)] hover:text-white uppercase tracking-widest text-sm font-bold box-glow-pink transition-all text-center"
                >
                  Take Me Back
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HumorController;
