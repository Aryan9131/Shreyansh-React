import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Stories from './components/Stories';

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleCardClick = () => {
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
          element: <Stories handleCardClick={handleCardClick} open={drawerOpen} toggleDrawer={toggleDrawer} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
