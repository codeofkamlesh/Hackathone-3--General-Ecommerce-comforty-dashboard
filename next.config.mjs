/** @type {import('next').NextConfig} */
export default {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
        unoptimized: true,
    },
  };
