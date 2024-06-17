import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function GeneralCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function handleClick(e){
    e.target.style.color="red"
  }
  const ariaLabel = { 'aria-label': 'description' };
  const loggedIn=false;
  return (
    <Card sx={{ maxWidth: 376, width:376,minWidth:260, marginBottom:"15px", boxShadow:'0', border:"0px", borderRadius:"15px",padding:"10px 20px", boxSizing:"border-box"}} onClick={props.onClick} >
      <CardContent sx={{width:"100%", lineHeight:"40px"}}>
        <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
           <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{borderRadius:"30px", width:"100px", height:"100px", margin:"10px 6px"}}/>
            <h1 style={{fontWeight:"600"}}>Aryan Nayak</h1>
            <Typography variant="body2" color="text.secondary" sx={{margin:"4px 5px"}}>
                aryan@9131
            </Typography>
        </Box>
        <Typography variant="body2" color="text.primary" sx={{display:"flex", justifyContent:"space-evenly", marginTop:"20px", fontSize:"16px"}}>
                <p>518 Posts</p>
                <p>22k Friends</p>
        </Typography>
        <Box sx={{display:"flex", justifyContent:"space-evenly", margin:"30px 2px"}}>
          { 
              loggedIn  ?
            <Button variant="contained"  sx={{boxShadow:"none", backgroundColor:"rgba(82, 214,105, 1)", padding:"13px 28px", borderRadius:"12px"}}>
              Add Friend 
            </Button>
             :
            <Button variant="contained"  sx={{boxShadow:"none", backgroundColor:"rgba(82, 214,105, 1)", padding:"13px 28px", borderRadius:"12px"}}>
              Edit Profile
            </Button>
          }
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </Box>
      </CardContent>
      
    </Card>
  );
}
