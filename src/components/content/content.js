import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import cardData from './data'

const styles = theme => ({
  page: {
    margin: '30px 5px 0',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 100,
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    cursor: 'pointer',
    width: 500,
    height: 'auto',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  },
  imgX: {
    transition: '0.6s ease',
    '&:hover': {
      transform: 'translateX(-50%) scale(1.3)'
    }
  },
  imgY: {
    transition: '0.6s ease',
    '&:hover': {
      transform: 'translateY(-50%) scale(1.3)'
    }
  }
})

function AdvancedGridList(props) {
  const { classes } = props

  return (
    <div className={classes.page}>
      <div className={classes.grid}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {cardData.map((tile, idx) => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
              onClick={() => (window.location = tile.link)}
            >
              <img
                className={(idx + 1) % 2 === 0 ? classes.imgY : classes.imgX}
                src={tile.img}
                alt={idx}
              />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AdvancedGridList)
