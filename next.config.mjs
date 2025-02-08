/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bodo0tgbs4falkp7.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "odc80bt1smxupalp.public.blob.vercel-storage.com",
        port: "",
      },
    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
