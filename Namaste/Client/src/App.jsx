import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Stories from './components/Stories';
import Events from './components/Events'
import Messages from './components/Messages'
import Profile from './components/Profile';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { useSelector } from 'react-redux';
import Rehydrate from './components/RehydrateUser';

const App = () => {
  const user = useSelector((state) => state.user);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [clickedPost, setClickedPost] = React.useState({});
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log("Toggling drawer to:", open); // Debug log
    setDrawerOpen(open);
  };

  const handleCardClick = (post) => {
    console.log("Card clicked"); // Debug log
    setClickedPost(post);
    toggleDrawer(true)();
  };

  return (
    <Rehydrate>
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={user ? <Layout /> : <Navigate to="/sign-up" />}>
          <Route path="/" element={user ? <Home handleCardClick={handleCardClick} open={drawerOpen} toggleDrawer={toggleDrawer} clickedPost={clickedPost} /> : <Navigate to="/sign-up" />} />
          <Route path="/stories" element={user ? <Stories /> : <Navigate to="/sign-up" />} />
          <Route path="/events" element={user ? <Events handleCardClick={handleCardClick} open={drawerOpen} toggleDrawer={toggleDrawer} clickedPost={clickedPost} /> : <Navigate to="/sign-up" />} />
          <Route path="/messages" element={user ? <Messages /> : <Navigate to="/sign-up" />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/sign-up" />} />
        </Route>
      </Routes>
    </Router>
    </Rehydrate>
  );
};

export default App;
