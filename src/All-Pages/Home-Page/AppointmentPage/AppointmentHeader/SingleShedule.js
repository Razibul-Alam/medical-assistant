import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppointmentDialog from './AppointmentDialog';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
const SingleShedule = ({shedule}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const{title,time,space}=shedule
    return (
      <>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
        
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {time}
          </Typography>
         
          <Typography variant="body2">
           availeable spaces {space}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>Take Appointment</Button>
        </CardActions>
      </Card>
      <AppointmentDialog handleClose={handleClose} open={open}/>
      </>
    );
};

export default SingleShedule;