import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-10">
      {/* Right: Text Content */}

      <div className="w-1/2 relative z-10 text-left px-10">
        <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          MOHD. ANAS
        </h1>

        <p className="text-3xl text-gray-300 mb-8 font-light">
          Software Developer
        </p>

        <p className="text-xl text-gray-400 mb-12 max-w-xl">
          Crafting digital experiences that blend innovation with elegant design
        </p>

        {/* Social Buttons */}
        <div className="flex gap-6 mb-12">
          <a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Down Arrow */}
        <ChevronDown className="w-8 h-8 text-gray-300 animate-bounce" />
      </div>

      {/* Left: Portrait */}
      <div 
        className="w-1/2 h-full flex items-center justify-center"
      >
        <div
          className="w-[450px] h-[550px] bg-center bg-cover rounded-2xl shadow-2xl filter grayscale"
          style={{ backgroundImage: "url('/anas_portait.png')" }}
        />
      </div>
    </section>
  );
}
