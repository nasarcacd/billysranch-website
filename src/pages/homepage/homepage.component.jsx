import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.common.green,
    //fontWeight: 700
  }
}));

const HomePage = () => {
    const classes = useStyles();
    return(
    <div>
        <span className={classes.title}>home Page</span>
    </div>
    );
    
};

export default HomePage;