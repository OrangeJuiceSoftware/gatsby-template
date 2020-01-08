const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Blueprints',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        forms: path.join(__dirname, 'src/components/forms'),
        hocs: path.join(__dirname, 'src/hocs'),
        hooks: path.join(__dirname, 'src/hooks'),
        pages: path.join(__dirname, 'src/pages'),
        parser: path.join(__dirname, 'src/parser'),
        services: path.join(__dirname, 'src/services'),
        src: path.join(__dirname, 'src')
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // 'layout-body-background': '#fcfcfc',
          // 'layout-header-background': '#fcfcfc'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/document/*'] }
    },
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['/document/**', '!/document/'] }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};


