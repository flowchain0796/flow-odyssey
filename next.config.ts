// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.freepik.com'], // Add external domains here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
 
};

module.exports = nextConfig;


