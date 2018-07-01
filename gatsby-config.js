module.exports = {
  siteMetadata: {
    title: 'React-Trello-Multiboard',
    author: 'Stefan Natter',
    description:
      'React-Trello-Multiboard is a single-page application built with React displaying multiple cards of several Trello® boards and lists. The cards can be filtered by preferred team members. ',
    siteUrl: 'https://multiboardfortrello.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'YOUR_GOOGLE_TAGMANAGER_ID',
        includeInDevelopment: true
      }
    }
  ]
}
