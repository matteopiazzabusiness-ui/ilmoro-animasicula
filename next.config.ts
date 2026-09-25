import type { NextConfig } from "next";

// Deploy statico su GitHub Pages (project site: /ilmoro-animasicula)
const repo = "ilmoro-animasicula";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
};

export default nextConfig;
