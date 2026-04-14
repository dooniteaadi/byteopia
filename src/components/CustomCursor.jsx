import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Determine if device is touch capable to hide cursor
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
       setIsTouchDevice(true);
       return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[var(--color-neon-cyan)] rounded-full pointer-events-none z-[9999]"
        style={{ filter: "drop-shadow(0 0 5px #00f0ff)" }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-[var(--color-neon-pink)] rounded-full pointer-events-none z-[9998]"
        style={{ filter: "drop-shadow(0 0 8px #ff00ff)" }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.9 : 0.3,
          rotate: isHovering ? 45 : 0
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
      >
        {isHovering && (
           <motion.div 
             className="w-full h-full border-t border-[var(--color-neon-cyan)] rounded-full"
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
           />
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
