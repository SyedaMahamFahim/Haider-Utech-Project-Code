/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        port: "",
        pathname:
          "/image-illustration/futuristic-sports-car-motion-front-600w-1950153520.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
