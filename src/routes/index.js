import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import { history } from '../history';
import NotFound from '../pages/notFound/NotFound';
import PrivateRoute from '../routes/PrivateRoute';

const Routes = () =>(  
<Router history ={history}>
    <Switch>
        <Route component = { Login } exact path = "/login"/>
        <PrivateRoute component = { Home } exact path = "/home"/>
        <Route component = { Register } exact path = "/register"/>
        <Route component = { NotFound }/>
    </Switch>
</Router>  
);



export default Routes