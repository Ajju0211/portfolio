/**
 * @file lenis-provider.tsx
 * @description Provides smooth scrolling across the application using Lenis.
 * Synchronizes perfectly with GSAP ScrollTrigger for accurate animation triggers.
 *
 * SRP — Exclusively handles smooth scrolling instantiation and cleanup.
 */

"use client";

import React, { useEffect, useRef } from "react";
// import Lenis from "@studio-freight/lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Initializes Lenis smooth scrolling and syncs it with GSAP.
 * Configured for a snappy, professional, Awwwards-style feel.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  // const lenisRef = useRef<Lenis | null>(null);

  // useEffect(() => {
  //   // 1. Register GSAP Plugin
  //   gsap.registerPlugin(ScrollTrigger);

  //   // 2. Initialize Lenis with optimal "snappy but smooth" settings
  //   const lenis = new Lenis({
  //     lerp: 0.05, // Responsiveness (0-1). Lower is smoother but slightly more "floaty".
  //     smoothWheel: true,
  //     wheelMultiplier: 1.2, // Slightly faster than default for modern mice
  //     touchMultiplier: 2,   // Better feel on mobile/trackpads
  //   });
  //   lenisRef.current = lenis;

  //   // 3. Sync Lenis with GSAP ScrollTrigger
  //   lenis.on("scroll", ScrollTrigger.update);

  //   // 4. Drive Lenis via GSAP's ticker to ensure 100% synchronization
  //   const update = (time: number) => {
  //     lenis.raf(time * 1000);
  //   };
  //   gsap.ticker.add(update);

  //   // Disable lag smoothing to prevent visual jumping during heavy frame drops
  //   gsap.ticker.lagSmoothing(0);

  //   // 5. Cleanup on unmount
  //   return () => {
  //     gsap.ticker.remove(update);
  //     lenis.destroy();
  //     lenisRef.current = null;
  //   };
  // }, []);

  return <>{children}</>;
}
