/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://localhost:5000/api/:path*',
        destination: 'https://byteswap-f4y5.onrender.com/:path*',
      },
    ]
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

export default nextConfig;
