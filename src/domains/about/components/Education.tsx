/**
 * @file Education.tsx
 * @description Displays the user's academic background.
 *
 * SRP — Handles only the education layout and scroll animation.
 * OCP — Uses the shared SectionHeader component.
 */

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export const Education: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useScrollReveal({ yOffset: 40, duration: 0.8 });

  useEffect(() => {
    if (!cardRef.current) return;
    
    // Animate the education card sliding up
    const anim = gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section id="education" style={{ padding: "clamp(60px, 10vw, 120px) 0", width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 80px)" }}>
        
        <SectionHeader 
          ref={headerRef} 
          label="Academic Background" 
          title="Education" 
        />

        {/* ── Education Card ── */}
        <div
          ref={cardRef}
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "clamp(24px, 4vw, 44px)",
            display: "flex",
            alignItems: "center",
            gap: "28px",
            flexWrap: "wrap",
            transition: "border-color 0.3s",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary) 50%, var(--border))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          {/* Decorative Glow Blob */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "var(--primary)",
              filter: "blur(80px)",
              opacity: 0.08,
              pointerEvents: "none",
            }}
          />

          {/* Icon Badge */}
          <div
            style={{
              flexShrink: 0,
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "color-mix(in srgb, var(--primary) 12%, transparent)",
              border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
            }}
          >
            <GraduationCap size={28} />
          </div>

          {/* Details */}
          <div>
            <h3
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "6px",
                color: "var(--foreground)",
              }}
            >
              Bachelor of Science in Computer Science
            </h3>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "16px" }}>
              Mumbai University, Maharashtra
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--primary)",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--primary)" }}>
                CGPA: 7.95 / 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
