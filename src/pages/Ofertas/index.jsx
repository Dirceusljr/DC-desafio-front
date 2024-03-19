import { Box } from "@mui/material"
import SingleCard from "../../shared/components/SingleCard"
import carrosJSON from '../../shared/json/db.json';

export const Ofertas = () => {
  const listaCarros = carrosJSON;

  return (
    <Box marginY={8} marginX={2}>
      {listaCarros.map((item) => {
        return (
          <SingleCard key={item.id} {...item} />
        )
      })}
    </Box>
  )
}
