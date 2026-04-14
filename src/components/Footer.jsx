const Footer = () => {
  return (
    <footer className="relative bg-[#050810] pt-16 pb-8 border-t border-[var(--color-neon-cyan)]/30 overflow-hidden">
      {/* Neon Divider Line top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-cyan)] to-transparent box-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black tracking-widest text-glow mb-2">
              BYTEOPIA
            </h2>
            <p className="text-gray-400 text-sm tracking-wider uppercase">
              The Matrix Awaits.
            </p>
          </div>

          <div className="flex space-x-6 text-[var(--color-neon-cyan)] items-center">
            <a href="https://www.instagram.com/thebyteopia?igsh=eW5jMW9pc3owYnh3" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-neon-pink)] hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] hover:drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">
            Initiated by <span className="text-[var(--color-neon-pink)]">Doon University</span> Department of Computer Science
          </p>
          <p className="text-[#334155] text-xs">
            © 2026 BYTEOPIA. All systems optimal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
