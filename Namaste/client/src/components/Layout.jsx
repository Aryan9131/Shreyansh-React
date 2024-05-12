import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import SideBar from './SideBar'

const Layout=function(){
     return(
        <div id='layout'>
           <Navbar/>
           <Outlet/>
           <SideBar/>
        </div>
     )
}

export default Layout