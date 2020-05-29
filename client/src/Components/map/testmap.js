import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './style.css';
import CurrentLocation from './CurrentLocation';
import Search from '../../pages/Search';

//Pass Search results into the props of the MapContainer Component using the state of Search


const mapStyles = {
  width: '75%',
  height: '75%',
};

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
      <div class="row map-style">
        <div class="offset-md-2 md-8">
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
        </div>
        </div>
    );
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs'
})(MapContainer);