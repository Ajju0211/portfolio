/**
 * @file SplitText.tsx
 * @description A lightweight utility component to split text into words and characters.
 * Useful for advanced GSAP text reveal animations without relying on premium plugins.
 */

import React from "react";

interface SplitTextProps {
  /** The text string to split */
  text: string;
  /** Role for accessibility, defaults to 'heading' or 'text' */
  role?: string;
}

/**
 * Splits a string into words, and words into characters.
 * Each character is wrapped in a span with the class `split-char`,
 * and each word in a span with `split-word`.
 * This allows GSAP to target `.split-char` for stagger animations.
 */
export const SplitText: React.FC<SplitTextProps> = ({ text, role }) => {
  return (
    <span aria-label={text} role={role} style={{ display: "inline-block" }}>
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="split-word"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            marginRight: "0.25em",
            overflow: "hidden", // Crucial for "reveal from bottom" effect
          }}
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="split-char"
              style={{ display: "inline-block" }}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};
