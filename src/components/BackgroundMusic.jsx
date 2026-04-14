import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalId = useRef(null);
  const initialLoad = useRef(true);

  useEffect(() => {
    // Load preference from local storage on mount
    const savedState = localStorage.getItem('byteopia-music-state');
    if (savedState === 'playing') {
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      if (fadeIntervalId.current) clearInterval(fadeIntervalId.current);
      
      // If it's the very first load and we are trying to play (due to localStorage), 
      // the browser might block it until a user interacts.
      audio.volume = 0;
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          localStorage.setItem('byteopia-music-state', 'playing');
          initialLoad.current = false;
          // Start fade in
          fadeIntervalId.current = setInterval(() => {
            if (audio.volume < 0.25) {
                audio.volume = Math.min(0.25, audio.volume + 0.025);
            } else {
                clearInterval(fadeIntervalId.current);
            }
          }, 100);
        }).catch(error => {
          console.warn("Autoplay prevented by browser. User must click first.", error);
          setIsPlaying(false);
        });
      }
    } else {
      if (initialLoad.current) {
         initialLoad.current = false;
         return; // Don't trigger fade logic on mount
      }
      localStorage.setItem('byteopia-music-state', 'paused');
      
      // Stop previous interval if exists
      if (fadeIntervalId.current) clearInterval(fadeIntervalId.current);
      
      fadeIntervalId.current = setInterval(() => {
          if (audio.volume > 0.025) {
              audio.volume -= 0.025;
          } else {
              audio.volume = 0;
              audio.pause();
              clearInterval(fadeIntervalId.current);
          }
      }, 100);
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} loop src="/music/byteopia.mp3" type="audio/mpeg" />

      <div className="fixed bottom-6 right-6 z-50 group">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-[#0a0f1c]/80 backdrop-blur-md border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] px-3 py-1.5 rounded text-[10px] font-['Orbitron'] uppercase tracking-widest box-glow">
          {isPlaying ? 'Disable Audio' : 'Toggle Music'}
        </div>

        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center glass-panel border transition-all duration-500 overflow-hidden relative cursor-pointer ${
            isPlaying 
              ? 'border-[var(--color-neon-cyan)] box-glow text-[var(--color-neon-cyan)]' 
              : 'border-[var(--color-neon-pink)] box-glow-pink text-[var(--color-neon-pink)] opacity-70 hover:opacity-100'
          }`}
        >
          {/* Background pulse effect when playing */}
          {isPlaying && (
             <motion.div 
               className="absolute inset-0 bg-[var(--color-neon-cyan)] opacity-20 rounded-full"
               animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             />
          )}

          <div className="relative z-10 transition-transform duration-300">
            {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default BackgroundMusic;
