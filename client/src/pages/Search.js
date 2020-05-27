import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Container, Col, Row, Button } from 'react-bootstrap';

import Sales from '../Components/sales';

import "../pages/main.css";




function Searching() {

//setting initail state
const [sales, setSales] = useState({});
const [formObject, setFormObject] = useState({});

//handle updating the state when a user types in the search bar
function handleInputChange(event) {
  const {name, value} = event.target;
  setFormObject({...formObject, [name]: value })
};

//When search is submitted, use the API to search for sales and place markers on map
function handleFormSubmit(event) {
  event.preventDefault();
  Sales();
  console.log(Sales)
};


  return (
    <div className="search-box">
      <Container>
        <Row>
          <Col>
            <InputGroup size="lg" className="search-box mt-3">
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Address" />
              <InputGroup.Prepend>
                <Button onClick={handleFormSubmit}
                style={{ background: '#66CDAA' }} id="inputGroup-sizing-lg show-map">Search</Button>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Searching;