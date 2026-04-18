/**
 * sections/PodcastSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * "BRICK by BRICK with Mmemdoo" — existing podcast series section.
 * Displays three episode cards in a responsive 3-column grid.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { PodcastCard } from "@/components/molecules";
import { SectionLabel } from "@/components/atoms";
import { PODCAST_CONTENT, PODCAST_EPISODES } from "@/lib/constants";

/**
 * PodcastSection.
 * Server component — static episode data.
 */
export function PodcastSection() {
  return (
    <section
      id="podcast"
      className="py-24 bg-[var(--color-cream)]"
      aria-label="BRICK by BRICK podcast with Mmemdoo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <SectionLabel>{PODCAST_CONTENT.eyebrow}</SectionLabel>
            <h2 className="font-serif text-4xl font-bold text-[var(--color-primary)]">
              {PODCAST_CONTENT.title}
            </h2>
          </div>

          {/* "View All Episodes" link */}
          <button
            className="flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-accent)] transition-colors duration-150 group self-start md:self-auto"
            aria-label="View all podcast episodes"
          >
            {PODCAST_CONTENT.cta}
            <FiArrowUpRight
              className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* ── Episodes grid ── */}
        <div className="grid md:grid-cols-3 gap-8">
          {PODCAST_EPISODES.map((episode, i) => (
            <div
              key={episode.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <PodcastCard episode={episode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
