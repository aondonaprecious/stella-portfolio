/**
 * molecules/PodcastCard.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Podcast episode card molecule.
 * Displays thumbnail, badge, title, description, listens count and share action.
 * Hover reveals a play button overlay on the thumbnail.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import Image from "next/image";
import { FiPlay, FiShare2, FiBarChart2 } from "react-icons/fi";
import { Badge } from "@/components/atoms";
import type { PodcastEpisode } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface PodcastCardProps {
  episode: PodcastEpisode;
  className?: string;
}

/**
 * PodcastCard molecule.
 * Renders one podcast episode with hover interactions.
 */
export function PodcastCard({ episode, className }: PodcastCardProps) {
  return (
    <article
      className={cn(
        "bg-white p-6 rounded-2xl border border-slate-100",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)]",
        "transition-shadow duration-[var(--duration-base)] group",
        className
      )}
    >
      {/* ── Thumbnail with play overlay ── */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-slate-100">
        <Image
          src={episode.image}
          alt={`Podcast episode: ${episode.title}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Play button — fades in on card hover */}
        <div
          className={cn(
            "absolute inset-0 bg-[var(--color-primary)]/20",
            "flex items-center justify-center",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-base)]"
          )}
          aria-hidden="true"
        >
          <button
            aria-label={`Play ${episode.title}`}
            className={cn(
              "w-16 h-16 bg-white rounded-full",
              "flex items-center justify-center",
              "text-[var(--color-primary)] shadow-xl",
              "hover:scale-110 transition-transform duration-[var(--duration-fast)]"
            )}
          >
            <FiPlay className="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>

      {/* ── Episode tag badge ── */}
      <Badge variant="accent">{episode.tag}</Badge>

      {/* ── Title & description ── */}
      <h3 className="font-serif text-xl font-bold text-[var(--color-primary)] mt-3 mb-2 leading-snug">
        {episode.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
        {episode.description}
      </p>

      {/* ── Footer: listens + share ── */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        {/* Listen count */}
        <div className="flex items-center gap-2 text-slate-400">
          <FiBarChart2 className="w-4 h-4" aria-hidden="true" />
          <span className="text-xs font-medium">{episode.listens}</span>
        </div>

        {/* Share button */}
        <button
          aria-label={`Share ${episode.title}`}
          className={cn(
            "text-slate-400 hover:text-[var(--color-accent)]",
            "transition-colors duration-[var(--duration-fast)]",
            "hover:scale-110 transition-transform"
          )}
        >
          <FiShare2 className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
