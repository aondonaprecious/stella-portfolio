/**
 * sections/NewsletterSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * "Stay Informed" — monthly digest newsletter signup section.
 * Centred layout with heading, tagline, and NewsletterForm organism.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from "react";
import { NewsletterForm } from "@/components/organisms";
import { NEWSLETTER_CONTENT } from "@/lib/constants";

/**
 * NewsletterSection.
 * Contains the NewsletterForm client component in a server-safe layout.
 */
export function NewsletterSection() {
  const { title, description } = NEWSLETTER_CONTENT;

  return (
    <section
      id="newsletter"
      className="py-24 bg-[var(--color-cream)] border-t border-[var(--color-primary)]/5"
      aria-label="Newsletter subscription — Stay Informed"
    >
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <h3 className="font-serif text-3xl font-bold text-[var(--color-primary)] mb-6">
          {title}
        </h3>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
          {description}
        </p>

        {/* NewsletterForm is a client component — interactive */}
        <NewsletterForm />
      </div>
    </section>
  );
}
