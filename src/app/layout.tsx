/**
 * app/layout.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Next.js App Router root layout.
 *
 * Responsibilities:
 *   - Injects Google Fonts via next/font (zero layout shift, self-hosted)
 *   - Sets root <html> language and font CSS variables
 *   - Provides site-wide metadata (SEO, OG, Twitter cards)
 *   - Imports global CSS
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

/* ─── Font configuration ─────────────────────────────────────────────────── */

/**
 * Manrope — variable-weight sans-serif for all body/UI text.
 * Loaded as a CSS variable so Tailwind can reference it via --font-display.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",          // CLS prevention: shows fallback until loaded
});

/**
 * Playfair Display — elegant serif for headings and display text.
 * Includes italic style used in the hero headline.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

/* ─── Metadata ───────────────────────────────────────────────────────────── */

/**
 * Static site metadata — replace with actual values before deployment.
 * OG image should be a 1200×630 portrait/brand image.
 */
export const metadata: Metadata = {
  title: {
    default:  "Nyam Stella | Humanitarian & Development Strategist",
    template: "%s | Nyam Stella",
  },
  description:
    "Nyam Stella — dedicated development enthusiast, peacebuilder, and global strategist with over a decade of humanitarian leadership across West Africa.",
  keywords: [
    "Nyam Stella",
    "Humanitarian",
    "Peacebuilder",
    "Development Strategist",
    "West Africa",
    "Social Innovation",
    "Stella Foundation",
  ],
  authors: [{ name: "Nyam Stella" }],
  openGraph: {
    type:        "website",
    title:       "Nyam Stella | Humanitarian & Development Strategist",
    description: "A decade of peacebuilding, grassroots development, and strategic leadership.",
    // TODO: Replace with production URL and OG image
    url:         "https://nyamstella.com",
    siteName:    "Nyam Stella",
    images: [
      {
        url:    "/images/og-image.jpg",  // 1200×630
        width:  1200,
        height: 630,
        alt:    "Nyam Stella — Humanitarian & Development Strategist",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Nyam Stella | Humanitarian & Development Strategist",
    description: "Peacebuilder. Strategist. Changemaker.",
    images:      ["/images/og-image.jpg"],
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#0f172a",
};

/* ─── Root Layout Component ─────────────────────────────────────────────── */

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout.
 * Sets the <html> and <body> with font CSS variables applied as classNames.
 * All font variables are available globally as CSS custom properties.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      // Inject both font CSS variable classes onto <html>
      className={`${manrope.variable} ${playfair.variable}`}
    >
      <body className="transition-colors duration-300">
        {/* Skip to main content — accessibility best practice */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
