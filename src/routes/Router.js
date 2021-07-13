import React from 'react';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDetails from '../company/CompanyDetails';
import Companies from '../company/Companies';
import Jobs from '../jobs/Jobs';
import Profile from '../profile/Profile';
import Login from '../login/Login';
import Signup from '../signup/Signup';

function Router() {
    return (
        <Switch>
            <Route exact path='/companies'>
                <Companies />
            </Route>
            <Route exact path='/companies/:handle'>
                <CompanyDetails />
            </Route>
            <Route exact path='/jobs'>
                <Jobs />
            </Route>
            <Route exact path='/profile'>
                <Profile />
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path='/signup'>
                <Signup />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Router;