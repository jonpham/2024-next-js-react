import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Direct Index to ToDo
      {
        source: '/',
        destination: '/todos',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
