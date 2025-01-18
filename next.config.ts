import type { NextConfig } from "next";
import host from "./utils/host_getter";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
        port: `${process.env.NEXT_PUBLIC_BACKEND_PORT}`,
        pathname: '/images/**',
        search: ''
      }
    ]
  }
};

console.log(nextConfig.images?.remotePatterns);

export default nextConfig;
