/**
 * utils/cn.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Lightweight utility for conditionally joining class names.
 * A minimal substitute for `clsx` + `tailwind-merge` with zero dependencies.
 *
 * Usage:
 *   cn("base-class", condition && "conditional-class", "another-class")
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Joins an array of class name values, filtering out falsy entries.
 * Pass strings, undefined, null, or boolean false — all falsy values are ignored.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-accent", "rounded")
 * // → "px-4 py-2 bg-accent rounded"  (when isActive = true)
 * // → "px-4 py-2 rounded"            (when isActive = false)
 */
export function cn(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}
