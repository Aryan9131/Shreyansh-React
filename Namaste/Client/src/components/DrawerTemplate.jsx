import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SwipeableTemporaryDrawer({ open, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: "100vw",height:"100vh", backgroundColor:"#1f1f21"}}
      role="presentation"
    >
      <Grid container spacing={2} sx={{ flexDirection: { xs: "column", md: "row"}, boxSizing:"border-box", color:"whitesmoke"}}>
        <Grid item sm={11} md={8} sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <Grid item sm={12} sx={{display:"flex", justifyContent:"space-around",boxSizing:"border-box"}}>
            <Button onClick={toggleDrawer(false)} sx={{ margin: 2 }}>
              Back
            </Button>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingRight:"5px"}}>
              <p style={{marginRight:"5px"}}>Aryan Nayak</p>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{borderRadius:"15px"}} />
            </Box>
          </Grid>
          <Grid item sm={12} sx={{display:"flex", flexDirection:'column', justifyContent:"space-evenly", alignItems:'center',boxSizing:"border-box"}}>
            <Box sx={{width:{xs:"100%", md:"70%" , lg:"60%"},boxSizing:"border-box", display:"flex", justifyContent:"center", margin:"20px 20px"}}>
              <img src="https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg" alt="Story" style={{width:"90%", height:"300px",borderRadius:"10px"}}/>
            </Box>  
            <Box sx={{width:{xs:"100%", md:"70%" , lg:"60%"},display:"flex", flexDirection:"column", justifyContent:"flex-start", textAlign:"center",margin:"20px 20px"}}>
                <h3>Post data here </h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum saepe ad veniam odit explicabo fugit quaerat, amet modi ratione voluptate, ex perferendis quidem nam optio consectetur praesentium! Aperiam, corporis.</p>
            </Box>
          </Grid>
        </Grid>

        <Grid item sm={11} md={4} sx={{backgroundColor:"red", borderTopLeftRadius:"10"}}>
          <Box sx={{padding:"20px"}}>
            Hello
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
}
