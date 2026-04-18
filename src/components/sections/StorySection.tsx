/**
 * sections/StorySection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * "Driven by Purpose, Defined by Impact" — about / story section.
 *
 * Layout (desktop):
 *   Left  (1/3) → Heading, accent rule, pull quote
 *   Right (2/3) → Two body paragraphs | Feature cards (2 stacked)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { FeatureCard } from "@/components/molecules";
import { STORY_CONTENT, FEATURE_CARDS } from "@/lib/constants";

/**
 * StorySection.
 * Server component — all data is static.
 */
export function StorySection() {
  return (
    <section
      id="story"
      className="py-24 bg-white"
      aria-label="Nyam Stella's story and impact areas"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

          {/* ─── LEFT — Heading + Quote ─── */}
          <div className="lg:w-1/3 reveal">
            <h2 className="font-serif text-4xl font-bold text-[var(--color-primary)] mb-6 leading-snug">
              {/* Split heading so "Defined by Impact" wraps nicely */}
              Driven by Purpose,
              <br />
              Defined by Impact
            </h2>

            {/* Pink accent rule — brand element from design */}
            <div className="w-20 h-1.5 bg-[var(--color-accent)] rounded-full mb-8" aria-hidden="true" />

            {/* Pull quote */}
            <blockquote className="text-slate-500 font-medium italic leading-relaxed border-l-2 border-[var(--color-accent)]/30 pl-4">
              {STORY_CONTENT.quote}
            </blockquote>
          </div>

          {/* ─── RIGHT — Body text + Feature cards ─── */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-12">

            {/* Body paragraphs */}
            <div className="space-y-6 reveal stagger-2">
              {STORY_CONTENT.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Feature cards — Corporate Strategy + Social Innovation */}
            <div className="space-y-6 reveal stagger-3">
              {FEATURE_CARDS.map((card) => (
                <FeatureCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
