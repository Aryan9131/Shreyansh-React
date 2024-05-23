import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function PostCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    function handleClick(e) {
        e.target.style.color = "red"
    }
    const ariaLabel = { 'aria-label': 'description' };

    return (
        <Card sx={{ width: 376,minWidth:260 , marginBottom: "15px", boxShadow: '0', border: "0px", borderRadius: "15px", padding: "10px 20px", boxSizing: "border-box" }} >
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                }
                sx={{display:"flex", justifyContent:"space-around", textAlign:"center",color:"grey"}}
                title="What are you thinking ?"
            // subheader="5 min ago"
            />

            <CardActions disableSpacing sx={{marginTop:"30px"}}>
                <IconButton aria-label="add to favorites"  sx={{padding:"8px", backgroundColor:"rgba(210, 210, 210, 0.599)"}}>
                    <CameraAltIcon />
                </IconButton>
                <IconButton aria-label="share"  sx={{padding:"8px", backgroundColor:"rgba(210, 210, 210, 0.599)", margin:"0px 5px"}}>
                    <VideocamIcon />
                </IconButton>
                <IconButton aria-label="share"  sx={{padding:"8px", backgroundColor:"rgba(210, 210, 210, 0.599)"}}>
                    <AddIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <Button variant="contained">Share<KeyboardArrowRightIcon/></Button>
                </IconButton>
            </CardActions>
        </Card>
    );
}
