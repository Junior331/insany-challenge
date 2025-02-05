import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dummyjson.com"],
  },

  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
