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
import { useState, useEffect } from 'react';
import { BASE_URL } from '../api/userApi';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home({ handleCardClick, open, toggleDrawer, clickedPost }) {
  let user = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    if (user) {
      fetchUserPosts();
    }
  }, [user]);
  const fetchUserPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/user/${user._id}/posts`);
      const data = await response.json();
      setUserPosts(data.userPosts);
      setAllPosts(data.allPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
    const handleCreatePost=(newPost)=>{
      setUserPosts((prev) => [newPost, ...prev]);
    }

    const handleDeletePost = async (postId, imgId) => {
      try {
        const response = await fetch(`${BASE_URL}/post/delete-post/${postId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({imgId:imgId})
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete post');
        }
        
        const data = await response.json();
        if (data.status===200) {
          setUserPosts((prevPosts) => prevPosts.filter(post => post._id !== postId));
          console.log("post deleted successfully !")
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    };
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
          <PostCard createPost={handleCreatePost} />
          
          {
            userPosts.map((post) => (
              <Card post={post}  deletePost={handleDeletePost} onClick={()=>handleCardClick(post)} />
            ))
          }   
        </Grid>
        <Grid item xs={12} sm={6} md={8} id="rightContent">
          {
            allPosts.map((post) => (
              <Card post={post}  onClick={()=>handleCardClick(post)} />
            ))
          }
        </Grid>
        <Grid item xs={8} sm={4} md={3} sx={{ display: "flex", justifyContent: "center" }}>
          <DrawerTemplate open={open} toggleDrawer={toggleDrawer} clickedPost={clickedPost} />
        </Grid>
      </Grid>

    </Box>
  );
}
