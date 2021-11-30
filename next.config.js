module.exports = {
  async redirects() {
    return [
      {
        source: '/photos',
        destination: 'https://vercel.com',
        permanent: true,
      },
    ]
  },
}
const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra()
