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
  env: {
    NEXT_PUBLIC_BASE_PATH: "/barsav-website",
  },
};

export default nextConfig;

