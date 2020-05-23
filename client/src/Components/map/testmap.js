import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
import { FormControl } from 'react-bootstrap';
import axios from 'axios';

function geoLocation() {
  console.log("hi")
  
  //    take the address from sign up fields and convert for DB
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formObject.formStreetNumber}+${formObject.formStreetName}+${formObject.formCity}+${formObject.formState}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
    .then(function (res) {
      console.log(res)
    })
    .catch(function (err) {
      console.log(err)
    })
    .then(function (res) {

    });
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

onMarkerClick = (props, marker, e) =>
  this.setState( {
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  

  render() {
    return (
      <CurrentLocation
      centerAroundCurrentLocation
      google={this.props.google}
      >
     <Marker onClick={this.onMarkerClick} name={'Current location'} />

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onMapClicked={this.onMapClicked}>

        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div> 

        </InfoWindow>
        </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs'
})(MapContainer);