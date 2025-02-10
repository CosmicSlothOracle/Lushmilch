/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static site generation
    images: {
        domains: ['link.storjshare.io'],
        unoptimized: true, // Required for static export
    },
    basePath: '/your-repo-name', // Replace with your actual repository name
}

module.exports = nextConfig