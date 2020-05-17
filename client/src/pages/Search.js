import React from 'react';
import './main.css';
import { InputGroup, FormControl, Container, Col, Row, Button } from 'react-bootstrap';


function Searching(){
    return (
        <Container>
  <Row>
    <Col>  
<InputGroup size="lg" className="search-box">
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <InputGroup.Prepend>
      <Button style={{background:'#66CDAA'}} id="inputGroup-sizing-lg">Search</Button>
    </InputGroup.Prepend>
  </InputGroup>
  </Col>
  </Row>
</Container>

    ) 

           
};

export default Searching;