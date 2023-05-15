/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "octodex.github.com",
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
