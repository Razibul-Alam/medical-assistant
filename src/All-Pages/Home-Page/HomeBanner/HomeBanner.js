import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png'
const HomeBanner = () => {
    return (
        <Container sx={{mt:5}}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} sx={{display:'flex',alignItems:'center'}}>
    <Box>
        <Typography variant='3'>
            Appointment
        </Typography>
        <Typography variant='3' component='h2'>
            Make an Appointment today
        </Typography>
        <Typography variant='3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos. Culpa at eius eveniet aliquam?
        </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={12} md={6}>
    <Box sx={{display:'flex',alignItems:'center'}}>
        <img src={chair} alt="" width="100%" height="400" />
    </Box>
  </Grid>
  
</Grid>
</Container>
    );
};

export default HomeBanner;