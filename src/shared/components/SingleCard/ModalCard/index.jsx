/* eslint-disable react/prop-types */
import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import  { useModalContext } from "../../../contexts/ModalState";
import { useState } from "react";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export const ModalCard = ({...props}) => {
  const { open, setOpen } = useModalContext();
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.foto.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          bgcolor: 'background.default',
          flexDirection: "row"
        }}
      >
        <Box>
          <Typography variant="h5" color="secondary">Modelo: {props.modelo}</Typography>
          <Typography variant="subtitle2" color="primary">Marca: {props.marca} </Typography>
        </Box>
        <Typography variant="h5" color="secondary" fontWeight='700' >Preço: {props.preco} </Typography>

      </Paper>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange} enableMouseEvents>
        {props.foto.map((step, index) => (
            <div key={step[index]}>
            {Math.abs(activeStep - index) <= 2 ? (
                <Box
                component="img"
                sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                }}
                src={step}
                alt={step.marca}
                />
                ) : null}
          </div>
        ))}
        </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap' columnGap={2}>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            Ano: {props.ano}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            Cor: {props.cor}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            Placa: {props.placa}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            Cidade: {props.cidade}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            Quilometragem: {props.quilometragem}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            Data de cadastro: {props.data_cadastro}
          </Typography>
    </Box>
        </Box>
      </Modal>
  );
};