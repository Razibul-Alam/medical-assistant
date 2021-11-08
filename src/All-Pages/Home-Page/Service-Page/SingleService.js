import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardMedia } from '@mui/material';

const SingleService = ({service}) => {
    const{name,desc,img}=service
    return (
        <Box>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
   <img src={img} alt="" />
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
    </Box>
    );
};

export default SingleService;