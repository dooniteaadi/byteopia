import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 relative bg-[var(--color-dark-bg)]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-glow mb-4 uppercase"
          >
            Visual <span className="text-[var(--color-neon-cyan)] text-glow">Archives</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[var(--color-neon-pink)] mx-auto box-glow-pink rounded-full" 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel w-full max-w-4xl mx-auto rounded-3xl p-12 flex flex-col items-center justify-center min-h-[40vh] border border-[var(--color-neon-cyan)]/20 box-glow"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-24 h-24 mb-6 rounded-full bg-[var(--color-dark-bg)] border-2 border-[var(--color-neon-cyan)] flex items-center justify-center text-glow text-[var(--color-neon-cyan)] box-glow"
          >
            <Camera size={48} />
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-[#ffffff] opacity-90 mt-4 mb-2 text-glow">
            Coming Soon...
          </h3>
          <p className="text-gray-400 text-sm md:text-lg uppercase tracking-wider text-center max-w-lg mt-2">
            Visual data feeds are currently initializing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
