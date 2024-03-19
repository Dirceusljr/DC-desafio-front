import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar  >
        <Link to='/'>
          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
          >
            <DirectionsCarIcon />
          </IconButton>
        </Link>
          <Typography  variant="h6" component="div" width="100%" textAlign="center" noWrap sx={{ fontSize: '1rem' }}>
            Agostinho Carros Seminovos
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
