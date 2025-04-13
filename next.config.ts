import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        turbo: {},
    },
    images: {
        domains: ['localhost'],  // Разрешаем загрузку изображений с localhost
    },
};

export default nextConfig;