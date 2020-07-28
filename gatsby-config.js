module.exports = {
  siteMetadata: {
    title: `SMN 2020`,
    description: `SMN Test Site`,
    author: `SMN`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'SMNweb', // required
        defaultLang: 'en-gb', // optional, but recommended
        pages: [{
          type: 'Project',
          match: '/changework/:uid',
          component: require.resolve('./src/components/work/view/template.js'),
        }, {
          type: 'Blog_post',
          match: '/blog/:uid',
          component: require.resolve('./src/components/blog/view/template.js'),
        }],

        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans:300,400,500,600,700', 'IBM Plex Mono', 'Poppins:300,400,500,600,700,800,900']
        }
      }
    }

  ],
}
