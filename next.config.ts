import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a phone or tablet on the same Wi-Fi use the dev server (http://192.168.x.x:3000).
  // Without this, Next blocks its scripts and buttons like the menu do nothing. Dev only.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
