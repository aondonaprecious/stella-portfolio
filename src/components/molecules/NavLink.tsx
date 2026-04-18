/**
 * molecules/NavLink.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * A single navigation anchor with hover and active-state styling.
 * Handles smooth scroll to anchor IDs via the href prop.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "@/lib/utils/cn";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  /** Dark-mode override for use on dark nav bars */
  dark?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * NavLink molecule.
 * Renders a styled anchor tag optimised for anchor-based SPA navigation.
 */
export function NavLink({ href, children, dark = false, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-sm font-semibold transition-colors duration-[var(--duration-fast)]",
        // Underline animation on hover — scales from 0 to full width
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0",
        "after:bg-[var(--color-accent)] after:transition-all after:duration-[var(--duration-base)]",
        "hover:after:w-full hover:text-[var(--color-accent)]",
        dark
          ? "text-slate-300 hover:text-white"
          : "text-slate-600 hover:text-[var(--color-accent)]",
        className
      )}
    >
      {children}
    </a>
  );
}
