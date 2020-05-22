// var myLatlng = new google.maps.LatLng();
// var mapOptions = {
//   zoom: 8,
//   center: myLatlng,
//   mapTypeId: 'roadmap'
// };
// var map = new google.maps.Map(document.getElementById('map'),
//     mapOptions);
import React, { Component } from 'react';
import {Row, Col, Container, } from 'react-bootstrap';


class  Results extends Component {
    render() { 
        return ( 
          <Container>
  <Row>
    <Col xs={6} md={4}>
    <h4 style={{fontFamily: 'Gloria Hallelujah'}}>Results</h4>    </Col>
    <Col xs={12} md={8}>
    <h4 style={{fontFamily: 'Gloria Hallelujah'}}>Map</h4>
    </Col>
  </Row>
  </Container>         );
    }
}
 
export default Results;