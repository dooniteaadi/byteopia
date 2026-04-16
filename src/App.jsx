import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import AboutSection from './components/AboutSection';
import EventsGrid from './components/EventsGrid';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import BackgroundMusic from './components/BackgroundMusic';
import LoadingScreen from './components/LoadingScreen';
import AnnouncementBar from './components/AnnouncementBar';
import HypeSection from './components/HypeSection';
import HumorController from './components/HumorController';

function App() {
  useEffect(() => {
    // Generate cinematic synthetic beep on interactions
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const audioCtx = new AudioContext();
    
    const playClickSound = () => {
      if (audioCtx.state === 'suspended') {
          audioCtx.resume();
      }
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    };

    const handleClick = (e) => {
      // Check if clicked element or its parent is a button or anchor
      const target = e.target.closest('a, button');
      if (target) {
        playClickSound();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-white font-['Poppins'] selection:bg-[var(--color-neon-pink)] selection:text-white relative">
      <HumorController />
      <LoadingScreen />
      <AnnouncementBar />
      <BackgroundEffects />
      <BackgroundMusic />
      <CustomCursor />
      <Navbar />
      
      <main className="pt-8">
        <HeroSection />
        <CountdownTimer />
        <HypeSection />
        <AboutSection />
        <EventsGrid />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}

export default App;
