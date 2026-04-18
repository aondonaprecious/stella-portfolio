/**
 * sections/TrackRecordSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * "The Track Record" — career and education timeline section.
 * Stacked list of ExperienceItem molecules with hover interactions.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { ExperienceItem } from "@/components/molecules";
import { TRACK_RECORD_CONTENT, EXPERIENCE_ITEMS } from "@/lib/constants";

/**
 * TrackRecordSection.
 * Server component — static data.
 */
export function TrackRecordSection() {
  const { title, description } = TRACK_RECORD_CONTENT;

  return (
    <section
      id="experience"
      className="py-24 bg-white"
      aria-label="Nyam Stella's career and education track record"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header — centred ── */}
        <div className="text-center mb-20 reveal">
          <h2 className="font-serif text-4xl font-bold text-[var(--color-primary)] mb-4">
            {title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* ── Experience list ── */}
        <div className="space-y-4">
          {EXPERIENCE_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <ExperienceItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
