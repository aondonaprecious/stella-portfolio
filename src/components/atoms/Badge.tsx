/**
 * atoms/Badge.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Badge / pill atom — used for eyebrow labels, status tags, episode categories.
 *
 * Variants:
 *   accent  → Blush pink on light pink bg (default)
 *   primary → White text on primary bg
 *   outline → Outlined, no fill
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "@/lib/utils/cn";
import type { WithClassName } from "@/lib/types";

type BadgeVariant = "accent" | "primary" | "outline";

interface BadgeProps extends WithClassName {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

/** Variant → class map */
const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  accent:  "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  primary: "bg-[var(--color-primary)] text-white",
  outline: "border border-[var(--color-primary)]/20 text-[var(--color-primary)]",
};

/**
 * Badge atom.
 * Renders a small rounded pill label.
 */
export function Badge({ variant = "accent", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full",
        "text-[10px] font-bold uppercase tracking-widest",
        BADGE_VARIANTS[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
