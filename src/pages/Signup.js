import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Signup() {

    return (
        <Form>
            <Form.Group controlId='formFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='First Name' />
            </Form.Group>
            <Form.Group controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Last Name' />
            </Form.Group>
            <Form.Group controlId='formStreetNumber'>
                <Form.Label>House Number</Form.Label>
                <Form.Control type='text' placeholder='123' />
            </Form.Group>
            <Form.Group controlId='formStreetName'>
                <Form.Label>Street Name</Form.Label>
                <Form.Control type='text' placeholder='Main St' />
            </Form.Group>
            <Form.Group controlId='formCity'>
                <Form.label>City</Form.label>
                <Form.Control type='text' placeholder='Anytown' />
            </Form.Group>
            <Form.Group controlId='formState'>
                <Form.Label>State</Form.Label>
                <Form.Control type='text' placeholder='State' />
            </Form.Group>
            <Form.Group controlId='formZip'>
                <Form.Label>Zip</Form.Label>
                <Form.Control type='text' placeholder='01234' />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}

export default Signup;