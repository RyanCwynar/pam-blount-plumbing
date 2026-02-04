import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pam-blount-plumbing",
  assetPrefix: "/pam-blount-plumbing/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
