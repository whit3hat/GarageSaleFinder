import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Search from './pages/Search';
var bodyParser = require("body-parser")
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api"



const libraries = ["places"]

function App() {
  const{isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries
  });

  if(loadError) return "error loading maps"
  if(!isLoaded) return "loading maps"
    return (
      <Router>
        <div>
          <Route exact path = '/' component={Main} />
          <Route exact path = '/signup' component={Signup} />
        </div>
      </Router>
        
    );
}


export default App;
