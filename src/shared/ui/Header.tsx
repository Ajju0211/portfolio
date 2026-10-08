"use client";
import { useState, useEffect } from "react";
import { NAVIGATION_LINKS, PERSONAL_INFO } from "@/shared/data";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "padding 0.4s ease, background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease",
          padding: scrolled ? "12px 0" : "24px 0",
          backgroundColor: scrolled ? "color-mix(in srgb, var(--background) 85%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:grid md:grid-cols-[1fr_auto_1fr] max-w-[1000px] w-full">
          {/* Logo */}
          <div className="flex justify-start">
            <a href="#hero" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.01em",
                  color: "var(--foreground)",
                }}
              >
                {PERSONAL_INFO.name}
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav
            style={{ gap: "32px" }}
            className="hidden md:flex items-center justify-center"
          >
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noreferrer" : undefined}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right (Get in touch) */}
          <div className="hidden md:flex items-center gap-4 justify-end">
            <ModeToggle />
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "8px 20px",
                textDecoration: "none",
                transition: "background 0.2s",
                background: "transparent",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--muted)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 md:hidden justify-end">
            <ModeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(v => !v)}
              style={{
                padding: "8px",
                borderRadius: "8px",
                background: "transparent",
                border: "none",
                color: "var(--foreground)",
                cursor: "pointer",
              }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "var(--background)",
              display: "flex",
              flexDirection: "column",
              paddingTop: "100px", // Push content below the fixed header
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", padding: "0 40px", gap: "32px" }}>
              {NAVIGATION_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: "2rem",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--foreground)",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAVIGATION_LINKS.length * 0.07 }}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--background)",
                  backgroundColor: "var(--foreground)",
                  border: "none",
                  borderRadius: "999px",
                  padding: "12px 24px",
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
