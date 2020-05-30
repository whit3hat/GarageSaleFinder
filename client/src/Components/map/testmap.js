import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './style.css';
import "../main.css";
import CurrentLocation from './CurrentLocation';
import Search from '../../pages/Search';

//Pass Search results into the props of the MapContainer Component using the state of Search


const mapStyles = {
  width: '75%',
  height: '75%',
};

function Mapshow(props) {   /// this is going to be a function and we are passing the prop

  return (
    <div class="row map-style">
      <h1>{props.testtitle}</h1>
      <div class="offset-md-2 md-8">
        <Map
          style={mapStyles}
          zoom= {14}
          center= {props.location}
          // centerAroundCurrentLocation={ false}
          visible= {true}
          google={props.google}
        >
          <Marker onClick={props.onMarkerClick} name={'Current location'} />

          <InfoWindow
            marker={props.activeMarker}
            visible={props.showingInfoWindow}
            onClose={props.onClose}>

            <div>
              <h4>{props.selectedPlace.name}</h4>
            </div>

          </InfoWindow>
        </Map>
      </div>
    </div>
  );

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs'
})(Mapshow);