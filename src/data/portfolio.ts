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
    items: ["TypeScript", "JavaScript", "Python", "Go", "Java", "C++"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "NestJS",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "TypeORM"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "AWS", "Vercel", "Git", "CI/CD", "Linux"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Expo", "iOS", "Android"],
  },
];

export const contactInfo: ContactInfo = {
  email: "developer@example.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  twitter: "https://twitter.com/username",
};

export const aboutText = `
Welcome to my terminal portfolio! I'm a passionate full-stack developer with 5+ years of experience 
building scalable web applications and innovative software solutions.

I specialize in modern web technologies and have a strong background in both frontend and backend 
development. My expertise includes creating responsive user interfaces, designing robust APIs, 
and implementing efficient database solutions.

When I'm not coding, you can find me contributing to open-source projects, writing technical 
blogs, or exploring the latest trends in software development. I'm always eager to learn new 
technologies and take on challenging projects that push the boundaries of what's possible.

Let's connect and build something amazing together!
`;

export const helpCommands = [
  { command: "help", description: "Show this help message" },
  { command: "about", description: "Display information about me" },
  { command: "skills", description: "Show my technical skills" },
  { command: "projects", description: "List my featured projects" },
  { command: "contact", description: "Get in touch with me" },
  { command: "resume", description: "Download my resume" },
  { command: "clear", description: "Clear the terminal screen" },
  { command: "whoami", description: "Display current user information" },
  { command: "date", description: "Show current date and time" },
  { command: "ls", description: "List available commands" },
];
