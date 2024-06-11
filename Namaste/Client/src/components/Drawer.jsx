import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SwipeableTemporaryDrawer({ open, toggle }) {
  const list = () => (
    <Box
      sx={{ width: "100vw", backgroundColor:"#1f1f21"}}
      role="presentation"
    >
      <Grid container spacing={2} sx={{ flexDirection: { xs: "column", md: "row"}, boxSizing:"border-box", color:"whitesmoke"}}>
        <Grid item sm={11} md={8} sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <Grid item sm={12} sx={{display:"flex", justifyContent:"space-around",boxSizing:"border-box"}}>
            <Button onClick={toggle(false)} sx={{ margin: 2 }}>
              Back
            </Button>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingRight:"5px"}}>
              <p style={{marginRight:"5px"}}>Aryan Nayak</p>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{borderRadius:"15px"}} />
            </Box>
          </Grid>
          <Grid item sm={12} sx={{display:"flex", flexDirection:{xs:"column", md:"row"}, justifyContent:"space-evenly", alignItems:'center',boxSizing:"border-box"}}>
            <ArrowBackIosIcon sx={{padding:"10px 15px", border:"1px solid black"}}/>         
            <Box sx={{boxSizing:"border-box", display:"flex", justifyContent:"center", margin:"20px 20px"}}>
              <img src="https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg" alt="Story" style={{width:"100%", height:"80vh",borderRadius:"10px"}}/>
            </Box>    
            <ArrowForwardIosIcon sx={{padding:"10px 15px", border:"1px solid black"}}/>
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
      onClose={toggle(false)}
      onOpen={toggle(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
}
