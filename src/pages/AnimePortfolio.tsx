import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

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

  const skills = [
    { name: 'JavaScript', color: 'from-yellow-400 to-orange-500', icon: '⚡' },
    { name: 'React', color: 'from-blue-400 to-cyan-500', icon: '⚛️' },
    { name: 'Java', color: 'from-red-500 to-orange-600', icon: '☕' },
    { name: 'Spring Boot', color: 'from-green-400 to-emerald-600', icon: '🍃' },
    { name: 'Python', color: 'from-blue-500 to-yellow-400', icon: '🐍' },
    { name: 'Django', color: 'from-green-600 to-teal-700', icon: '🎯' }
  ];

  const projects = [
    {
      title: 'Pixel Saga',
      subtitle: 'Mobile Game',
      description: 'Retro-style mobile game with pixel art graphics and engaging gameplay',
      tech: ['Unity', 'C#', 'Firebase'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'InnovateHub',
      subtitle: 'SaaS Platform',
      description: 'Comprehensive project management and collaboration platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'NeuralNet',
      subtitle: 'AI Data Viz Tool',
      description: 'Interactive visualization tool for neural network architectures',
      tech: ['Python', 'TensorFlow', 'D3.js'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950">
      {/* Animated Background */}
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
            <div className={`w-3 h-3 rounded-full border-2 transition-all ${
              currentSection === i 
                ? 'bg-cyan-400 border-cyan-400 scale-125' 
                : 'border-gray-500 hover:border-cyan-400'
            }`} />
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center text-2xl">
              🔥
            </div>
          </div>
          
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
            KAI SAKURAI
          </h1>
          <p className="text-3xl text-purple-300 mb-8 font-light">Software Developer</p>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting digital experiences that blend innovation with elegant design
          </p>
          
          <div className="flex gap-6 justify-center mb-12">
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-cyan-400/20 transition-all hover:scale-110">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-cyan-400/20 transition-all hover:scale-110">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-cyan-400/20 transition-all hover:scale-110">
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
          
          <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto animate-bounce" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-16 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              SKILLS
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="relative bg-slate-900/80 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:w-full`}
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-16 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              PROJECTS
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="relative bg-slate-900/80 backdrop-blur rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all hover:scale-105 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-3xl mb-6">
                    {index === 0 ? '🎮' : index === 1 ? '💼' : '🧠'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-300 mb-4">{project.subtitle}</p>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
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