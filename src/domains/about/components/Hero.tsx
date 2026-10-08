/**
 * @file Hero.tsx
 * @description The landing Hero section of the portfolio.
 *
 * SRP — Handles the visual introduction and advanced GSAP scroll-triggered
 * parallax and stagger effects. Uses `SplitText` for high-end typography reveals.
 */

"use client";
import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/shared/data";
import { motion } from "framer-motion";
import { Mail, Phone, FileText, Send } from "lucide-react";
import { useContainerBreakpoint } from "@/shared/hooks/useContainerBreakpoint";

export const Hero: React.FC = () => {
  const { isMd } = useContainerBreakpoint();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "clamp(120px, 16vw, 160px)",
        paddingBottom: "clamp(48px, 6vw, 64px)",
      }}
    >
      {/* ── Main Content Container ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "clamp(24px, 3vw, 32px)",
              color: "var(--foreground)",
              maxWidth: "850px",
            }}
          >
            {PERSONAL_INFO.headline}
          </motion.h1>

          {/* Bio */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{
              maxWidth: "700px",
              fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
              color: "var(--muted-foreground)",
              lineHeight: 1.6,
              marginBottom: "clamp(32px, 4vw, 40px)",
              fontWeight: 400,
            }}
          >
            <p style={{ margin: 0 }}>{PERSONAL_INFO.bio}</p>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "clamp(32px, 4vw, 40px)",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "1px solid var(--border)",
              background: "transparent",
            }}
          >
            <span style={{ position: "relative", display: "flex", width: "8px", height: "8px" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", opacity: 0.75, animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span style={{ position: "relative", borderRadius: "50%", width: "8px", height: "8px", background: "#22c55e", display: "block" }} />
            </span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--foreground)" }}>
              {PERSONAL_INFO.availability}
            </span>
          </motion.div>

          {/* ── Call To Action Buttons ── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "32px" }}
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                borderRadius: "999px",
                background: "var(--foreground)",
                color: "var(--background)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              See case studies
            </a>

            {/* Secondary CTAs */}
            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Resume
            </a>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "clamp(48px, 6vw, 64px)",
            }}
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Data Cards Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className={`grid ${isMd ? "grid-cols-[repeat(4,minmax(max-content,1fr))]" : "grid-cols-2"} rounded-2xl border dark:border-[#e5e7eb]/10 mb-4 bg-transparent overflow-hidden`}
          >
            {[
              {
                label: "Current Role",
                title: PERSONAL_INFO.currentRole,
                subtitle: `${PERSONAL_INFO.currentCompany} · ${PERSONAL_INFO.roleDates}`,
              },
              {
                label: "Experience",
                title: PERSONAL_INFO.experienceYears,
                subtitle: PERSONAL_INFO.experienceSubtitle,
              },
              {
                label: "Location",
                title: PERSONAL_INFO.location,
                subtitle: PERSONAL_INFO.locationSubtitle,
              },
              {
                label: "Looking For",
                title: PERSONAL_INFO.lookingFor,
                subtitle: PERSONAL_INFO.lookingForSubtitle,
                isHighlight: true,
              },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-4 dark:border-[#e5e7eb]/10 ${isMd ? "px-5 py-4" : ""} flex flex-col justify-center min-w-0 ${idx !== 3 ? (isMd ? "border-b-0 border-border" : "border-b border-border") : ""} ${idx % 2 === 0 ? "border-r" : (isMd ? "border-r" : "")} ${idx === 3 ? "border-none" : ""}`}
                style={{ height: "100%" }}
              >
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  marginBottom: "4px"
                }}>
                  {stat.label}
                </p>
                <p className={isMd ? "whitespace-nowrap" : "whitespace-normal"} style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: stat.isHighlight ? "#22c55e" : "var(--foreground)",
                  marginBottom: "2px"
                }}>
                  {stat.title}
                </p>
                <p className="whitespace-normal md:whitespace-nowrap" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "var(--muted-foreground)",
                  fontWeight: 400
                }}>
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contact Bar */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className={`dark:border-[#e5e7eb]/10 border border-border rounded-2xl bg-transparent overflow-hidden ${isMd ? "grid grid-cols-4" : "flex flex-col"}`}
          >
            {[
              {
                isHeader: true,
                icon: <Send size={16} />,
                text: "Contact",
              },
              {
                icon: <Mail size={18} color="var(--muted-foreground)" />,
                text: PERSONAL_INFO.email,
                href: `mailto:${PERSONAL_INFO.email}`,
              },
              {
                icon: <Phone size={18} color="var(--muted-foreground)" />,
                text: PERSONAL_INFO.phone,
                href: `tel:${PERSONAL_INFO.phone}`,
              },
              {
                icon: <FileText size={18} color="var(--muted-foreground)" />,
                text: "Resume",
                href: PERSONAL_INFO.resume,
                target: "_blank",
              },
            ].map((item, idx) => (
              <div
                key={item.text}
                className={`flex dark:border-[#e5e7eb]/10 items-center min-w-0 ${item.isHeader ? (isMd ? "gap-4 p-4 px-5 py-3" : "gap-4 p-4") : (isMd ? "gap-3 px-5 py-3" : "gap-3 px-4 pb-4")}`}
                style={{ height: "100%" }}
              >
                {item.isHeader ? (
                  <>
                    <span className="flex dark:border-[#e5e7eb]/10 items-center justify-center min-w-[40px] w-10 h-10 border border-border rounded-xl bg-transparent text-foreground">
                      {item.icon}
                    </span>
                    <span className={isMd ? "whitespace-nowrap" : "whitespace-normal"} style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase"
                    }}>
                      {item.text}
                    </span>
                  </>
                ) : (
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target ? "noreferrer" : undefined}
                    className={isMd ? "whitespace-nowrap" : "whitespace-normal"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--foreground)",
                      textDecoration: "none",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      fontWeight: 500
                    }}
                  >
                    {item.icon} {item.text}
                  </a>
                )}
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
