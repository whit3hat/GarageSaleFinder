// import React, { useState, useEffect, Component } from 'react';
// import { InputGroup, FormControl, Container, Col, Row, Button } from 'react-bootstrap';
import React from 'react';
// const { forwardRef, useRef, useImperativeHandle } = React;
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import API from '../utils/API';
import "../pages/main.css";
import GoogleApiWrapper from "../Components/map/testmap"
import CurrentLocation from "../Components/map/CurrentLocation";

// class Search extends Component {
//     state = {
//       date: [],
//       location: [],
//       keyword: [],
//       description: []
//     };

//     //when component mounts, get a list of all available garage sales
//     componentDidMount(){
//       API.getUser()
//       .then(res => this.setState(console.log(res)))
//       .catch(err => console.log(err));
//     }

// //handle updating the state when a user types in the search bar
//  handleInputChange = event => {
//    this.setState({ search: event.target.value});
// };

// //When search is submitted, use the API to search for sales and place markers on map
//  handleFormSubmit = event => {
//   event.preventDefault();
//   console.log();

//   API.getUser(this.state.search)
//     .then(res => 
//       console.log(res.data)
//     )
//     .catch(err => console.log(err))
//   console.log(event);
// };


//   render() {
//     return (
//     <div className="search-box">
//       <Container>
//         <Row>
//           <Col>
//             <InputGroup size="lg" className="search-box mt-3">
//               <FormControl
//               handleInputChange={this.handleInputChange}
//               aria-label="Large"
//               name='address'
//               aria-describedby="inputGroup-sizing-sm" 
//               placeholder="Address" />

//               <InputGroup.Prepend>
//                 <Button 
//                 handleFormSubmit={this.handleFormSubmit}
//                 style={{ background: '#66CDAA' }} 
//                 id="inputGroup-sizing-lg show-map">Search</Button>

//               </InputGroup.Prepend>
//             </InputGroup>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     )
//   }
// };

// export default Search;



// const Child = forwardRef((props, ref) => {

//   useImperativeHandle(ref, () => ({
//      recenterMap() {
//       const map = google.map;
//       const current = this.state.currentLocation;
    
//       const google = this.props.google;
//       const maps = google.maps;
    
//       if (map) {
//           let center = new maps.LatLng(current.lat, current.lng);
//           map.panTo(center);
//       }
//     }
//   }));
// });

// const searchFunction = () => {
//   // In order to gain access to the child component instance,
//   // you need to assign it to a `ref`, so we call `useRef()` to get one
//   const childRef = useRef();

//   function searchLocation(e){
//     e.preventDefault();
//       recenterMap();
//   }
// };



class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))   // here setState with new coordinates to render the map
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div class="row">
        <div class="offset-md-6 md-12">
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
    );
  }
}
export default LocationSearchInput;
