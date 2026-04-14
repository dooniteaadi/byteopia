import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Lightbulb, Terminal, Map, Rocket, Video, Music, EyeOff, Gamepad2 } from 'lucide-react';

const EventCard = ({ event, delay, isMobile }) => {
  const { title, description, icon: Icon, color, link } = event;
  const isCyan = color === 'cyan';
  const glowClass = isCyan ? 'box-glow hover:border-[var(--color-neon-cyan)]' : 'box-glow-pink hover:border-[var(--color-neon-pink)]';
  const textGlowClass = isCyan ? 'text-glow text-[var(--color-neon-cyan)]' : 'text-glow-pink text-[var(--color-neon-pink)]';
  const bgGradient = isCyan ? 'from-[var(--color-neon-cyan)]' : 'from-[var(--color-neon-pink)]';

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel p-8 rounded-xl relative border border-white/10 transition-colors duration-300 ${glowClass} group flex flex-col h-full perspective-1000`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="flex flex-col h-full relative z-10"
      >
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${bgGradient} to-transparent opacity-20 blur-2xl rounded-full transition-opacity duration-300 group-hover:opacity-40 pointer-events-none`} />

        <div className={`w-16 h-16 mb-6 rounded-lg bg-[var(--color-dark-bg)] border border-white/10 flex items-center justify-center ${textGlowClass}`}>
          <Icon size={32} />
        </div>

        <h3 className={`text-2xl font-bold mb-4 uppercase tracking-wider ${textGlowClass}`}>
          {title}
        </h3>
        
        <p className="text-gray-400 mb-8 flex-grow transition-colors group-hover:text-white">
          {description}
        </p>

        <div className="flex flex-col space-y-3 mt-auto relative z-20">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full py-3 px-6 text-center border font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden group/link ${
              isCyan 
                ? 'border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] hover:text-[var(--color-dark-bg)] hover:bg-[var(--color-neon-cyan)]' 
                : 'border-[var(--color-neon-pink)] text-[var(--color-neon-pink)] hover:text-[var(--color-dark-bg)] hover:bg-[var(--color-neon-pink)]'
            }`}
          >
            <span className="relative z-10">Register Now</span>
            <div className={`absolute inset-0 translate-y-full group-hover/link:translate-y-0 transition-transform duration-300 ${isCyan ? 'bg-[var(--color-neon-cyan)]' : 'bg-[var(--color-neon-pink)]'}`} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const EventsGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const events = [
    {
      title: "Quiz",
      description: "Test your knowledge across various domains and prove your intellectual dominance.",
      rules: "1. No internet access allowed during the contest.\n2. Teams max size of 2.\n3. Four rounds including rapid fire.",
      prize: "₹5,000 + Tech Goodies",
      timing: "Day 1, 10:00 AM",
      icon: Lightbulb,
      color: "cyan",
      link: "https://forms.gle/8APrD9KWJ1SWCRh6A"
    },
    {
      title: "Coding",
      description: "Solve complex algorithmic challenges and show off your programming skills.",
      rules: "1. Languages supported: C++, Java, Python.\n2. Individual participation only.\n3. Plagiarism results in instant disqualification.",
      prize: "₹10,000 MVP Award",
      timing: "Day 1, 12:00 PM",
      icon: Terminal,
      color: "pink",
      link: "https://forms.gle/nn55KmQamQK4Rarw5"
    },
    {
      title: "Tech Treasure Hunt",
      description: "Follow the clues, solve the puzzles, and race against time to uncover the hidden tech treasure.",
      rules: "1. Teams of 3-4 players.\n2. Must navigate the entire campus using cryptologic hints.\n3. Use of QR scanners required.",
      prize: "Mystery Box & Cash Pool",
      timing: "Day 2, 09:00 AM",
      icon: Map,
      color: "cyan",
      link: "https://forms.gle/WUBygAu16TYUqyH49"
    },
    {
      title: "Ideas and Startup",
      description: "Pitch your innovative startup ideas and get a chance to take them to the next level.",
      rules: "1. 5 minutes pitch presentation.\n2. 3 minutes Q&A with investor judges.\n3. Must clearly define revenue model.",
      prize: "₹25,000 Seed Fund grant",
      timing: "Day 2, 02:00 PM",
      icon: Rocket,
      color: "pink",
      link: "https://forms.gle/oXNkXQaoMSerh7wSA"
    },
    {
      title: "Reel Making",
      description: "Showcase your creativity and video editing skills in our reel making competition.",
      rules: "1. Video length: 30s to 60s.\n2. Must encapsulate the fest vibe.\n3. Royalty-free audio only.",
      prize: "Creator Kit & Feature",
      timing: "Post-event submission",
      icon: Video,
      color: "cyan",
      link: "https://forms.gle/8NPDq1VPr3tfPV4f9"
    },
    {
      title: "Singing / Dancing",
      description: "Take the stage and mesmerize the audience with your incredible singing or dancing talent.",
      rules: "1. Time limit: 4 mins max.\n2. Backing tracks must be submitted a day prior in MP3 format.\n3. Obscenity is strictly prohibited.",
      prize: "Trophy + Spotlight Feature",
      timing: "Day 1, 06:00 PM Main Stage",
      icon: Music,
      color: "pink",
      link: "https://forms.gle/ofkHdFYA4sZxtozU7"
    },
    {
      title: "Blind Coding",
      description: "Write code with your monitor turned off. Rely purely on your logic and muscle memory.",
      rules: "1. Monitors will be powered down.\n2. Compilation allowed only once at the end.\n3. Highest logic accuracy wins.",
      prize: "Premium Mechanical Keyboard",
      timing: "Day 2, 11:30 AM",
      icon: EyeOff,
      color: "cyan",
      link: "https://forms.gle/XYN7CttJF2TJKxcU6"
    },
    {
      title: "Gaming",
      description: "Step into the arena, battle it out in intensive gaming tournaments, and claim victory.",
      rules: "1. Valorant & FIFA tournaments.\n2. Own peripherals highly encouraged.\n3. Abusive language results in ban.",
      prize: "₹15,000 Grand Prize Pool",
      timing: "Day 1 & Day 2, All day",
      icon: Gamepad2,
      color: "pink",
      link: "https://forms.gle/VcRYCLAReKpEu7of6"
    }
  ];

  return (
    <>
      <section id="events" className="py-24 relative bg-[var(--color-dark-bg)]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-glow mb-4 uppercase"
            >
              Mission <span className="text-[var(--color-neon-pink)] text-glow-pink">Directives</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-[var(--color-neon-cyan)] mx-auto box-glow rounded-full" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
            {events.map((event, index) => (
              <div key={event.title} className="perspective-1000">
                <EventCard 
                  event={event}
                  delay={(index % 4) * 0.15}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsGrid;
