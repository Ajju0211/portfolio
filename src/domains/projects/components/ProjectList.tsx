/**
 * @file ProjectList.tsx
 * @description The main component for the Projects domain.
 *
 * SRP (Single Responsibility Principle) — delegates rendering of individual
 * cards and the modal to dedicated sub-components. This file only handles
 * the list state and layout.
 *
 * Note: Removed Framer Motion (AnimatePresence) to rely strictly on GSAP
 * for a unified, high-performance animation engine.
 */

"use client";
import React, { useState } from "react";
import { projects } from "../data/projects";
import { Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

export const ProjectList: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  // Use our custom hook for the section header animation
  const headerRef = useScrollReveal({ yOffset: 50, duration: 0.85 });

  const handleClose = () => {
    setIsClosing(true);
    // The ProjectModal handles its own GSAP exit animation.
    // We wait 400ms (duration of the exit animation) before actually unmounting it.
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, 450);
  };

  return (
    <section id="projects" style={{ padding: "clamp(60px, 10vw, 120px) 0", width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 80px)" }}>
        
        <SectionHeader 
          ref={headerRef} 
          label="Selected Work" 
          title="Projects" 
        />

        {/* ── Grid Layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(16px, 2.5vw, 28px)",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* ── GSAP Modal Portal ── */}
      {selected && (
        <ProjectModal 
          project={selected} 
          onClose={handleClose} 
          isClosing={isClosing} 
        />
      )}
    </section>
  );
};
