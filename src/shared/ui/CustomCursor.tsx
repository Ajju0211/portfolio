"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Keep these off-screen initially
    gsap.set([dot, ring], { x: -100, y: -100 });

    const xTo  = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3.out" });
    const yTo  = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3.out" });
    const xDot = gsap.quickTo(dot,  "x", { duration: 0.1,  ease: "none" });
    const yDot = gsap.quickTo(dot,  "y", { duration: 0.1,  ease: "none" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);  yTo(e.clientY);
      xDot(e.clientX); yDot(e.clientY);
    };

    const onEnter = () => {
      gsap.to(ring, { scale: 1.8, borderColor: "var(--primary)", opacity: 1, duration: 0.3 });
      gsap.to(dot,  { scale: 2,   duration: 0.3 });
    };
    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.3 });
      gsap.to(dot,  { scale: 1, duration: 0.3 });
    };

    const bindHovers = () => {
      document.querySelectorAll("a, button, [data-cursor-grow]").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMove);
    setTimeout(bindHovers, 800);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button, [data-cursor-grow]").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot pointer-events-none" style={{ transform: "translate(-50%, -50%)" }} />
      <div ref={ringRef} className="cursor-ring pointer-events-none" style={{ transform: "translate(-50%, -50%)" }} />
    </>
  );
}
