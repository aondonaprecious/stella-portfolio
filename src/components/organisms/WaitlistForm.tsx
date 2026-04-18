/**
 * organisms/WaitlistForm.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Waitlist signup form for the Stella Foundation.
 * Features:
 *   - Controlled input with validation
 *   - Loading and success states
 *   - Accessible labels and ARIA live region for status messages
 * ─────────────────────────────────────────────────────────────────────────────
 */

"use client";

import React, { useState } from "react";
import { FiBell, FiCheck } from "react-icons/fi";
import { Input, Button } from "@/components/atoms";
import { VISION_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

type FormState = "idle" | "loading" | "success" | "error";

/**
 * WaitlistForm organism.
 * Dark-themed email capture form for the Foundation waitlist.
 */
export function WaitlistForm() {
  /** Controlled email input value */
  const [email, setEmail] = useState("");
  /** Tracks the async submission lifecycle */
  const [formState, setFormState] = useState<FormState>("idle");

  const { waitlist } = VISION_CONTENT;

  /**
   * Handles form submission.
   * TODO: Replace the setTimeout mock with a real API call (e.g. Mailchimp, ConvertKit).
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || formState === "loading") return;

    setFormState("loading");

    // ── Mock async submission (replace with real API) ──
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
    setEmail("");
  };

  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
      {/* Heading */}
      <h4 className="text-white font-serif text-2xl font-bold mb-3">
        {waitlist.title}
      </h4>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">
        {waitlist.description}
      </p>

      {/* Success state — replaces the form */}
      {formState === "success" ? (
        <div
          className="flex flex-col items-center gap-4 py-6 text-center"
          aria-live="polite"
          role="status"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
            <FiCheck className="w-7 h-7 text-[var(--color-accent)]" aria-hidden="true" />
          </div>
          <p className="text-white font-semibold">You&apos;re on the list!</p>
          <p className="text-slate-400 text-sm">We&apos;ll be in touch when we launch.</p>
        </div>
      ) : (
        /* Input form */
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Accessible label — visually hidden but readable by screen readers */}
          <label htmlFor="waitlist-email" className="sr-only">
            Professional email address
          </label>
          <Input
            id="waitlist-email"
            type="email"
            theme="dark"
            placeholder={waitlist.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            disabled={formState === "loading"}
          />

          <Button
            type="submit"
            variant="accent"
            fullWidth
            disabled={formState === "loading"}
            className={cn(
              "rounded-xl py-4 font-bold",
              "transition-opacity duration-[var(--duration-fast)]",
              formState === "loading" && "opacity-70 cursor-not-allowed"
            )}
          >
            {formState === "loading" ? (
              "Sending…"
            ) : (
              <>
                {waitlist.cta}
                <FiBell className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
