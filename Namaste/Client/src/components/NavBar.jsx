import React from 'react'
import Box from '@mui/material/Box';
import { TiHomeOutline } from "react-icons/ti";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import SocialMediaIcon from './Icon'
import { NavLink } from "react-router-dom";

function NavBar() {
    const isMobile = window.innerWidth < 768;
    return (
        <Box id="navbar" sx={{ height: { xs: "10vh", md: "100vh" }, width: { xs: "100vw", md: "65%" },flexDirection: { xs: "row", md: "column"} }}>
            <div id="logo">
                <SocialMediaIcon/>
            </div>
            <Box id="navitems" sx={{flexDirection: { xs: "row", md: "column"} }}>
               <NavLink to="/"><TiHomeOutline color="white" className='navIcon'/></NavLink> 
               <NavLink to="/events"><FaRegCalendarAlt  color="white"   className='navIcon' /></NavLink> 
               <NavLink to="/stories"><FaRegEnvelope    color="white" className='navIcon'  /></NavLink> 
               <NavLink to=""> <MdNotificationsNone  color="white"   className='navIcon'/></NavLink>
               <NavLink to=""><FaRegUser  color="white" className='navIcon' /></NavLink> 
            </Box>
        </Box>
    )
}

export default NavBar