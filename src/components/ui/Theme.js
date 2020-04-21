import { createMuiTheme } from '@material-ui/core/styles';

const billBlue = '#277db7';
const billOrange = '#FFBA60';
const billBrown = '#582b00';
const billGreen = '#607309';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${billBlue}`,
            orange: `${billOrange}`,
            brown: `${billBrown}`,
            green: `${billGreen}`
        },
        primary: {
            main: `${billBlue}`
        },
        secondary: {
            main: `${billOrange}`
        },
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem'
        }
    }
});