/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useModalContext } from '../../contexts/ModalState';
import { Box, CardHeader, CardMedia } from '@mui/material';

export default function SingleCard({...props}) {

  const {setOpen, setPropsModal} = useModalContext();
  const handleOpen = (e) => {
    setOpen(true)
    setPropsModal(e)
  }; 

  return (
    <div >
      <Box padding={1} justifyContent='center' >
        <Card sx={{ maxWidth: '100vw', cursor: 'pointer'}} onClick={handleOpen}>
          <CardHeader
            title={props.modelo}
            subheader={props.marca}
          />
          <CardMedia
            component="img"
            Maxheight="194"
            image={props.foto[0] }
            alt={props.modelo}
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              Preço: {props.preco}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ano: {props.ano}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visualizações: {props.visualizacoes}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );


}