import { useEffect, useRef, useState } from "react";


export default function ScrollNavWithRocket({ 
  sections = ['Home', 'Skills', 'Projects', 'About', 'Contact'] 
}) {
  const [currentSection, setCurrentSection] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const maxScroll = Math.max(1, docHeight);

        let progress = scrollY / maxScroll;
        progress = Math.min(1, Math.max(0, progress));

        const startY = window.innerHeight * 0.1;
        const endY = window.innerHeight * 0.9;
        const rocketY = startY + (endY - startY) * progress;

        if (rocketRef.current) {
          const rotate = progress * 25; 
          rocketRef.current.style.transform = `translateY(${rocketY}px) rotate(${rotate}deg)`;
        }

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
      {/* Desktop/Tablet: side nav */}
      <div className="hidden md:block fixed right-4 top-0 z-40 pointer-events-none w-48 h-screen">
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
          <div className="relative h-full flex flex-col justify-between pr-2">
            {sections.map((label, i) => (
              <button
                key={i}
                onClick={() => handleSectionClick(i)}
                className={`text-right pointer-events-auto transition-all duration-300 cursor-pointer hover:scale-105 text-sm ${
                  currentSection === i 
                    ? 'font-semibold opacity-100 bg-white/10 border border-white/20 rounded text-white px-3 py-1' 
                    : 'text-gray-400 opacity-70 hover:opacity-100'
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

      {/* Mobile: floating launcher and panel */}
      <div className="md:hidden">
        <div className="fixed bottom-6 right-4 z-50">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            className="bg-black/70 backdrop-blur-sm border border-white/20 p-2 rounded-full shadow-lg"
          >
            <img src="./svg/rocket.svg" alt="rocket" className="w-10 h-10" />
          </button>
        </div>

        {/* Panel */}
        <div className={`fixed right-4 bottom-20 z-40 transition-transform duration-300 ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
          <div className="w-56 max-h-[60vh] overflow-auto bg-black/80 backdrop-blur rounded-lg border border-white/20 p-3">
            <div className="flex flex-col gap-2">
              {sections.map((label, i) => (
                <button
                  key={i}
                  onClick={() => { handleSectionClick(i); setMobileOpen(false); }}
                  className={`text-left w-full transition-all duration-200 px-3 py-2 rounded text-sm ${currentSection === i ? 'bg-white/10 text-white font-semibold' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}