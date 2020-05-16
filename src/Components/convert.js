import React from 'react';
import ReactDom from 'react-dom';
import Signup from '../pages/Signup';
//axios variable import for api query
const axios = require('axios').default;

/*
GeoLocation Function
*/
function convert(){
//URL for the geolocation
const geoUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" 


//varaibles for the GeoLocation function from the sign up form.
let address = '';
let street = '';
let city = '';
let state = '';

function GeoLocation(){
//take the address from sign up fields and convert for DB
axios.get(`${geoUrl}${addres}+${street}+${city}+${state}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
      .then(function(res) {
          console.log(res)
      })
      .catch(function (err) {
          console.log(err)
      })
      .then(function(res) {
        
});

};

};