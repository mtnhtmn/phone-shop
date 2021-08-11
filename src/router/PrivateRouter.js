import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import Phones from "../components/phones/Phones";

const PrivateRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Phones/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    );
};

export default PrivateRouter;
