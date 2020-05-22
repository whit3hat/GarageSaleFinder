import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Search from './pages/Search';
var bodyParser = require("body-parser")

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/signup' component={Signup} />
      </div>
    </Router>

  );
}


export default App;
