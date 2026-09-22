/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots-policy',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog',
        has: [{ type: 'host', value: 'blog.openrgd.org' }],
        destination: 'https://openrgd.org/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
