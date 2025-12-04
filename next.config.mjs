/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/barsav-website",
  assetPrefix: "/barsav-website/",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

