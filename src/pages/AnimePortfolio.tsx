import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { projects } from '../Data/data';
import Skills from '../components/Skills';
import ExperienceTimeline from '../components/ExperienceTimeline';


const AnimePortfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setScrollProgress(progress);

        const section = Math.floor((scrolled / window.innerHeight) * 5);
        setCurrentSection(Math.min(section, 4));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-b from-black via-neutral-700 to-white space-grotesk"
    >
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
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {['Hero', 'Skills', 'Projects', 'About', 'Contact'].map((label, i) => (
          <button
            key={i}
            onClick={() => window.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' })}
            className="group flex items-center"
          >
            <span className="text-white text-xs opacity-0 group-hover:opacity-100 mr-2 transition-opacity">
              {label}
            </span>
            <div className={`w-3 h-3 rounded-full border-2 transition-all ${currentSection === i
                ? 'bg-cyan-400 border-cyan-400 scale-125'
                : 'border-gray-500 hover:border-cyan-400'
              }`} />
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <HeroSection />

      <ExperienceTimeline />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}

      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white tracking-tight mb-4 relative inline-block">
            PROJECTS
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
          </h2>
          <p className="text-gray-400 text-lg mt-6">Building solutions that make a difference</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700 group-hover:blur-3xl"></div>
              
              {/* Project Card */}
              <div className="relative bg-black bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 group-hover:border-white group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden h-full flex flex-col">
                
                {/* Animated Border Lines */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                    {/* Rotating Ring */}
                    <div className="absolute inset-0 border-2 border-white rounded-xl opacity-0 group-hover:opacity-50 group-hover:animate-spin transition-opacity duration-300" style={{ animationDuration: '3s' }}></div>
                    
                    {/* Icon/Image */}
                    <div className="relative w-full h-full bg-white rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <img 
                        src={project.icon} 
                        alt={`${project.title} icon`}
                        className="w-10 h-10 object-contain filter invert"
                      />
                    </div>
                  </div>
                  
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-semibold mb-4 text-sm">
                    {project.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold text-gray-300 bg-gray-800 bg-opacity-50 rounded-full border border-gray-700 hover:border-white hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white bg-opacity-10 border border-white rounded-lg  hover:bg-opacity-20 hover:scale-105 transition-all duration-300 group/btn"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-gray-300 hover:border-white hover:text-white hover:scale-105 transition-all duration-300 group/btn"
                    >
                      <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
                
                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-y-full group-hover:translate-y-full transition-all duration-2000 pointer-events-none rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* About Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-16 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-600">
              ABOUT ME
            </span>
          </h2>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/80 backdrop-blur rounded-3xl p-12 border border-white/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-green-400 to-cyan-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                    🧘‍♂️
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    Passionate software developer blending innovation with design. I build elegant solutions
                    that transform ideas into reality. With expertise across full-stack development and a keen
                    eye for user experience, I craft applications that users love.
                  </p>
                  <p className="text-lg text-gray-400 mb-6">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                    or enjoying anime and gaming.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-400">🎯 Detail-Oriented</span>
                    <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400">💡 Creative</span>
                    <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-400">🚀 Fast Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-6xl font-bold text-center mb-16 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
              LET'S CONNECT
            </span>
          </h2>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/80 backdrop-blur rounded-3xl p-12 border border-white/10">
              <p className="text-2xl text-center text-gray-300 mb-12">
                Ready to bring your next project to life? Let's talk!
              </p>

              <div className="space-y-6 mb-12">
                <a href="mailto:kai.sakurai@example.com" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white text-lg group-hover:text-cyan-400 transition-colors">kai.sakurai@example.com</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white text-lg group-hover:text-cyan-400 transition-colors">linkedin.com/in/kai-sakurai</p>
                  </div>
                </a>
              </div>

              <button className="w-full py-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-3 group">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimePortfolio;