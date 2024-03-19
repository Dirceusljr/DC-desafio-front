import { Box, Button } from "@mui/material";

import { useState } from "react";

import carrosJSON from '../../shared/json/db.json';
import SingleCard from "../../shared/components/SingleCard";
import ModalCard from "../../shared/components/ModalCard/DialogTeste";

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

  return (
    <Box display={"flex"} gap={2}>
      {listaCarros.map((item) => {
        return (
          <div key={item.id}>
              <Button variant="outlined" onClick={() => {
                return handleClickOpen(), setSelectedValue(item), item.visualizacoes++}} >
              <SingleCard {...item} />
              </Button>
              <ModalCard
                selectedValue={{...selectedValue}}
                open={open}
                onClose={handleClose}
              />
          </div>
        );
      })}
    </Box>
  );
};
