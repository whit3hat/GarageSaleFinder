import React from 'react';
import './main.css';
import { InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap';


function Searching(){
    return (
        <Container>
  <Row>
    <Col>  
<InputGroup size="lg" className="search-box">
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
  </Col>
  </Row>
</Container>

    ) 

           
};

export default Searching;