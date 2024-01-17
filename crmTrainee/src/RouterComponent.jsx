/* !!! WARNING !!!
the code in this file was written during initial setup and shold be corrected or removed */
import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import NavBar from './components/SideBar/Navbar/Navbar';
import Login from './pages/Login/Login';
import CandidateProfile from './pages/CandidateProfile/CandidateProfile';

const RouterComponent = () => {
  const loggedIn = false;
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <NavBar />
        <Profile />
      </Route>
      <Route path="/candidate_profile">
        <NavBar />
        <CandidateProfile />
      </Route>
      <Route path="/home">
        <NavBar />
        <Home />
      </Route>
      <Route path="/">
        {loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default RouterComponent;
