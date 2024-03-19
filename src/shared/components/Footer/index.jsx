import { Box, Typography } from "@mui/material"
import { Theme } from "../../themes/Theme"

export const Footer = () => {
  return (
    <Box position="fixed" bottom='0' bgcolor={Theme.palette.primary.main} display="flex" justifyContent='center' width='100vw' padding={1}>
        <Typography color={Theme.palette.primary.contrastText}variant="subtitle2" component="p">
            Desenvolvido por Dirceu dos Santos
        </Typography>
    </Box>
  )
}
