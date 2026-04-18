/**
 * molecules/ExperienceItem.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * A single career / education row in the Track Record section.
 * Hover reveals a right-arrow and shifts background to cream.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import type { ExperienceItem as ExperienceItemType } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface ExperienceItemProps {
  item: ExperienceItemType;
  className?: string;
}

/**
 * ExperienceItem molecule.
 * Renders a horizontal row with a number badge, title, subtitle, and arrow.
 */
export function ExperienceItem({ item, className }: ExperienceItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-center justify-between",
        "p-8 border border-slate-100 rounded-2xl",
        "hover:bg-[var(--color-cream)] transition-colors duration-[var(--duration-base)] group",
        "cursor-pointer",
        className
      )}
    >
      {/* ── Left: number + text ── */}
      <div className="flex items-center gap-6">
        {/* Numbered circle badge */}
        <div
          className={cn(
            "flex-shrink-0 w-12 h-12 bg-[var(--color-primary)]/5",
            "text-[var(--color-primary)] rounded-full",
            "flex items-center justify-center",
            "font-bold text-sm"
          )}
          aria-hidden="true"
        >
          {item.number}
        </div>

        {/* Title & subtitle */}
        <div>
          <h3 className="text-xl font-bold text-[var(--color-primary)] leading-snug">
            {item.title}
          </h3>
          <p className="text-slate-500 text-sm mt-0.5">{item.subtitle}</p>
        </div>
      </div>

      {/* ── Right: arrow icon ── */}
      <div
        className={cn(
          "mt-4 md:mt-0",
          "text-slate-300 group-hover:text-[var(--color-primary)]",
          "group-hover:translate-x-1",
          "transition-all duration-[var(--duration-base)]"
        )}
        aria-hidden="true"
      >
        <FiArrowRight className="w-7 h-7" />
      </div>
    </div>
  );
}
