/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",

    experimental: {
        appDir: true,
    },

    compiler: {
        styledComponents: true,
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
