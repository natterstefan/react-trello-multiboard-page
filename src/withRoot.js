import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import getPageContext from './getPageContext' // eslint-disable-line

import style from './styles/styles.scss' // eslint-disable-line

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props)

      this.pageContext = this.props.pageContext || getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      // https://material-ui.com/guides/server-rendering/#the-client-side
      //
      // NOTE
      // - we do not remove it, as it looks like gatsby@v2 has currently issues
      //   to properly render material-ui in the client then
      //
      // TODO
      // - once this is fixed, we remove the comments and make it work again
      // const jssStyles = document.querySelector('#server-side-jss')
      // if (jssStyles && jssStyles.parentNode) {
      //   jssStyles.parentNode.removeChild(jssStyles)
      // }
    }

    pageContext = null

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks
      // to React Context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline
            to build upon. */}
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object // eslint-disable-line
  }

  return WithRoot
}

export default withRoot
