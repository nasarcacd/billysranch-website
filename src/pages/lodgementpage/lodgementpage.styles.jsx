import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    heroContent: {
      marginTop: '7rem',
      marginBottom: '3rem',

      [theme.breakpoints.down('sm')]: {
        marginTop: '1rem'
      }
    },
    title: {
      fontSize: '3rem',

      [theme.breakpoints.down('sm')]: {
          fontSize: '2rem'
      }
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

export default useStyles;