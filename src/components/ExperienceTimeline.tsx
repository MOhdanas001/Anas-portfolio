import React, { useEffect, useRef } from 'react';

// Experience data
const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business problems.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"]
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client projects, implementing RESTful APIs and responsive front-end interfaces. Improved application performance by 40%.",
    technologies: ["JavaScript", "Python", "PostgreSQL", "Docker", "Redis"]
  },
  {
    role: "Frontend Developer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    description: "Built modern, responsive user interfaces for SaaS products. Collaborated with designers to implement pixel-perfect designs and ensure excellent UX.",
    technologies: ["React", "CSS", "JavaScript", "Git", "Figma"]
  },
  {
    role: "Junior Developer",
    company: "Code Academy",
    period: "2019 - 2020",
    description: "Started my journey in web development, working on various projects and learning industry best practices. Contributed to open-source projects and internal tools.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
  }
];

export default function ExperienceTimeline() {
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger
    const loadGSAP = async () => {
      const gsap = (await import('https://cdn.skypack.dev/gsap@3.12.2')).default;
      const ScrollTrigger = (await import('https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger')).default;
      
      gsap.registerPlugin(ScrollTrigger);

      // Animate timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          }
        }
      );

      // Animate each timeline item
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const isLeft = index % 2 === 0;
        
        // Card animation
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isLeft ? -100 : 100,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Dot animation
        const dot = item.querySelector('.timeline-dot');
        gsap.fromTo(
          dot,
          {
            scale: 0,
            backgroundColor: '#1f2937'
          },
          {
            scale: 1,
            backgroundColor: '#3b82f6',
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Glow effect animation
        const glow = item.querySelector('.glow-effect');
        gsap.fromTo(
          glow,
          {
            opacity: 0,
            scale: 0.5
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    };

    loadGSAP();
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white tracking-tight mb-4 relative inline-block">
            EXPERIENCE
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-400 text-lg mt-6">My professional journey through time</p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800 overflow-hidden">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 origin-top"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={el => itemsRef.current[index] = el}
                  className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                    <div className="group relative">
                      {/* Glow Effect */}
                      <div className="glow-effect absolute inset-0 bg-blue-500 rounded-2xl opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20"></div>
                      
                      {/* Card */}
                      <div className="relative bg-black bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:border-blue-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        {/* Animated Border Lines */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Period Badge */}
                        <div className={`inline-block mb-3 px-4 py-1 bg-blue-500 bg-opacity-20 border border-blue-500 rounded-full ${isLeft ? 'float-right' : 'float-left'}`}>
                          <span className="text-blue-400 text-sm font-semibold">{exp.period}</span>
                        </div>
                        
                        <div className="clear-both">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-blue-400 font-semibold mb-3">{exp.company}</p>
                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative flex items-center justify-center w-2/12">
                    <div className="timeline-dot w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 z-10 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
                    
                    {/* Pulse Effect */}
                    <div className="absolute w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Empty Space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* End Marker */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 shadow-[0_0_30px_rgba(59,130,246,0.8)]"></div>
              <div className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}