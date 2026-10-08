"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

export type Breakpoint = "base" | "sm" | "md" | "lg" | "xl";

interface BreakpointContextType {
  breakpoint: Breakpoint;
  width: number;
  isMd: boolean;
  isLg: boolean;
}

const BreakpointContext = createContext<BreakpointContextType>({
  breakpoint: "lg",
  width: 1200,
  isMd: true,
  isLg: true,
});

export const BreakpointProvider = ({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  const [width, setWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize with current width immediately
    setWidth(containerRef.current.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  let breakpoint: Breakpoint = "base";
  if (width >= 1280) breakpoint = "xl";
  else if (width >= 1024) breakpoint = "lg";
  else if (width >= 768) breakpoint = "md";
  else if (width >= 640) breakpoint = "sm";

  const isMd = width >= 768;
  const isLg = width >= 1024;

  return (
    <BreakpointContext.Provider value={{ breakpoint, width, isMd, isLg }}>
      <div ref={containerRef} className={`w-full ${className}`} style={style}>
        {children}
      </div>
    </BreakpointContext.Provider>
  );
};

export const useContainerBreakpoint = () => useContext(BreakpointContext);
