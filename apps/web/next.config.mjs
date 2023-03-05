/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@wtw/database", "@wtw/ui"],
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

export default config
