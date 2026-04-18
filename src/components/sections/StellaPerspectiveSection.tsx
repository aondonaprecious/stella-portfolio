/**
 * sections/StellaPerspectiveSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * "Stella's Perspective" — upcoming podcast coming soon section.
 *
 * Design intent:
 *   Elegant dark panel with animated elements:
 *   - Shimmer text on the title
 *   - Pulsing beacon ring to signal "live soon"
 *   - Scrolling platform marquee
 *   - Soft accent glow + floating particles
 *   - Staggered fade-in on content
 *
 * This section sits between the existing podcast and the Vision section.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { FiMic, FiRadio } from "react-icons/fi";
import { Badge, SectionLabel } from "@/components/atoms";
import { STELLA_PERSPECTIVE_CONTENT } from "@/lib/constants";

/**
 * StellaPerspectiveSection.
 * Server component — relies purely on CSS animations (no JS required).
 */
export function StellaPerspectiveSection() {
  const { eyebrow, title, description, badge, platforms } = STELLA_PERSPECTIVE_CONTENT;

  /**
   * Duplicate the platforms list for seamless marquee loop.
   * The marquee animation scrolls the doubled list, creating an
   * infinite-loop illusion without JavaScript.
   */
  const marqueeItems = [...platforms, ...platforms];

  return (
    <section
      id="stella-perspective"
      className="py-24 relative overflow-hidden"
      aria-label="Stella's Perspective — upcoming podcast"
    >
      {/* ── Background: deep navy with subtle radial glow ── */}
      <div
        className="absolute inset-0 bg-[var(--color-primary)] -z-10"
        aria-hidden="true"
      >
        {/* Large accent glow — top centre */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-accent)]/15 rounded-full blur-[120px] -translate-y-1/2" />
        {/* Secondary glow — bottom right */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[var(--color-accent)]/8 rounded-full blur-[80px] translate-y-1/2 translate-x-1/4" />

        {/* Subtle grid pattern overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* ─── LEFT — Animated microphone icon + pulse beacon ─── */}
          <div className="flex-shrink-0 flex items-center justify-center reveal">
            <div className="relative">
              {/* Outer pulse rings — 3 layered rings animate outward */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-[var(--color-accent)]/30 animate-pulse-ring"
                  style={{ animationDelay: `${i * 0.6}s` }}
                  aria-hidden="true"
                />
              ))}

              {/* Mic icon container */}
              <div className="relative w-36 h-36 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center backdrop-blur-sm">
                <FiMic
                  className="w-14 h-14 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
              </div>

              {/* "On Air" dot */}
              <div
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-primary)] animate-pulse"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* ─── RIGHT — Copy ─── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow + Coming Soon badge */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-4 reveal">
              <SectionLabel color="accent">{eyebrow}</SectionLabel>
              <Badge
                variant="primary"
                className="text-[10px] bg-[var(--color-accent)] border-none"
              >
                {badge}
              </Badge>
            </div>

            {/* Title with shimmer animation */}
            <h2 className="font-serif text-5xl lg:text-7xl font-bold mb-2 leading-[1.05] reveal stagger-1">
              {/* "Stella's" — shimmer animated gradient text */}
              <span className="animate-shimmer">{title}</span>
            </h2>

            {/* "Perspective" — white, large */}
            <h2 className="font-serif text-3git initxl lg:text-7xl font-bold text-white mb-6 leading-[1.05] reveal stagger-2">
              Brick by Brick
            </h2>

            {/* Tagline */}
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 reveal stagger-3">
              {description}
            </p>

            {/* ── Platform icons row ── */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8 reveal stagger-4">
              <FiRadio
                className="w-4 h-4 text-[var(--color-accent)]"
                aria-hidden="true"
              />
              <span className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                Coming to all platforms
              </span>
            </div>

            {/* ── Marquee strip ── */}
            <div
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5 reveal stagger-5"
              aria-label="Available platforms"
            >
              <div className="flex animate-marquee py-3 gap-0">
                {marqueeItems.map((platform, i) => (
                  <span
                    key={`${platform}-${i}`}
                    className="flex-shrink-0 px-8 text-slate-400 text-sm font-bold uppercase tracking-widest border-r border-white/10 last:border-0"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
