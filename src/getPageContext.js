// based on https://github.com/mui-org/material-ui/blob/master/examples/gatsby/src/getPageContext.js
import { SheetsRegistry } from 'jss'
import { createTheme, createGenerateClassName } from '@material-ui/core/styles'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createTheme()

function createPageContext() {
  return {
    theme,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (typeof window === 'undefined') {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}

// export non-default as well, see https://github.com/gatsbyjs/gatsby/issues/2116#issuecomment-402591618
export { getPageContext }
