import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListTile from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import cardData from './data'

// fix material-ui, based on https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import withRoot from '../../withRoot'

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
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  imgX: {
    transition: '0.6s ease',
    '&:hover': {
      transform: 'translateX(-50%) scale(1.3)',
    },
  },
  imgY: {
    transition: '0.6s ease',
    '&:hover': {
      transform: 'translateY(-50%) scale(1.3)',
    },
  },
})

function AdvancedGridList(props) {
  const { classes } = props

  return (
    <div className={classes.page}>
      <div className={classes.grid}>
        <ImageList rowHeight={200} gap={1} className={classes.gridList}>
          {cardData.map((tile, idx) => (
            <ImageListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
              onClick={() => {
                window.location = tile.link
              }}
            >
              <img
                className={(idx + 1) % 2 === 0 ? classes.imgY : classes.imgX}
                src={tile.img}
                alt={idx}
              />
              <ImageListItemBar
                title={tile.title}
                position="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </ImageListTile>
          ))}
        </ImageList>
      </div>
    </div>
  )
}

export default withRoot(withStyles(styles)(AdvancedGridList))
