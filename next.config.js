/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'img.freepik.com', "scontent.ffor30-1.fna.fbcdn.net"],
  },
  future: {
    webpack5: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });
    
    return config;
  },
}

module.exports = nextConfig
