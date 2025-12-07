import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, ChevronDown, Code, Download} from "lucide-react";
import { gsap } from "gsap"
import { titles } from "../Data/data";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [floatingTexts] = useState(() => [
    { text: "Clean Code Practitioner", top: "26%", left: "31%", delay: 0, duration: 15 },
    { text: "Performance-Driven Engineer", top: "80%", left: "7%", delay: 0, duration: 18 },
    { text: "Collaborative Team Player", top: "41%", left: "1%", delay: 0, duration: 20 },
    { text: "Always Curious, Always Improving", top: "59%", left: "31%", delay: 0, duration: 16 },
  ]);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length];
      const updatedText = isDeleting
        ? currentTitle.substring(0, displayText.length - 1)
        : currentTitle.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === "") {
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

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-description", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-social", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.4,
      });

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      gsap.from(".floating-text", {
        y: -20,
        opacity: 0,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.2,
        delay: 0.6,
      });

      gsap.from(".hero-chevron", {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    imageRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden text-white px-4 md:px-10 py-16 gap-10 md:gap-0"
    >
      {floatingTexts.map((item, index) => (
        <div
          key={index}
          className="floating-text absolute hidden lg:block text-white font-bold text-xl xl:text-2xl pointer-events-none select-none"
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

      <div className="w-full md:w-1/2 relative z-10 text-center md:text-left md:px-10 space-y-6">
        <h1
          ref={titleRef}
          className="text-5xl  sm:text-6xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-400 to-gray-500"
        >
          MOHD. ANAS
        </h1>

        <div className="h-10 sm:h-12 hero-subtitle">
          <p className="text-2xl sm:text-3xl text-gray-300 font-light">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="hero-description text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0">
          Crafting digital experiences that blend innovation with elegant design
        </p>

        <div className=" hero-social flex gap-6 mb-12 ">
          <a href='https://github.com/MOhdanas001' target='_blank' className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 cursor-pointer">
            <Github className="w-6 h-6 text-white" /> </a>
          <a href='https://linkedin.com/in/anas13dec' target='_blank' className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 cursor-pointer">
            <Linkedin className="w-6 h-6 text-white" /> </a> 
            <a href="https://drive.google.com/file/d/1GdRujxM7-Vo7w2rdwKtQ9eWllV_NQDaB/view?usp=drive_link" target='_blank' className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 cursor-pointer">
            <Download className="w-6 h-6 text-white" /> </a> 
            <a href='https://leetcode.com/u/anaskhan2000/' target='_blank' className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 cursor-pointer">
            <Code className="w-6 h-6 text-white" /> </a> </div>

        <div className="flex justify-center md:justify-start">
          <ChevronDown className="hero-chevron w-7 h-7 sm:w-8 sm:h-8 text-gray-300" />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-56 h-72 sm:w-72 sm:h-96 md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[550px] bg-center bg-cover rounded-2xl hover:shadow-slate-300 hover:shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
          style={{
            backgroundImage: "url('/anas_portait.png')",
            transition: "transform 0.1s ease-out, filter 0.5s ease",
          }}
        />
      </div>
    </section>
  );
}
