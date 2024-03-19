import { createTheme } from "@mui/material";
import { blueGrey, orange} from "@mui/material/colors";

export const Theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[600],
      dark: blueGrey[700],
      light: blueGrey[300],
      contrastText: '#ffffff',
    },
    secondary: {
      main: orange[400],
      dark: orange[600],
      light: orange[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#DBE2EF',
      default: '#F9F7F7',
    }
  }
});