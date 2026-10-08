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
import { projects } from "@/shared/data";
import { Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectList: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <section id="projects" style={{ padding: "clamp(48px, 6vw, 64px) 0", width: "100%" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        <SectionHeader
          label="02"
          title="Projects"
        />

        {/* ── Grid Layout ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(20px, 2vw, 22px)",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              style={{ display: "flex" }}
            >
              <ProjectCard
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Framer Motion Modal Portal ── */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={handleClose}
            isClosing={false}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
