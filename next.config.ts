import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  theme: {
    extend: {
      colors: {
        "apple-gray": "rgba(245, 245, 247, .8)",
      },
    },
  },
};

export default nextConfig;
