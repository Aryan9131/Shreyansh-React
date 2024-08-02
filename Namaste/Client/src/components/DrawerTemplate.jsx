import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

export default function DrawerTemplate({open, toggleDrawer, clickedPost }) {
  console.log("clickedPost : "+JSON.stringify(clickedPost))
  let user = useSelector((state) => state.user);

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
              <p style={{marginRight:"9px"}}>{clickedPost.user ? clickedPost.user.name :"Guest"}</p>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{borderRadius:"15px"}} />
            </Box>
          </Grid>
          <Grid item sm={12} sx={{display:"flex", flexDirection:'column', justifyContent:"space-evenly", alignItems:'center',boxSizing:"border-box"}}>
            <Box sx={{width:{xs:"100%", md:"70%" , lg:"60%"},boxSizing:"border-box", display:"flex", justifyContent:"center", margin:"20px 20px"}}>
              <img src={clickedPost.img ? clickedPost.img.url :''} alt="Story" style={{width:"90%", height:"300px",borderRadius:"10px"}}/>
            </Box>  
            <Box sx={{width:{xs:"100%", md:"70%" , lg:"60%"},display:"flex", flexDirection:"column", justifyContent:"flex-start", textAlign:"center",margin:"20px 20px"}}>
                <h3>Post data here </h3>
                <Typography paragraph>{clickedPost.data}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item sm={11} md={4} sx={{backgroundColor:"red", borderTopLeftRadius:"10"}}>
          <Box sx={{padding:"20px"}}>
            <List>
               {
                  clickedPost.comments 
                  ? 
                  clickedPost.comments.map((comment, key)=>{
                      return (
                        <>
                            <ListItem alignItems="flex-start" id={comment._id}>
                                <ListItemAvatar >
                                    <Avatar alt="Remy Sharp" sx={{ width: 34, height: 34 }} src="https://mui.com/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={comment.user ? comment.user.name : 'guest'}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                            </Typography>
                                                <TextField
                                                    id={comment._id + "_textField"}
                                                    multiline
                                                    maxRows={6}
                                                    variant="standard"
                                                    defaultValue={comment.data}
                                                    sx={{
                                                        width: "100%",
                                                        '& .MuiInput-underline:before': {
                                                            borderBottom: 'none',
                                                        },
                                                        '& .MuiInput-underline:hover:before': {
                                                            borderBottom: 'none',
                                                        },
                                                        '& .MuiInput-underline:after': {
                                                            borderBottom: 'none',
                                                        },
                                                        '& .MuiInput-underline :hover': {
                                                            borderBottom: 'none'
                                                        }
                                                    }}
                                                />
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <Divider variant="inset" component="li" />
                        </>)
                  })
                  :
                  null
               }
            </List>
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
