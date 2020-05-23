import React, { Component } from 'react';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';

class  Results extends Component {
    render() { 
        return ( 
          <Container>
            
  <Row>
    <Col xs={6} md={4}>
    <h4 style={{fontFamily: 'Gloria Hallelujah'}}>Results</h4>
    <ListGroup>
  <ListGroup.Item>Input</ListGroup.Item>
  <ListGroup.Item>Input</ListGroup.Item>
  <ListGroup.Item>Input</ListGroup.Item>
  <ListGroup.Item>Input</ListGroup.Item>
  <ListGroup.Item>Input</ListGroup.Item>
</ListGroup>    
        </Col>
    <Col xs={12} md={8}>
    <h4 style={{fontFamily: 'Gloria Hallelujah'}}>Map</h4>
    </Col>
  </Row>
  </Container>         );
    }
}
 
export default Results;

