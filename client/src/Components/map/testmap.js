import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { FormControl } from 'react-bootstrap';
import axios from 'axios';

const mapStyles = {
  width: '75%',
  height: '75%',
};

// function geoLocation() {
//   console.log("hi")
//   console.log(formObject);
//   //    take the address from sign up fields and convert for DB
//   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formObject.formStreetNumber}+${formObject.formStreetName}+${formObject.formCity}+${formObject.formState}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
//     .then(function (res) {
//       console.log(res)
//     })
//     .catch(function (err) {
//       console.log(err)
//     })
//     .then(function (res) {

//     });
// }

export class MapContainer extends Component {

  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: -1.2884, lng: 36.8233 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs'
})(MapContainer);