/**
 * sections/HeroSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Hero section — the above-the-fold first impression.
 *
 * Layout:
 *   Left  → Badge, headline (with italic accent word), description, CTA buttons
 *   Right → Portrait image with decorative ambient blobs
 *
 * Animations:
 *   - Staggered fade-in-up on text elements (CSS keyframes)
 *   - Floating animation on decorative blobs
 *   - Portrait slides in from right
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import Image from "next/image";
import { FiArrowRight, FiUser } from "react-icons/fi";
import { Button, Badge } from "@/components/atoms";

import { HERO_CONTENT } from "@/lib/constants";

/**
 * HeroSection.
 * Server component — no client-side state required.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40"
      aria-label="Hero — Nyam Stella introduction"
    >
      {/* ── Background ambient gradient (purely decorative) ── */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-primary)]/4 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* ─────────────── LEFT — Copy ─────────────── */}
        <div className="order-2 lg:order-1">
          {/* Eyebrow badge */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.05s" }}
          >
            <Badge variant="accent" className="mb-6">
              {HERO_CONTENT.badge}
            </Badge>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif text-5xl lg:text-7xl font-bold text-[var(--color-primary)] leading-[1.08] mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            {HERO_CONTENT.headline} {/* Italic accent word (from design) */}
            <em className="not-italic italic text-[var(--color-accent)]">
              {HERO_CONTENT.headlineAccent}
            </em>{" "}
            {HERO_CONTENT.headlineSuffix}
          </h1>

          {/* Description paragraph */}
          <p
            className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            {HERO_CONTENT.description}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            {/* Primary CTA — scrolls to vision */}
            <a href="#vision" className="inline-block">
              <Button
                variant="primary"
                size="md"
                className="group"
                // onClick={() =>
                //   document
                //     .getElementById("vision")
                //     ?.scrollIntoView({ behavior: "smooth" })
                // }
              >
                {HERO_CONTENT.ctaPrimary}
                <FiArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-[var(--duration-fast)]"
                  aria-hidden="true"
                />
              </Button>
            </a>

            {/* Secondary CTA */}
            <Button variant="secondary" size="md">
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* ─────────────── RIGHT — Portrait ─────────────── */}
        <div
          className="order-1 lg:order-2 relative animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Portrait frame */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-hero)] relative z-10 bg-slate-200">
            <Image
              src={HERO_CONTENT.portrait}
              alt={HERO_CONTENT.portraitAlt}
              fill
              priority // LCP image — load immediately
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Subtle gradient overlay at the bottom of portrait */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-primary)]/10 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Decorative floating blobs behind the portrait */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 bg-[var(--color-accent)]/15 rounded-full blur-3xl -z-0 animate-float"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--color-primary)]/6 rounded-full blur-2xl -z-0 animate-float"
            style={{ animationDelay: "2s" }}
            aria-hidden="true"
          />

          {/* Floating stat pill — adds visual interest */}
          <div
            className="absolute bottom-6 -left-6 z-20 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-elevated)] flex items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
            aria-label="10+ years of humanitarian impact"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
              <FiUser
                className="w-5 h-5 text-[var(--color-accent)]"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-[var(--color-primary)] font-bold text-sm leading-none">
                10+ Years
              </p>
              <p className="text-slate-400 text-xs mt-0.5">
                Humanitarian Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
