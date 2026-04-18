/**
 * atoms/Input.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Accessible input atom — used in the Newsletter and Waitlist forms.
 *
 * Themes:
 *   light  → Standard white-bg input (newsletter section)
 *   dark   → Frosted glass input on dark bg (vision / waitlist section)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "@/lib/utils/cn";
import type { WithClassName } from "@/lib/types";

type InputTheme = "light" | "dark";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    WithClassName {
  theme?: InputTheme;
}

/** Theme → class map */
const INPUT_THEMES: Record<InputTheme, string> = {
  light:
    "bg-white border border-slate-200 text-[var(--color-primary)] placeholder:text-slate-400 focus:ring-2 focus:ring-[var(--color-accent)]",
  dark:
    "bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-[var(--color-accent)]",
};

/**
 * Input atom.
 * Renders a styled text/email input with theme support.
 */
export function Input({ theme = "light", className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-5 py-4 rounded-xl",
        "text-sm font-medium",
        "outline-none transition-all duration-[var(--duration-base)]",
        INPUT_THEMES[theme],
        className
      )}
      {...props}
    />
  );
}
