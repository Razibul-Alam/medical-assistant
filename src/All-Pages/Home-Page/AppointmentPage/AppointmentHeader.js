import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React,{useState} from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({value,onChange}) => {
    console.log(value)
    return (<>
        <Container sx={{mt:5}}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} sx={{display:'flex',alignItems:'center'}}>
    <Box>
        <Calendar onChange={onChange} value={new Date()}/>
    </Box>
  </Grid>
  <Grid item xs={12} sm={12} md={6}>
    <Box sx={{display:'flex',alignItems:'center'}}>
        <img src={chair} alt="" width="100%" height="400" />
    </Box>
  </Grid>
  
</Grid>
</Container>
</>
    );
};

export default AppointmentHeader;