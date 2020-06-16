// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169208098-1"
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `we-are-becoming-theme`,
        short_name: `becoming`,
        start_url: `/`,
        background_color: `#ff5959`,
        theme_color: `#ff5959`,
        display: `we-are-becoming`,
        icon: `src/images/logo_black_bg.png`,
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `becomingdesignoffice`,
        access_token: `IGQVJYRWNTS2NNaWRPdXVBSjR0UktNaVd4LUlUMWpDSHh2anF1TnNjY1hpeXphQjktWFUyeHl3ei1WOWdSUjZA5dGpnZA1VOemlib0FOeVpyMlFaTnZAaN1dYa0MyV0x6cERpWl9NbHRXN1pBLU1EQnZADTQZDZD`,
        instagram_id: `515922255659297`,
      },
    },
  ]
}
