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

// ─── Prop Interfaces ────────────────────────────────────────────────────────

/** Props accepted by the SectionHeader component */
interface SectionHeaderProps {
  /** Small uppercase label above the main title (e.g. "Selected Work") */
  label: string;
  /** Primary section heading */
  title: React.ReactNode;
  /** Optional className for the wrapper div */
  className?: string;
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * SectionHeader
 *
 * Renders a small coloured label + a large bold heading.
 * Uses `forwardRef` so that parent components (e.g. GSAP animations
 * driven by refs) can attach a ref to the root element directly.
 *
 * @example
 * ```tsx
 * const titleRef = useRef<HTMLDivElement>(null);
 * <SectionHeader ref={titleRef} label="Career" title="Experience" />
 * ```
 */
const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ label, title, className }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{ marginBottom: "clamp(40px, 7vw, 80px)" }}
      >
        {/* Label — tiny uppercase, primary colour */}
        <p
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "var(--primary)",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          {label}
        </p>

        {/* Primary heading */}
        <h2
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--foreground)",
          }}
        >
          {title}
        </h2>
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
export type { SectionHeaderProps };
