const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
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
)
