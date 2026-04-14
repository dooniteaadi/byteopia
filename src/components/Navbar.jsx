import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'top-0 bg-[var(--color-dark-bg)]/80 backdrop-blur-xl py-3 border-b border-[var(--color-neon-cyan)]/30 shadow-[0_4px_30px_rgba(0,240,255,0.15)]' : 'top-8 bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="BYTEOPIA Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--color-neon-cyan)] box-glow" />
          <span className="text-2xl md:text-3xl font-black tracking-widest text-glow">BYTEOPIA</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-[var(--color-neon-cyan)] hover:text-glow transition-all duration-300 uppercase text-sm tracking-wider font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[var(--color-neon-cyan)] text-glow"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6 animate-fade-in">
          {navLinks.map((link) => (
             <a 
               key={link.name}
               href={link.href}
               onClick={() => setIsMobileMenuOpen(false)}
               className="text-gray-300 hover:text-[var(--color-neon-cyan)] hover:text-glow transition-all duration-300 uppercase tracking-wider font-medium"
             >
               {link.name}
             </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
