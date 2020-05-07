import React from 'react';
import { Switch } from 'react-mdl';
import LandingPage from './landingpage';
import { Route } from 'react-router-dom';
import Home from './home';
// import Contact from './contact'



const Main = () => (
<Switch>
    <Route exact path= "/" component={LandingPage} />
    <Route path= "/home" component={Home} />
    {/* <Route path= "/contact" component={Contact} /> */}

</Switch>
)

export default Main;