import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '3rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },
    heroContent: {
      marginTop: '7rem',
      marginBottom: '3rem',

      [theme.breakpoints.down('sm')]: {
        marginTop: '1rem'
      }
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
  }));

export default useStyles;