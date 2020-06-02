import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import API from '../utils/API';
import "../pages/main.css";
import GoogleApiWrapper from "../Components/map/testmap"
import CurrentLocation from "../Components/map/CurrentLocation";
import axios from 'axios';




class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      location: {}

    };
  }

  

  // componentdidmount and set the location with the current location

  componentDidMount() {
    //API call to get the user information from the DB
      API.getUser()
      .then(res => this.setState(
        //API call to google maps to convert to the address into a lng and lat
          axios.get(`https:maps.googleapis.com/maps/api.geocode/json?address=${streetnumber}+${streetname}+${city}+${state}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
          .then(function(res){
          })
       ))
      .catch(err => console.log(err));


    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        console.log("coords: ", coords.latitude, coords.longitude)
        this.setState({
          location: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
    }

  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
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

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        this.setState({ location: latLng, testtitle: "second time", address: address })
      })   // here setState with new coordinates to render the map
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <>
        <div class="row">
          <div class="col offset-md-4 md-10">
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      className: 'location-search-input mt-3',
                    })}
                  />
                  <button className="locationButton">Search</button>
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        </div>
        <div className="mapContainer">
          <GoogleApiWrapper
            onMarkerClick={this.onMarkerClick}
            activeMarker={this.state.activeMarker}
            showingInfoWindow={this.state.showingInfoWindow}
            onclose={this.onClose}
            selectedPlace={this.state.selectedPlace}
            location={this.state.location}
            className="map" />
        </div>
      </>
    );
  }
}
export default LocationSearchInput;
