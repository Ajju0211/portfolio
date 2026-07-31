/**
 * @file ProjectModal.tsx
 * @description A modal for displaying deep-dive details of a project.
 *
 * SRP (Single Responsibility Principle) — handles only the modal rendering
 * and GSAP animation logic for a single selected project.
 *
 * DIP (Dependency Inversion Principle) — uses `useBodyScrollLock` hook
 * instead of mutating `document.body.style` directly.
 */

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ExternalLink, X } from "lucide-react";
import { Project } from "../types";
import { useBodyScrollLock } from "@/shared/hooks/useBodyScrollLock";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  isClosing: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isClosing }) => {
  useBodyScrollLock();

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Entrance Animation
  useEffect(() => {
    if (!overlayRef.current || !modalRef.current) return;
    
    const ctx = gsap.context(() => {
      // Fade in background overlay
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Scale up and slide in modal box
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.94, y: 28 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "back.out(1.2)", delay: 0.1 }
      );
    });

    return () => ctx.revert();
  }, []);

  // Exit Animation
  useEffect(() => {
    if (isClosing && overlayRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isClosing]);

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(12px, 3vw, 32px)",
      }}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--muted)",
            border: "none",
            color: "var(--foreground)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={16} />
        </button>

        <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", overflow: "hidden" }}>
          <Image
            src={project.img}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, var(--card))",
            }}
          />
        </div>

        <div style={{ padding: "clamp(24px, 4vw, 48px)" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "10px",
            }}
          >
            {project.title.replace(/\(Compony Project\)\s*/i, "")}
          </h2>
          <p style={{ color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: "28px" }}>
            {project.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "32px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { label: "The Problem", content: project.problem },
                { label: "Architecture", content: project.architecture },
              ].map(({ label, content }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--primary)",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ color: "var(--foreground)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                    {content}
                  </p>
                </div>
              ))}
              <div>
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--primary)",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  Outcomes
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--primary)",
                          flexShrink: 0,
                          marginTop: "7px",
                        }}
                      />
                      <span style={{ color: "var(--foreground)", lineHeight: 1.6 }}>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--primary)",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  Stack
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.73rem",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        border: "1px solid var(--border)",
                        background: "var(--muted)",
                        color: "var(--foreground)",
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Live Project <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
