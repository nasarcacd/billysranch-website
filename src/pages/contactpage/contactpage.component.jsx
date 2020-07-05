import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GoogleMapReact from 'google-map-react';


const social = [
{ name: 'Instagram', icon: InstagramIcon, type: 'url', url: 'https://www.instagram.com/billysranch' },
{ name: 'Facebook', icon: FacebookIcon, type: 'url', url: 'https://www.facebook.com/BillysRanch' },
{ name: 'billys.hojancha@gmail.com', icon: MailIcon, type: 'email' },
{ name: '(506) 4034-1141', icon: CallIcon, type: 'call', number: '50640341141' },
{ name: '(506) 8401-2344', icon: WhatsAppIcon, type: 'url', url: 'https://api.whatsapp.com/send?phone=506+84012344' },
];

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
      lat: 10.06,
      lng: -85.42
    },
    zoom: 11
  };

  const useStyles = makeStyles(theme => ({

    social: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
  
      [theme.breakpoints.down('sm')]: {
        width: '96%',
        marginLeft: '2%',
        marginRight: '2%',
      }
    }
  }));


const ContactPage = () => {
    const classes = useStyles();

    return(
        <Container maxWidth='xl'>
        <Grid container>
            <Grid className={classes.social}>
                <p>150 metros al oeste del centro diurno del adulto mayor</p>
            </Grid>
            <Grid xs={12} item>
                <div className={classes.social}>
                    {social.map((network, index) => (
                        <div key={index}>
                            {
                                {
                                'url': <Link display="block" href={network.url} key={index}>
                                        <Grid container direction="row" spacing={2} alignItems="center">
                                            <Grid item>
                                            <network.icon />
                                            </Grid>
                                            <Grid item>{network.name}</Grid>
                                        </Grid>
                                        </Link>
                                ,
                                'call': <Grid container direction="row" spacing={2} alignItems="center">
                                        <Grid item>
                                            <network.icon />
                                        </Grid>
                                        <Grid item><a href={`tel:${network.number}`}>{network.name}</a></Grid>
                                    </Grid>
                                }[network.type]
                            }
                        </div>
                     ))}
                </div>      
            </Grid>
            <Grid xs={12} item>
            <div style={{ height: '60vh', width: '96%', marginLeft: '2%', marginRight: '2%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDhePFjifnPiVyjb9wXq1-wP3lflzKLAY0' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                <AnyReactComponent
                    lat={10.065910174656427}
                    lng={-85.42001558466362}
                    text="Billys Ranch"
                />
                </GoogleMapReact>
            </div>
            </Grid>
        </Grid>
        </Container>
        
    )  
};

export default ContactPage;