import type { NextConfig } from "next";

// Deploy statico su GitHub Pages con dominio custom (root)
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
