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
import { ArrowRight } from "lucide-react";
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
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animations removed per user request
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
        borderRadius: "16px",
        border: "1px solid var(--border)",
        background: "var(--card)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--primary)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 24px -10px rgba(0,0,0,0.15)";
        if (imageRef.current) {
          imageRef.current.style.transform = "scale(1.04)";
        }
        if (arrowRef.current) {
          arrowRef.current.style.color = "var(--primary)";
          arrowRef.current.style.opacity = "1";
          arrowRef.current.style.transform = "translateX(4px)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        if (imageRef.current) {
          imageRef.current.style.transform = "scale(1)";
        }
        if (arrowRef.current) {
          arrowRef.current.style.color = "var(--muted-foreground)";
          arrowRef.current.style.opacity = "0.7";
          arrowRef.current.style.transform = "translateX(0)";
        }
      }}
    >
      {/* ── Image Section ── */}
      <div 
        ref={imageContainerRef} 
        style={{ 
          position: "relative", 
          aspectRatio: "4/3",
          backgroundColor: "var(--muted)",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <Image
          ref={imageRef}
          src={project.img}
          alt={project.title}
          fill
          style={{ 
            objectFit: "cover", 
            transition: "transform 0.4s ease",
            transformOrigin: "center center"
          }}
        />
      </div>

      {/* ── Content Section ── */}
      <div ref={contentRef} style={{ padding: "16px 20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
            }}
          >
            {project.title.replace(/\(Compony Project\)\s*/i, "")}
          </h3>
          <ArrowRight 
            ref={arrowRef}
            size={18} 
            color="currentColor" 
            style={{ 
              color: "var(--muted-foreground)",
              opacity: 0.7,
              transition: "transform 0.3s ease, color 0.3s ease, opacity 0.3s ease" 
            }} 
          />
        </div>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--muted-foreground)",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
};
