import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../Data/data";

gsap.registerPlugin(ScrollTrigger);



export default function ExperienceTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // center line grow (use transform only)
      gsap.set(".timeline-line", { transformOrigin: "top center", scaleY: 0, willChange: "transform" });
      gsap.to(".timeline-line", {
        scaleY: 1,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // items animation: animate transform + opacity only (GPU friendly)
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      gsap.set(items, { opacity: 0, y: 40, willChange: "transform, opacity" });

      // batch them for performance (ScrollTrigger batch)
      ScrollTrigger.batch(items, {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: 40,
            duration: 0.4,
            stagger: 0.02,
            ease: "power3.in",
            overwrite: true,
          }),
        start: "top 85%",
        // Using default scrubless triggers to reduce CPU when scrolling fast
      });

      // dot pop but use transform scale + opacity only; avoid heavy backgroundColor transitions
      gsap.set(".timeline-dot", { scale: 0.6, opacity: 0, willChange: "transform, opacity" });
      gsap.utils.toArray(".timeline-item").forEach((el) => {
        const element = el as HTMLElement;
        const dot = element.querySelector(".timeline-dot");
        if (!dot) return;
        ScrollTrigger.create({
          trigger: element,
          start: "top 75%",
          onEnter: () => {
            gsap.to(dot, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.2)" });
          },
          onLeaveBack: () => {
            gsap.to(dot, { scale: 0.6, opacity: 0, duration: 0.3, ease: "power2.in" });
          },
        });
      });
    }, timelineRef);

    return () => {
      // cleanup
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
      ctx.revert();
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Starfield: single element using box-shadow for many stars (cheap) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.6) 60%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            // generate many tiny stars using box-shadow; adjust count/opacity for perf
            width: "1px",
            height: "1px",
            top: 0,
            left: 0,
            boxShadow:
              // a short example of many coordinates - you can generate a longer string server-side/build-time
              "10px 20px #fff, 40px 80px #fff, 120px 200px #fff, 220px 40px #fff, 300px 120px #fff, 12px 300px #fff, 500px 80px #fff",
            opacity: 0.7,
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-400 to-gray-500 tracking-tight sm:tracking-widest mb-2 sm:mb-4 relative inline-block">
            EXPERIENCE
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-white"></span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 sm:mt-6">A journey through the cosmos of development</p>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-900 overflow-hidden">
            {/* timeline-line uses transform scaleY only */}
            <div className="timeline-line w-full h-full bg-linear-to-b from-white via-gray-300 to-white origin-top" />
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`timeline-item flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-4 sm:gap-6 md:gap-8`}
                >
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right text-left" : "md:text-left text-left"}`}>
                    <div className="group relative w-full">
                      {/* cheaper glow: subtle box-shadow and reduced blur */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-8 transition-opacity duration-300 pointer-events-none"
                           style={{ boxShadow: "0 6px 20px rgba(255,255,255,0.04)" }} />

                      <div
                        className="relative bg-black bg-opacity-60 backdrop-blur-sm border border-gray-700 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                      >
                        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                        <div className={`inline-block mb-2 sm:mb-3 px-3 sm:px-4 py-0.5 sm:py-1 bg-white bg-opacity-10 border border-gray-400 rounded-full`}>
                          <span className="text-black text-xs sm:text-sm font-semibold">{exp.period}</span>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-gray-300 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-gray-400 font-semibold mb-2 sm:mb-3 text-sm">{exp.company}</p>
                          <p className="text-gray-500 mb-3 sm:mb-4 leading-relaxed text-sm">{exp.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-gray-400 bg-gray-900 rounded-full border border-gray-700">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center hidden md:flex w-2/12">
                    <div className="timeline-dot w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-full border-4 border-black z-10 shadow-sm" />
                    <div className="absolute w-5 sm:w-6 h-5 sm:h-6 rounded-full animate-ping opacity-20" />
                  </div>

                  <div className="md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
