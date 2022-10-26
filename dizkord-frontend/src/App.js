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
import AlertNotifications from './components/sharedComponents/AlertNotifications';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />}>
              </Route>
          </Routes>
      </Router>
      <AlertNotifications />
    </>
  );
}

export default App;
