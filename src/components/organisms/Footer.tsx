/**
 * organisms/Footer.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Site footer organism.
 * Contains: brand logo, social links, copyright notice.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * @format
 */

import React from "react";
import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { FOOTER_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import { AiFillFacebook } from "react-icons/ai";

/**
 * Maps social label → React Icons component.
 * Extend this map to add new platforms.
 */
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: <FiLinkedin className="w-5 h-5" aria-hidden="true" />,
  Twitter: <FiTwitter className="w-5 h-5" aria-hidden="true" />,
  Instagram: <FiInstagram className="w-5 h-5" aria-hidden="true" />,
  Facebook: <AiFillFacebook className="w-5 h-5" aria-hidden="true" />,
};

/**
 * Footer organism.
 * Clean, minimal footer with horizontal layout on desktop.
 */
export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="group-hover:rotate-12 transition-transform duration-300"
          >
            <circle
              cx="7"
              cy="7"
              r="4"
              fill="var(--color-accent)"
              opacity="0.9"
            />
            <circle
              cx="21"
              cy="7"
              r="4"
              fill="var(--color-primary)"
              opacity="0.4"
            />
            <circle
              cx="7"
              cy="21"
              r="4"
              fill="var(--color-primary)"
              opacity="0.4"
            />
            <circle
              cx="21"
              cy="21"
              r="4"
              fill="var(--color-accent)"
              opacity="0.6"
            />
          </svg>
          <span className="text-[var(--color-primary)] text-lg font-bold font-serif">
            {FOOTER_CONTENT.brand}
          </span>
        </a>

        {/* Social links */}
        <nav className="flex gap-6" aria-label="Social media links">
          {FOOTER_CONTENT.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={`${label} profile`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-slate-400 hover:text-[var(--color-accent)]",
                "transition-colors duration-[var(--duration-fast)]",
                "hover:scale-110 transition-transform",
              )}
            >
              {SOCIAL_ICONS[label] ?? label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-slate-400 text-sm">{FOOTER_CONTENT.copyright}</p>
      </div>
    </footer>
  );
}
