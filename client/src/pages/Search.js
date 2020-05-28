import React, { useState, useEffect, Component } from 'react';
import { InputGroup, FormControl, Container, Col, Row, Button } from 'react-bootstrap';
import API from '../utils/API';
import "../pages/main.css";

class Search extends Component {
    state = {
      date: [],
      location: [],
      keyword: [],
      description: []
    };

    //when component mounts, get a list of all available garage sales
    componentDidMount(){
      API.getUser()
      .then(res => this.setState(console.log(res)))
      .catch(err => console.log(err));
    }

//handle updating the state when a user types in the search bar
 handleInputChange = event => {
   this.setState({ search: event.target.value});
};

//When search is submitted, use the API to search for sales and place markers on map
 handleFormSubmit = event => {
  event.preventDefault();
  console.log();

  API.getUser(this.state.search)
    .then(res => 
      console.log(res.data)
    )
    .catch(err => console.log(err))
  console.log(event);
};


  render() {
    return (
    <div className="search-box">
      <Container>
        <Row>
          <Col>
            <InputGroup size="lg" className="search-box mt-3">
              <FormControl
              handleInputChange={this.handleInputChange}
              aria-label="Large"
              name='address'
              aria-describedby="inputGroup-sizing-sm" 
              placeholder="Address" />

              <InputGroup.Prepend>
                <Button 
                handleFormSubmit={this.handleFormSubmit}
                style={{ background: '#66CDAA' }} 
                id="inputGroup-sizing-lg show-map">Search</Button>

              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
};

export default Search;