import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function StoriesCard({ img, onClick }) {
  return (
    <Card sx={{ width: 272, height:375, borderRadius:2 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="green iguana"
          sx={{backgroundColor:"blue", height:375}}
        />
      </CardActionArea>
    </Card>
  );
}
