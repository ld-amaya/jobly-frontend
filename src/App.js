import React, {useState, useEffect  } from 'react';
import Router from './routes/Router';
import Navbar from './routes/Navbar';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext'
import JoblyApi from './api';
import {decodeToken } from 'react-jwt';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  // Get user details if token is triggered
  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          JoblyApi.token = token;
          const {username} = decodeToken(token);
          const user = await JoblyApi.getUserDetails(username);
          setCurrentUser(user);  
        } catch (e) {
          console.error('Errors found:', e);
          setCurrentUser(null);
        }
        
      }
    }
    getCurrentUser();
  }, [token]);

  // handles user login 
  async function login(credentials) {
    try {
      const token = await JoblyApi.login(credentials);
      setToken(token);
      return {success: true}
    } catch (e) {
      console.error(e);
      return {success: false, e}
    }
    
  }
  
  // Handles user log out
  const logout = ()=>{
    setCurrentUser(null);
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

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, login, logout, registration }}>
          <Navbar />
          <Router />
        </UserContext.Provider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
