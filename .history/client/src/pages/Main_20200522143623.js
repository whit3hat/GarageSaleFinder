import React from 'react';
import "./main.css"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import Results from './Results';
import Signup from './Signup';
import Search from "./Search"

function Main() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/landingpage">Garage Sale Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/signup" component={Signup}>Create Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>   
      <Search />
    </div>
  )
};

export default Main;