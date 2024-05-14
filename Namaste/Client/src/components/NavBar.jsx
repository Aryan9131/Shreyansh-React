import React from 'react'
import Box from '@mui/material/Box';

function NavBar(){
    return(
        <Box id="navbar" sx={{ height: { xs: "10vh", md: "100vh"}, width:{ xs: "100vw", md: "100%"}}}>
            <div id="logo">
               <h1>LOGO</h1>
            </div>
            <div id="navitems">
                <p>Hello1</p>
                <p>Hello1</p>
                <p>Hello1</p>
                <p>Hello1</p>
            </div>
        </Box>
    )
}

export default NavBar