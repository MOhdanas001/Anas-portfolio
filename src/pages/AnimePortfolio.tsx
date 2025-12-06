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

  // ⭐ Generate stars only once using lazy initialization
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
    <div ref={containerRef} className="relative bg-black to-white space-grotesk">
      
      {/* Floating Planets */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-30 animate-float-slow">
        <img src="/comet1.png" alt="Planet" className="w-full h-full object-contain" />
      </div>

      <div className="absolute bottom-40 left-70 w-80 h-82 opacity-100 animate-float-slower">
        <img src="/comet2.png" alt="Planet" className="w-full h-full object-contain" />
      </div>

      {/* Moving Planets */}
      <div className="absolute top-1/4 left-20 w-16 h-16 animate-orbit-1">
        <img src="/comet1.png" alt="Planet" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-1/3 right-1/3 w-12 h-12 animate-orbit-2">
        <img src="/comet2.png" alt="Planet" className="w-full h-full object-contain" />
      </div>

      <div className="absolute bottom-1/3 left-1/2 w-20 h-20 animate-orbit-3">
        <img src="/comet1.png" alt="Planet" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-2/3 right-1/4 w-10 h-10 animate-orbit-4">
        <img src="/comet2.png" alt="Planet" className="w-full h-full object-contain" />
      </div>

      {/* Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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

      {/* Sections */}
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