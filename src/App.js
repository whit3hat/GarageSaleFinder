import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../src/pages/Main';
import Signup from '../src/pages/Signup';


function App() {
    return (
      <Router>
        <div>
        <Main />
        <Signup />

          <Route exact path = '/' component={Main} />
          <Route exact path = '/signup' component={Signup} />
          
        </div>

      </Router>
        
    );
}


export default App;
