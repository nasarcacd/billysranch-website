import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    }
  }));
  
  const mostPopularCabin = 'Cabina Estándar';

  const tiers = [
    {
      title: 'Cabina Delux',
      price: '12',
      description: [
        '1 disponible',
        '1 Cama matrimonial',
        '1 Cama individual',
        'A/C, TV, Baño Privado',
        'Mini Refri y Coffee Macker',
        'Máximo 6 personas'
     ]
    },
    {
      title: mostPopularCabin,
      subheader: 'Más Popular',
      price: '12',
      description: [
        '2 disponibles',
        '1 Cama matrimonial',
        'A/C, TV, Baño Privado',
        'Mini Refri y Coffee Macker',
        'Máximo 4 personas',
     ]
    },
    {
      title: 'Cabina Familiar',
      price: '12',
      description: [
        '1 disponible',
        '2 Camas matrimonial',
        'A/C, TV, Baño Privado',
        'Mini Refri y Coffee Macker',
        'Balcón con grandiosa vista',
        'Máximo 6 personas'
      ]
    },
  ];

const LodgementPage = () => {
    const classes = useStyles();
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Precios
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Todas nuestras cabinas están completamente equipadas con amplio parqueo, A/C, TV, Baño privado, WIFI, mini refri, y pila. 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === mostPopularCabin ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h4" variant="h5" color="textPrimary">
                      ¢{tier.price} 
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                    mil por Persona
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
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