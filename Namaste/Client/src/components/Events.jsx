import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import DrawerTemplate from './DrawerTemplate';
import EventCard from './EventCard'
import StoriesCard from './StoriesCard'; // Assuming StoriesCard is another component
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../api/userApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Events({ handleCardClick, open, toggleDrawer, clickedPost }) {
    let user = useSelector((state) => state.user);
    const [userEvents, setUserEvents] = useState([]);
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
        if (user) {
            fetchUserEvents();
        }
    }, [user]);
    const fetchUserEvents = async () => {
        try {
            const response = await fetch(`${BASE_URL}/event`);
            const data = await response.json();
            setAllEvents(data.allEvents);
            setUserEvents(user.events)
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", backgroundColor: "rgb(40, 40, 40)" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ height: "100vh" }}>
                <Grid sm={12} md={9} sx={{ backgroundColor: "blue", marginTop: "20px", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    {
                        allEvents.length > 0
                            ?
                            allEvents.map((event) => (<EventCard handleCardClick={handleCardClick} event={event} setUserEvents={setUserEvents} userEvents={userEvents} />))
                            :
                            null
                    }
                </Grid>
                <Grid sm={12} md={3} sx={{overflowY:"scroll", backgroundColor: "rgba(30, 31,33, 1)", marginTop: "20px", display:"flex", flexDirection:"column", alignItems:"center", color:"white" }}>
                    <Box sx={{marginBottom:"20px"}}> 
                        <h1>My next Events : </h1>
                    </Box>
                    <Box >
                        {
                            userEvents.map((event) => (
                                <Card sx={{ maxWidth: 250 ,margin:"15px 0px", color:"white", backgroundColor:"rgba(30, 31,33, 1)", boxShadow:"none", borderRadius:"0px"}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={event.img ? event.img.url : ""}
                                            alt="green iguana"
                                            sx={{borderRadius:"10px"}}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {event.heading}
                                            </Typography>
                                            <Typography variant="body2" color="whitesmoke">
                                                {event.date}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                    <DrawerTemplate open={open} toggleDrawer={toggleDrawer} clickedPost={clickedPost} />
                </Grid>
            </Grid>
        </Box>
    );
}
