import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealOptions {
  yOffset?:     number;
  xOffset?:     number;
  duration?:    number;
  delay?:       number;
  stagger?:     number;
  opacity?:     number;
  ease?:        string;
  start?:       string;
  /** If true, children are targeted individually with stagger */
  children?:    boolean;
}

/**
 * useScrollReveal — attach to any container ref and its contents
 * will animate in when they enter the viewport via GSAP ScrollTrigger.
 *
 * All options are primitives to avoid stale-reference re-render bugs.
 */
export function useScrollReveal({
  yOffset     = 50,
  xOffset     = 0,
  duration    = 0.75,
  delay       = 0,
  stagger     = 0,
  opacity     = 0,
  ease        = "power3.out",
  start       = "top 88%",
  children    = false,
}: ScrollRevealOptions = {}) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Determine what to animate
    const targets =
      children && el.children.length > 0
        ? Array.from(el.children)
        : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: yOffset, x: xOffset, opacity },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [yOffset, xOffset, duration, delay, stagger, opacity, ease, start, children]);

  return ref;
}
