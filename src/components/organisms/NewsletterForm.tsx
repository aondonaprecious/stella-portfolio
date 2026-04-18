/**
 * organisms/NewsletterForm.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Monthly digest / newsletter subscription form.
 * Light-themed counterpart to WaitlistForm.
 * ─────────────────────────────────────────────────────────────────────────────
 */

"use client";

import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Input, Button } from "@/components/atoms";
import { NEWSLETTER_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

type FormState = "idle" | "loading" | "success";

/**
 * NewsletterForm organism.
 * Inline horizontal form (email + button) in the Stay Informed section.
 */
export function NewsletterForm() {
  const [email, setEmail]       = useState("");
  const [state, setState]       = useState<FormState>("idle");

  /**
   * Handles newsletter subscription.
   * TODO: Wire to your email provider (Mailchimp / ConvertKit / Resend).
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;

    setState("loading");
    // ── Mock delay (replace with real API) ──
    await new Promise((res) => setTimeout(res, 1000));
    setState("success");
    setEmail("");
  };

  if (state === "success") {
    return (
      <div
        className="flex items-center justify-center gap-3 py-4"
        aria-live="polite"
        role="status"
      >
        <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
          <FiCheck className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
        <span className="text-[var(--color-primary)] font-semibold">
          Subscribed! See you in your inbox.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        theme="light"
        placeholder={NEWSLETTER_CONTENT.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        disabled={state === "loading"}
        className="flex-1"
      />
      <Button
        type="submit"
        variant="primary"
        disabled={state === "loading"}
        className={cn(
          "rounded-xl whitespace-nowrap",
          state === "loading" && "opacity-70 cursor-not-allowed"
        )}
      >
        {state === "loading" ? "Sending…" : NEWSLETTER_CONTENT.cta}
      </Button>
    </form>
  );
}
