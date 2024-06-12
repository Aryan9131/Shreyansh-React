import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Drawer from './Drawer';

import StoriesCard from './StoriesCard'; // Assuming StoriesCard is another component


export default function Stories() {
    const [Open, setOpen] = React.useState(false);

    const toggle = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log("Toggling drawer to:", open); // Debug log
        setOpen(open);
    };

    const handleStoryClick = () => {
        console.log("Card clicked"); // Debug log
        toggle(true)();
    };
    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", backgroundColor: "rgb(40, 40, 40)" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               <Grid>
                
               </Grid>
            </Grid>
        </Box>
    );
}
