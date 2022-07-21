/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Taylor Murray",
    description: "Aspiring Ms. Frizzle",
    author: "murratay",
    arena: "https://www.are.na/taylor",
    goodreads: "https://www.goodreads.com/user/show/26366211-taylor",
    twitter: "https://twitter.com/worksoverfaith",
    notion: "https://www.notion.so/Taylor-Murray-c256db594067425e9361abebb6dae7b2"
  },
  plugins: [
    `gatsby-plugin-sass`,
    {      
      resolve: "gatsby-source-filesystem",      
      options: {        
        name: "src",        
        path: `${__dirname}/src/`,      
      },    
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
}
