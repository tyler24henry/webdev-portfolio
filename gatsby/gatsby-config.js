import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  pathPrefix: '/',
  siteMetadata: {
    title: `Tyler Henry`,
    siteUrl: 'https://www.tylerhenry.io',
    description: 'Tyler Henry is a self-taught web developer based in Perkasie, PA who is striving to build useful and interesting web applications.',
    image: '/favicon.png',
    twitter: '@tyler24henry',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tyler Henry`,
        short_name: `tyler-henry`,
        description: `Tyler Henry is a self-taught web developer based in Perkasie, PA who is striving to build useful and interesting web applications.`,
        lang: `en`,
        icon: `static/favicon.png`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF4949`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'e83k9fla',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-142485528-8',
      },
    },
    {
        resolve: `gatsby-plugin-hotjar`,
        options: {
          includeInDevelopment: true, // optional parameter to include script in development
          id: 2159103,
          sv: 6,
        },
      },
  ],
};