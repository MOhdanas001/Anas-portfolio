 
export default function About() {
  return (
 
 <section className="relative min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 max-w-6xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-200 to-gray-400">
              ABOUT ME
            </span>
          </h2>

          <div className="relative">
            <div className="relative bg-black/90 backdrop-blur rounded-lg sm:rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-16 border border-white/20 font-mono h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden flex flex-col">

              {/* Code Editor Header */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10 flex-shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                <span className="ml-3 sm:ml-4 text-white/60 text-xs sm:text-sm">about.js</span>
              </div>

              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start overflow-y-auto pr-2">
                <div className="w-full sm:w-40 md:w-48 h-40 sm:h-44 md:h-48 rounded-lg bg-white/5 border border-white/20 p-1 flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">&lt;/&gt;</div>
                    <div className="text-xs text-white/60 tracking-widest">DEVELOPER</div>
                  </div>
                </div>

                <div className="flex-1 text-xs sm:text-sm md:text-base">
                  <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed">
                    <span className="text-white/50">// Passionate software developer</span><br />
                    <span className="text-white">const</span> <span className="text-white/80">developer</span> = {'{'}<br />
                    <span className="ml-3 sm:ml-4 text-white/80">
                      passion: <span className="text-white">'innovation & design'</span>,
                    </span><br />
                    <span className="ml-3 sm:ml-4 text-white/80">
                      builds: <span className="text-white">'elegant solutions'</span>,
                    </span><br />
                    <span className="ml-3 sm:ml-4 text-white/80">
                      expertise: <span className="text-white">'full-stack development'</span>,
                    </span><br />
                    <span className="ml-3 sm:ml-4 text-white/80">
                      focus: <span className="text-white">'user experience'</span>
                    </span><br />
                    {'}'};
                  </p>

                  <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed border-l-2 border-white/20 pl-3 sm:pl-4">
                    <span className="text-white/50">// My approach</span><br />
                    I believe in writing clean, maintainable code that solves real problems. Every project is an
                    opportunity to learn something new and push the boundaries of what's possible.
                  </p>

                  <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed">
                    <span className="text-white/50">/* When not coding */</span><br />
                    Exploring new technologies, contributing to open source, or enjoying anime and gaming.
                  </p>

                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded text-white text-xs sm:text-sm">Detail-Oriented</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded text-white text-xs sm:text-sm">Creative</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded text-white text-xs sm:text-sm">Fast Learner</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    );  
}