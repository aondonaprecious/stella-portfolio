import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  /* ─────────────────────────────────────────────────────────────────────────
   * Next.js configuration for Nyam Stella personal website
   * - images: allows external placeholder images during development
   *   Replace with your own CDN/domain in production
   * ─────────────────────────────────────────────────────────────────────────
   */
  images: {
    remotePatterns: [
      {
        // Google-hosted placeholder images (development only)
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        // Production: add your own image CDN here
        // e.g., hostname: "res.cloudinary.com"
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
