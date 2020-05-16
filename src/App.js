import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Signup from '../src/pages/Signup';
import Search from '../src/pages/Search';
import Home from './Components/home';




function App() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component={Main} />
          <Route exact path = '/Search' component={Main} />

          <Route exact path = '/signup' component={Signup} />

          {/* <Home/> */}
          <Search/>
        </div>

      </Router>
        
    );
}


export default App;
