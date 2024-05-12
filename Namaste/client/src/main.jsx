import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Layout from './components/Layout.jsx'
let router=createBrowserRouter([
{
  path:'/',
  element:<Layout/>,
  children:[
    {
        path:"",
        element:<HomePage/>
    },
    {
      path:"about",
      element:<About/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
