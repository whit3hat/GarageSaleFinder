import React from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom'
// import Main from './Components/main';



function App() {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/landingpage">Garage Sale Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="./Components/home.js">Home</Nav.Link>
      <Nav.Link href="./Components/landingpage.js">Seeker</Nav.Link>
      <Nav.Link href="./Components/modal.js">Log in or Sign up</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>          
        </div>

    );
}


export default App;
