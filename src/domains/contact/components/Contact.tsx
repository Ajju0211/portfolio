/**
 * @file Contact.tsx
 * @description Renders the final call-to-action (CTA) section of the portfolio.
 *
 * SRP — Handles only the rendering and entrance animations of the Contact section.
 * UI components (like the header) are imported via shared/ui.
 */

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { useScrollReveal } from "@/shared/hooks/useScrollReveal";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * Social media links data array.
 * Separated from component logic for easier maintainability (OCP).
 */
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/", icon: <Github size={20} /> },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: <Linkedin size={20} /> },
  { label: "Twitter", href: "https://twitter.com/", icon: <Twitter size={20} /> },
];

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Custom hook for the header reveal
  const headerRef = useScrollReveal({ yOffset: 40, duration: 0.8 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate all children of the contact inner container
      gsap.fromTo(
        ".contact-inner > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: "clamp(60px, 10vw, 120px) 0 80px", width: "100%" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 80px)" }}>
        
        {/* Hide default SectionHeader visually, but keep for structure/semantics if needed. 
            Actually, the original design had a custom large CTA instead of a standard header.
            I will use the custom CTA here as it's the hero element of this section. */}
            
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
            border: "1px solid var(--border)",
            background: "var(--card)",
            padding: "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 48px)",
            textAlign: "center",
          }}
        >
          {/* ── Decorative Glow ── */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "clamp(300px, 50vw, 500px)",
              height: "clamp(200px, 30vw, 300px)",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
              filter: "blur(80px)",
              opacity: 0.12,
              pointerEvents: "none",
            }}
          />

          {/* ── Inner Content (Stagger Animated) ── */}
          <div className="contact-inner" style={{ position: "relative", zIndex: 1 }}>
            
            {/* Label */}
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "var(--primary)",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Get In Touch
            </p>

            {/* Huge Headline */}
            <h2
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "24px",
                color: "var(--foreground)",
              }}
            >
              Let&apos;s work<br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                together.
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                maxWidth: "480px",
                margin: "0 auto 48px",
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
                fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              }}
            >
              Open to full-time roles, freelance projects, and collaborative builds.
              If you have an exciting idea — let&apos;s talk.
            </p>

            {/* ── Primary CTA Button ── */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
              <a
                href="mailto:ajay@example.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Mail size={16} /> Send an Email <ArrowRight size={14} />
              </a>
            </div>

            {/* ── Social Links ── */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    color: "var(--muted-foreground)",
                    textDecoration: "none",
                    transition: "border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 10%, transparent)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--muted-foreground)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
