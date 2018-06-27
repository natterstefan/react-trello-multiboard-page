import React from 'react'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    backgroundColor: 'rgb(63, 81, 181)',
    color: 'rgb(255, 255, 255)',
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    margin: '55px 0px -25px',
    padding: 10
  }
})

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography color="inherit">
        We are not affiliated, associated, authorized, endorsed by or in any way
        officially connected to Trello®, Inc. (www.trello.com).
      </Typography>
    </div>
  )
}
Footer.displayName = 'Footer'

export default withStyles(styles)(Footer)
