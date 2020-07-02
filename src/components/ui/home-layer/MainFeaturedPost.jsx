import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(6),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    fontSize: '2.5rem',

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  description: {
    fontSize: '1.5rem',

    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  }
}));

const MainFeaturedPost = () => {
  const classes = useStyles();
  const post = {
    title: 'Bienvenido al sitio web de Billy\'s Ranch',
    description:
      "Acá podrá encontrar información sobre nuestro restaurante, servicio de hospedaje y próximamente piscinas...",
    image: 'https://wallpaperaccess.com/full/304659.jpg',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <p className={classes.title}>
              {post.title}
            </p>
            <p className={classes.description}>
              {post.description}
            </p>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;