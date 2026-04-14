import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedCounter = ({ from, to, duration, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const HypeSection = () => {
  return (
    <section className="py-20 relative bg-[var(--color-dark-bg)] border-y border-white/5 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-cyan)]/5 via-[var(--color-neon-pink)]/5 to-[var(--color-neon-cyan)]/5 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="pt-8 md:pt-0">
            <h4 className="text-4xl md:text-6xl font-black text-[var(--color-neon-pink)] text-glow-pink mb-3">
              <AnimatedCounter from={0} to={8} duration={1500} />
            </h4>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Core Events</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="pt-8 md:pt-0 md:border-l border-white/10">
            <h4 className="text-4xl md:text-6xl font-black text-[var(--color-neon-cyan)] text-glow mb-3">
              <AnimatedCounter from={0} to={2} duration={1000} />
            </h4>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Action Days</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="pt-8 md:pt-0 md:border-l border-white/10">
            <h4 className="text-5xl md:text-7xl font-black text-[var(--color-neon-pink)] text-glow-pink mb-1">
               ∞
            </h4>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Possibilities</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HypeSection;
