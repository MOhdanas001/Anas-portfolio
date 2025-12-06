 
export default function About() {
  return (
 
 <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-6xl font-bold text-center mb-16 text-white">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-200 to-gray-400">
              ABOUT ME
            </span>
          </h2>

          <div className="relative">
            <div className="relative bg-black/90 backdrop-blur rounded-3xl p-16 border border-white/20 font-mono">

              {/* Code Editor Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-white/60 text-sm">about.js</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 rounded-lg bg-white/5 border border-white/20 p-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">&lt;/&gt;</div>
                    <div className="text-xs text-white/60 tracking-widest">DEVELOPER</div>
                  </div>
                </div>

                <div className="flex-1 text-base">
                  <p className="text-white/90 mb-6 leading-relaxed">
                    <span className="text-white/50">// Passionate software developer</span><br />
                    <span className="text-white">const</span> <span className="text-white/80">developer</span> = {'{'}<br />
                    <span className="ml-4 text-white/80">
                      passion: <span className="text-white">'innovation & design'</span>,
                    </span><br />
                    <span className="ml-4 text-white/80">
                      builds: <span className="text-white">'elegant solutions'</span>,
                    </span><br />
                    <span className="ml-4 text-white/80">
                      expertise: <span className="text-white">'full-stack development'</span>,
                    </span><br />
                    <span className="ml-4 text-white/80">
                      focus: <span className="text-white">'user experience'</span>
                    </span><br />
                    {'}'};
                  </p>

                  <p className="text-white/80 mb-6 leading-relaxed border-l-2 border-white/20 pl-4">
                    <span className="text-white/50">// My approach</span><br />
                    I believe in writing clean, maintainable code that solves real problems. Every project is an
                    opportunity to learn something new and push the boundaries of what's possible.
                  </p>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    <span className="text-white/50">/* When not coding */</span><br />
                    Exploring new technologies, contributing to open source, or enjoying anime and gaming.
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm">Detail-Oriented</span>
                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm">Creative</span>
                    <span className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm">Fast Learner</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    );  
}