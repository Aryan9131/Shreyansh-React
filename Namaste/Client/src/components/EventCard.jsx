import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupAvatars from './AvatarGroup'


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 400, boxShadow:"none", borderRadius:"10px" ,margin:"20px 10px", boxSizing:"border-box", padding:"20px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        sx={{borderRadius:"10px"}}
      />

      <CardHeader
         avatar={
            <Typography>
                <h2 style={{border:"2px solid rgba(155, 155, 155, 0.708)",borderRadius:"12px", padding:'6px 15px'}}>10</h2>
            </Typography>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Monday"
        subheader="December 2019"
      />
      <CardContent sx={{display:"flex", flexDirection:"column", textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, placeat.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Starts at 9:00am in Los Angeles
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
        <Button variant="contained" color="success" sx={{boxShadow:"none"}}>
           intrested
        </Button>
        <GroupAvatars/>
      </CardActions>
    </Card>
  );
}
