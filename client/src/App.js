import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './pages/Main';
import Signup from './pages/Signup';
import Search from './pages/Search';


function App() {
    return (
      <Router>
        <div>
    

          <Route exact path = '/' component={Main} />
          <Route exact path = '/signup' component={Signup} />
          <Route exact path = '/search' component={Search} />
          
        </div>

      </Router>
        
    );
}


export default App;
