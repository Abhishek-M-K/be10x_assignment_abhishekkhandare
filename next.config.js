/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
  trailingSlash: false,
  images: {
    domains: ["localhost", "utfs.io", "https://img.clerk.com", "img.clerk.com"],
  },
};

module.exports = nextConfig;
