import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "empire-group.local",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "admin.adempiregroup.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
