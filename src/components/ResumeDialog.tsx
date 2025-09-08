"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ResumeDialogProps {
  children: React.ReactNode;
}

export const ResumeDialog: React.FC<ResumeDialogProps> = ({ children }) => {
  const handleDownload = () => {
    // For now, we'll create a simple text-based resume
    // In a real application, you would link to an actual PDF file
    const resumeContent = `
ASHIK'S RESUME
==============

FULL-STACK DEVELOPER
Passionate about creating amazing digital experiences

CONTACT INFORMATION
-------------------
Email: developer@example.com
GitHub: https://github.com/username
LinkedIn: https://linkedin.com/in/username
Twitter: https://twitter.com/username

TECHNICAL SKILLS
----------------
Languages: TypeScript, JavaScript, Python, Go, Java, C++
Frontend: React, Next.js, Vue.js, Tailwind CSS, Framer Motion, Three.js
Backend: Node.js, Express.js, FastAPI, NestJS, GraphQL, REST APIs
Databases: PostgreSQL, MongoDB, Redis, MySQL, Prisma, TypeORM
DevOps & Tools: Docker, Kubernetes, AWS, Vercel, Git, CI/CD, Linux
Mobile: React Native, Flutter, Expo, iOS, Android

EXPERIENCE
----------
Full-Stack Developer (5+ years)
• Built scalable web applications and innovative software solutions
• Specialized in modern web technologies with strong frontend and backend expertise
• Created responsive user interfaces, designed robust APIs, and implemented efficient database solutions
• Contributed to open-source projects and wrote technical blogs

FEATURED PROJECTS
-----------------
1. E-Commerce Platform
   Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.
   Tech Stack: Next.js, Node.js, PostgreSQL, Redis, Docker, AWS

2. AI-Powered Chatbot
   Intelligent chatbot with natural language processing capabilities, context awareness, and multi-language support.
   Tech Stack: React, Python, FastAPI, OpenAI API, MongoDB, WebSocket

3. Task Management System
   Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.
   Tech Stack: Vue.js, Express.js, Socket.io, MySQL, JWT

4. Weather Dashboard
   Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.
   Tech Stack: React, TypeScript, Chart.js, OpenWeather API, PWA

ABOUT
-----
I'm a passionate full-stack developer with 5+ years of experience building scalable web applications and innovative software solutions. I specialize in modern web technologies and have a strong background in both frontend and backend development.

When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring the latest trends in software development. I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.

Let's connect and build something amazing together!
    `;

    // Create a blob with the resume content
    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ashik_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-400">
            📄 Resume Download
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Click the button below to download my resume in text format.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              Resume Preview
            </h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <span className="text-green-400 font-semibold">Name:</span>{" "}
                Ashik
              </p>
              <p>
                <span className="text-green-400 font-semibold">Title:</span>{" "}
                Full-Stack Developer
              </p>
              <p>
                <span className="text-green-400 font-semibold">
                  Experience:
                </span>{" "}
                5+ years
              </p>
              <p>
                <span className="text-green-400 font-semibold">Skills:</span>{" "}
                TypeScript, React, Node.js, Python, AWS, and more
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              📥 Download Resume (TXT)
            </button>
          </div>

          <div className="text-xs text-gray-400 text-center">
            Note: This is a text-based resume. For a PDF version, please contact
            me directly.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
