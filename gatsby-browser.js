const React = require(`react`)

// remove the JSS style tag generated on the server to avoid conflicts with the
// one added on the client
exports.onInitialClientRender = () => {
  // NOTE:
  // - based on MaterialUI-SSR idea from cpboyd: https://github.com/gatsbyjs/gatsby/issues/2116#issuecomment-403182088
  // - as soon as this is added, the initial css/design does not match the client styling
  //
  // const ssStyles = window.document.getElementById(`server-side-jss`)
  // if (ssStyles) {
  //   ssStyles.parentNode.removeChild(ssStyles)
  // }
}

exports.wrapRootComponent = ({ Root }) => () => <Root />
