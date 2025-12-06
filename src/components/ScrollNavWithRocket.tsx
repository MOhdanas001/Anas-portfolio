import { useEffect, useRef, useState } from "react";


export default function ScrollNavWithRocket({ 
  sections = ['Hero', 'Skills', 'Projects', 'About', 'Contact'] 
}) {
  const [currentSection, setCurrentSection] = useState(0);
  const rocketRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const maxScroll = Math.max(1, docHeight);
        
        // Progress from 0 to 1 based on actual scroll
        let progress = scrollY / maxScroll;
        progress = Math.min(1, Math.max(0, progress));

        // Rocket Y position - start at 10vh, end at 90vh
        const startY = window.innerHeight * 0.1;
        const endY = window.innerHeight * 0.9;
        const rocketY = startY + (endY - startY) * progress;

        // Apply transform to rocket
        if (rocketRef.current) {
          const rotate = progress * 25; // slight rotation as it goes down
          rocketRef.current.style.transform = `translateY(${rocketY}px) rotate(${rotate}deg)`;
        }

        // Update current section
        const sectionIndex = Math.round(progress * (sections.length - 1));
        setCurrentSection(sectionIndex);

        tickingRef.current = false;
      });
    };

    // Initial position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  // Click handler to scroll to section
  const handleSectionClick = (i: number) => {
    const targetScroll = (i / (sections.length - 1)) * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed right-2 top-0 z-40 pointer-events-none" style={{ width: '200px', height: '100vh' }}>
        {/* Rocket */}
        <div
          ref={rocketRef}
          className="rocket absolute right-0 will-change-transform w-10 "
          style={{
            transform: 'translateY(0px)',
            transition: 'transform 0.1s linear',
          }}
        >
          <img src="./svg/rocket.svg" alt="" className="rotate-180" />
          <div className="rocket-flame" />
        </div>

        {/* Section labels in rocket's path */}
        <div className="absolute right-12 top-0" style={{ height: '100vh', paddingTop: '10vh', paddingBottom: '10vh' }}>
          <div className="relative h-full flex flex-col justify-between">
            {sections.map((label, i) => (
              <button
                key={i}
                onClick={() => handleSectionClick(i)}
                className={`text-right pointer-events-auto transition-all duration-300 cursor-pointer hover:scale-110 ${
                  currentSection === i 
                    ? 'font-bold  opacity-100 bg-white/10 border border-white/20 rounded text-white text-sm px-4 py-2' 
                    : 'text-gray-500 text-sm opacity-60 hover:opacity-100'
                }`}
                style={{ 
                  whiteSpace: 'nowrap',
                  textShadow: currentSection === i ? '0 0 8px rgba(0,0,0,0.3)' : 'none'
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}