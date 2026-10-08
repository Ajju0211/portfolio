/**
 * @file SectionHeader.tsx
 * @description A reusable, consistently-styled section header component.
 *
 * OCP (Open/Closed Principle) — the component is open for extension via props
 * but closed for modification: consumers customise appearance through the
 * exposed prop API rather than forking internal markup.
 *
 * ISP (Interface Segregation) — the prop interface is intentionally minimal.
 * Consumers receive only what they need.
 */

"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string; // Used for the number, e.g., "01"
  title: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ label, title, action, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginBottom: "clamp(32px, 5vw, 48px)"
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600 }}>{label}</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}>{title}</h2>
        </div>
        {action && <div>{action}</div>}
      </motion.div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
export type { SectionHeaderProps };
