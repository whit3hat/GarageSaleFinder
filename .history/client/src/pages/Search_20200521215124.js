import React from 'react';
// import './main.css';
import { InputGroup, FormControl, Container, Col, Row, Button } from 'react-bootstrap';


function Searching() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <InputGroup size="lg" className="search-box mt-5">
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Address" />
              <InputGroup.Prepend>
                <Button style={{ background: '#66CDAA' }} id="inputGroup-sizing-lg show-map">Search</Button>
              </InputGroup.Prepend>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )


};

export default Searching;