import type {NextConfig} from 'next';

function normalizeBasePath(value?: string) {
  if (!value || value === '/') {
    return undefined;
  }

  return value.startsWith('/') ? value : `/${value}`;
}

const basePath = normalizeBasePath(process.env.BASE_URL);
const assetPrefix = process.env.ASSETS_PREFIX || basePath;

const nextConfig: NextConfig = {
  ...(basePath ? {basePath} : {}),
  ...(assetPrefix ? {assetPrefix} : {}),
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // File watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
