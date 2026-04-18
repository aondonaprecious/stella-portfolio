/**
 * atoms/Button.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * The foundational Button atom — the most frequently reused interactive element.
 *
 * Variants:
 *   primary   → Deep navy fill (main CTA)
 *   secondary → Outlined (ghost border)
 *   ghost     → Transparent, text-only
 *   accent    → Blush pink fill (highlight CTA)
 *
 * Sizes: sm | md | lg
 *
 * Fully accessible: forwards all native <button> props, focus ring handled
 * globally via :focus-visible in globals.css.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import type { ButtonVariant, ButtonSize, WithClassName } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    WithClassName {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders a full-width button */
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * Maps variant → Tailwind utility classes.
 * Centralised here so changing a variant's style updates everywhere. (DRY)
 */
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white",
  secondary:
    "border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/5 text-[var(--color-primary)]",
  ghost:
    "text-[var(--color-primary)] hover:text-[var(--color-accent)] bg-transparent",
  accent:
    "bg-[var(--color-accent)] hover:opacity-90 text-white",
};

/** Maps size → Tailwind padding / font classes */
const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
};

/**
 * Button atom.
 * Composes variant and size style maps with any className override.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles — shared by all variants
        "inline-flex items-center justify-center gap-2",
        "rounded-lg font-bold tracking-wide",
        "transition-all duration-[var(--duration-base)]",
        "cursor-pointer",
        // Variant-specific styles
        VARIANT_STYLES[variant],
        // Size-specific padding / font size
        SIZE_STYLES[size],
        // Optional full-width stretch
        fullWidth && "w-full",
        // Consumer className overrides (applied last)
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
