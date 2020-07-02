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
{ name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/billysranch' },
{ name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/BillysRanch' },
{ name: 'billys.hojancha@gmail.com', icon: MailIcon, url: '#' },
{ name: '(506) 4034-1141', icon: CallIcon, url: '#' },
{ name: '(506) 8401-2344', icon: WhatsAppIcon, url: '#' },
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
            <Grid xs={12} item>
                <div className={classes.social}>
                    {social.map((network, index) => (
                        <div key={index}>
                            <Link display="block" href={network.url} key={network}>
                            <Grid container direction="row" spacing={2} alignItems="center">
                                <Grid item>
                                <network.icon />
                                </Grid>
                                <Grid item>{network.name}</Grid>
                            </Grid>
                            </Link>
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