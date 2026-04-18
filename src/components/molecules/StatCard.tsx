/**
 * molecules/StatCard.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * A single stat metric card used in the Vision / Foundation section.
 * Renders a large value + label on a frosted dark background.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import type { StatItem } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface StatCardProps {
  stat: StatItem;
  className?: string;
}

/**
 * StatCard molecule.
 * Used inside the Vision dark-bg section — styled for contrast on dark panels.
 */
export function StatCard({ stat, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "border border-white/10 bg-white/5 p-4 rounded-2xl backdrop-blur-sm",
        "transition-all duration-[var(--duration-base)] hover:bg-white/10",
        className
      )}
    >
      {/* Large accent-coloured metric value */}
      <div className="text-[var(--color-accent)] text-3xl font-bold font-serif leading-none">
        {stat.value}
      </div>

      {/* Descriptor label */}
      <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-2">
        {stat.label}
      </div>
    </div>
  );
}
