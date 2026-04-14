import { motion } from 'framer-motion';

const RegistrationForm = () => {
  return (
    <section id="register" className="py-24 relative bg-[var(--color-dark-bg)] border-t border-[var(--color-neon-pink)]/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rounded-2xl box-glow">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-glow mb-4 uppercase">
              Secure Your <span className="text-[var(--color-neon-pink)] text-glow-pink">Access</span>
            </h2>
            <p className="text-gray-400">Fill in your coordinates to enter BYTEOPIA.</p>
          </motion.div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[var(--color-neon-cyan)] text-sm tracking-widest uppercase font-semibold">Name</label>
                <input 
                  type="text" 
                  placeholder="Player One"
                  className="w-full bg-black/50 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[var(--color-neon-cyan)] text-sm tracking-widest uppercase font-semibold">Student ID</label>
                <input 
                  type="text" 
                  placeholder="CS2026-XYZ"
                  className="w-full bg-black/50 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[var(--color-neon-cyan)] text-sm tracking-widest uppercase font-semibold">Dept & Year</label>
                <input 
                  type="text" 
                  placeholder="BCA 2nd Year"
                  className="w-full bg-black/50 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[var(--color-neon-cyan)] text-sm tracking-widest uppercase font-semibold">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="w-full bg-black/50 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[var(--color-neon-cyan)] text-sm tracking-widest uppercase font-semibold">Target Directives (Events)</label>
              <select className="w-full bg-black/50 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all appearance-none cursor-pointer">
                <option value="" className="bg-[var(--color-dark-bg)]">Select an event...</option>
                <option value="hackathon" className="bg-[var(--color-dark-bg)]">Hackathon</option>
                <option value="bgmi" className="bg-[var(--color-dark-bg)]">BGMI Tournament</option>
                <option value="smash_kart" className="bg-[var(--color-dark-bg)]">Smash Kart Event</option>
                <option value="clash_royale" className="bg-[var(--color-dark-bg)]">Clash Royale Event</option>
                <option value="all" className="bg-[var(--color-dark-bg)]">Multi-Directive Access (All)</option>
              </select>
            </div>

            <div className="pt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-4 bg-[var(--color-neon-cyan)] text-[var(--color-dark-bg)] font-black text-xl uppercase tracking-widest rounded-lg box-glow hover:bg-white transition-colors duration-300"
              >
                Transmit Data
              </motion.button>
              <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">or use the <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer" className="text-[var(--color-neon-pink)] hover:underline">Alternative Portal</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
