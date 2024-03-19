/* eslint-disable react/prop-types */
import Dialog from '@mui/material/Dialog';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function ModalCard(props) {
    const { onClose, selectedValue, open } = props;

    const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = open ? selectedValue.foto.length : 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);}
  
    const handleClose = () => {
      onClose(selectedValue);
      setActiveStep(0);
    };

      return (
        <Dialog onClose={handleClose} open={open}>
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
          <Typography variant="h5" color="secondary">Modelo: {selectedValue.modelo}</Typography>
          <Typography variant="subtitle2" color="primary">Marca: {selectedValue.marca} </Typography>
        </Box>
        <Typography variant="h5" color="secondary" fontWeight='700' >Preço: {selectedValue.preco} </Typography>

      </Paper>
      {open ?
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange} enableMouseEvents>
      {selectedValue.foto.map((item, index) => (
        <div key={item[index]}>
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
            src={item}
            alt={item}
            />
            ) : null}
      </div>
      ))}
    </SwipeableViews>  
      : null}
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
      <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap' columnGap={2}>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            <b>Ano:</b> {selectedValue.ano}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            <b>Cor:</b> {selectedValue.cor}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            <b>Placa:</b> {selectedValue.placa}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            <b>Cidade:</b> {selectedValue.cidade}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            <b>Quilometragem:</b> {selectedValue.quilometragem}
          </Typography>
          <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2 }}>
            <b>Data de cadastro:</b>  {selectedValue.data_cadastro}
          </Typography>
    </Box>
          </Box>
        </Dialog>
      );
  }