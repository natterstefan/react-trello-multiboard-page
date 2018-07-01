import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Header from '../components/header/header'
import AppBar from '../components/app-bar/app-bar'
import Footer from '../components/footer/footer'

const styles = theme => ({
  page: {
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'flex',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    margin: '30px 0 0',
    padding: '0 20px 100px 20px'
  },
  'page-content-wrapper': {
    fontSize: '0.875rem',
    fontWeight: '400'
  },
  'page-content': {
    margin: '30px 0 0',
    '& h1': {
      fontSize: '1.4em'
    }
  },
  title: {
    marginBottom: 20
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

function Template({
  classes,
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const siteTitle = get(site, 'siteMetadata.title')
  const siteDescription = get(site, 'siteMetadata.description')

  return (
    <React.Fragment>
      <Header siteTitle={siteTitle} siteDescription={siteDescription} />
      <AppBar />
      <div className={classes.page}>
        <Paper className={classes.root} elevation={1}>
          <Typography
            variant="headline"
            component="h1"
            className={classes.title}
          >
            {frontmatter.title}
          </Typography>
          <div className={classes['page-content-wrapper']}>
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Paper>
      </div>
      <Footer />
    </React.Fragment>
  )
}

Template.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Template)

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
