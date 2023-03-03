/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@wtw/ui"],
  experimental: {
    appDir: true,
  },
}

export default config
