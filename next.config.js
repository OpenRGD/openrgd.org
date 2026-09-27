/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/OpenRGD/openrgd/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots-policy',
      },
      {
        source: '/.well-known/security.txt',
        destination: '/api/security-policy',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.openrgd.org' }],
        destination: 'https://openrgd.org/:path*',
        permanent: true,
      },
      {
        source: '/blog',
        has: [{ type: 'host', value: 'blog.openrgd.org' }],
        destination: 'https://openrgd.org/blog',
        permanent: true,
      },
      {
        source: '/security.txt',
        destination: 'https://openrgd.org/.well-known/security.txt',
        permanent: true,
      },
      {
        source: '/versions',
        destination: 'https://openrgd.org/releases',
        permanent: true,
      },
      {
        source: '/citation',
        destination: 'https://openrgd.org/cite',
        permanent: true,
      },
      {
        source: '/contribute',
        destination: 'https://openrgd.org/contributing',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
