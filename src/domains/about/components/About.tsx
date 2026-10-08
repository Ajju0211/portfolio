"use client";
import React from "react";
import { PERSONAL_INFO, EDUCATION_DETAILS } from "@/shared/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: "clamp(48px, 6vw, 64px) 0", width: "100%" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header Row */}
        <SectionHeader 
          label="04" 
          title="About" 
          action={
            <a 
              href={PERSONAL_INFO.resume} 
              target="_blank" 
              rel="noreferrer"
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "4px", 
                fontSize: "0.9rem", 
                fontWeight: 600, 
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--foreground)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
            >
              More <ArrowRight size={16} />
            </a>
          }
        />

        {/* Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(48px, 8vw, 80px)" }}>
          
          {/* Left Column (Bio) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--foreground)", fontWeight: 500 }}>
              I build scalable software systems, and I like owning a feature end to end — the data model, the API, the interface, and the deploy.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
              Day to day I work as a Software & AI Engineer: building robust backend services with Python and Node.js, crafting modern front-ends with React, and deploying them to production environments.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
              The web side is my primary focus — React, Next.js, Node.js, and databases are how my work actually reaches users, and I've shipped production front-ends and cloud deployments.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
              I'm a {EDUCATION_DETAILS.degree} graduate, and I care about writing clean, practical code that solves real problems. Ambiguous requirement to deployed release is the part of the job I enjoy most.
            </p>
          </motion.div>

          {/* Right Column (Data List) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <DataRow label="LOCATION" value={PERSONAL_INFO.location} />
            <DataRow label="FOCUS" value={PERSONAL_INFO.focus} />
            <DataRow label="EXPERIENCE" value={PERSONAL_INFO.experienceYears} />
            <DataRow 
              label="EDUCATION" 
              value={
                <span>
                  B.Sc. Computer Science <span style={{ color: "var(--muted-foreground)" }}>· {EDUCATION_DETAILS.institution}</span>
                </span>
              } 
            />
            <DataRow label="EMAIL" value={<a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: "var(--primary)", textDecoration: "none" }}>{PERSONAL_INFO.email}</a>} />
            <DataRow label="PHONE" value={<a href={`tel:${PERSONAL_INFO.phone}`} style={{ color: "var(--primary)", textDecoration: "none" }}>{PERSONAL_INFO.phone}</a>} isLast />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const DataRow = ({ label, value, isLast = false }: { label: string, value: React.ReactNode, isLast?: boolean }) => (
  <div style={{ padding: "20px 0", borderBottom: isLast ? "none" : "1px solid var(--border)" }}>
    <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--muted-foreground)", textTransform: "uppercase", marginBottom: "6px" }}>
      {label}
    </p>
    <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)" }}>
      {value}
    </div>
  </div>
);
