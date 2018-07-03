import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import CookieBanner from 'react-cookie-banner'

export default ({ siteTitle, siteDescription }) => (
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
      <style type="text/css">{`
        body {
          position: relative;
          margin: 0;
          min-height: 100%;
          line-height: 1.25em;
        }

        html {
          margin: 0;
          height: 100%;
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        .cookie-banner {
          background-color: #484848;
          color: #fff;
          align-items: center;
          display: flex;
          justify-content: space-evenly;
          height: auto;
          line-height: 1.25em;
          padding: 10px 15px;
        }

        .cookie-banner a {
          color: #fff;
        }

        .cookie-message {
          padding-right: 15px;
        }

        .button-close {
          flex: 0 0 auto;
          cursor: pointer;
          background-color: #fff;
          font-weight: bold;
          padding: 0.75em;
          text-decoration: none;
          text-transform: uppercase;
          outline: 0;
          border-radius: 3px;
          border: 2px solid transparent;
          text-align: center;
          width: 100px;
          margin-right: 15px;
        }
     `}</style>
    </Helmet>
  </div>
)
