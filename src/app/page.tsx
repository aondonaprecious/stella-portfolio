/**
 * app/page.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Home page — the single page of the Nyam Stella personal website.
 *
 * Architecture:
 *   - Server component (default in Next.js App Router)
 *   - Composes all section components in document order
 *   - Wraps everything in PageTemplate (client boundary for scroll observer)
 *
 * Section order matches the design:
 *   1. Hero
 *   2. Story
 *   3. Podcast (BRICK by BRICK)
 *   4. Stella's Perspective (coming soon)
 *   5. Vision (Stella Foundation)
 *   6. Track Record
 *   7. Newsletter
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { PageTemplate } from "@/components/templates/PageTemplate";
import {
  HeroSection,
  StorySection,
  PodcastSection,
  StellaPerspectiveSection,
  VisionSection,
  TrackRecordSection,
  NewsletterSection,
} from "@/components/sections";
import { Gallery } from "@/components/organisms/Gallery";

/**
 * HomePage.
 * The root page — pure composition, zero logic.
 * All data fetching and business logic lives in the respective section components.
 */
export default function HomePage() {
  return (
    <PageTemplate>
      {/* 1 ── Above the fold */}
      <HeroSection />
      <Gallery />{" "}
    
      {/* 2 ── About / Story */}
      <StorySection />
      {/* 3 ── Existing podcast: BRICK by BRICK */}
      <PodcastSection />
      {/* 4 ── Upcoming podcast: Stella's Perspective */}
      <StellaPerspectiveSection />
      {/* 5 ── The Stella Foundation vision */}
      <VisionSection />
      {/* 6 ── Career timeline */}
      <TrackRecordSection />
      {/* 7 ── Newsletter / Stay Informed */}
      <NewsletterSection />
    </PageTemplate>
  );
}
