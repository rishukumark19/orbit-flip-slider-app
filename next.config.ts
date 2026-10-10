import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/orbit-flip-slider-app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
