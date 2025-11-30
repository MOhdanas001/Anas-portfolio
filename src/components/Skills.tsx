import React from 'react';

// Organized skills data structure
const skillCategories = [
  {
    category: "Technologies",
    skills: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Linux", icon: "/icons/linux.svg" },
      { name: "CI/CD", icon: "/icons/cicd.svg" },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white tracking-tight mb-4 relative inline-block">
            SKILLS
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-400 text-lg mt-6">Master the stack, own the craft</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Glow Effect Background */}
              <div className="absolute inset-0 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 group-hover:blur-3xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-black bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 group-hover:border-blue-500 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] overflow-hidden min-h-[500px]">
                
                {/* Animated Border Lines */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="mb-8 pb-6 border-b border-gray-800 group-hover:border-blue-500 transition-colors duration-500">
                    <h3 className="text-3xl font-bold text-white transition-all duration-300 text-center group-hover:text-blue-400">
                      {category.category}
                    </h3>
                    <div className="mt-3 h-1 w-20 mx-auto bg-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-black bg-opacity-40 border border-gray-800 hover:border-blue-500 hover:bg-opacity-60 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group/skill"
                      >
                        {/* Icon Container */}
                        <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
                          {/* Rotating Ring on Skill Hover */}
                          <div className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-0 group-hover/skill:opacity-50 group-hover/skill:animate-spin transition-opacity duration-300" style={{ animationDuration: '3s' }}></div>
                          
                          {/* Icon */}
                          <div className="relative transform transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6">
                            <img 
                              src={skill.icon} 
                              alt={`${skill.name} icon`}
                              className="w-12 h-12 object-contain filter brightness-90 group-hover/skill:brightness-125 group-hover/skill:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        {/* Skill Name */}
                        <p className="text-sm font-semibold text-gray-300 group-hover/skill:text-blue-400 text-center transition-colors duration-300">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-10 transform -translate-y-full group-hover:translate-y-full transition-all duration-2000 pointer-events-none rounded-2xl"></div>
                
                {/* Particle Effect */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-[50] transition-all duration-1000 pointer-events-none blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        .group/skill:hover img {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}