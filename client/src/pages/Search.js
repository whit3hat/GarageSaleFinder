import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Container, Col, Row, Button } from 'react-bootstrap';
// import Sales from '../Components/sales';
import API from '../utils/API';

import Sales from '../Components/sales';

import "../pages/main.css";




function Searching() {

//setting initail state
const [sales, setSales] = useState({});
const [formObject, setFormObject] = useState({});

useEffect(() => {
  geoLocation()
}, [])

function geoLocation() {
  console.log('geoLocation function')

  //API call to get all sales from the DB
  API.getUser()
    .then(res => 
      // setUsers(res.data)
      console.log(res.data)
      // setSales(res.data)
    )
    .catch(err => console.log(err))

 }

//handle updating the state when a user types in the search bar
function handleInputChange(event) {
  const {name, value} = event.target;
  console.log(value)
  setFormObject({...formObject, [name]: value })
};

//When search is submitted, use the API to search for sales and place markers on map
function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
};


  return (
    <div className="search-box">
      <Container>
        <Row>
          <Col>
            <InputGroup size="lg" className="search-box mt-3">
              <FormControl
              onChange={handleInputChange} 
              aria-label="Large"
              name='address'
              aria-describedby="inputGroup-sizing-sm" 
              placeholder="Address" />

              <InputGroup.Prepend>
                <Button onClick={handleFormSubmit}
                style={{ background: '#66CDAA' }} 
                id="inputGroup-sizing-lg show-map">Search</Button>

              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Searching;