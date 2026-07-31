/**
 * @file ExperienceTimeline.tsx
 * @description Displays the user's career experience in an animated vertical timeline.
 *
 * SRP — Handles only the timeline layout and animation orchestration.
 * Uses shared components (SectionHeader, TechChip) for the UI elements.
 */

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "../data/experience";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { TechChip } from "@/shared/ui/TechChip";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export const ExperienceTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const headerRef = useScrollReveal({ yOffset: 50, duration: 0.85 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Vertical line draw (scaleY from 0→1, origin = top) ───
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── Individual card reveals (slide from left + fade) ──────
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Dot beside card
        const dot = card.querySelector(".timeline-dot");
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
            delay: i * 0.12 + 0.2,
            scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
          }
        );

        // Card itself
        gsap.fromTo(
          card,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
          }
        );

        // Stagger tech chips inside each card
        const chips = card.querySelectorAll(".tech-chip-container");
        gsap.fromTo(
          chips,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.out",
            delay: i * 0.12 + 0.35,
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ padding: "clamp(60px, 10vw, 120px) 0", width: "100%" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 80px)" }}>
        
        <SectionHeader 
          ref={headerRef} 
          label="Career" 
          title="Experience" 
        />

        {/* ── Timeline ── */}
        <div style={{ position: "relative" }}>
          {/* Vertical animated line */}
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              left: "clamp(12px, 2vw, 20px)",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(to bottom, var(--primary), color-mix(in srgb, var(--primary) 20%, transparent))",
            }}
          />

          {/* Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(28px, 4vw, 48px)",
              paddingLeft: "clamp(40px, 7vw, 80px)",
            }}
          >
            {experienceData.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                style={{ position: "relative" }}
              >
                {/* Animated dot on the line */}
                <div
                  className="timeline-dot"
                  style={{
                    position: "absolute",
                    left: "clamp(-35px, -4.5vw, -52px)",
                    top: "6px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    boxShadow: "0 0 0 4px var(--background), 0 0 14px var(--primary)",
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "clamp(20px, 3vw, 32px)",
                    transition: "border-color 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Top row: Role, Company, Duration */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "14px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "clamp(1rem, 2vw, 1.3rem)",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          marginBottom: "4px",
                          color: "var(--foreground)",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "var(--primary)", fontWeight: 500, textDecoration: "none" }}
                            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span style={{ color: "var(--primary)", fontWeight: 500 }}>{exp.company}</span>
                        )}
                        <span style={{ color: "var(--border)" }}>·</span>
                        <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Remote</span>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "var(--muted-foreground)",
                        background: "var(--muted)",
                        padding: "4px 14px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--muted-foreground)",
                      lineHeight: 1.75,
                      fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                      marginBottom: "18px",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Tech chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.tech.map((t) => (
                      <div key={t} className="tech-chip-container">
                        <TechChip
                          name={t}
                          style={{
                            fontSize: "0.7rem",
                            padding: "4px 12px",
                            textTransform: "capitalize",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
