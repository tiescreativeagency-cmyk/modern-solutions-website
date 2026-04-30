/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.modernsolutionsconstruction.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
