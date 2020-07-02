import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/br_logo.svg';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    }

  },
  logo: {
    height: '7em',

    [theme.breakpoints.down('sm')]: {
      height: '3rem',
    }
  },
  tapContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '4rem',
    color: theme.palette.common.black,

    [theme.breakpoints.down('sm')]: {
      marginLeft: '0rem',
      fontSize: '0.4rem'
    }
  },
  indicator: {
    color: theme.palette.common.brown
  }
}));

const menuItems = {
  '/': {
    label: 'Inicio',
    route: '/',
    value: 0
  },
  '/restaurant': {
    label: 'Restaurante',
    route: '/restaurant',
    value: 1
  },
  '/lodgement': {
    label: 'Hospedaje',
    route: '/lodgement',
    value: 2
  },
  '/contact': {
    label: 'Contacto',
    route: '/contact',
    value: 3
  }
};

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    if(menuItems[pathname] && value !== menuItems[pathname].value){
      setValue(menuItems[pathname].value);

    }
  }, [value]);

  const menuItemsMap = Object.keys(menuItems).map(key => menuItems[key]);

  return(
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <img alt='company logo' className={classes.logo} src={logo} />
          <Tabs 
          value={value} 
            onChange={handleChange} 
            className={classes.tapContainer}
            aria-label='Tab Menu'
            indicatorColor='secondary'
            variant="scrollable"
            scrollButtons="auto">
            {menuItemsMap.map((item) => (
              <Tab key={item.value} className={classes.tab} component={Link} label={item.label} to={item.route} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )};

export default Header;