import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Header from '../components/header/header'
import AppBar from '../components/app-bar/app-bar'
import Content from '../components/content/content'
import Footer from '../components/footer/footer'

export default props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'data.site.siteMetadata.description')

  return (
    <React.Fragment>
      <Header siteTitle={siteTitle} siteDescription={siteDescription} />
      <AppBar />
      <Content />
      <Footer />
    </React.Fragment>
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
