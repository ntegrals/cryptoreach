/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true
    // ... other configurations
  }
};

module.exports = nextConfig;
