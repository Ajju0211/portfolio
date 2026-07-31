"use client";

import { Header }             from "@/shared/ui/Header";
import { Footer }             from "@/shared/ui/Footer";
import { Hero }               from "@/domains/about/components/Hero";
import { ExperienceTimeline } from "@/domains/experience/components/ExperienceTimeline";
import { ProjectList }        from "@/domains/projects/components/ProjectList";
import { Technologies }       from "@/domains/about/components/Technologies";
import { Education }          from "@/domains/about/components/Education";
import { Contact }            from "@/domains/contact/components/Contact";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Hero />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <ExperienceTimeline />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <ProjectList />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <Technologies />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <Education />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
