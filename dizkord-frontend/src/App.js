import React from 'react';
import {
  HashRouter as Router, 
  Routes, 
  Route,
  } from "react-router-dom"

import { AuthRoutes, ProtectedRoutes } from './utils/routeUtil'; 
import './App.css';

import LoginPage from './components/authPages/LoginPage/LoginPage';
import RegisterPage from './components/authPages/RegisterPage/RegisterPage';
import Dashboard from './components/dashboard/Dashboard';
import FriendsSideBar from './components/dashboard/FriendsSideBar/FriendsSideBar';
import ChannelsSideBar from './components/dashboard/ChannelsSideBar/ChannelsSideBar';
import Splash from './components/splash/Splash';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route element={<AuthRoutes />}>
                <Route exact path="/" element={<Splash />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route exact path="/conversations/:id" element={<Dashboard SubsideBar={FriendsSideBar}/>} />
                <Route exact path="/channels/:serverId/:channelId" element={<Dashboard SubsideBar={ChannelsSideBar} />} />
                <Route exact path="/conversations/:id" element={<Dashboard SubsideBar={FriendsSideBar} />} />
              </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
