/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hamcsoft.com" }],
        destination: "https://hamcsoft.com/:path*",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
