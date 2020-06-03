import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './style.css';
import "../main.css";
import CurrentLocation from './CurrentLocation';
import Search from '../../pages/Search';

const mapStyles = {
  width: '75%',
  height: '75%',
};

function Mapshow(props) {   // this is going to be a function and we are passing the prop

  return (
    <div class="row map-style">

      <div class="offset-md-2 md-8">
        <Map
          style={mapStyles}
          zoom= {15}
          panControl={true}
          zoomControl={true}
          mapTypeControl={false}
          scaleControl={false}
          streetViewControl={true}
          overviewMapControl={true}
          rotateControl={true}
          center= {props.location}
          visible= {true}
          google={props.google}
        >
          <Marker onClick={props.onMarkerClick} name={'Current location'} />

          <InfoWindow
            marker={props.activeMarker}
            visible={props.showingInfoWindow}
            onClose={props.onClose}>

            <div>
              <h5>111 Test Ave</h5>
              <h6>Couch, end tables, bed frame, recliner, baby clothes</h6>
              <h6>Sale Date: 6/3/2020</h6>
              <a href="test">Contact Seller</a>
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