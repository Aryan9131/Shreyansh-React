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
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <h1 style={{ color: "white", padding: "10px 25px" }}>Stories</h1>
          <ul id="storiesNav">
            <li><NavLink className='storiesNavItems'>For You</NavLink></li>
            <li><NavLink className='storiesNavItems'>Following</NavLink></li>
            <li><NavLink className='storiesNavItems'>Popular</NavLink></li>
            <li><NavLink className='storiesNavItems'>Featured</NavLink></li>
          </ul>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: {xs:"center", md:"flex-start"}, flexWrap:"wrap" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
          
        </Grid>
        {/* <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/06/23/15/54/architecture-140785_640.jpg"} onClick={handleStoryClick} />
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"} onClick={handleStoryClick} />
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2021/07/25/12/22/tourist-attraction-6491734_640.jpg"} onClick={handleStoryClick} />
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2021/07/25/12/22/tourist-attraction-6491734_640.jpg"} onClick={handleStoryClick} />
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"} onClick={handleStoryClick} />
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/06/23/15/54/architecture-140785_640.jpg"} onClick={handleStoryClick} />
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <StoriesCard img={"https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg"} onClick={handleStoryClick} />
        </Grid> */}
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <Drawer open={Open} toggle={toggle} />
        </Grid>
      </Grid>
    </Box>
  );
}
