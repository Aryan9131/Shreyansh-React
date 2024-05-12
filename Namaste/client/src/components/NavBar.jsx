import React from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <Box id='nav'>
            <Box id="logo">
                <img src="https://www.guerra-creativa.com/img/uploads/designs/850x849/rlt4nom0.gif" alt="logo" />
            </Box>
            <Box id="nav-icons">
                <IconContext.Provider value={{ className: "shared-class", size: 30 , color:"white"}}>
                    <NavLink to="/"><TiHomeOutline className='navitems' /></NavLink>
                    <NavLink to="/about"><LuCalendarDays className='navitems' /></NavLink>
                    <NavLink><FaRegEnvelope className='navitems' /></NavLink>
                    <NavLink><FaRegUser className='navitems' /></NavLink>
                    <NavLink><IoSettingsOutline className='navitems' /></NavLink>
                </IconContext.Provider>
            </Box>
        </Box>
    )
}

export default Navbar
