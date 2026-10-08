"use client";

import { Hero } from "@/domains/about/components/Hero";
import { ExperienceTimeline } from "@/domains/experience/components/ExperienceTimeline";
import { ProjectList } from "@/domains/projects/components/ProjectList";
import { Technologies } from "@/domains/about/components/Technologies";
import { About } from "@/domains/about/components/About";
import { Contact } from "@/domains/contact/components/Contact";

export default function Home() {
  return (

    <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Hero />
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <ExperienceTimeline />
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <ProjectList />
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <Technologies />
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <About />
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
      <Contact />
    </main>
  );
}
