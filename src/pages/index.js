import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Header from '../components/header/header'
import AppBar from '../components/app-bar/app-bar'
import Content from '../components/content/content'
import Footer from '../components/footer/footer'
// fix material-ui, based on https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import withRoot from '../withRoot'

const Index = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'data.site.siteMetadata.description')

  return (
    <div>
      <Header siteTitle={siteTitle} siteDescription={siteDescription} />
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

export default withRoot(Index)
