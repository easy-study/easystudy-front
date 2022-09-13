import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './Card.css'

export default function ImgMediaCard(props) {
  return (
    <Card className='course-card' sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia className='card-image'
          component="img"
          height="150"
          image={props.image}
          alt="img"
        />
        <CardContent>
          <Typography className='card-title' gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
