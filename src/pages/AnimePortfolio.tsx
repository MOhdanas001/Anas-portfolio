import { useState, useEffect, useRef } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ContactSection from '../components/ContactUs';
import ScrollNavWithRocket from '../components/ScrollNavWithRocket';
import Project from '../components/project';
import About from '../components/About';

const AnimePortfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const [stars] = useState(() =>
    [...Array(50)].map(() => ({
      width: Math.random() * 3 + 1 + "px",
      height: Math.random() * 3 + 1 + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
      animationDelay: `-${Math.random() * 10}s`,
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black to-white space-grotesk overflow-x-hidden">

      <div className="absolute top-20 right-10 w-32 h-32 opacity-30 animate-float-slow">
        <img src="/comet1.png" alt="Floating comet" className="w-full h-full object-contain" />
      </div>

      <div className="absolute bottom-40 left-70 w-80 h-80 opacity-100 animate-float-slower">
        <img src="/comet2.png" alt="Floating comet" className="w-full h-full object-contain" />
      </div>

      {/* Random Orbiting Comets */}
      {[
        { top: '15%', left: '10%', size: 25, animation: 'animate-orbit-1', image: 'comet1.png' },
        { top: '25%', right: '15%', size: 48, animation: 'animate-orbit-2', image: 'comet2.png' },
        { top: '45%', left: '5%', size: 20, animation: 'animate-orbit-3', image: 'comet3.png' },
        { bottom: '30%', right: '25%', size: 23, animation: 'animate-orbit-4', image: 'comet4.png' },
        { bottom: '15%', left: '30%', size: 24, animation: 'animate-orbit-1', image: 'comet5.png' },
        { top: '60%', right: '40%', size: 18, animation: 'animate-orbit-2', image: 'comet1.png' },
        { top: '70%', left: '60%', size: 50, animation: 'animate-orbit-3', image: 'comet2.png' },
        { bottom: '45%', left: '20%', size: 23, animation: 'animate-orbit-4', image: 'comet3.png' },
        { top: '35%', right: '10%', size: 23, animation: 'animate-orbit-1', image: 'comet4.png' },
        { bottom: '60%', right: '50%', size: 27, animation: 'animate-orbit-2', image: 'comet5.png' },
        { top: '80%', left: '15%', size: 21, animation: 'animate-orbit-3', image: 'comet1.png' },
        { top: '10%', left: '45%', size: 45, animation: 'animate-orbit-4', image: 'comet2.png' },
        { bottom: '20%', right: '5%', size: 20, animation: 'animate-orbit-1', image: 'comet3.png' },
        { top: '50%', left: '75%', size: 24, animation: 'animate-orbit-2', image: 'comet4.png' },
        { bottom: '50%', left: '40%', size: 22, animation: 'animate-orbit-3', image: 'comet5.png' },
      ].map((comet, index) => (
        <div
          key={`random-comet-${index}`}
          className={`absolute ${comet.animation}`}
          style={{
            top: comet.top,
            bottom: comet.bottom,
            left: comet.left,
            right: comet.right,
            width: `${comet.size / 4}rem`,
            height: `${comet.size / 4}rem`,
            opacity: 0.6,
            animationDelay: `${index * 0.3}s`,
          }}
        >
          <img src={`/${comet.image}`} alt="Orbiting comet" className="w-full h-full object-contain" />
        </div>
      ))}
      {/* Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

  {stars.map((star, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full opacity-20"
      style={star}
    />
  ))}
</div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <ScrollNavWithRocket />

      <HeroSection />
      <ExperienceTimeline />
      <Skills />
      <Project />
      <About />
      <ContactSection />

    </div>
  );
};

export default AnimePortfolio;