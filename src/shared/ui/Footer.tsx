"use client";
import { Github, Linkedin, Twitter } from "lucide-react";

const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/",   icon: <Github size={15} /> },
  { label: "LinkedIn", href: "https://linkedin.com/",  icon: <Linkedin size={15} /> },
  { label: "Twitter",  href: "https://twitter.com/",   icon: <Twitter size={15} /> },
];

export function Footer() {
  return (
    <footer style={{
      width: "100%",
      borderTop: "1px solid var(--border)",
      padding: "36px 0",
    }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
      }}>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <span style={{
            fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, var(--foreground), var(--primary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            AJAY.
          </span>
          <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
            © {new Date().getFullYear()} Ajay Singh. Crafted in Thane, India.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {SOCIAL.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "36px", height: "36px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted-foreground)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
