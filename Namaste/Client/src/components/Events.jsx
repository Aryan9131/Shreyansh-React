import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import DrawerTemplate from './DrawerTemplate';
import EventCard from './EventCard'
import StoriesCard from './StoriesCard'; // Assuming StoriesCard is another component


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
            const response = await fetch(`${BASE_URL}/user/${user._id}/Events`);
            const data = await response.json();
            setUserEvents(data.userEvents);
            setAllEvents(data.allEvents);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
    return (
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", backgroundColor: "rgb(40, 40, 40)" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ height: "100vh" }}>
                <Grid sm={12} md={8} sx={{ backgroundColor: "blue", marginTop: "20px", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    <EventCard onClick={handleCardClick} />
                    <EventCard onClick={handleCardClick} />
                    <EventCard onClick={handleCardClick} />
                    <EventCard onClick={handleCardClick} />
                    <EventCard onClick={handleCardClick} />
                </Grid>
                <Grid sm={12} md={4} sx={{ backgroundColor: "green", marginTop: "20px" }}>

                </Grid>
                <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                    <DrawerTemplate open={open} toggleDrawer={toggleDrawer} clickedPost={clickedPost} />
                </Grid>
            </Grid>
        </Box>
    );
}
