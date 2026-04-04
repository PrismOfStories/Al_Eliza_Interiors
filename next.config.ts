import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dxhmpdgqj/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/interior/design/in/dubai/:path*',
        destination: 'https://seo-aleliza.vercel.app/',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
