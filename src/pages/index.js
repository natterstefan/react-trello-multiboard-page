import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash.get'

import AppBar from '../components/app-bar/app-bar'
import Content from '../components/content/content'
import Footer from '../components/footer/footer'

export default props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'data.site.siteMetadata.description')

  return (
    <div style={{ margin: '-8px' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <AppBar />
      <Content />
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
