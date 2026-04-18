/**
 * types/index.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Centralised TypeScript type definitions for the entire application.
 * Following a "types-first" approach: define data shapes before implementations.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ─── Navigation ─────────────────────────────────────────────────────────── */

/** A single item in the top navigation menu */
export interface NavItem {
  /** Display label */
  label: string;
  /** Anchor href (e.g. "#story") */
  href: string;
}

/* ─── Podcast ────────────────────────────────────────────────────────────── */

/** Data shape for a podcast episode card */
export interface PodcastEpisode {
  id: string;
  /** Episode title */
  title: string;
  /** Short synopsis — displayed in the card */
  description: string;
  /** Tag label shown in the badge (e.g. "A Peacebuilder's Voice") */
  tag: string;
  /** Thumbnail image URL or local path */
  image: string;
  /** Play count string (e.g. "1.2k Listens") */
  listens: string;
}

/* ─── Experience / Track Record ─────────────────────────────────────────── */

/** An entry in the career / education timeline */
export interface ExperienceItem {
  id: string;
  /** Sequential display number as a two-digit string, e.g. "01" */
  number: string;
  /** Role or degree title */
  title: string;
  /** Organisation and date range */
  subtitle: string;
}

/* ─── Feature Cards ─────────────────────────────────────────────────────── */

/** A capability / pillar card in the Story section */
export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  /** Accent colour variant — "primary" renders dark bg, "accent" renders pink bg */
  variant: "primary" | "accent";
}

/* ─── Foundation Stats ───────────────────────────────────────────────────── */

/** A stat metric card in the Vision / Foundation section */
export interface StatItem {
  id: string;
  /** Large display value (e.g. "2025", "10+", "Global") */
  value: string;
  /** Descriptor label shown below the value */
  label: string;
}

/* ─── Button ────────────────────────────────────────────────────────────── */

/** Visual style variants for the Button atom */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";

/** Size variants for the Button atom */
export type ButtonSize = "sm" | "md" | "lg";

/* ─── Utility ────────────────────────────────────────────────────────────── */

/** Helper for components that accept additional Tailwind class overrides */
export interface WithClassName {
  className?: string;
}
