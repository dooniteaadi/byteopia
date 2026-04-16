import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  
  const loadingMessages = [
    "Initializing System Core...",
    "Loading awesomeness...",
    "Compiling brain cells...",
    "Downloading RAM...",
    "Hacking into the mainframe...",
    "Initializing BYTEOPIA..."
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 450);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100); // Greatly reduced loading time for speed
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-dark-bg)] overflow-hidden"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,240,255,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
          
          <div className="relative flex flex-col items-center">
            <h1 
              data-text="BYTEOPIA" 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-widest uppercase glitch mb-8"
            >
              BYTEOPIA
            </h1>
            
            {/* Loading progress bar */}
            <div className="w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden relative box-glow">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.5, ease: "easeInOut" }}
                 className="h-full bg-[var(--color-neon-cyan)] shadow-[0_0_10px_#00f0ff]"
               />
               <motion.div 
                 className="absolute top-0 right-0 h-full w-4 bg-white/50 blur-[2px]"
                 animate={{ x: [-384, 384] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               />
            </div>
            
            <motion.p 
              key={loadingMessageIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[var(--color-neon-cyan)] text-xs md:text-sm mt-6 uppercase tracking-[0.3em]"
            >
              {loadingMessages[loadingMessageIndex]}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
