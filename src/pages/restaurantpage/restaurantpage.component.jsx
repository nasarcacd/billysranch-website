import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './restaurantpage.styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ClosedImage from '../../assets/close.jpg';

const RestaurantPage = () => {
    const classes = useStyles();

    return(
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="main" className={classes.heroContent}>
            <p className={classes.title} align="center" color="textPrimary">
                Restaurante
            </p>
            <Typography variant="h5" align="center" color="textSecondary" component="p" >
            Ante la pandemia del COVID-19 y priorizando responsablemente la salud de nuestros clientes, familiares y nosotros mismos, hemos decidido mantener cerradas las instalaciones de Billy’s Ranch hasta nuevo aviso. Deseamos a nuestro pueblo muchas bendiciones de salud y bienestar.
            </Typography>
       </Container>
       <Container maxWidth="md" align="center">
           <img src={ClosedImage} alt='closed' />
       </Container>
       </React.Fragment>
        
    )
};

export default RestaurantPage;