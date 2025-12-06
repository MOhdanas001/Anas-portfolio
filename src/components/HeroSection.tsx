import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  // Floating text items - generated once
  const [floatingTexts] = useState(() => [
    { text: 'React', top: '15%', left: '40%', delay: 0, duration: 15 },
    { text: 'Node.js', top: '70%', left: '46%', delay: 2, duration: 18 },
    { text: 'TypeScript', top: '25%', left: '55%', delay: 1, duration: 20 },
    { text: 'MongoDB', top: '80%', left: '49%', delay: 3, duration: 16 },
    { text: 'API', top: '45%', left: '45%', delay: 1.5, duration: 17 },
    { text: 'CSS', top: '55%', left: '60%', delay: 2.5, duration: 19 },
  ]);

  // Typing animation effect
  useEffect(() => {
    const titles = ['Software Developer', 'Full Stack Engineer', 'UI/UX Enthusiast', 'Problem Solver'];
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length];
      const updatedText = isDeleting
        ? currentTitle.substring(0, displayText.length - 1)
        : currentTitle.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);
  // Image tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  

  return (
    <section className=" relative min-h-screen flex items-center justify-center overflow-hidden text-white px-10">
      {/* Floating Tech Words */}
      {floatingTexts.map((item, index) => (
        <div
          key={index}
          className="absolute text-white font-bold text-2xl pointer-events-none select-none"
          style={{
            top: item.top,
            left: item.left,
            animation: `floatText ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.text}
        </div>
      ))}

      <div className="w-1/2 relative z-10 text-left px-10">
        <h1 
          ref={titleRef}
          className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400"
        >
          MOHD. ANAS
        </h1>

        <div className="h-12 mb-8">
          <p className="text-3xl text-gray-300 font-light">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-xl">
          Crafting digital experiences that blend innovation with elegant design
        </p>

        {/* Social Buttons */}
        <div className="flex gap-6 mb-12 ">
          <a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:rotate-12 cursor-pointer">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:rotate-12 cursor-pointer">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 hover:rotate-12 cursor-pointer">
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
        <ChevronDown className="w-8 h-8 text-gray-300" style={{ animationDelay: '0.7s' }} />
      </div>

      {/* Right: Portrait with Tilt Effect */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-[450px] h-[550px] bg-center bg-cover rounded-2xl  hover:shadow-slate-300 hover:shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-800 cursor-pointer"
          style={{ 
            backgroundImage: "url('/anas_portait.png')",
            transition: 'transform 0.1s ease-out, filter 0.5s ease',
          }}
        />
      </div>
    </section>
  );
}