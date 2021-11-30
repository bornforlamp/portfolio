const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/hello-vercel',
        destination: 'https://vercel.com',
        permanent: true,
      },
    ]
  },
})
