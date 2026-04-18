/**
 * atoms/SectionLabel.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Eyebrow / section-label atom — the small uppercase text that precedes a
 * section heading (e.g. "A Peacebuilder's Voice").
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "@/lib/utils/cn";
import type { WithClassName } from "@/lib/types";

type LabelColor = "accent" | "muted";

interface SectionLabelProps extends WithClassName {
  color?: LabelColor;
  children: React.ReactNode;
}

const COLOR_MAP: Record<LabelColor, string> = {
  accent: "text-[var(--color-accent)]",
  muted:  "text-slate-400",
};

/**
 * SectionLabel atom.
 * Renders uppercase tracking-widest eyebrow text.
 */
export function SectionLabel({
  color = "accent",
  className,
  children,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "block text-xs font-bold uppercase tracking-[0.2em] mb-2",
        COLOR_MAP[color],
        className
      )}
    >
      {children}
    </span>
  );
}
