"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/shared/data";

import { Contact } from "@/domains/contact/components/Contact";

export default function ResumePage() {
  const [activeResume, setActiveResume] = useState<"SWE" | "AI">("SWE");

  const pdfUrl = activeResume === "SWE"
    ? "/doc/Ajay_Singh_Resume_Software_Engineer.pdf"
    : "/doc/Ajay_Singh_Resume_AI_Engineer.pdf";

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ minHeight: "100vh", padding: "140px 24px 80px", maxWidth: "1000px", margin: "0 auto", overflowX: "hidden", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--muted-foreground)",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.95rem",
              marginBottom: "32px",
              transition: "color 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--foreground)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted-foreground)"}
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>

          <h1 style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "24px", color: "var(--foreground)" }}>
            Resume
          </h1>

          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: "750px", marginBottom: "40px" }}>
            {PERSONAL_INFO.name} — {PERSONAL_INFO.focus} based in {PERSONAL_INFO.location}. One page, every claim tied to something shipped. View it below or download it in your preferred format.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "64px" }}>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "999px",
                background: "var(--foreground)",
                color: "var(--background)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <Download size={16} /> Download {activeResume === "SWE" ? "Software Engineer" : "AI Engineer"} PDF
            </a>

            <button
              onClick={() => setActiveResume(activeResume === "SWE" ? "AI" : "SWE")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "999px",
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--muted)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <FileText size={16} /> View {activeResume === "SWE" ? "AI-focused variant" : "Software Engineer variant"}
            </button>
          </div>
        </motion.div>

        {/* Full width divider */}
        <div style={{ height: "1px", background: "var(--border)", width: "100vw", marginLeft: "calc(-50vw + 50%)", marginBottom: "64px" }} />

        {/* Resume PDF Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-transparent"
          style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            onClick={() => setActiveResume(activeResume === "SWE" ? "AI" : "SWE")}
            style={{
              position: "absolute",
              left: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground)",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              zIndex: 10,
              transition: "transform 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(-50%) scale(1)"}
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={() => setActiveResume(activeResume === "SWE" ? "AI" : "SWE")}
            style={{
              position: "absolute",
              right: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground)",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              zIndex: 10,
              transition: "transform 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(-50%) scale(1)"}
          >
            <ArrowRight size={20} />
          </button>

          <div style={{
            width: "100%",
            maxWidth: "1000px",
            aspectRatio: "8.5 / 12", // US Letter standard aspect ratio
            overflow: "hidden",
            position: "relative"
          }}>
            <iframe
              key={pdfUrl} // Forces iframe reload when switching
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=0&view=FitH&backgroundColor=%23ffffff`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                background: "#fff",
                // colorScheme: "light" // forces some browsers to not use dark mode on the PDF UI
              }}
              title="Resume Preview"
            />
          </div>
        </motion.div>
      </main>

      {/* Divider before Contact */}
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)", marginTop: "32px" }} />

      <Contact hideDetails />
    </div>
  );
}
