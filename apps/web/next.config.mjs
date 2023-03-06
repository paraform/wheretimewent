/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@wtw/api", "@wtw/database", "@wtw/ui"],
  experimental: {
    appDir: true,
  },
}

export default config
