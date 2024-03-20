import { Box, Button, Grid, IconButton } from "@mui/material";

import { useState } from "react";

import carrosJSON from '../../shared/json/db.json';
import SingleCard from "../../shared/components/SingleCard";
import ModalCard from "../../shared/components/ModalCard/DialogTeste";

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const listaCarros = carrosJSON;

export const Ofertas = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const [cardView, setCardView] = useState("3")

  return (
    <Box  >
      <Box marginTop={8} display={"flex"} justifyContent={"flex-end"}>
        <IconButton onClick={() => setCardView("12")}><FormatListBulletedIcon /></IconButton>
        <IconButton onClick={() => setCardView("3")}><ViewModuleIcon /></IconButton>
      </Box>

      
    <Grid 
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
      {listaCarros.map((item) => {
        return (
          <Grid key={item.id} xs={cardView} spacing={1} marginX={2} marginY={1} display='flex' rowGap={1} justifyContent='center' alignItems='center' width={100}>
              <Button variant="outlined" onClick={() => {
                return handleClickOpen(), setSelectedValue(item), item.visualizacoes++}} >
              <SingleCard {...item} />
              </Button>
              <ModalCard
                selectedValue={{...selectedValue}}
                open={open}
                onClose={handleClose}
              />
          </Grid>
        );
      })}
    </Grid>
    </Box>
  );
};
