import bundleAnalyzer from '@next/bundle-analyzer';
import { NextConfig } from 'next';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false
};

export default withBundleAnalyzer(nextConfig);
