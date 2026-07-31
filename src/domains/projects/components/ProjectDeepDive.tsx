"use client";
import { Project } from "../types";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDeepDiveProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDeepDive = ({ project, onClose }: ProjectDeepDiveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Disable body scroll when open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl overflow-y-auto"
      ref={containerRef}
    >
      <div className="min-h-screen w-full flex flex-col md:flex-row relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky Header / Close Button */}
        <div className="absolute top-6 right-6 z-[110]">
          <button 
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Left Side: Sticky Media & Intro */}
        <div className="w-full md:w-1/2 md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-center py-12 md:py-0 pr-0 md:pr-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-8 border border-white/10">
              <Image 
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View Live Project <MdOutlineArrowOutward />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="w-full md:w-1/2 py-12 md:py-32 flex flex-col gap-16 md:gap-32">
          
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">The Problem</h2>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Solution & Architecture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.architecture}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground border border-white/5 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">Key Outcomes</h2>
            <ul className="space-y-4">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <span className="text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
          
        </div>
      </div>
    </motion.div>
  );
};
