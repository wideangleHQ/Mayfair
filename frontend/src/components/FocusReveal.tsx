"use client";

import type { ReactNode } from "react";

/**
 * The final section sits underneath the page content, so a keyboard user tabbing into it would
 * focus something they cannot see. Scroll to the very bottom when focus enters, which reveals it.
 */
export default function FocusReveal({ children }: { children: ReactNode }) {
  return (
    <div
      onFocusCapture={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      {children}
    </div>
  );
}
