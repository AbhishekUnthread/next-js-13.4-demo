const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: false,
      images: {
        domains: ["res.cloudinary.com", "raw.githubusercontent.com"],
      },
      env: {
        NEXT_PUBLIC_URL: "https://joblink-backend.onrender.com/api/v1",
        NEXT_API_URL: "https://joblink-backend.onrender.com/api/v1",
      },
    };
  }
  return {
    reactStrictMode: true,
    images: {
      domains: ["res.cloudinary.com", "raw.githubusercontent.com"],
    },
    env: {
      NEXT_PUBLIC_URL: "https://joblink-backend.onrender.com/api/v1",
      NEXT_API_URL: "https://joblink-backend.onrender.com/api/v1",
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
};

module.exports = nextConfig;
