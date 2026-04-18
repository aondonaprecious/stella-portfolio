/**
 * sections/VisionSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * "Our Vision: Sustainable Global Impact" — The Stella Foundation section.
 *
 * Layout:
 *   Dark rounded card spanning full width.
 *   Left (3/5) → Eyebrow, heading, description, stats grid
 *   Right (2/5) → WaitlistForm frosted card
 *
 * Background:
 *   Deep navy with a large blurred accent blob in the top-right corner.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { StatCard } from "@/components/molecules";
import { WaitlistForm } from "@/components/organisms";
import { SectionLabel, Badge } from "@/components/atoms";
import { VISION_CONTENT, FOUNDATION_STATS } from "@/lib/constants";

/**
 * VisionSection.
 * Contains WaitlistForm (client component) — wrapped in a server-safe layout.
 */
export function VisionSection() {
  const { eyebrow, badge, title, titleItalic, titleSuffix, description } =
    VISION_CONTENT;

  return (
    <section
      id="vision"
      className="py-24"
      aria-label="The Stella Foundation — vision and waitlist"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Main dark card ── */}
        <div className="bg-[var(--color-primary)] rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden reveal">

          {/* Ambient accent blob — decorative */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />
          {/* Secondary bottom-left blob */}
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)] rounded-full blur-[80px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />

          {/* ── Content layout ── */}
          <div className="relative z-10 lg:flex items-center gap-16">

            {/* ─── LEFT — Text + Stats ─── */}
            <div className="lg:w-3/5">
              {/* Eyebrow + badge */}
              <div className="flex items-center gap-4 mb-6 reveal stagger-1">
                <SectionLabel color="accent">{eyebrow}</SectionLabel>
                <Badge variant="primary" className="bg-[var(--color-accent)] text-white text-[10px]">
                  {badge}
                </Badge>
              </div>

              {/* Heading — "Our Vision: Sustainable Global Impact" */}
              <h2
                className="font-serif text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight reveal stagger-2"
              >
                {title}{" "}
                {/* "Sustainable" rendered in italic normal weight */}
                <em className="italic font-normal">{titleItalic}</em>{" "}
                {titleSuffix}
              </h2>

              {/* Description */}
              <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl reveal stagger-3">
                {description}
              </p>

              {/* ── Stats grid ── */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal stagger-4">
                {FOUNDATION_STATS.map((stat) => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </div>

            {/* ─── RIGHT — Waitlist form ─── */}
            <div className="lg:w-2/5 mt-16 lg:mt-0 reveal stagger-5">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
