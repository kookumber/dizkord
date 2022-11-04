import React from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  } from "react-router-dom"
import './App.css';

import LoginPage from './components/authPages/LoginPage/LoginPage';
import RegisterPage from './components/authPages/RegisterPage/RegisterPage';
import Dashboard from './components/dashboard/Dashboard';
import FriendsSideBar from './components/dashboard/FriendsSideBar/FriendsSideBar';
import ChannelsSideBar from './components/dashboard/ChannelsSideBar/ChannelsSideBar';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              <Route exact path="/conversations/:id" element={<Dashboard SubsideBar={FriendsSideBar}/>} />
              <Route exact path="/channels/:id" element={<Dashboard SubsideBar={ChannelsSideBar} />} />
              <Route path="/" element={<Dashboard />}>
              </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
