import React from 'react';
import ReactDom from 'react-dom';
import Modal from './modal';
import "../../routes/api/sales";
import "../../routes/api/index"
var salesData = require("mongoose");

function search(Modal) {

var results = ""

//URL for google Maps
const URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs&callback=initMap';

//base query function
axios.get(`${URL}=handleResponse`)
    .then(function (res) {
        console.log(res)
    })
    .catch(function (err) {
        console.log(err)
    })
    .then(function () {

    });
};

// Loop through the results array and place a marker for each
// set of coordinates.
window.results = function(results) {
    for (var i = 0; i < results.length; i++) {
      var coords = results[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1],coords[0]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
}

export default search;