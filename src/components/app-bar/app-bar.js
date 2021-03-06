import React from 'react'
import PropTypes from 'prop-types'
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
            <Typography variant="title" color="inherit" className={classes.flex}>
              Multiboard for Trello®
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withRoot(withStyles(styles)(ButtonAppBar))
