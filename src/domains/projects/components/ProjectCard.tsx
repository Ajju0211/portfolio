/**
 * @file ProjectCard.tsx
 * @description A reusable card component for displaying project summaries.
 *
 * SRP (Single Responsibility Principle) — this component is solely responsible
 * for rendering the visual representation of a single project in a grid and
 * handling its hover/entrance animations.
 */

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      // 1. Card Container scales and fades in
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: (index % 2) * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Advanced Image Reveal (Clip Path)
      if (imageContainerRef.current && imageRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.2,
            ease: "power4.out",
            delay: (index % 2) * 0.1 + 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
        
        // Counter-scale image for parallax feel during reveal
        gsap.fromTo(
          imageRef.current,
          { scale: 1.3 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: (index % 2) * 0.1 + 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 3. Content Stagger inside the card
      const children = contentRef.current?.children;
      if (children) {
        gsap.fromTo(
          Array.from(children),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            delay: (index % 2) * 0.1 + 0.3,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        position: "relative",
        borderRadius: "20px",
        border: "1px solid var(--border)",
        background: "var(--card)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.4s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--primary)";
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px -15px rgba(0,0,0,0.5)";
        if (imageRef.current) {
          imageRef.current.style.transform = "scale(1.08)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        if (imageRef.current) {
          imageRef.current.style.transform = "scale(1)";
        }
      }}
    >
      {/* ── Image Section ── */}
      <div 
        ref={imageContainerRef} 
        style={{ 
          position: "relative", 
          overflow: "hidden", 
          aspectRatio: "16/10",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Image
          ref={imageRef}
          src={project.img}
          alt={project.title}
          fill
          style={{ 
            objectFit: "cover", 
            transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            transformOrigin: "center center"
          }}
        />
        {/* Gradient overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, var(--card) 0%, transparent 40%)",
          }}
        />
        {/* Project Index Number */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.7)",
            background: "rgba(0,0,0,0.3)",
            padding: "4px 12px",
            borderRadius: "999px",
            backdropFilter: "blur(4px)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Content Section ── */}
      <div ref={contentRef} style={{ padding: "clamp(20px, 2.5vw, 28px)" }}>
        <h3
          style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "8px",
            color: "var(--foreground)",
          }}
        >
          {project.title.replace(/\(Compony Project\)\s*/i, "")}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--muted-foreground)",
            lineHeight: 1.7,
            marginBottom: "18px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* ── Tech Stack Chips ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.7rem",
                padding: "4px 12px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: "var(--muted)",
                color: "var(--muted-foreground)",
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span
              style={{
                fontSize: "0.7rem",
                padding: "4px 12px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: "var(--muted)",
                color: "var(--muted-foreground)",
                fontWeight: 600,
              }}
            >
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
