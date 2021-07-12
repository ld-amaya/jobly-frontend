import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyDetails from '../company/CompanyDetails';

function Router() {
    return (
        <Switch>
            <Route exact path='/company/:handle'>
                <CompanyDetails />
            </Route>
        </Switch>
    )
}

export default Router;