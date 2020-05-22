import React from 'react';
import { Switch } from 'react-mdl';
import './main.css';
import LandingPage from './landingpage';
import { Route } from 'react-router-dom';
import Home from './home';
import FileUpload from './fileupload';
// import Contact from './contact



const Main = () => (
<Switch>
    <Route exact path= "/" component={LandingPage} />
    <Route path= "/home" component={Home} />
    <Route path= "/upload" component={FileUpload} />

</Switch>
)

export default Main;