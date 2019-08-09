module.exports = {
  pathPrefix: '/website',
  siteMetadata: {
    title: `GDM`,
    description: `The Good Data Movement website, empowering people to take back control of their personal data.`,
    author: `@ps-george`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['cabin', 'Open Sans'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`, // these have broken mozjpeg dependency
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `good-data-movement`,
        short_name: `gdm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
