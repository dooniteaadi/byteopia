const AnnouncementBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-[var(--color-neon-cyan)]/10 border-b border-[var(--color-neon-cyan)]/30 backdrop-blur-md z-50 overflow-hidden h-8 flex items-center pointer-events-none">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap text-[10px] md:text-xs text-[var(--color-neon-cyan)] font-['Orbitron'] tracking-widest uppercase items-center">
        <span className="w-1/2 flex justify-around">
          <span>🚀 Registrations Open Now — Limited Slots</span>
          <span>⚡ Initialize Override</span>
          <span>🚀 Registrations Open Now — Limited Slots</span>
          <span>⚡ Initialize Override</span>
        </span>
        <span className="w-1/2 flex justify-around">
          <span>🚀 Registrations Open Now — Limited Slots</span>
          <span>⚡ Initialize Override</span>
          <span>🚀 Registrations Open Now — Limited Slots</span>
          <span>⚡ Initialize Override</span>
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
