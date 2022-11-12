/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  dangerouslyAllowSVG: true,
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
