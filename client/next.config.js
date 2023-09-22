/** @type {import('next').NextConfig} */
const newurl="http://localhost:5000";
// const newurl="https://jobpreppro-backend.onrender.com";

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
