import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import Dashboard from "../components/dashboard/Dashboard";

const PrivateRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/dashboard'}>
                    <Dashboard/>
                </Route>
                <Redirect to={'/dashboard'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default PrivateRouter;
