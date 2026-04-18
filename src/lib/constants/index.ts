/**
 * constants/index.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * All static site content lives here as typed constants.
 * DRY principle: update copy in ONE place and it propagates everywhere.
 *
 * In a real CMS setup, replace these imports with API calls to Sanity / Contentful.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type {
  NavItem,
  PodcastEpisode,
  ExperienceItem,
  FeatureCard,
  StatItem,
} from "@/lib/types";

/* ─── Navigation ─────────────────────────────────────────────────────────── */

/** Primary navigation links — used by Header organism */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home",       href: "#home"       },
  { label: "My Story",   href: "#story"      },
  { label: "Podcast",    href: "#podcast"    },
  { label: "Vision",     href: "#vision"     },
];

/* ─── Hero Section ───────────────────────────────────────────────────────── */

export const HERO_CONTENT = {
  badge:       "Industry Leader & Global Strategist",
  headline:    "Advancing Humanity as a",
  headlineAccent: "Peacebuilder",
  headlineSuffix: "& Development Enthusiast",
  description:
    " I am a comYOUnity development enthusiast and POPCASTER working at the intersection of peacebuilding, climate action, inclusive development and empowerment.My work focuses on supporting communities especially women, youth, and vulnerable groups to build resilient, dignified, and sustainable lives through practical action, dialogue, and locally driven solutions.Rooted in Benue, grounded in Nigeria, and connected to Africa, I am committed to ensuring that development is shaped by the voices and realities of the people it serves.",
  ctaPrimary:   "Discover My Vision",
  ctaSecondary: "Executive Profile",
  /** Replace this path with the actual production image of Stella */
  portrait:    "/images/nyam stella3.jpg",
  portraitAlt: "Portrait of Nyam Stella — Humanitarian & Development Strategist",
} as const;

/* ─── Story Section ──────────────────────────────────────────────────────── */

export const STORY_CONTENT = {
  heading: "Driven by Purpose, Defined by Impact",
  quote:
    '"My life\'s work is centered on improving lives at the grassroots by creating sustainable pathways for peace and development."',
  paragraphs: [
    "To support comYOUnities in building peaceful, resilient and sustainable futures through education, real life experience sharing, mentorship and inclusive, community-driven development.",
  ],
} as const;

/** Capability cards in the Story section */
export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "corporate-strategy",
    title: "MISSION",
    description:
      "To support comYOUnities in building peaceful, resilient and sustainable futures through education, real life experience sharing, mentorship and inclusive, community-driven development.",
    variant: "primary",
  },
  {
    id: "social-innovation",
    title: "Vision",
    description:
      "To build a society where comYOUnities are empowered to shape their own development, where self-fulfilment is nurtured through a brick-by-brick approach grounded in process and inclusion, and where policies reflect the voices and lived experiences of those most affected and everyone get to live happy and colorful lives.",
    variant: "accent",
  },
];

/* ─── Podcast Section (BRICK by BRICK) ───────────────────────────────────── */

export const PODCAST_CONTENT = {
  eyebrow: "A Peacebuilder's Voice",
  title:   "BRICK by BRICK with Mmemdoo",
  cta:     "View All Episodes",
} as const;

/**
 * Episode data for the podcast cards.
 * Images use placeholder paths — replace with real episode thumbnails.
 */
export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id:          "ep-ethical-tech",
    title:       "The Future of Ethical Tech",
    description: "Nyam Stella discusses how upcoming AI regulations will reshape social impact strategies for NGOs.",
    tag:         "A Peacebuilder's Voice",
    image:       "/images/nyam stella1.jpg",
    listens:     "1.2k Listens",
  },
  {
    id:          "ep-global-philanthropy",
    title:       "Global Philanthropy 2.0",
    description: "Moving beyond the check: Building sustainable partnerships in developing economies.",
    tag:         "A Peacebuilder's Voice",
    image:       "/images/nyam stella5.jpg",
    listens:     "950 Listens",
  },
  {
    id:          "ep-women-exec",
    title:       "Women in Executive Roles",
    description: "Nyam Stella shares her personal playbook for navigating high-level corporate boards.",
    tag:         "A Peacebuilder's Voice",
    image:       "/images/nyam stella boss.jpg",
    listens:     "2.1k Listens",
  },
];

/* ─── Stella's Perspective (New Podcast — Coming Soon) ─────────────────────
 * Brand-new podcast show — not yet launched.
 * Design brief: elegant "coming soon" with warm anticipation energy.
 * ─────────────────────────────────────────────────────────────────────────── */

export const STELLA_PERSPECTIVE_CONTENT = {
  eyebrow:  "New Podcast",
  title:    "Stella's Perspective",
  tagline:  "Expect it.",
  description:
    "A thought-leadership podcast exploring peacebuilding, global development, and the stories that shape our world. Coming soon to all major platforms.",
  badge:    "Coming Soon",
  platforms: ["Spotify", "Apple Podcasts", "Google Podcasts", "YouTube"],
} as const;

/* ─── Vision / Foundation Section ─────────────────────────────────────────── */

export const VISION_CONTENT = {
  eyebrow:     "The Stella Foundation",
  badge:       "Coming Soon",
  title:       "Our Vision:",
  titleItalic: "Sustainable",
  titleSuffix: "Global Impact",
  description:
    "The Stella Foundation's mission is to catalyze grassroots development through strategic peacebuilding and resource accessibility. Our vision is a world where every community has the infrastructure and peace required to thrive independently by 2030.",
  waitlist: {
    title:       "Join the Waitlist",
    description: "Be the first to receive updates on our pilot programs and founding member opportunities.",
    placeholder: "Your professional email",
    cta:         "Notify Me",
  },
} as const;

/** Stats shown in the Vision section */
export const FOUNDATION_STATS: StatItem[] = [
  { id: "launch",  value: "2025",   label: "Official Launch" },
  { id: "cities",  value: "10+",    label: "Partner Cities"  },
  { id: "network", value: "Global", label: "Network Access"  },
];

/* ─── Track Record / Experience ─────────────────────────────────────────── */

export const TRACK_RECORD_CONTENT = {
  title:       "The Track Record",
  description: "A decade of leadership across global sectors, setting the stage for transformative social impact.",
} as const;

/** Career & academic milestones */
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id:       "cso",
    number:   "01",
    title:    "Chief Strategy Officer",
    subtitle: "Global Tech Infrastructure • 2020 – Present",
  },
  {
    id:       "csr-director",
    number:   "02",
    title:    "Director of Corporate Social Responsibility",
    subtitle: "Meridian Energy Group • 2016 – 2020",
  },
  {
    id:       "mba",
    number:   "03",
    title:    "MBA in Social Entrepreneurship",
    subtitle: "Stanford Graduate School of Business • Class of 2015",
  },
];

/* ─── Newsletter Section ─────────────────────────────────────────────────── */

export const NEWSLETTER_CONTENT = {
  title:       "Stay Informed",
  description:
    "Join my monthly digest for insights on leadership, foundation updates, and the evolution of social enterprise.",
  placeholder: "Email Address",
  cta:         "Subscribe",
} as const;

/* ─── Footer ────────────────────────────────────────────────────────────── */

export const FOOTER_CONTENT = {
  brand: "Nyam Stella",
  copyright: "© 2026 Nyam Stella. All Rights Reserved.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nyam-stella-111973334/",
    },
    { label: "Twitter", href: "https://x.com/Nyamstella10" },
    { label: "Instagram", href: "#" },
    { label: "facebook", href: "https://web.facebook.com/nyam.stellaxklucv" },
  ],
} as const;
