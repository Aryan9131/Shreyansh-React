import React from 'react'
import Box from '@mui/material/Box';
import { TiHomeOutline } from "react-icons/ti";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import SocialMediaIcon from './Icon'
function NavBar() {
    const isMobile = window.innerWidth < 768;
    return (
        <Box id="navbar" sx={{ height: { xs: "10vh", md: "100vh" }, width: { xs: "100vw", md: "100%" },flexDirection: { xs: "row", md: "column"} }}>
            <div id="logo">
                <SocialMediaIcon/>
            </div>
            <Box id="navitems" sx={{flexDirection: { xs: "row", md: "column"} }}>
                <TiHomeOutline color="white" className='navIcon'/>
                <FaRegCalendarAlt  color="white"   className='navIcon' />
                <FaRegEnvelope    color="white" className='navIcon'  />
                <MdNotificationsNone  color="white"   className='navIcon'/>
                <FaRegUser  color="white" className='navIcon' />
            </Box>
        </Box>
    )
}

export default NavBar