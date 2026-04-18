/**
 * molecules/FeatureCard.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Capability/pillar card in the Story section.
 * Two variants: "primary" (dark icon bg) and "accent" (pink icon bg).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { FiTrendingUp, FiUsers } from "react-icons/fi";
import type { FeatureCard as FeatureCardType } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface FeatureCardProps {
  card: FeatureCardType;
  className?: string;
}

/**
 * Maps card id → React Icon component.
 * Extend this map as new feature cards are added.
 */
const ICON_MAP: Record<string, React.ReactNode> = {
  "corporate-strategy": <FiTrendingUp className="w-5 h-5" aria-hidden="true" />,
  "social-innovation":  <FiUsers      className="w-5 h-5" aria-hidden="true" />,
};

/** Variant → icon container background */
const ICON_BG: Record<FeatureCardType["variant"], string> = {
  primary: "bg-[var(--color-primary)] text-white",
  accent:  "bg-[var(--color-accent)] text-white",
};

/** Variant → card background */
const CARD_BG: Record<FeatureCardType["variant"], string> = {
  primary: "bg-[var(--color-cream)]",
  accent:  "bg-[var(--color-accent)]/5",
};

/**
 * FeatureCard molecule.
 * Renders an icon + title + description card with variant theming.
 */
export function FeatureCard({ card, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex gap-4 p-6 rounded-2xl",
        CARD_BG[card.variant],
        "transition-shadow duration-[var(--duration-base)]",
        "hover:shadow-[var(--shadow-card)]",
        className
      )}
    >
      {/* Icon container */}
      <div
        className={cn(
          "flex-shrink-0 w-12 h-12 rounded-xl",
          "flex items-center justify-center",
          ICON_BG[card.variant]
        )}
        aria-hidden="true"
      >
        {ICON_MAP[card.id] ?? <FiTrendingUp className="w-5 h-5" />}
      </div>

      {/* Text content */}
      <div>
        <h4 className="font-bold text-[var(--color-primary)] mb-2">{card.title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}
