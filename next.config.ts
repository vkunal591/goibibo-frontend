import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ✅ Allow images from this external domain
    domains: ["go-assets.ibcdn.com"],
  },
};

export default nextConfig;
