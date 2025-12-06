
import { skillCategories } from "../Data/data";



export default function Skills() {


  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center bg-black">


      {/* Floating Planets */}
      <div className="absolute top-10 right-20 w-24 h-24 opacity-20 animate-float-slow">
        <img src="YOUR_PLANET_IMAGE_URL_1" alt="Planet" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-15 animate-float-slower">
        <img src="YOUR_PLANET_IMAGE_URL_2" alt="Planet" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/2 right-10 w-20 h-20 opacity-10 animate-orbit-1">
        <img src="YOUR_PLANET_IMAGE_URL_3" alt="Planet" className="w-full h-full object-contain" />
      </div>

 
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white tracking-widest mb-4 relative inline-block">
            SKILLS
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
          </h2>
          <p className="text-gray-400 text-lg mt-6">Navigating the technology constellation</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Glow Effect Background */}
              <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700 group-hover:blur-3xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-black bg-opacity-60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-500 group-hover:border-white group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] overflow-hidden min-h-[500px]">
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="mb-8 pb-6 border-b border-gray-700 group-hover:border-white transition-colors duration-500">
                    <h3 className="text-3xl font-bold text-white transition-all duration-300 text-center group-hover:text-gray-300">
                      {category.category}
                    </h3>
                    <div className="mt-3 h-1 w-20 mx-auto bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-row items-center justify-center p-4 rounded-xl bg-black bg-opacity-60 border border-gray-700 hover:border-white hover:bg-opacity-80 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group/skill"
                      >
                        {/* Icon Container */}
                        <div className="relative w-6 h-6 mb-3 flex items-center justify-center">
                          {/* Rotating Ring on Skill Hover */}
                          <div className="absolute inset-0 border-2 border-white rounded-full opacity-0 group-hover/skill:opacity-50 transition-opacity duration-300" style={{ animation: 'orbit-ring 3s linear infinite' }}></div>
                          
                          {/* Icon */}
                          <div className="relative transform transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6">
                            <img 
                              src={skill.icon} 
                              alt={`${skill.name} icon`}
                              className="w-12 h-12 object-contain filter brightness-90 group-hover/skill:brightness-125 group-hover/skill:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        {/* Skill Name */}
                        <p className="text-sm font-semibold text-gray-400 group-hover/skill:text-white text-center transition-colors duration-300">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transform -translate-y-full group-hover:translate-y-full transition-all duration-2000 pointer-events-none rounded-2xl"></div>
                
                {/* Particle Effect */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-[50] transition-all duration-1000 pointer-events-none blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}