/**
 * templates/PageTemplate.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Page-level layout template.
 * Responsibilities:
 *   1. Renders Header at the top and Footer at the bottom
 *   2. Wraps <main> with proper landmark semantics
 *   3. Activates the scroll-reveal IntersectionObserver via useScrollReveal
 *
 * This is the only client component at the template level — it mounts
 * the observer hook. All section content can remain as server components.
 * ─────────────────────────────────────────────────────────────────────────────
 */

"use client";

import React from "react";
import { Header } from "@/components/organisms";
import { Footer } from "@/components/organisms";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

interface PageTemplateProps {
  children: React.ReactNode;
}

/**
 * PageTemplate.
 * Wraps page content with the shared layout and activates scroll animations.
 */
export function PageTemplate({ children }: PageTemplateProps) {
  /**
   * Activate scroll reveal observer.
   * Watches all `.reveal` elements and adds `.visible` when in view.
   * The threshold of 0.1 means 10% of the element must be visible to trigger.
   */
  useScrollReveal({ threshold: 0.1 });

  return (
    <>
      {/* ── Global sticky header ── */}
      <Header />

      {/* ── Main page content ── */}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* ── Global footer ── */}
      <Footer />
    </>
  );
}
