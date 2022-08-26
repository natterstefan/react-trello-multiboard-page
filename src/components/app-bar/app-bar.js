import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// fix material-ui, based on https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import withRoot from '../../withRoot'

const styles = {
  root: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
  },
  flex: {
    fontSize: '1.3125rem',
    flex: 1,
  },
}

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h1" color="inherit" className={classes.flex}>
              Multiboard for Trello®
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRoot(withStyles(styles)(ButtonAppBar))
