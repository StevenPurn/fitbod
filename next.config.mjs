/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'app-media.fitbod.me',
    }]
  }
};

export default nextConfig;
