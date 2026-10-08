/**
 * @file Technologies.tsx
 * @description Renders the Technologies / Toolkit section of the portfolio.
 *
 * SRP — Handles the layout and scroll animations for the tech grid.
 * Delegates individual tech chip rendering to `TechChip` and header to `SectionHeader`.
 */

"use client";
import React from "react";
import { TECHNOLOGIES } from "@/shared/data";
import { motion } from "framer-motion";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { TechChip } from "@/shared/ui/TechChip";

export const Technologies: React.FC = () => {
  return (
    <section
      id="technologies"
      style={{ padding: "clamp(48px, 6vw, 64px) 0", width: "100%" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        
        <SectionHeader 
          label="03" 
          title="Technologies" 
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          style={{ display: "flex", flexWrap: "wrap", gap: "clamp(6px, 1vw, 12px)" }}
        >
          {TECHNOLOGIES.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { y: 30, opacity: 0, scale: 0.9 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
              }}
            >
              <TechChip
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
