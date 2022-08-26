module.exports = {
  siteMetadata: {
    title: 'React-Trello-Multiboard',
    author: 'Stefan Natter',
    description:
      'React-Trello-Multiboard is a single-page application built with React displaying multiple cards of several Trello® boards and lists. The cards can be filtered by preferred team members. ',
    siteUrl: 'https://multiboardfortrello.com',
  },
  plugins: [
    /** 
     * @see https://github.com/hupe1980/gatsby-plugin-material-ui/blob/v3.0.1/gatsby-plugin-material-ui/README.md
     */
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
