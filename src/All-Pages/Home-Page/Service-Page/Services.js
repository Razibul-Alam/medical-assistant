import { Container, Grid } from '@mui/material';
import React from 'react';
import { servicesInfo } from './../../../ServiceInfo';
import SingleService from './SingleService';
import { spacing,Box} from '@mui/system';
const Services = () => {
    return (
      <Container sx={{mt:5}}>
       
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs:1, sm:1, md: 12 }}>
  {servicesInfo.map((service, index) => (
    <Grid item xs={1} sm={4} md={4} key={index}>
      <SingleService service={service}/>
    </Grid>
  ))}
</Grid>
 </Container>
    );
};

export default Services;