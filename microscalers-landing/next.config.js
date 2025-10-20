/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',           // 👈 forces static HTML export
  distDir: 'out',             // 👈 Cloudflare serves from /out instead of .next
};

module.exports = nextConfig;
