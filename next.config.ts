import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
      {
        hostname: "warrn.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
