import { Outlet } from 'react-router-dom'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Search from '../components/Search';
import NavBar from '../components/NavBar'


function Layout() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ flexDirection: { xs: "column", md: "row"} }}>
                    <Grid item xs={1}>
                        <NavBar/>
                    </Grid>
                    <Grid item xs={12} md={11}>
                        <Search/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Layout