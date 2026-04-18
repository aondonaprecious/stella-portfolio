# Nyam Stella — Personal Brand Website

## Project Overview
A high-performance, single-page personal website for Nyam Stella: humanitarian, development strategist, peacebuilder, and podcast host.

---

## Project Management Structure

### Phase 1 — Foundation (Sprint 1)
**Work Package 1.1 — Project Setup**
- [x] Initialize Next.js 15 (App Router) with TypeScript
- [x] Configure Tailwind CSS v4
- [x] Atomic design folder structure
- [x] Global styles, design tokens, typography system

**Work Package 1.2 — Design System (Atoms)**
- [x] Button atom (variants: primary, secondary, ghost)
- [x] Badge atom
- [x] Input atom
- [x] Text / Heading atoms

### Phase 2 — Core Components (Sprint 2)
**Work Package 2.1 — Molecules**
- [x] NavLink molecule
- [x] PodcastCard molecule
- [x] ExperienceItem molecule
- [x] FeatureCard molecule
- [x] StatCard molecule

**Work Package 2.2 — Organisms**
- [x] Header / Navigation organism
- [x] Footer organism
- [x] Hero organism
- [x] NewsletterForm organism
- [x] WaitlistForm organism

### Phase 3 — Page Sections (Sprint 3)
**Work Package 3.1 — Sections**
- [x] HeroSection
- [x] StorySection
- [x] PodcastSection (BRICK by BRICK)
- [x] StellaPerspectiveSection (NEW — Coming Soon)
- [x] VisionSection (The Stella Foundation)
- [x] TrackRecordSection
- [x] NewsletterSection

### Phase 4 — Polish & Delivery (Sprint 4)
**Work Package 4.1 — Animations & UX**
- [x] Scroll-triggered reveal animations
- [x] Hover micro-interactions
- [x] Page load staggered entrance

**Work Package 4.2 — Performance**
- [x] next/image for all images
- [x] next/font for typography
- [x] Semantic HTML & ARIA labels

---

## Tech Stack
| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 (App Router) | Framework |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4 | Styling |
| React Icons | latest | Icons |
| next/font | built-in | Web fonts |

## Atomic Design Structure
```
src/components/
├── atoms/          # Smallest reusable units (Button, Badge, Input, etc.)
├── molecules/      # Composed from atoms (PodcastCard, NavLink, etc.)
├── organisms/      # Complex UI sections (Header, Footer, Hero, etc.)
├── sections/       # Full page sections assembled from organisms
└── templates/      # Page-level layout wrappers
```

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| primary | #0f172a | Deep Navy — headings, bg |
| accent | #f472b6 | Blush Pink — highlights, CTAs |
| cream | #fafaf9 | Off-white — background |

## Image Replacement Guide
Replace placeholder images in `public/images/`:
- `stella-portrait.jpg` — Hero portrait
- `podcast-ep1.jpg` — Podcast episode 1 thumbnail
- `podcast-ep2.jpg` — Podcast episode 2 thumbnail
- `podcast-ep3.jpg` — Podcast episode 3 thumbnail
