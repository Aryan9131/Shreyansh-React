import React from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function Navbar() {
    return (
        <div id='nav'>
            <div id="logo">
                <img src="https://www.guerra-creativa.com/img/uploads/designs/850x849/rlt4nom0.gif" alt="logo" />
            </div>
            <div id="nav-icons">
                <IconContext.Provider value={{ className: "shared-class", size: 30 , color:"white"}}>
                    <a href="#"><TiHomeOutline className='navitems' /></a>
                    <a href="#"><LuCalendarDays className='navitems' /></a>
                    <a href="#"><FaRegEnvelope className='navitems' /></a>
                    <a href="#"><FaRegUser className='navitems' /></a>
                    <a href="#"><IoSettingsOutline className='navitems' /></a>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Navbar
