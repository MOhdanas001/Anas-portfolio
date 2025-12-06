import  { useEffect, useRef } from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';
import { gsap } from 'gsap';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const nebula1Ref = useRef<HTMLDivElement>(null);
  const nebula2Ref = useRef<HTMLDivElement>(null);
  const nebula3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current)
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: -50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Cards animation
      if (cardsRef.current)
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.5
      });

      // Nebula floating animation
      gsap.to(nebula1Ref.current, {
        y: 30,
        x: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(nebula2Ref.current, {
        y: -40,
        x: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(nebula3Ref.current, {
        y: 20,
        x: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Star twinkling animation
      if (starsRef.current) {
        const stars = starsRef.current.querySelectorAll('.star');
        stars.forEach((star: Element) => {
          gsap.to(star, {
            opacity: Math.random() * 0.3 + 0.2,
            duration: Math.random() * 2 + 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      }
    }, sectionRef);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;

      gsap.to(nebula1Ref.current, {
        x: xPos * 1.5,
        y: yPos * 1.5,
        duration: 2,
        ease: 'power2.out'
      });

      gsap.to(nebula2Ref.current, {
        x: -xPos * 1.2,
        y: -yPos * 1.2,
        duration: 2,
        ease: 'power2.out'
      });

      gsap.to(nebula3Ref.current, {
        x: xPos * 0.8,
        y: -yPos * 0.8,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <style>{`
        .star {
          animation: twinkle 3s infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .cosmic-text {
          background: linear-gradient(90deg, #00f5ff, #a78bfa, #00f5ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>

      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
  
        {/* Nebula Clouds */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20" ref={nebula1Ref} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20" ref={nebula2Ref} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-15" ref={nebula3Ref} />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12" ref={headerRef}>
            <h2 className="text-6xl font-bold text-white tracking-tight mb-4 relative inline-block">
              <span className="cosmic-text">LET'S CONNECT</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent"></span>
            </h2>
            <p className="text-gray-300 text-lg mt-4">🚀 Ready to launch your next project into orbit? Let's talk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={cardsRef}>
            <div className="col-span-2 relative bg-linear-to-br from-purple-900/20 via-black/40 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
              <p className="text-gray-200 text-lg mb-6">
                ✨ I'm open to collaboration, freelance work, and full-time opportunities. 
                Reach out via email or connect on LinkedIn and I'll get back to you at lightspeed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:kai.sakurai@example.com" className="group flex items-center gap-4 p-4 bg-linear-to-br from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-cyan-300 text-sm font-semibold">Email</p>
                    <p className="text-white text-lg break-all">kai.sakurai@example.com</p>
                  </div>
                </a>

                <a href="#" className="group flex items-center gap-4 p-4 bg-linear-to-br from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm font-semibold">LinkedIn</p>
                    <p className="text-white text-lg">linkedin.com/in/kai-sakurai</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-lg text-white hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="relative bg-linear-to-br from-purple-900/20 via-black/30 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 flex flex-col items-center justify-center shadow-2xl shadow-purple-500/10">
              <div className="w-28 h-28 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 border border-cyan-500/30">
                <div className="text-5xl font-bold bg-linear-to-br from-cyan-400 to-purple-400 bg-clip-text text-transparent">@</div>
              </div>
              <p className="text-gray-300 text-center">
                🌟 Prefer another platform? Share a message and I'll respond within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}