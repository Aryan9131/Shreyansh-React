import { Outlet } from 'react-router-dom'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Search from '../components/Search';
import NavBar from '../components/NavBar'
import Drawer from './Drawer';

function Layout() {
    
    return (
        <>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                <Grid container spacing={2} sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <Grid item xs={12} md={1.5} >
                        <NavBar />
                    </Grid>
                    <Grid item xs={12} md={10.5} id="mainContent" sx={{ backgroundColor: "whitesmoke", width:"100%" }} >
                        <Search />
                        <Outlet   />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Layout