import React  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDetails from '../company/CompanyDetails';
import Companies from '../company/Companies';
import Jobs from '../jobs/Jobs';
import Profile from '../profile/Profile';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Home from '../home/Home';
import UserLoggedRoute from './UserLoggedRoute';

function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path='/signup'>
                <Signup />
            </Route>

            <UserLoggedRoute exact path='/companies'>
                <Companies />
            </UserLoggedRoute>
            <UserLoggedRoute exact path='/companies/:handle'>
                <CompanyDetails />
            </UserLoggedRoute>
            <UserLoggedRoute exact path='/jobs'>
                <Jobs />
            </UserLoggedRoute>
            <UserLoggedRoute exact path='/profile'>
                <Profile />
            </UserLoggedRoute>
        
            
            <Redirect to='/' />
        </Switch>
    )
}

export default Router;