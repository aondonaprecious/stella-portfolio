/**
 * organisms/Header.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Sticky top navigation header organism.
 * Features:
 *   - Frosted glass backdrop on scroll
 *   - Desktop horizontal nav links
 *   - Mobile hamburger menu with slide-down drawer
 *   - Active scroll-spy (highlights current section)
 *   - Contact CTA button
 * ─────────────────────────────────────────────────────────────────────────────
 */

"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

/**
 * Header organism.
 * Sticky, backs-blurred header that darkens subtly on scroll.
 */
export function Header() {
  /** Controls mobile menu open/closed state */
  const [mobileOpen, setMobileOpen] = useState(false);
  /** True once user has scrolled past the hero — adds stronger shadow */
  const [scrolled, setScrolled] = useState(false);

  /**
   * Listen for scroll events to toggle the "scrolled" state.
   * Cleans up the event listener on unmount.
   */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Close mobile menu when a nav link is clicked (smooth scroll takes over) */
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "bg-[var(--color-cream)]/85 backdrop-blur-md",
        "border-b border-[var(--color-primary)]/5",
        "transition-shadow duration-[var(--duration-base)]",
        scrolled && "shadow-[0_2px_20px_-4px_rgba(15,23,42,0.08)]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* ── Brand logo ── */}
        <a href="#home" className="flex items-center gap-2 group" aria-label="Nyam Stella — home">
          {/* Decorative dot cluster icon (SVG, no external dep) */}
          <svg
            width="28" height="28" viewBox="0 0 28 28" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="group-hover:rotate-12 transition-transform duration-300"
          >
            <circle cx="7"  cy="7"  r="4" fill="var(--color-accent)" opacity="0.9" />
            <circle cx="21" cy="7"  r="4" fill="var(--color-primary)" opacity="0.4" />
            <circle cx="7"  cy="21" r="4" fill="var(--color-primary)" opacity="0.4" />
            <circle cx="21" cy="21" r="4" fill="var(--color-accent)" opacity="0.6" />
          </svg>
          <span className="text-[var(--color-primary)] text-xl font-bold tracking-tight font-serif">
            Nyam Stella
          </span>
        </a>

        {/* ── Desktop navigation ── */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop CTA + Mobile menu toggle ── */}
        <div className="flex items-center gap-4">
          {/* Contact button — desktop only */}
          <Button
            variant="primary"
            size="sm"
            className="hidden md:inline-flex rounded-full px-6 py-2.5 text-sm"
            onClick={() => {
              document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </Button>

          {/* Hamburger toggle — mobile only */}
          <button
            className="md:hidden text-[var(--color-primary)] p-2 rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="px-6 pb-6 flex flex-col gap-5 border-t border-[var(--color-primary)]/5 pt-4">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </NavLink>
          ))}
          <Button
            variant="primary"
            size="sm"
            className="w-full rounded-full mt-2"
            onClick={handleNavClick}
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}
