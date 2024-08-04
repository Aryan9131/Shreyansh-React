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
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../api/userApi';

export default function ImgMediaCard({handleCardClick, event, setUserEvents, userEvents}) {
  const [interested, setInterested]=React.useState(false);
  let user = useSelector((state) => state.user);

  const handleInterestedButtonClick=()=>{
     setInterested((prev) => !prev);
  }
  React.useEffect(() => {
    const updateUserEvents = async () => {
      if (interested) {
        setUserEvents((prev) => [event, ...prev]);
        try {
          const response = await fetch(`${BASE_URL}/user/addEvent`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId: user._id,
              eventId: event._id
            })
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error adding event:', error);
        }
      } else {
        setUserEvents((prev) => prev.filter((prevEvent) => prevEvent._id !== event._id));
      }
      console.log("userEvents:", userEvents);
    };

    updateUserEvents();
  }, [interested, event, setUserEvents, user._id, BASE_URL]);
  return (
    <Card sx={{ maxWidth: 350, boxShadow:"none", borderRadius:"10px" ,margin:"20px 10px", boxSizing:"border-box", padding:"20px"}}  >
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={event ? event.img.url :""}
        sx={{borderRadius:"10px"}}
        onClick={handleCardClick}
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
        subheader={event.date}
      />
      <CardContent sx={{display:"flex", flexDirection:"column", textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
          {event.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Starts at {event.time} in Los Angeles
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:'space-between'}}>
        <Button variant="contained"  sx={{boxShadow:"none", backgroundColor :interested ? "grey" : "green"}} onClick={handleInterestedButtonClick}>
           {
              interested
               ? 
                <span><CheckIcon/>Interested</span>
               : 
              "Interested" 
           }
        </Button>
        <GroupAvatars/>
      </CardActions>
    </Card>
  );
}
