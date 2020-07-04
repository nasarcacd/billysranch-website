import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './lodgementpage.styles';
import { cabainsInfo, mostPopularCabin } from './cabains-info';

const LodgementPage = () => {
    const classes = useStyles();
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <p className={classes.title} align="center" color="textPrimary">
          Precios
        </p>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Todas nuestras cabinas están completamente equipadas con amplio parqueo, A/C, TV, Baño privado, WIFI, mini refri, y pila. 
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
            {cabainsInfo.map((cabain, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                    <Card>
                        <CardHeader
                        title={cabain.title}
                        subheader={cabain.subheader}
                        titleTypographyProps={{ align: 'center' }}
                        subheaderTypographyProps={{ align: 'center' }}
                        action={cabain.title === mostPopularCabin ? <StarIcon /> : null}
                        className={classes.cardHeader}
                        />
                        <CardContent>
                        <div className={classes.cardPricing}>
                            <Typography component="h4" variant="h5" color="textPrimary">
                            ¢{cabain.price} 
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                            mil por Persona
                            </Typography>
                        </div>
                        <ul>
                            {cabain.description.map((line) => (
                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                {line}
                            </Typography>
                            ))}
                        </ul>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
)};

export default LodgementPage;