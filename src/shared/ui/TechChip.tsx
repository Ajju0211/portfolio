/**
 * @file TechChip.tsx
 * @description A reusable chip component for displaying technologies.
 *
 * OCP (Open/Closed Principle) — easy to style externally via className or style props,
 * but the core interaction (hover colors) is encapsulated.
 */

"use client";
import React, { forwardRef } from "react";

export interface TechChipProps {
  /** The name of the technology (e.g., "React") */
  name: string;
  /** Optional icon element */
  icon?: React.ReactNode;
  /** The brand color of the technology (e.g., "#61DAFB") */
  color?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
  /** Optional className */
  className?: string;
}

/**
 * Renders a pill-shaped badge for a technology.
 * If a `color` is provided, it applies brand-specific hover effects.
 */
export const TechChip = forwardRef<HTMLDivElement, TechChipProps>(
  ({ name, icon, color, style, className }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "clamp(8px, 1.2vw, 12px) clamp(14px, 2vw, 20px)",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          background: "var(--card)",
          cursor: "default",
          transition: "border-color 0.25s, background 0.25s, transform 0.2s",
          ...style,
        }}
        onMouseEnter={(e) => {
          if (color) {
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.background = "var(--muted)";
            e.currentTarget.style.transform = "translateY(-2px)";
            const iconEl = e.currentTarget.querySelector(".tech-icon") as HTMLElement;
            if (iconEl) iconEl.style.color = color;
            const labelEl = e.currentTarget.querySelector(".tech-label") as HTMLElement;
            if (labelEl) labelEl.style.color = "var(--foreground)";
          }
        }}
        onMouseLeave={(e) => {
          if (color) {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.background = "var(--card)";
            e.currentTarget.style.transform = "translateY(0)";
            const iconEl = e.currentTarget.querySelector(".tech-icon") as HTMLElement;
            if (iconEl) iconEl.style.color = "var(--muted-foreground)";
            const labelEl = e.currentTarget.querySelector(".tech-label") as HTMLElement;
            if (labelEl) labelEl.style.color = "var(--muted-foreground)";
          }
        }}
      >
        {icon && (
          <span
            className="tech-icon"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "var(--muted-foreground)",
              transition: "color 0.25s",
              lineHeight: 1,
              display: "flex",
            }}
          >
            {icon}
          </span>
        )}
        <span
          className="tech-label"
          style={{
            fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
            fontWeight: 500,
            color: "var(--muted-foreground)",
            transition: "color 0.25s",
          }}
        >
          {name}
        </span>
      </div>
    );
  }
);

TechChip.displayName = "TechChip";
