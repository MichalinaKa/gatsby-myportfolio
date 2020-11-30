module.exports = {
    siteMetadata: {
      title: `Portfolio`,
      description: `Portfolio website`,
      author: `MichalinaKa`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `projects`,
          path: `${__dirname}/src/projects/`,
          ignore: [`**/\.*`], // ignore files starting with a dot
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
      },

      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
              {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 400,
                quality: 75,
                withWebp: true,
                linkImagesToOriginal: false,
              }},
            ],
          },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
      ],
    }