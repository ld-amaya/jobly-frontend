import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';

function UserLoggedRoute({exact, path, children}) {
    const { user } = useContext(UserContext);
    if (!user) {
        <Redirect to="/login" />
    }
    return (
        <Route exact ={exact} path = {path}>
            {children}
        </Route>
    )   
}

export default UserLoggedRoute;