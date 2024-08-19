/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const nextConfig = {
  assetPrefix: isGitHubPages ? 'https://SantoshPisini/santoshpisini.github.io' : '',
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
