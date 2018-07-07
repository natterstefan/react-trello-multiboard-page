import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import CookieBanner from 'react-cookie-banner'

const Header = ({ siteTitle, siteDescription }) => (
  <div>
    <CookieBanner
      className="cookie-banner"
      cookiePath="/"
      cookie="user-has-accepted-cookies"
      dismissOnScroll={false}
      disableStyle
      buttonMessage="OK"
      link={<Link to="/privacy">here.</Link>}
      message="We use cookies to give you the best online experience. See what we do and how you can disagree "
    />
    <Helmet>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
    </Helmet>
  </div>
)

Header.displayName = 'Header'
Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}

export default Header
