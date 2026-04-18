/**
 * hooks/useScrollReveal.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Custom hook that observes elements and adds the "visible" class when
 * they enter the viewport — triggering CSS reveal transitions.
 *
 * Usage:
 *   useScrollReveal(); // Observes all elements with class "reveal"
 *
 * The CSS in globals.css pairs with this:
 *   .reveal          { opacity: 0; transform: translateY(28px); }
 *   .reveal.visible  { opacity: 1; transform: translateY(0);    }
 * ─────────────────────────────────────────────────────────────────────────────
 */

"use client";

import { useEffect } from "react";

interface ScrollRevealOptions {
  /** Intersection threshold before triggering reveal (0–1). Default: 0.12 */
  threshold?: number;
  /** Root margin for early trigger. Default: "0px 0px -60px 0px" */
  rootMargin?: string;
}

/**
 * Attaches an IntersectionObserver to all `.reveal` elements.
 * Once an element crosses the threshold it receives the `.visible` class.
 * The observer disconnects per-element after firing (once-only reveal).
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -60px 0px" } = options;

  useEffect(() => {
    // Create an observer to watch each .reveal element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the visible class to trigger the CSS transition
            entry.target.classList.add("visible");
            // Stop watching once revealed — no un-reveal on scroll up
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Query and observe all reveal targets in the document
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Cleanup: disconnect observer on unmount or option change
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
}
