import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/orbit-flip-slider-app" : ""),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
