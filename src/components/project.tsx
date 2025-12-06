import { ExternalLink, Github } from "lucide-react";
// import React from "react";
import { projects } from "../Data/data";


export default function Project() {
  return (
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
                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                
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
                  <p className="text-gray-400 mb-6 leading-relaxed grow">
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
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-y-full group-hover:translate-y-full transition-all duration-2000 pointer-events-none rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}