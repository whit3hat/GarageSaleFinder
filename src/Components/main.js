import React from 'react';
import { Switch } from 'react';
import './main.css';
import LandingPage from './landingpage';
import { Route } from 'react-router-dom';
import Home from './home';
import  Modal from './modal';



const Main = () => (
<Switch>
    <Route exact path= "/" component={LandingPage} />
    <Route path= "/home" component={Home} />
    <Route path= "/modal" component={Modal} />
</Switch>
)

export default Main;