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
            sx={{ width: "100vw"}}
            role="presentation"
        >
            <Grid container spacing={2} sx={{flexDirection: { xs: "column", md: "row" }, width: "100%", justifyContent: "center", boxSizing: "border-box", color: "whitesmoke" }}>
                <Grid item sm={11} md={8} sx={{color:"black", overflowY:"auto", minHeight: "100vh", width: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <Grid item sm={12} sx={{ marginTop: "10px", display: "flex", justifyContent: "space-around", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <Button onClick={toggleDrawer(false)} sx={{ margin: 2 }}>
                            Back
                        </Button>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "5px" }}>
                            <p style={{ marginRight: "5px" }}>Aryan Nayak</p>
                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px" }} />
                        </Box>
                    </Grid>
                    
                    <Grid item sm={12} sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', boxSizing: "border-box" }}>
                    <Box sx={{boxSizing:"border-box", display:"flex", justifyContent:"center", margin:"20px 20px"}}>
                        <img src="https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg" alt="Story" style={{width:"400px", height:"300px",borderRadius:"10px"}}/>
                    </Box> 
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, aut? Doloribus ipsa odit vero rerum. Natus dignissimos reprehenderit, id nemo quis exercitationem recusandae! Perspiciatis voluptatum vel sunt. Eos eveniet, ipsam assumenda, aperiam ducimus debitis error, facere doloremque unde magni cum impedit dolor tempore. Vel corporis deserunt sequi rem? Error tempora consequatur saepe, unde porro tempore natus labore! Pariatur quaerat quod minus error. Doloremque molestias maiores expedita sed asperiores exercitationem reiciendis dolorem, dicta molestiae nostrum a aut delectus rem, maxime quibusdam odit veniam numquam quasi velit odio earum. Tenetur commodi at numquam excepturi hic eos ullam odit? Molestiae voluptates voluptatem sed?
                        </p>
                    </Grid>
                </Grid>
                <Grid item sm={11} md={4} sx={{ backgroundColor: "red", borderTopLeftRadius: "10" }}>
                    <Box sx={{ padding: "20px" }}>
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
