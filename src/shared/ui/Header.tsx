"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { navLinks } from "@/domains/about/data/nav";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const enrichedNav = [
  { name: "About",      href: "#hero" },
  { name: "Work",       href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact",    href: "#contact" },
  { name: "Resume",     href: "https://drive.google.com/file/d/1scrJSBUkzaFZnrRRniLDihy5NQQkF3ig/view", external: true },
];

export function Header() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef             = useRef<HTMLSpanElement>(null);
  const headerRef           = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.05 }
    );
  }, []);

  const handleLogoHover = () => {
    const el = logoRef.current;
    if (!el) return;
    const original = "AJAY.";
    const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let frame = 0;
    const id = setInterval(() => {
      el.textContent = original
        .split("")
        .map((ch, i) => (i < frame / 2 ? ch : pool[Math.floor(Math.random() * pool.length)]))
        .join("");
      frame++;
      if (frame > original.length * 2) {
        el.textContent = original;
        clearInterval(id);
      }
    }, 30);
  };

  return (
    <>
      <header
        ref={headerRef as any}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          padding: scrolled ? "12px 0" : "20px 0",
          backgroundColor: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a href="#hero" onMouseEnter={handleLogoHover} style={{ textDecoration: "none", flexShrink: 0 }}>
            <span
              ref={logoRef}
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, var(--foreground), var(--primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AJAY.
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
            className="hidden md:flex"
          >
            {enrichedNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noreferrer" : undefined}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {link.name}
              </a>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 md:hidden">
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
      </header>

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
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "24px" }}>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer" }}
              >
                <X size={24} />
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: "0 40px", gap: "32px", marginTop: "32px" }}>
              {enrichedNav.map((link, i) => (
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
