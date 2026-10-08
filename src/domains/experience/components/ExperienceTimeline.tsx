/**
 * @file ExperienceTimeline.tsx
 * @description Displays the user's career experience in an animated vertical timeline.
 *
 * SRP — Handles only the timeline layout and animation orchestration.
 * Uses shared components (SectionHeader, TechChip) for the UI elements.
 */

"use client";
import React from "react";
import { experienceData } from "@/shared/data";
import { motion } from "framer-motion";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      style={{ padding: "clamp(48px, 6vw, 64px) 0", width: "100%" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        
        <SectionHeader 
          label="01" 
          title="Experience" 
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "clamp(16px, 3vw, 32px)",
                padding: "clamp(24px, 4vw, 32px) 0",
                borderBottom: index !== experienceData.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Left Column: Duration & Type */}
              <div style={{ flex: "0 0 220px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  {exp.duration}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "var(--muted-foreground)",
                    textTransform: "uppercase",
                  }}
                >
                  {exp.type}
                </span>
              </div>

              {/* Right Column: Details */}
              <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "8px" }}>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span style={{ fontSize: "1.2rem", color: "var(--muted-foreground)", fontWeight: 600 }}>·</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--primary)" }}>
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={e => e.currentTarget.style.textDecoration = "none"}>
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "4px"
                  }}
                >
                  {Array.isArray(exp.description) ? (
                    exp.description.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <div style={{ marginTop: "4px", flexShrink: 0 }}>
                          <ArrowRight size={14} color="var(--primary)" />
                        </div>
                        <span style={{ color: "var(--muted-foreground)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                          {item}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{ marginTop: "4px", flexShrink: 0 }}>
                        <ArrowRight size={14} color="var(--primary)" />
                      </div>
                      <span style={{ color: "var(--muted-foreground)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                        {exp.description}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
