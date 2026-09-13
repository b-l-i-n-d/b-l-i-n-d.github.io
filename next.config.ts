import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "tutorlms.com",
      },
    ],
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["@heroui/react", "lucide-react", "motion"],
  },
  reactCompiler: true,
};

export default nextConfig;
