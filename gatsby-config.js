module.exports = {
  siteMetadata: {
    title: `Something More Near`,
    titleTemplate: "%s · Something More Near",
    description: `Something More Near – Social changework for ambitious organisations`,
    url: "https://www.somethingmorenear.com", // No trailing slash allowed!
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
    author: `Something More Near`,
    twitterUsername: "@occlumency",
    baseUrl: "http://www.somethingmorenear.com"
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
        previews: false, // optional, default: false
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
        typekit: {
          id: 'vak6jai'
        }
      }
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125950580-1'
      }
    }
    
  ],
}
