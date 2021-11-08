import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SingleShedule from './SingleShedule';
import { apppointmentSheduleInfo } from './../../../../AppointmentSheduleInfo';

const AppointmentShedule = ({value}) => {
// console.log(selectedDate)
    return (
      <>
      <Container sx={{mt:5}} >
        <h2>Available Appointment on {value}</h2>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {apppointmentSheduleInfo.map((shedule, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <SingleShedule shedule={shedule}/>
    </Grid>
  ))}
</Grid>
</Container>
 </>
    );
};

export default AppointmentShedule;