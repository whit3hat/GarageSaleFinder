import React from 'react';
import './main.css';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
// import Results from './Results';
import Signup from './Signup';

function Main(){
    return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/landingpage">Garage Sale Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="./Components/home.js">Home</Nav.Link> */}
      <Nav.Link href="/" component={Main}>Home</Nav.Link>
      {/* <Nav.Link href="/results" component={Results}>Seeker</Nav.Link> */}
      <Nav.Link href="/signup" component={Signup}>Log in or Sign up</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>  
    )        
};

export default Main;