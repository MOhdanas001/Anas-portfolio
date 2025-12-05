import  { useState, useEffect, useRef } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Project from '../components/project';
import ContactSection from '../components/ContactUs';
import ScrollNavWithRocket from '../components/ScrollNavWithRocket';


const AnimePortfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setScrollProgress(progress);

        // const section = Math.floor((scrolled / window.innerHeight) * 5);
        // setCurrentSection(Math.min(section, 4));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      ref={containerRef}
      className="relative bg-black to-white space-grotesk"
    >
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
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
<ScrollNavWithRocket/>

      {/* Hero Section */}
      <HeroSection />

      <ExperienceTimeline />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}

<Project/>


{/* About Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-6xl font-bold text-center mb-16 text-white">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-200 to-gray-400">
              ABOUT ME
            </span>
          </h2>

          <div className="relative">
            {/* <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl" /> */}
            <div className="relative bg-black/90 backdrop-blur rounded-3xl p-16 border border-white/20 font-mono">
              {/* Code Editor Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-white/60 text-sm">about.js</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 rounded-lg bg-white/5 border border-white/20 p-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">&lt;/&gt;</div>
                    <div className="text-xs text-white/60 tracking-widest">DEVELOPER</div>
                  </div>
                </div>
                <div className="flex-1 text-base">
                  <p className="text-white/90 mb-6 leading-relaxed">
                    <span className="text-white/50">// Passionate software developer</span><br />
                    <span className="text-white">const</span> <span className="text-white/80">developer</span> = {`{`}<br />
                    <span className="ml-4 text-white/80">passion: <span className="text-white">'innovation & design'</span>,</span><br />
                    <span className="ml-4 text-white/80">builds: <span className="text-white">'elegant solutions'</span>,</span><br />
                    <span className="ml-4 text-white/80">expertise: <span className="text-white">'full-stack development'</span>,</span><br />
                    <span className="ml-4 text-white/80">focus: <span className="text-white">'user experience'</span></span><br />
                    {`}`};
                  </p>
                     <p className="text-white/80 mb-6 leading-relaxed border-l-2 border-white/20 pl-4">
                    <span className="text-white/50">// My approach</span><br />
                    I believe in writing clean, maintainable code that solves real problems. Every project is an 
                    opportunity to learn something new and push the boundaries of what's possible. I'm committed 
                    to continuous improvement and staying at the forefront of technology trends.
                  </p>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    <span className="text-white/50">/* When not coding */</span><br />
                    Exploring new technologies, contributing to open source, or enjoying anime and gaming.
                  </p>
               
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm">Detail-Oriented</span>
                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm">Creative</span>
                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm">Fast Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<ContactSection />
    </div>
  );
};

export default AnimePortfolio;