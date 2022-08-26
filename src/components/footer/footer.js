import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// fix material-ui, based on
// https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import withRoot from '../../withRoot'

// CSS inspired by https://codepen.io/natterstefan/pen/dKavRB (fork of
// https://codepen.io/cbracco/pen/zekgx)
const styles = () => ({
  root: {
    backgroundColor: 'rgb(63, 81, 181)',
    color: 'rgb(255, 255, 255)',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    textAlign: 'center',
    padding: '10px 15px',
  },
  links: {
    marginBottom: 10,
    '& a': {
      color: '#fff',
      display: 'inline-block',
      margin: '0 5px',
    },
  },
  body1: {
    fontSize: '0.675em',
  },
})

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.links}>
      <Link to="/">
        <Typography color="inherit">MultiboardForTrello.com</Typography>
      </Link>
      <Link to="/privacy">
        <Typography color="inherit">Privacy</Typography>
      </Link>
    </div>
    <div>
      <Typography color="inherit" className={classes.body1}>
        We are not affiliated, associated, authorized, endorsed by or in any way
        officially connected to Trello®, Inc. (www.trello.com).
      </Typography>
    </div>
  </div>
)

Footer.displayName = 'Footer'

export default withRoot(withStyles(styles)(Footer))
