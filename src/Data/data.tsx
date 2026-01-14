



export const titles = ['Software Developer', 'Full Stack Engineer', 'UI/UX Enthusiast', 'Problem Solver'];


 
 export const skills = [
  { name: 'Node.js', color: 'from-blue-500 to-yellow-400', icon: '/Node.js.svg' },
  { name: 'Python', color: 'from-blue-500 to-yellow-400', icon: '/Python.svg' },
  { name: 'Fast API', color: 'from-blue-500 to-yellow-400', icon: '/FastAPI.svg' },
  { name: 'Next.js', color: 'from-yellow-400 to-orange-500', icon: '/Next.js.svg' },
  { name: 'MongoDB', color: 'from-green-600 to-teal-700', icon: '/MongoDB.svg' },
  { name: 'MySQL', color: 'from-green-600 to-teal-700', icon: '/MySQL.svg' },
];

export const projects = [
  {
    title: 'AI text Analyzer',
    subtitle: 'AI powered text analysis tool',
    description: 'Integraed OpenAI API to analyze and summarize text inputs, providing insights and recommendations.',
    tech: ['python', 'Fast API', 'OpenAI API', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-pink-500 to-rose-600',
    icon: '/vipi.webp',
    live: 'https://www.famished.ai/',
    github: 'https://github.com/anas/pixel-saga'
  },
  {
    title: 'Vipi-Customer',
    subtitle: 'All-in-One Delivery App',
    description: 'Vipi is your one-stop delivery app in Kenya, connecting you to top restaurants, trusted shops, and local stores ',
    tech: ['Java', 'Spring', 'MySQL', 'Android'],
    color: 'from-blue-500 to-indigo-600',
    icon: '/vipi.webp',
    live: 'https://play.google.com/store/apps/details?id=com.vipi.customer&pli=1',
    github: 'https://github.com/anas/innovatehub'
  },
  {
    title: 'CarPot',
    subtitle: 'Automative Service Platform',
    description: 'Creted Interravtive platform for car owners to book services, schedule maintenance, and access automotive resources.',
    tech: ['Python', 'Next.js', 'typeScript', 'MongoDB'],
    color: 'from-purple-500 to-pink-600',
    icon: '/CarpotDarkLogoImage.png',
    live: 'https://carpot.com',
    github: 'https://github.com/anas/innovatehub'
  }
];


export const experiences = [
  {
    role: "Assistant Web Developer",
    company: "Protolabz eServices",
    period: "October 2020 - current",
    description:
      "Built modern, responsive user interfaces for SaaS products. Collaborated with designers to implement pixel-perfect designs and ensure excellent UX.",
    technologies: ["React", "CSS", "JavaScript", "Git", "Figma"],
  },
  {
    role: "Web Developer Intern",
    company: "Protolabz eServices",
    period: "May 2024 - October 2020",
    description:
      "Started my journey in web development, working on various projects and learning industry best practices. Contributed to open-source projects and internal tools.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

export const skillCategories = [
  {
    category: "Technologies",
    skills: [
      { name: "Python", icon: "/svg/Python.svg" },
      { name: "Fast API", icon: "/svg/FastAPI.svg" },
      { name: "Next.js", icon: "/svg/Next.js.svg" },
      { name: "React", icon: "/svg/React.svg" },
      { name: "Node.js", icon: "/svg/Node.js.svg" },
      { name: "JavaScript", icon: "/svg/JavaScript.svg" },
      { name: "TypeScript", icon: "/svg/TypeScript.svg" },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "/svg/Docker.svg" },
      { name: "Git", icon: "/svg/Git.svg" },
      { name: "GitHub", icon: "/svg/GitHub.svg" },
      { name: "Linux", icon: "/svg/Linux.svg" },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: "/svg/MongoDB.svg" },
      { name: "MySQL", icon: "/svg/MySQL.svg" },
      { name: "Redis", icon: "/svg/Redis.svg" },
      { name: "Firebase", icon: "/svg/Firebase.svg" },
    ]
  }
];