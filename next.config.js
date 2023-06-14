const { withContentlayer } = require('next-contentlayer')
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
      },
}

module.exports = nextConfig
// module.exports = withContentlayer(nextConfig)
