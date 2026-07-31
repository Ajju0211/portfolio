/**
 * @file Hero.tsx
 * @description The landing Hero section of the portfolio.
 *
 * SRP — Handles the visual introduction and advanced GSAP scroll-triggered
 * parallax and stagger effects. Uses `SplitText` for high-end typography reveals.
 */

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, MapPin, ExternalLink } from "lucide-react";
import { SplitText } from "@/shared/ui/SplitText";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const ROLES = [
  "Full-Stack Engineer",
  "React / Next.js Developer",
  "Backend Architect",
  "MERN Specialist",
];

export const Hero: React.FC = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);
  const nameRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bioRef      = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const orb1Ref     = useRef<HTMLDivElement>(null);
  const orb2Ref     = useRef<HTMLDivElement>(null);
  const roleElRef   = useRef<HTMLSpanElement>(null);
  
  const roleIdxRef  = useRef(0);

  /* ── Advanced Entrance Animation & Scroll Parallax ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Badge fades down
      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // 2. Name characters reveal (staggered up from hidden overflow)
      const nameChars = nameRef.current?.querySelectorAll(".split-char");
      if (nameChars) {
        tl.fromTo(
          nameChars,
          { y: "100%", rotation: 5, opacity: 0 },
          { y: "0%", rotation: 0, opacity: 1, duration: 1, stagger: 0.04, ease: "power4.out" },
          "-=0.5"
        );
      }

      // 3. Role fades up
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      // 4. Bio lines reveal
      const bioLines = bioRef.current?.querySelectorAll(".bio-line");
      if (bioLines) {
        tl.fromTo(
          bioLines,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.6"
        );
      }

      // 5. Location and CTAs
      tl.fromTo(
        [locationRef.current, ctaRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.5"
      );

      // ── Advanced Parallax Scrub ──
      // Orbs move in different directions
      gsap.to(orb1Ref.current, {
        y: "-30vh",
        x: "10vw",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(orb2Ref.current, {
        y: "-20vh",
        x: "-10vw",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // The entire content fades out and scales slightly down on scroll
      gsap.to(".hero-content-wrapper", {
        opacity: 0,
        scale: 0.95,
        y: "15vh",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Role Text Cycling ── */
  useEffect(() => {
    const el = roleElRef.current;
    if (!el) return;
    
    el.textContent = ROLES[0];

    const cycleRoles = setInterval(() => {
      gsap.to(el, {
        y: -15,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          roleIdxRef.current = (roleIdxRef.current + 1) % ROLES.length;
          el.textContent = ROLES[roleIdxRef.current];
          gsap.fromTo(
            el,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          );
        },
      });
    }, 3200);

    return () => clearInterval(cycleRoles);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "clamp(96px, 14vw, 128px)",
        paddingBottom: "clamp(64px, 8vw, 96px)",
      }}
    >
      {/* ── Parallax Background Orbs ── */}
      <div
        ref={orb1Ref}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "clamp(350px, 50vw, 700px)",
          height: "clamp(350px, 50vw, 700px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)",
          filter: "blur(90px)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb2Ref}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "0%",
          width: "clamp(250px, 35vw, 500px)",
          height: "clamp(250px, 35vw, 500px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, #a855f7 0%, transparent 60%)",
          filter: "blur(90px)",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />

      {/* ── Main Content Container ── */}
      <div 
        className="hero-content-wrapper" 
        style={{ 
          position: "relative", 
          zIndex: 1, 
          maxWidth: "1280px", 
          margin: "0 auto", 
          width: "100%",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
        
        {/* Availability Badge */}
        <div
          ref={badgeRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "clamp(24px, 4vw, 40px)",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(34, 197, 94, 0.2)",
            background: "rgba(34, 197, 94, 0.05)",
            width: "fit-content",
            backdropFilter: "blur(8px)",
          }}
        >
          <span style={{ position: "relative", display: "flex", width: "8px", height: "8px" }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", opacity: 0.75, animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
            <span style={{ position: "relative", borderRadius: "50%", width: "8px", height: "8px", background: "#22c55e", display: "block" }} />
          </span>
          <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#22c55e", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Available for opportunities
          </span>
        </div>

        {/* Headline with Advanced Character Split Reveal */}
        <h1
          ref={nameRef}
          style={{
            fontSize: "clamp(3.5rem, 11vw, 10rem)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            marginBottom: "clamp(20px, 3vw, 32px)",
            color: "var(--foreground)",
          }}
        >
          <SplitText text="Ajay Singh" />
        </h1>

        {/* Subtitle (Cycling Roles) */}
        <div
          ref={subtitleRef}
          style={{
            height: "clamp(32px, 5vw, 48px)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            marginBottom: "clamp(20px, 3.5vw, 36px)",
          }}
        >
          <span style={{ fontSize: "clamp(1.1rem, 2.8vw, 1.7rem)", color: "var(--muted-foreground)", fontWeight: 300 }}>
            <span ref={roleElRef} style={{ display: "inline-block" }} />
          </span>
        </div>

        {/* Bio (Manually split lines for stagger effect) */}
        <div
          ref={bioRef}
          style={{
            maxWidth: "clamp(320px, 60vw, 700px)",
            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
            marginBottom: "clamp(16px, 2vw, 24px)",
          }}
        >
          <p className="bio-line" style={{ display: "inline-block", margin: 0 }}>Aspiring Software Engineer proficient in the </p>
          <p className="bio-line" style={{ display: "inline-block", margin: 0 }}><strong style={{ color: "var(--foreground)", fontWeight: 600 }}>MERN stack</strong>, Next.js, and backend technologies </p>
          <p className="bio-line" style={{ display: "inline-block", margin: 0 }}>including Node.js, Golang, and Java. I build scalable, </p>
          <p className="bio-line" style={{ display: "inline-block", margin: 0 }}>production-ready applications with meticulous attention to detail.</p>
        </div>

        {/* Location */}
        <div
          ref={locationRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--muted-foreground)",
            fontSize: "0.9rem",
            fontWeight: 500,
            marginBottom: "clamp(36px, 5vw, 64px)",
          }}
        >
          <MapPin size={16} />
          <span>Thane, Maharashtra, India</span>
        </div>

        {/* ── Call To Action Buttons ── */}
        <div ref={ctaRef} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
          {/* Primary CTA */}
          <a
            href="#projects"
            className="magnetic-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "clamp(14px, 1.5vw, 18px) clamp(28px, 4vw, 40px)",
              borderRadius: "999px",
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
              textDecoration: "none",
              transition: "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 30px -10px var(--primary)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View My Work <ArrowDownRight size={18} />
          </a>

          {/* Secondary CTA */}
          <a
            href="https://drive.google.com/file/d/1scrJSBUkzaFZnrRRniLDihy5NQQkF3ig/view"
            target="_blank"
            rel="noreferrer"
            className="magnetic-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "clamp(14px, 1.5vw, 18px) clamp(28px, 4vw, 40px)",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
              textDecoration: "none",
              background: "rgba(255, 255, 255, 0)",
              transition: "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--muted)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Resume <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            fontWeight: 600,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, var(--border), transparent)",
            animation: "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; height: 48px; }
          50% { opacity: 1; height: 64px; }
        }
      `}</style>
    </section>
  );
};
