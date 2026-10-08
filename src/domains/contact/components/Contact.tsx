/**
 * @file Contact.tsx
 * @description Renders the final call-to-action (CTA) section of the portfolio.
 *
 * SRP — Handles only the rendering and entrance animations of the Contact section.
 * UI components (like the header) are imported via shared/ui.
 */

"use client";
import React from "react";
import { PERSONAL_INFO } from "@/shared/data";
import { motion } from "framer-motion";
import { MapPin, Clock, FileText } from "lucide-react";

interface ContactProps {
  hideDetails?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ hideDetails = false }) => {
  return (
    <section
      id="contact"
      style={{ padding: hideDetails ? "clamp(32px, 4vw, 48px) 0" : "clamp(48px, 6vw, 64px) 0", width: "100%" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          {/* Headline */}
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "24px",
              color: "var(--foreground)",
            }}
          >
            {PERSONAL_INFO.contactHeadline}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{
              maxWidth: "600px",
              color: "var(--muted-foreground)",
              lineHeight: 1.6,
              fontSize: "1rem",
              marginBottom: "32px",
            }}
          >
            {PERSONAL_INFO.contactDescription}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            style={{ marginBottom: "40px" }}
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 32px",
                borderRadius: "999px",
                background: "var(--foreground)",
                color: "var(--background)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start a conversation
            </a>
          </motion.div>

          {/* Bottom Info Row */}
          {!hideDetails && (
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                color: "var(--muted-foreground)",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={16} />
                <span>{PERSONAL_INFO.location} · {PERSONAL_INFO.locationSubtitle}</span>
              </div>

              {/* Response Time */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock size={16} />
                <span>Replies within a day</span>
              </div>

              {/* Resume Link */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FileText size={16} />
                <a 
                  href={PERSONAL_INFO.resume} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    color: "#3b82f6", // Blue color as seen in the image
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "opacity 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Resume & downloads
                </a>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
};
