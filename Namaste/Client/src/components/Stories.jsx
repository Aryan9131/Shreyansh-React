import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Stories(props) {
  return (
    <Card sx={{ minWidth: 60 , backgroundColor:"whitesmoke", boxShadow:'0', border:"0px", margin:"5px 10px", display:"flex", justifyContent:"center"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="60"
          image={props.img}
          alt="green iguana"
          sx={{borderRadius:"50%", border:"2px solid blue", padding:"5px"}}
          
        />
      </CardActionArea>
    </Card>
  );
}
