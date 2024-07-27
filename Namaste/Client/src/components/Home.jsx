import '../index.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card';
import PostCard from './PostCard';
import FeaturedStories from './FeaturedStories';
import { NavLink } from "react-router-dom";
import DrawerTemplate from './DrawerTemplate';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home({ handleCardClick, open, toggleDrawer }) {
    const user = useSelector((state) => state.user.user);
    // const [posts, setPosts] = useState([]);
    //   useEffect(() => {
    //     if (user) {
    //         fetchUserPosts();
    //     }
    //   }, [user]);
    //   const fetchUserPosts = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:8000/api/v1/user/${user._id}/posts`);
    //         const data = await response.json();
    //         setPosts(data.posts);
    //     } catch (error) {
    //         console.error('Error fetching posts:', error);
    //     }
    // };
  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} sx={{ marginLeft: "10px", display: "flex", justifyContent: "space-between" }}>
          <h4>Stories: </h4>
          <h5><NavLink to="/stories">See All</NavLink></h5>
        </Grid>
        <Grid item xs={12} sm={12} id="featuredStories" sx={{ display: "flex", overflowX: "scroll", justifyContent: "flex-start" }}>
          <FeaturedStories img={"https://mui.com/static/images/cards/live-from-space.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://mui.com/static/images/avatar/3.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_640.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_640.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_640.jpg"} />
          <FeaturedStories img={"https://mui.com/static/images/cards/live-from-space.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://mui.com/static/images/avatar/3.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_640.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_640.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_640.jpg"} />
          <FeaturedStories img={"https://mui.com/static/images/cards/live-from-space.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://mui.com/static/images/avatar/3.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_640.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_640.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_640.jpg"} />
          <FeaturedStories img={"https://mui.com/static/images/cards/live-from-space.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://mui.com/static/images/avatar/3.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_640.jpg"} onClick={handleCardClick} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_640.jpg"} />
          <FeaturedStories img={"https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_640.jpg"} />
          {/* Repeat FeaturedStories with handleCardClick as necessary */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} id="leftContent">
          <PostCard />
          <Card img={"https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2023/07/15/08/43/labrador-8128379_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2022/02/09/20/52/labrador-retriever-7004193_640.jpg"} onClick={handleCardClick} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} id="rightContent">
          <Card img={"https://cdn.pixabay.com/photo/2023/11/10/17/10/jack-russell-8379770_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_640.jpg"} onClick={handleCardClick} />
          <Card img={"https://cdn.pixabay.com/photo/2022/01/17/19/59/dog-6945696_640.jpg"} onClick={handleCardClick} />
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <DrawerTemplate open={open} toggleDrawer={toggleDrawer} />
        </Grid>
      </Grid>
      
    </Box>
  );
}
