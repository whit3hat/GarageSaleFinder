import React from 'react';
import { InputGroup, FormControl, Container, Col, Row, Button } from 'react-bootstrap';
import "../pages/main.css";



function Searching() {
  return (
    <div className="search-box">
      <Container>
        <Row>
          <Col>
            <InputGroup size="lg" className="search-box mt-3">
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