import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Stories from './components/Stories';
import Events from './components/Events'
import Messages from './components/Messages'
import Profile from './components/Profile';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log("Toggling drawer to:", open); // Debug log
    setDrawerOpen(open);
  };

  const handleCardClick = () => {
    console.log("Card clicked"); // Debug log
    toggleDrawer(true)();
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home handleCardClick={handleCardClick} open={drawerOpen} toggleDrawer={toggleDrawer} />,
        },
        {
          path: '/stories',
          element: <Stories />,
        },
        {
          path: '/events',
          element: <Events handleCardClick={handleCardClick} open={drawerOpen} toggleDrawer={toggleDrawer}  />,
        },
        {
          path: '/messages',
          element: <Messages/>,
        },
        {
          path: '/profile',
          element: <Profile/>,
        }
      ],
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
