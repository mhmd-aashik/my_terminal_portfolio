export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with microservices architecture and deployed on AWS.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot",
    description:
      "Intelligent chatbot with natural language processing capabilities, context awareness, and multi-language support. Integrated with OpenAI GPT-4 API.",
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "OpenAI API",
      "MongoDB",
      "WebSocket",
    ],
    githubUrl: "https://github.com/username/ai-chatbot",
    liveUrl: "https://ai-chatbot-demo.vercel.app",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Management System",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering capabilities.",
    techStack: ["Vue.js", "Express.js", "Socket.io", "MySQL", "JWT"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.",
    techStack: ["React", "TypeScript", "Chart.js", "OpenWeather API", "PWA"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "Dart", "C++"],
  },
  {
    category: "Frontend",
    items: [
      "HTML/CSS",
      "React",
      "Next.js",
      "Vue.js",
      "Bootstrap",
      "Tailwind CSS",
      "Framer Motion",
      "Material-UI",
      "Sass/SCSS",
      "styled-components",
      "Three.js",
      "Webpack",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "HonoJS",
      "GraphQL",
      "REST APIs",
      "gRPC",
      "Socket.IO",
    ],
  },
  {
    category: "Databases & ORMs",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL",
      "Redis",
      "Convex",
      "Prisma",
      "Mongoose",
      "Drizzle",
      "TypeORM",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Linux",
      "Shell Scripting",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Ansible",
      "CI/CD Pipelines",
      "Git",
      "GitHub Actions",
      "Postman",
      "Insomnia",
      "Clerk",
      "Auth.js",
      "Lucia Auth",
      "Plaid",
    ],
  },
  {
    category: "Cloud & Servers",
    items: [
      "Vercel",
      "Heroku",
      "Netlify",
      "Azure",
      "AWS",
      "Cloudflare",
      "OpenShift",
    ],
  },
  {
    category: "Mobile & Desktop",
    items: [
      "React Native",
      "Flutter",
      "Expo",
      "Lynx",
      "iOS",
      "Android",
      "ElectronJS",
    ],
  },
  {
    category: "State Management",
    items: ["Redux", "Zustand", "Recoil"],
  },
  {
    category: "Testing",
    items: ["React Testing Library", "Vitest"],
  },
  {
    category: "Design & Tools",
    items: ["Figma", "Canva", "Photoshop", "Adobe XD"],
  },
  {
    category: "Other",
    items: [
      "DSA",
      "OOP",
      "Internationalization (i18n)",
      "Stripe",
      "Lemon Squeezy",
      "AI",
      "ChatGPT",
    ],
  },
  {
    category: "Languages (Human)",
    items: ["English", "Sinhala", "Tamil"],
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: "software-engineer-pelican",
    company: "Pelican Cube (PVT) LTD",
    position: "Software Engineer",
    location: "Sri Lanka",
    startDate: "Jan 2025",
    endDate: "Present",
    current: true,
    description: [
      "Developed and maintained enterprise-grade web applications.",
      "Optimized applications for performance, scalability, and security.",
      "Collaborated with cross-functional teams to deliver robust solutions.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Flutter",
      "NestJS",
      "Express.js",
      "AWS",
    ],
  },
  {
    id: "fullstack-inventurix",
    company: "InventuriX Technologies",
    position: "Full Stack Developer",
    location: "Sri Lanka",
    startDate: "May 2024",
    endDate: "Dec 2024",
    description: [
      "Led the design and development of scalable web applications using Next.js, Node.js, and Express.js.",
      "Architected cloud-based solutions on Microsoft Azure for scalability, security, and cost-effectiveness.",
      "Integrated CI/CD pipelines to streamline deployments and improve developer productivity.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Azure",
      "Vercel",
      "Tailwind CSS",
    ],
  },
  {
    id: "associate-rangha",
    company: "Rangha Technologies",
    position: "Associate Full Stack Developer",
    location: "Sri Lanka",
    startDate: "Jan 2024",
    endDate: "Mar 2025",
    description: [
      "Developed and maintained web applications using React, Next.js, and Node.js.",
      "Optimized applications for maximum speed and scalability.",
      "Contributed to both frontend and backend development for production-grade projects.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "teaching-assistant-udemy",
    company: "Udemy",
    position: "Teaching Assistant",
    location: "Remote",
    startDate: "Mar 2023",
    endDate: "Mar 2024",
    description: [
      "Assisted students with debugging techniques and resolving software issues efficiently.",
      "Provided technical guidance on full-stack development concepts and best practices.",
      "Supported large-scale online learning communities to enhance developer growth.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Redux",
      "Prisma ORM",
      "Clerk",
      "MySQL",
      "Tailwind CSS",
    ],
  },
  {
    id: "mentor-ztfsh",
    company: "Zero to Full Stack Hero",
    position: "Mentor",
    location: "Remote",
    startDate: "Mar 2020",
    endDate: "Present",
    current: true,
    description: [
      "Mentored aspiring developers through structured project-based learning.",
      "Guided mentees in mastering modern full-stack technologies.",
      "Provided career and technical coaching to help learners achieve professional goals.",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
];

export const contactInfo: ContactInfo = {
  email: "developer@example.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  twitter: "https://twitter.com/username",
};

export const aboutText = `
Welcome to my ZSH Terminal portfolio! I'm Mohammed Aashik, a full-stack developer, desktop app developer, 
and DevOps engineer with 5+ years of experience building scalable web and mobile applications.

I specialize in modern frameworks like React, Next.js, NestJS, and Flutter, with strong expertise in 
databases (MongoDB, PostgreSQL, MySQL) and cloud platforms (AWS, Azure, Vercel). I enjoy working 
across the stack — from creating elegant, responsive user interfaces to designing efficient APIs 
and deploying robust solutions with CI/CD pipelines.

Beyond coding, I’ve mentored aspiring developers, contributed to open-source projects, and 
collaborated on enterprise-grade platforms that emphasize performance, security, and user experience. 
I’m passionate about solving complex problems, exploring new technologies, and building innovative 
products that make an impact.

Let’s connect and create something extraordinary together!
`;

export const helpCommands = [
  { command: "help", description: "Show this help message" },
  { command: "about", description: "Display information about me" },
  { command: "skills", description: "Show my technical skills" },
  { command: "projects", description: "List my featured projects" },
  { command: "experience", description: "Show my work experience" },
  { command: "contact", description: "Get in touch with me" },
  { command: "resume", description: "Download my CV" },
  { command: "clear", description: "Clear the terminal screen" },
  { command: "whoami", description: "Display current user information" },
  { command: "date", description: "Show current date and time" },
  { command: "ls", description: "List available commands" },
];
