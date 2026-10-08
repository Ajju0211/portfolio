import React from "react";
import { FaNodeJs, FaReact, FaDocker, FaJava, FaPython, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiMongodb, SiJavascript, SiCss3, SiExpress, SiSocketdotio,
  SiTypescript, SiNextdotjs, SiMysql, SiPostgresql, SiCplusplus,
  SiGo, SiRedis, SiNestjs, SiTailwindcss,
} from "react-icons/si";

// ----- PERSONAL INFO -----
export const PERSONAL_INFO = {
  name: "Ajay Singh",
  headline: "Building products that solve real problems.",
  bio: "I'm Ajay. I build scalable software applications and the products around them — crafting modern React front-ends, robust backend services, and deploying them to production.",
  availability: "Open to AI & Software Engineer roles",
  focus: "Software Engineer & AI Engineer",
  currentRole: "AI Engineer",
  currentCompany: "ConversAI Labs",
  roleDates: "Aug 2026 – Sep 2026",
  experienceYears: "1+ yr professional",
  experienceSubtitle: "experience in production",
  location: "Thane, Maharashtra",
  locationSubtitle: "Open to remote or relocation",
  lookingFor: "Full-time roles",
  lookingForSubtitle: "Software & AI engineering",
  email: "ajaysdoriyal@gmail.com",
  phone: "+91 7906172359",
  resume: "/resume",
  contactHeadline: "Looking for a Software & AI Engineer?",
  contactDescription: "I'm a Software & AI Engineer who loves owning the entire product lifecycle. From designing robust backends and AI systems, to crafting seamless React front-ends, I build software that solves real problems. Let's talk about how I can bring value to your team.",
};

// ----- NAVIGATION -----
export const NAVIGATION_LINKS = [
  { name: "Home", href: "/#hero", external: false },
  { name: "About", href: "/#about", external: false },
  { name: "Projects", href: "/#projects", external: false },
  { name: "Resume", href: "/resume", external: false },
];

// ----- HERO SECTION -----
export const HERO_ROLES = [
  "Software Engineer.",
  "Backend Engineer.",
  "AI Systems Builder.",
  "Tech Problem Solver.",
];

// ----- TECHNOLOGIES -----
export const TECHNOLOGIES = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#539E43" },
  { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
  { name: "Express", icon: <SiExpress />, color: "#ebebeb" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Redis", icon: <SiRedis />, color: "#FF4438" },
  { name: "Socket.IO", icon: <SiSocketdotio />, color: "#ebebeb" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Go", icon: <SiGo />, color: "#00ADD8" },
];

// ----- SOCIAL LINKS -----
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Ajju0211", icon: <FaGithub size={16} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ajay-singh-689143253/", icon: <FaLinkedin size={16} /> },
  { label: "Twitter", href: "https://twitter.com/", icon: <FaTwitter size={16} /> },
];

// ----- EDUCATION -----
export const EDUCATION_DETAILS = {
  degree: "B.Sc. Computer Science",
  institution: "V.K. Krishna Menon College, Mumbai University",
  cgpa: "7.89 / 10",
};

export * from "./projects";
export * from "./experience";
