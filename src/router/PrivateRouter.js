import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import Phones from "../components/phones/Phones";

/*
    You should have only one BrowserRouter wrapper in the app
    so what you can do is in the MainRouter wrap your component with BrowserRouter and Switch
    
    example: 
    const MainRouter = (props) => {
        return (
            <BrowserRouter>
            <Switch>{props.user ? <PrivateRouter /> : <PublicRouter />}</Switch>
            </BrowserRouter>
        );

    and in PrivateRouter and PublicRouter
    remove the BrowserRouter and the Switch

    and return only the routes

    example:
    const PrivateRouter = () => {
        return (
            <>
                <Route exact path='/'>
                    <Phones/>
                </Route>
                <Redirect to='/'/>
            </>
        );
    };
*/
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
