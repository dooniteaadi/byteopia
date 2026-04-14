import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-[var(--color-dark-bg)] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-pink)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-glow mb-8 tracking-wide uppercase">
            Initialize <span className="text-[var(--color-neon-pink)] text-glow-pink">Sequence</span>
          </h2>
          
          <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden box-glow-pink group hover:border-[var(--color-neon-pink)]/50 transition-colors duration-500">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-neon-pink)] to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-neon-cyan)] to-transparent opacity-50" />
            
            <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed font-light text-left">
              <p>
                <strong className="text-[var(--color-neon-cyan)] font-bold text-glow">BYTEOPIA</strong> is the flagship tech fest of the School of Technology (SOT), Doon University — a powerful expression of innovation, ambition, and student-driven excellence.
              </p>
              <p>
                Conceptualized, designed, and executed entirely by the students of B.Tech and B.Sc Computer Science, BYTEOPIA stands as a testament to the dedication, creativity, and leadership of SOT students. Every detail of the fest reflects countless hours of effort, collaboration, and a shared vision to build something impactful.
              </p>
              <p>
                Scheduled for April 24–25, BYTEOPIA brings together a dynamic fusion of technical and cultural experiences — from high-energy coding challenges and competitive gaming to engaging performances and interactive events. It creates an environment where ideas are tested, talents are showcased, and boundaries are pushed.
              </p>
              <p>
                More than just a fest, BYTEOPIA represents a culture — a space where passion meets execution, where students step beyond classrooms to create, lead, and inspire. It is not only an event, but a statement of what a driven student community can achieve together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
