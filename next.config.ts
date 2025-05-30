import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['static.usernames.app-backend.toolsforhumanity.com'],
  },
  allowedDevOrigins: ['2a13-213-55-220-212.ngrok-free.app/'], // Add your dev origin here
  reactStrictMode: false,
};

export default nextConfig;
