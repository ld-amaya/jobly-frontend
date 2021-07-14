import React, {useState, useEffect  } from 'react';
import Router from './routes/Router';
import Navbar from './routes/Navbar';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext'
import JoblyApi from './api';
import {decodeToken } from 'react-jwt';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [jobsApplied, setJobsApplied] = useState(new Set([]));

  // Get user details if token is triggered
  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          JoblyApi.token = token;
          //Store to localStorage
          window.localStorage.setItem('token', token);
          const { username } = decodeToken(token);
          const user = await JoblyApi.getUserDetails(username);
          setJobsApplied(new Set([user.applications]));
          setUser(user);
        } catch (e) {
          console.error('Errors found:', e);
          setUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  //Check if user is currently logged
  useEffect(() => {
    function checkToken() {
      if (window.localStorage.getItem('token')) {
        setToken(window.localStorage.getItem('token'))
      }
    }
    checkToken();
  },[])

  // handles user login 
  async function login(credentials) {
    try {
      const tok = await JoblyApi.login(credentials);
      // Need to await before returning success
      setToken(tok);
      return {success: true}
    } catch (e) {
      console.error(e);
      return {success: false, e}
    }
    
  }
  
  // Handles user log out, clean Current user and localStorage
  const logout = ()=>{
    setUser(null);
    localStorage.clear();
  }

  // handles user signup
  async function registration(newUserInfo) {
    try {
      const token = await JoblyApi.register(newUserInfo);
      setToken(token)
      return { success: true };
    } catch (e) {
      return { success: false, e}
    }
  }

  function hasApplied(id) {
    return jobsApplied.has(id);
  }

  // handles job application
  async function apply(jobID) {
    //Check if user applied to the job
    if (hasApplied(jobID)) return
    await JoblyApi.apply(user.username, jobID);
    setJobsApplied(new Set([...jobsApplied, jobID]));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ user, setUser, login, logout, registration, apply, hasApplied }}>
          <Navbar />
          <Router />
        </UserContext.Provider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
