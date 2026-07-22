/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Emit each route as <route>/index.html so URLs like /products/ (trailing
  // slash) resolve to a real file on Apache instead of hitting an empty
  // directory (which returns 403 Forbidden).
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;