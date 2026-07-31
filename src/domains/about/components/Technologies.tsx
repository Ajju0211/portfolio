/**
 * @file Technologies.tsx
 * @description Renders the Technologies / Toolkit section of the portfolio.
 *
 * SRP — Handles the layout and scroll animations for the tech grid.
 * Delegates individual tech chip rendering to `TechChip` and header to `SectionHeader`.
 */

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaNodeJs, FaReact, FaDocker, FaJava, FaPython } from "react-icons/fa";
import {
  SiMongodb, SiJavascript, SiCss3, SiExpress, SiSocketdotio,
  SiTypescript, SiNextdotjs, SiMysql, SiPostgresql, SiCplusplus,
  SiGo, SiRedis, SiNestjs, SiTailwindcss,
} from "react-icons/si";

import { SectionHeader } from "@/shared/ui/SectionHeader";
import { TechChip } from "@/shared/ui/TechChip";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STACK = [
  { name: "React",       icon: <FaReact />,      color: "#61DAFB" },
  { name: "Next.js",     icon: <SiNextdotjs />,   color: "#ffffff" },
  { name: "TypeScript",  icon: <SiTypescript />,  color: "#3178C6" },
  { name: "JavaScript",  icon: <SiJavascript />,  color: "#F7DF1E" },
  { name: "Node.js",     icon: <FaNodeJs />,      color: "#539E43" },
  { name: "NestJS",      icon: <SiNestjs />,      color: "#E0234E" },
  { name: "Express",     icon: <SiExpress />,     color: "#ebebeb" },
  { name: "MongoDB",     icon: <SiMongodb />,     color: "#47A248" },
  { name: "PostgreSQL",  icon: <SiPostgresql />,  color: "#336791" },
  { name: "MySQL",       icon: <SiMysql />,       color: "#4479A1" },
  { name: "Redis",       icon: <SiRedis />,       color: "#FF4438" },
  { name: "Socket.IO",   icon: <SiSocketdotio />, color: "#ebebeb" },
  { name: "Docker",      icon: <FaDocker />,      color: "#2496ED" },
  { name: "Tailwind",    icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "CSS3",        icon: <SiCss3 />,        color: "#1572B6" },
  { name: "Java",        icon: <FaJava />,        color: "#007396" },
  { name: "Python",      icon: <FaPython />,      color: "#3776AB" },
  { name: "C++",         icon: <SiCplusplus />,   color: "#00599C" },
  { name: "Go",          icon: <SiGo />,          color: "#00ADD8" },
];

export const Technologies: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const headerRef = useScrollReveal({ yOffset: 50, duration: 0.85 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // All chips stagger in together
      if (chipRefs.current.length > 0) {
        gsap.fromTo(
          chipRefs.current,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.45,
            stagger: { amount: 0.8, from: "start" },
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 87%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="technologies"
      ref={sectionRef}
      style={{ padding: "clamp(60px, 10vw, 120px) 0", width: "100%" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 80px)" }}>
        
        <SectionHeader 
          ref={headerRef} 
          label="Toolkit" 
          title="Technologies" 
        />

        <div
          ref={gridRef}
          style={{ display: "flex", flexWrap: "wrap", gap: "clamp(6px, 1vw, 12px)" }}
        >
          {STACK.map((tech, i) => (
            <TechChip
              key={tech.name}
              ref={(el) => { chipRefs.current[i] = el; }}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
