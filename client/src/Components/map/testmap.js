import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './style.css';
import CurrentLocation from './CurrentLocation';
import Sales from '../sales';


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
    showingInfoWindow: true,
  });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  

  render() {
    return (
      
      <Map
      
      centerAroundCurrentLocation
      google={this.props.google}
      >
     <Marker onClick={this.onMarkerClick} name={'Current location'} />

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}>

        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div> 

        </InfoWindow>
        </Map>
    );
    
  }
  Sales(){
    console.log(`sales`);
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs'
})(MapContainer);