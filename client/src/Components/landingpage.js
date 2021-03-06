import React, { Component } from 'react';
import { Navbar, Form } from 'react-bootstrap';

function Landing(){
    return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/landingpage">Garage Sale Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home" component={Main}>Home</Nav.Link>
      <Nav.Link href="/signup" component={Signup}>Create Post</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>  
    )        
};

export default Landing;