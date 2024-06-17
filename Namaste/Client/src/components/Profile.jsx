import '../index.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProfileCard from './ProfileCard';
import Card from './Card';

import PostCard from './PostCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home({ handleCardClick, open, toggleDrawer }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} id="leftContent">
          <ProfileCard/>
          <PostCard />
        </Grid>
        <Grid item xs={12} sm={6} md={8} id="rightContent">
          <Card img={"https://cdn.pixabay.com/photo/2023/11/10/17/10/jack-russell-8379770_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2022/01/17/19/59/dog-6945696_640.jpg"} onClick={handleCardClick} />
        </Grid>
      </Grid>
      
    </Box>
  );
}
