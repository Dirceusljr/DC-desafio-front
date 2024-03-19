import { Box, Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" width="100vw" height="inherit">
        <Typography variant="h4" component='h1' textAlign="center" color="primary" m={2}>Agostinho Carros Seminovos</Typography>
        <Typography variant="h6" component='h2' textAlign="center" color="primary">Escolha uma das opções abaixo:</Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} padding={1}>
          <Link to='admin'>
            <Button color='secondary' variant="contained">Administração</Button>
          </Link>
          <Link to='ofertas'>
            <Button color='secondary' variant="contained">Ofertas</Button>
          </Link>
        </Stack>
    </Box>
  )
}
